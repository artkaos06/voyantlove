#!/usr/bin/env python3
"""
Automated Internal Link Insertion Script
WARNING: Always backup files before running this script!
"""

import re
from pathlib import Path

def insert_link_in_content(file_path: str, anchor_text: str, target_url: str, context_before: str, context_after: str):
    """Insert a link into a TSX file with proper context"""
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
    {
        'file': '/Users/roma/Downloads/voyantlove/app/reconquete/seconde-chance-amour/page.tsx',
        'anchor': 'retrouvailles',
        'target': '/reconquete',
        'context_before': 'Pour en savoir plus sur',
        'context_after': 'découvrez toutes nos guidances spécialisées',
        'priority': 1
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/reconquete/seconde-chance-amour/page.tsx',
        'anchor': 'retrouvailles',
        'target': '/reconquete/ex-revient-silence-radio',
        'context_before': 'Cette situation est liée à',
        'context_after': 'pour mieux comprendre votre situation amoureuse',
        'priority': 2
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/reconquete/seconde-chance-amour/page.tsx',
        'anchor': 'retrouvailles',
        'target': '/reconquete/retour-de-lex',
        'context_before': 'Cette situation est liée à',
        'context_after': 'pour mieux comprendre votre situation amoureuse',
        'priority': 2
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/reconquete/seconde-chance-amour/page.tsx',
        'anchor': 'retrouvailles',
        'target': '/reconquete/va-t-il-elle-revenir',
        'context_before': 'Cette situation est liée à',
        'context_after': 'pour mieux comprendre votre situation amoureuse',
        'priority': 2
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/reconquete/ex-qui-revient/page.tsx',
        'anchor': 'retrouvailles',
        'target': '/reconquete',
        'context_before': 'Pour en savoir plus sur',
        'context_after': 'découvrez toutes nos guidances spécialisées',
        'priority': 1
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/reconquete/ex-qui-revient/page.tsx',
        'anchor': 'retrouvailles',
        'target': '/reconquete/ex-revient-silence-radio',
        'context_before': 'Cette situation est liée à',
        'context_after': 'pour mieux comprendre votre situation amoureuse',
        'priority': 2
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/reconquete/ex-qui-revient/page.tsx',
        'anchor': 'retrouvailles',
        'target': '/reconquete/retour-de-lex',
        'context_before': 'Cette situation est liée à',
        'context_after': 'pour mieux comprendre votre situation amoureuse',
        'priority': 2
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/reconquete/ex-qui-revient/page.tsx',
        'anchor': 'retrouvailles',
        'target': '/reconquete/va-t-il-elle-revenir',
        'context_before': 'Cette situation est liée à',
        'context_after': 'pour mieux comprendre votre situation amoureuse',
        'priority': 2
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/reconquete/reconquerir-son-ex/page.tsx',
        'anchor': 'accueil',
        'target': '/',
        'context_before': 'Découvrez toutes nos guidances sur',
        'context_after': 'pour une vision complète de la voyance amoureuse',
        'priority': 1
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/reconquete/reconquerir-son-ex/page.tsx',
        'anchor': 'retrouvailles',
        'target': '/reconquete/ex-revient-silence-radio',
        'context_before': 'Cette situation est liée à',
        'context_after': 'pour mieux comprendre votre situation amoureuse',
        'priority': 2
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/reconquete/se-remettre-ensemble/page.tsx',
        'anchor': 'retrouvailles',
        'target': '/reconquete',
        'context_before': 'Pour en savoir plus sur',
        'context_after': 'découvrez toutes nos guidances spécialisées',
        'priority': 1
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/reconquete/se-remettre-ensemble/page.tsx',
        'anchor': 'retrouvailles',
        'target': '/reconquete/ex-revient-silence-radio',
        'context_before': 'Cette situation est liée à',
        'context_after': 'pour mieux comprendre votre situation amoureuse',
        'priority': 2
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/reconquete/se-remettre-ensemble/page.tsx',
        'anchor': 'retrouvailles',
        'target': '/reconquete/retour-de-lex',
        'context_before': 'Cette situation est liée à',
        'context_after': 'pour mieux comprendre votre situation amoureuse',
        'priority': 2
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/reconquete/se-remettre-ensemble/page.tsx',
        'anchor': 'retrouvailles',
        'target': '/reconquete/va-t-il-elle-revenir',
        'context_before': 'Cette situation est liée à',
        'context_after': 'pour mieux comprendre votre situation amoureuse',
        'priority': 2
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/reconquete/va-t-il-elle-revenir/page.tsx',
        'anchor': 'retrouvailles',
        'target': '/reconquete',
        'context_before': 'Pour en savoir plus sur',
        'context_after': 'découvrez toutes nos guidances spécialisées',
        'priority': 1
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/reconquete/va-t-il-elle-revenir/page.tsx',
        'anchor': 'seconde chance en amour',
        'target': '/reconquete/seconde-chance-amour',
        'context_before': 'Cette situation est liée à',
        'context_after': 'pour mieux comprendre votre situation amoureuse',
        'priority': 2
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/reconquete/va-t-il-elle-revenir/page.tsx',
        'anchor': 'ex qui revient',
        'target': '/reconquete/ex-qui-revient',
        'context_before': 'Cette situation est liée à',
        'context_after': 'pour mieux comprendre votre situation amoureuse',
        'priority': 2
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/rupture/oublier-son-ex/page.tsx',
        'anchor': 'chagrin d'amour',
        'target': '/rupture',
        'context_before': 'Pour en savoir plus sur',
        'context_after': 'découvrez toutes nos guidances spécialisées',
        'priority': 1
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/rupture/oublier-son-ex/page.tsx',
        'anchor': 'chagrin d'amour',
        'target': '/rupture/chagrin-damour',
        'context_before': 'Cette situation est liée à',
        'context_after': 'pour mieux comprendre votre situation amoureuse',
        'priority': 2
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/rupture/oublier-son-ex/page.tsx',
        'anchor': 'chagrin d'amour',
        'target': '/rupture/rupture-amoureuse',
        'context_before': 'Cette situation est liée à',
        'context_after': 'pour mieux comprendre votre situation amoureuse',
        'priority': 2
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/nouvelle-rencontre/quand-rencontre-amour/page.tsx',
        'anchor': 'nouvelle rencontre',
        'target': '/nouvelle-rencontre',
        'context_before': 'Pour en savoir plus sur',
        'context_after': 'découvrez toutes nos guidances spécialisées',
        'priority': 1
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/nouvelle-rencontre/quand-rencontre-amour/page.tsx',
        'anchor': 'nouvelle rencontre',
        'target': '/nouvelle-rencontre/signes-ame-soeur',
        'context_before': 'Cette situation est liée à',
        'context_after': 'pour mieux comprendre votre situation amoureuse',
        'priority': 2
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/sentiments/maime-t-il-elle/page.tsx',
        'anchor': 'Sentiments Amoureux',
        'target': '/sentiments',
        'context_before': 'Pour en savoir plus sur',
        'context_after': 'découvrez toutes nos guidances spécialisées',
        'priority': 1
    },
    {
        'file': '/Users/roma/Downloads/voyantlove/app/sentiments/maime-t-il-elle/page.tsx',
        'anchor': 'décrypter les sentiments',
        'target': '/sentiments/signes-il-elle-maime',
        'context_before': 'Cette situation est liée à',
        'context_after': 'pour mieux comprendre votre situation amoureuse',
        'priority': 2
    },
]

if __name__ == '__main__':
    print("⚠️  WARNING: This script modifies your files!")
    print("   Make sure you have a backup before proceeding.\n")

    response = input("Do you want to continue? (yes/no): ")
    if response.lower() != 'yes':
        print("Aborted.")
        exit()

    print("\n🔗 Inserting links...\n")

    for i, sug in enumerate(suggestions, 1):
        print(f"[{i}/{len(suggestions)}] Processing {sug['file']}...")
        # Manual implementation recommended for now
        print(f"   → Add link to {sug['target']} with anchor '{sug['anchor']}'")

    print("\n✅ Review recommendations above and implement manually for best results.")
    print("   Automated insertion coming in next version.\n")
