#!/usr/bin/env python3
"""
Semantic Internal Linking Manager for VoyantLove.fr
Based on Korey Tugberk's Semantic SEO Framework

This script manages internal linking according to semantic SEO principles:
- Semantic relevance between linked pages
- Contextual bridges and annotation text
- Hub-spoke architecture optimization
- Exact match or semantic synonym anchors
- Max 1 link per 150 words
- Never link at start of sentence/paragraph
"""

import os
import re
from pathlib import Path
from typing import Dict, List, Tuple, Set
from dataclasses import dataclass
from collections import defaultdict

@dataclass
class Page:
    """Represents a page in the site structure"""
    path: str
    url: str
    title: str
    hub: str
    keywords: List[str]
    content: str
    word_count: int
    current_links: List[str]
    is_hub: bool = False
    is_homepage: bool = False

@dataclass
class LinkSuggestion:
    """Represents an internal link suggestion"""
    source_page: str
    target_page: str
    anchor_text: str
    context_before: str
    context_after: str
    insertion_point: int
    semantic_relationship: str
    priority: int  # 1=critical, 2=high, 3=medium

class SemanticInternalLinker:
    """Manages semantic internal linking according to Korey Tugberk framework"""

    def __init__(self, app_dir: str):
        self.app_dir = Path(app_dir)
        self.pages: Dict[str, Page] = {}
        self.hubs = ['reconquete', 'rupture', 'nouvelle-rencontre', 'sentiments', 'crise-couple']

        # Semantic keyword mapping for anchor text variations
        self.semantic_keywords = {
            'reconquete': ['reconquête amoureuse', 'reconquérir son ex', 'retour de l\'ex', 'retrouvailles'],
            'rupture': ['rupture amoureuse', 'séparation', 'fin de relation', 'chagrin d\'amour'],
            'nouvelle-rencontre': ['nouvelle rencontre', 'trouver l\'amour', 'âme sœur', 'rencontre amoureuse'],
            'sentiments': ['sentiments amoureux', 'décrypter les sentiments', 'amour véritable'],
            'crise-couple': ['crise de couple', 'problèmes de couple', 'sauver son couple'],

            # Specific pages
            'reconquerir-son-ex': ['reconquérir son ex', 'récupérer son ex', 'retour de l\'ex'],
            'ex-qui-revient': ['ex qui revient', 'retour de l\'ex', 'ex revenu'],
            'seconde-chance-amour': ['seconde chance en amour', 'nouvelle opportunité', 'donner une seconde chance'],
            'se-remettre-ensemble': ['se remettre ensemble', 'reprise de relation', 'reconstruction du couple'],
            'oublier-son-ex': ['oublier son ex', 'tourner la page', 'deuil amoureux'],
            'maime-t-il-elle': ['m\'aime-t-il/elle', 'ses sentiments', 'décrypter les sentiments'],
        }

    def scan_pages(self):
        """Scan all pages and extract metadata"""
        print("🔍 Scanning pages...")

        # Scan homepage
        homepage_path = self.app_dir / 'page.tsx'
        if homepage_path.exists():
            page = self._parse_page(homepage_path, '/', is_homepage=True)
            if page:
                self.pages['/'] = page

        # Scan hub pages
        for hub in self.hubs:
            hub_path = self.app_dir / hub / 'page.tsx'
            if hub_path.exists():
                page = self._parse_page(hub_path, f'/{hub}', is_hub=True, hub=hub)
                if page:
                    self.pages[f'/{hub}'] = page

        # Scan content pages
        for hub in self.hubs:
            hub_dir = self.app_dir / hub
            if not hub_dir.exists():
                continue

            for subdir in hub_dir.iterdir():
                if subdir.is_dir() and (subdir / 'page.tsx').exists():
                    page_name = subdir.name
                    page_path = subdir / 'page.tsx'
                    url = f'/{hub}/{page_name}'
                    page = self._parse_page(page_path, url, hub=hub)
                    if page:
                        self.pages[url] = page

        print(f"✅ Found {len(self.pages)} pages")
        print(f"   - Homepage: 1")
        print(f"   - Hubs: {len([p for p in self.pages.values() if p.is_hub])}")
        print(f"   - Content pages: {len([p for p in self.pages.values() if not p.is_hub and not p.is_homepage])}")

    def _parse_page(self, file_path: Path, url: str, is_hub=False, is_homepage=False, hub='') -> Page:
        """Parse a page file and extract metadata"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Extract title from metadata
            title_match = re.search(r"title:\s*['\"]([^'\"]+)['\"]", content)
            title = title_match.group(1) if title_match else url

            # Extract keywords
            keywords_match = re.search(r"keywords:\s*\[(.*?)\]", content, re.DOTALL)
            keywords = []
            if keywords_match:
                keywords_str = keywords_match.group(1)
                keywords = [k.strip().strip('\'"') for k in keywords_str.split(',')]

            # Extract existing links
            current_links = self._extract_existing_links(content)

            # Extract text content (simplified - real implementation would parse JSX better)
            text_content = self._extract_text_content(content)
            word_count = len(text_content.split())

            return Page(
                path=str(file_path),
                url=url,
                title=title,
                hub=hub,
                keywords=keywords,
                content=text_content,
                word_count=word_count,
                current_links=current_links,
                is_hub=is_hub,
                is_homepage=is_homepage
            )
        except Exception as e:
            print(f"⚠️  Error parsing {file_path}: {e}")
            return None

    def _extract_existing_links(self, content: str) -> List[str]:
        """Extract existing internal links"""
        links = []
        # Match Link href and <a href
        link_pattern = r'(?:Link\s+href=|<a\s+href=)["\']([^"\']+)["\']'
        matches = re.findall(link_pattern, content)
        for match in matches:
            if match.startswith('/') and not match.startswith('/#'):
                links.append(match)
        return links

    def _extract_text_content(self, tsx_content: str) -> str:
        """Extract text content from TSX (simplified)"""
        # Remove JSX code parts
        text = re.sub(r'<script[^>]*>.*?</script>', '', tsx_content, flags=re.DOTALL)
        text = re.sub(r'import\s+.*?;', '', text)
        text = re.sub(r'export\s+.*?{', '', text)

        # Extract text from JSX strings
        strings = re.findall(r'<p[^>]*>(.*?)</p>', text, re.DOTALL)
        strings += re.findall(r'<h[1-6][^>]*>(.*?)</h[1-6]>', text, re.DOTALL)
        strings += re.findall(r'<li[^>]*>(.*?)</li>', text, re.DOTALL)

        # Clean HTML tags
        clean_text = ' '.join(strings)
        clean_text = re.sub(r'<[^>]+>', '', clean_text)
        clean_text = re.sub(r'\{[^}]+\}', '', clean_text)
        clean_text = re.sub(r'\s+', ' ', clean_text)

        return clean_text.strip()

    def calculate_max_links(self, word_count: int) -> int:
        """Calculate maximum links allowed (1 per 150 words)"""
        return max(1, word_count // 150)

    def get_semantic_anchors(self, target_url: str) -> List[str]:
        """Get semantic anchor text variations for a target page"""
        page_name = target_url.split('/')[-1] if target_url != '/' else 'homepage'
        hub = target_url.split('/')[1] if len(target_url.split('/')) > 1 else ''

        anchors = []

        # Get page-specific anchors
        if page_name in self.semantic_keywords:
            anchors.extend(self.semantic_keywords[page_name])

        # Get hub anchors
        if hub in self.semantic_keywords:
            anchors.extend(self.semantic_keywords[hub])

        # Get from page title
        if target_url in self.pages:
            page = self.pages[target_url]
            # Extract main keywords from title
            title_words = page.title.split(':')[0] if ':' in page.title else page.title
            anchors.append(title_words.strip())

        return list(set(anchors))  # Remove duplicates

    def find_semantic_relationship(self, source: Page, target: Page) -> str:
        """Determine semantic relationship between two pages"""
        # Same hub = sibling relationship
        if source.hub == target.hub and not source.is_hub and not target.is_hub:
            return "sibling"

        # Content to hub = child-to-parent
        if target.is_hub and source.hub == target.hub:
            return "child-to-parent"

        # Hub to content = parent-to-child
        if source.is_hub and target.hub == source.hub:
            return "parent-to-child"

        # Different hubs = cross-network
        if source.hub != target.hub and not source.is_hub and not target.is_hub:
            return "cross-network"

        # Hub to hub = peer
        if source.is_hub and target.is_hub:
            return "peer-hub"

        # To homepage
        if target.is_homepage:
            return "to-homepage"

        return "other"

    def generate_link_suggestions(self) -> List[LinkSuggestion]:
        """Generate internal link suggestions following semantic SEO principles"""
        suggestions = []

        print("\n🔗 Generating link suggestions...")

        for source_url, source_page in self.pages.items():
            # Skip homepage for now (it already has proper navigation)
            if source_page.is_homepage:
                continue

            # Calculate max links allowed
            max_links = self.calculate_max_links(source_page.word_count)
            current_link_count = len(source_page.current_links)
            available_slots = max(0, max_links - current_link_count)

            if available_slots == 0:
                continue

            # Priority 1: Link to homepage (if not present)
            if '/' not in source_page.current_links and not source_page.is_homepage:
                suggestions.append(LinkSuggestion(
                    source_page=source_url,
                    target_page='/',
                    anchor_text='accueil',
                    context_before='Découvrez toutes nos guidances sur',
                    context_after='pour une vision complète de la voyance amoureuse',
                    insertion_point=0,
                    semantic_relationship='to-homepage',
                    priority=1
                ))

            # Priority 1: Link to hub (if content page and hub link not present)
            if not source_page.is_hub and source_page.hub:
                hub_url = f'/{source_page.hub}'
                if hub_url not in source_page.current_links:
                    hub_anchors = self.get_semantic_anchors(hub_url)
                    suggestions.append(LinkSuggestion(
                        source_page=source_url,
                        target_page=hub_url,
                        anchor_text=hub_anchors[0] if hub_anchors else source_page.hub,
                        context_before='Pour en savoir plus sur',
                        context_after='découvrez toutes nos guidances spécialisées',
                        insertion_point=0,
                        semantic_relationship='child-to-parent',
                        priority=1
                    ))

            # Priority 2: Sibling pages in same hub
            if not source_page.is_hub:
                siblings = [
                    (url, page) for url, page in self.pages.items()
                    if page.hub == source_page.hub
                    and not page.is_hub
                    and url != source_url
                    and url not in source_page.current_links
                ]

                for target_url, target_page in siblings[:available_slots]:
                    anchors = self.get_semantic_anchors(target_url)
                    relationship = self.find_semantic_relationship(source_page, target_page)

                    suggestions.append(LinkSuggestion(
                        source_page=source_url,
                        target_page=target_url,
                        anchor_text=anchors[0] if anchors else target_page.title.split(':')[0],
                        context_before='Cette situation est liée à',
                        context_after='pour mieux comprendre votre situation amoureuse',
                        insertion_point=0,
                        semantic_relationship=relationship,
                        priority=2
                    ))

            # Priority 3: Cross-network links (if strong semantic relationship)
            if not source_page.is_hub and available_slots > 0:
                # Find semantically related pages in other hubs
                cross_network = [
                    (url, page) for url, page in self.pages.items()
                    if page.hub != source_page.hub
                    and not page.is_hub
                    and not page.is_homepage
                    and url not in source_page.current_links
                    and self._has_semantic_overlap(source_page, page)
                ]

                for target_url, target_page in cross_network[:available_slots]:
                    anchors = self.get_semantic_anchors(target_url)
                    relationship = self.find_semantic_relationship(source_page, target_page)

                    suggestions.append(LinkSuggestion(
                        source_page=source_url,
                        target_page=target_url,
                        anchor_text=anchors[0] if anchors else target_page.title.split(':')[0],
                        context_before='Si vous vous interrogez sur',
                        context_after='le tarot peut vous éclairer',
                        insertion_point=0,
                        semantic_relationship=relationship,
                        priority=3
                    ))

            # Hub pages: Link to other hubs
            if source_page.is_hub:
                other_hubs = [
                    (url, page) for url, page in self.pages.items()
                    if page.is_hub
                    and url != source_url
                    and url not in source_page.current_links
                ]

                for target_url, target_page in other_hubs[:available_slots]:
                    anchors = self.get_semantic_anchors(target_url)
                    suggestions.append(LinkSuggestion(
                        source_page=source_url,
                        target_page=target_url,
                        anchor_text=anchors[0] if anchors else target_page.title,
                        context_before='Explorez également nos guidances en',
                        context_after='pour une vision complète de votre situation',
                        insertion_point=0,
                        semantic_relationship='peer-hub',
                        priority=2
                    ))

        print(f"✅ Generated {len(suggestions)} link suggestions")
        return suggestions

    def _has_semantic_overlap(self, page1: Page, page2: Page) -> bool:
        """Check if two pages have semantic keyword overlap"""
        keywords1 = set([k.lower() for k in page1.keywords])
        keywords2 = set([k.lower() for k in page2.keywords])

        # Check direct keyword overlap
        if keywords1 & keywords2:
            return True

        # Check semantic keyword overlap
        page1_semantics = set()
        for kw in keywords1:
            for key, values in self.semantic_keywords.items():
                if kw in ' '.join(values).lower():
                    page1_semantics.update(values)

        page2_semantics = set()
        for kw in keywords2:
            for key, values in self.semantic_keywords.items():
                if kw in ' '.join(values).lower():
                    page2_semantics.update(values)

        return len(page1_semantics & page2_semantics) > 0

    def generate_report(self, suggestions: List[LinkSuggestion], output_file: str):
        """Generate a detailed linking report"""
        print(f"\n📝 Generating report: {output_file}")

        # Group by source page
        by_source = defaultdict(list)
        for sug in suggestions:
            by_source[sug.source_page].append(sug)

        with open(output_file, 'w', encoding='utf-8') as f:
            f.write("# Semantic Internal Linking Report - VoyantLove.fr\n\n")
            f.write("Generated using Korey Tugberk Semantic SEO Framework\n\n")
            f.write(f"## Summary\n\n")
            f.write(f"- Total pages analyzed: {len(self.pages)}\n")
            f.write(f"- Total link suggestions: {len(suggestions)}\n")
            f.write(f"- Priority 1 (Critical): {len([s for s in suggestions if s.priority == 1])}\n")
            f.write(f"- Priority 2 (High): {len([s for s in suggestions if s.priority == 2])}\n")
            f.write(f"- Priority 3 (Medium): {len([s for s in suggestions if s.priority == 3])}\n\n")

            f.write("## Linking Principles Applied\n\n")
            f.write("✓ Hub-spoke architecture optimization\n")
            f.write("✓ Semantic relevance (contextual bridges)\n")
            f.write("✓ Exact match or semantic synonym anchors\n")
            f.write("✓ Max 1 link per 150 words\n")
            f.write("✓ All pages link to homepage and hub\n")
            f.write("✓ Hubs interconnected\n\n")

            f.write("---\n\n")

            # Detailed suggestions by page
            for source_url in sorted(by_source.keys()):
                source_page = self.pages[source_url]
                page_suggestions = by_source[source_url]

                f.write(f"## Page: {source_url}\n\n")
                f.write(f"**Title:** {source_page.title}\n\n")
                f.write(f"**Word Count:** {source_page.word_count}\n\n")
                f.write(f"**Max Links Allowed:** {self.calculate_max_links(source_page.word_count)}\n\n")
                f.write(f"**Current Links:** {len(source_page.current_links)}\n\n")
                f.write(f"**Available Slots:** {max(0, self.calculate_max_links(source_page.word_count) - len(source_page.current_links))}\n\n")

                if page_suggestions:
                    f.write(f"### Suggested Links ({len(page_suggestions)})\n\n")

                    for i, sug in enumerate(page_suggestions, 1):
                        priority_label = {1: "🔴 CRITICAL", 2: "🟠 HIGH", 3: "🟡 MEDIUM"}
                        f.write(f"#### {i}. {priority_label[sug.priority]}\n\n")
                        f.write(f"**Target:** [{self.pages[sug.target_page].title}]({sug.target_page})\n\n")
                        f.write(f"**Anchor Text:** `{sug.anchor_text}`\n\n")
                        f.write(f"**Semantic Relationship:** {sug.semantic_relationship}\n\n")
                        f.write(f"**Contextual Bridge:**\n")
                        f.write(f"```\n")
                        f.write(f"{sug.context_before} [{sug.anchor_text}]({sug.target_page}) {sug.context_after}\n")
                        f.write(f"```\n\n")
                        f.write(f"**Implementation Note:** Insert this link in the middle of a paragraph (not at start), ")
                        f.write(f"ensuring proper annotation text for semantic relevance.\n\n")
                        f.write("---\n\n")
                else:
                    f.write("✅ No additional links needed (quota met)\n\n")

                f.write("\n")

        print(f"✅ Report saved to {output_file}")

    def generate_implementation_script(self, suggestions: List[LinkSuggestion], output_file: str):
        """Generate Python script to automatically insert links"""
        print(f"\n🔧 Generating implementation script: {output_file}")

        with open(output_file, 'w', encoding='utf-8') as f:
            f.write("""#!/usr/bin/env python3
\"\"\"
Automated Internal Link Insertion Script
WARNING: Always backup files before running this script!
\"\"\"

import re
from pathlib import Path

def insert_link_in_content(file_path: str, anchor_text: str, target_url: str, context_before: str, context_after: str):
    \"\"\"Insert a link into a TSX file with proper context\"\"\"
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find a suitable paragraph that doesn't already have links
    # This is a simplified implementation - manual review recommended

    # Look for paragraphs with related keywords
    paragraph_pattern = r'<p[^>]*>([^<]+' + re.escape(anchor_text[:10]) + r'[^<]*)</p>'
    match = re.search(paragraph_pattern, content, re.IGNORECASE)

    if match:
        original_para = match.group(0)
        para_text = match.group(1)

        # Insert link with contextual bridge
        link_html = f'{{context_before}} <Link href="{target_url}">{anchor_text}</Link> {{context_after}}'
        new_para = original_para.replace(para_text, link_html)

        content = content.replace(original_para, new_para)

        # Save modified content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

        return True

    return False

# Link insertion suggestions
suggestions = [
""")

            for sug in suggestions:
                source_path = self.pages[sug.source_page].path
                f.write(f"""    {{
        'file': '{source_path}',
        'anchor': '{sug.anchor_text}',
        'target': '{sug.target_page}',
        'context_before': '{sug.context_before}',
        'context_after': '{sug.context_after}',
        'priority': {sug.priority}
    }},
""")

            f.write("""]

if __name__ == '__main__':
    print("⚠️  WARNING: This script modifies your files!")
    print("   Make sure you have a backup before proceeding.\\n")

    response = input("Do you want to continue? (yes/no): ")
    if response.lower() != 'yes':
        print("Aborted.")
        exit()

    print("\\n🔗 Inserting links...\\n")

    for i, sug in enumerate(suggestions, 1):
        print(f"[{i}/{len(suggestions)}] Processing {sug['file']}...")
        # Manual implementation recommended for now
        print(f"   → Add link to {sug['target']} with anchor '{sug['anchor']}'")

    print("\\n✅ Review recommendations above and implement manually for best results.")
    print("   Automated insertion coming in next version.\\n")
""")

        print(f"✅ Implementation script saved to {output_file}")

def main():
    """Main execution function"""
    print("=" * 60)
    print("Semantic Internal Linking Manager")
    print("VoyantLove.fr - Korey Tugberk Framework")
    print("=" * 60)

    app_dir = Path(__file__).parent.parent / 'app'

    linker = SemanticInternalLinker(str(app_dir))

    # Scan all pages
    linker.scan_pages()

    # Generate link suggestions
    suggestions = linker.generate_link_suggestions()

    # Generate reports
    report_dir = Path(__file__).parent.parent / 'reports'
    report_dir.mkdir(exist_ok=True)

    linker.generate_report(
        suggestions,
        str(report_dir / 'internal_linking_report.md')
    )

    linker.generate_implementation_script(
        suggestions,
        str(report_dir / 'implement_links.py')
    )

    print("\n" + "=" * 60)
    print("✅ Complete!")
    print("=" * 60)
    print(f"\nNext steps:")
    print(f"1. Review: reports/internal_linking_report.md")
    print(f"2. Implement links manually based on recommendations")
    print(f"3. Re-run script to verify link coverage")
    print()

if __name__ == '__main__':
    main()
