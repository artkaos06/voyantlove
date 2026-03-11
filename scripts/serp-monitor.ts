import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';
import { config } from './serp-monitor.config';

// --- Types ---

interface QueryData {
  query: string;
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
}

interface PageReport {
  url: string;
  filePath: string;
  hub: string;
  topQueries: QueryData[];
  totalImpressions: number;
  totalClicks: number;
  averageCTR: number;
  averagePosition: number;
  currentTitle: string;
  currentDescription: string;
  currentH1: string;
  currentSubtitle: string;
  currentIntroParagraph: string;
  currentKeywords: string[];
}

interface SerpMonitorReport {
  generatedAt: string;
  period: { start: string; end: string };
  siteUrl: string;
  pages: PageReport[];
}

// --- Helpers ---

function formatDate(d: Date): string {
  return d.toISOString().split('T')[0];
}

function urlToFilePath(fullUrl: string): string {
  const url = new URL(fullUrl);
  const pathname = url.pathname.replace(/\/$/, '') || '';
  if (pathname === '' || pathname === '/') return 'app/page.tsx';
  return `app${pathname}/page.tsx`;
}

function extractHub(fullUrl: string): string {
  const url = new URL(fullUrl);
  const parts = url.pathname.split('/').filter(Boolean);
  return parts[0] || 'homepage';
}

function stripHtmlTags(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/&#x[0-9A-Fa-f]+;/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractPageMeta(content: string) {
  // Title from metadata export
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  const currentTitle = titleMatch?.[1] ?? '';

  // Description from metadata export
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
  const currentDescription = descMatch?.[1] ?? '';

  // Keywords from metadata export
  const kwMatch = content.match(/keywords:\s*\[(.*?)\]/s);
  const currentKeywords: string[] = [];
  if (kwMatch) {
    const kwStr = kwMatch[1];
    const re = /['"`]([^'"`]+)['"`]/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(kwStr)) !== null) {
      currentKeywords.push(m[1]);
    }
  }

  // H1 from JSX
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const currentH1 = h1Match ? stripHtmlTags(h1Match[1]) : '';

  // Subtitle — <p className="text-xl opacity-95...">
  const subtitleMatch = content.match(/<p\s+className="text-xl\s+opacity-95[^"]*"[^>]*>([\s\S]*?)<\/p>/);
  const currentSubtitle = subtitleMatch ? stripHtmlTags(subtitleMatch[1]) : '';

  // First paragraph inside <article> — the answer capsule intro
  const articleMatch = content.match(/<article[^>]*>([\s\S]*?)<\/article>/);
  let currentIntroParagraph = '';
  if (articleMatch) {
    const firstP = articleMatch[1].match(/<p[^>]*>([\s\S]*?)<\/p>/);
    if (firstP) {
      currentIntroParagraph = stripHtmlTags(firstP[1]);
    }
  }

  return {
    currentTitle,
    currentDescription,
    currentH1,
    currentSubtitle,
    currentIntroParagraph,
    currentKeywords,
  };
}

// --- Main ---

async function main() {
  // Check environment variables
  const siteUrl = process.env.GSC_SITE_URL;

  if (!siteUrl) {
    console.error('Missing GSC_SITE_URL. Create .env.local with:');
    console.error('  GSC_SITE_URL=https://voyantlove.fr/');
    console.error('');
    console.error('Then authenticate with:');
    console.error('  gcloud auth application-default login --scopes=https://www.googleapis.com/auth/webmasters.readonly');
    process.exit(1);
  }

  console.log('Authenticating with Google Search Console API (ADC)...');

  const auth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });

  const searchConsole = google.searchconsole({ version: 'v1', auth });

  // Calculate date range
  const endDate = new Date();
  endDate.setDate(endDate.getDate() - 1); // yesterday
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - config.lookbackDays);

  console.log(`Fetching GSC data: ${formatDate(startDate)} → ${formatDate(endDate)}`);

  // Fetch GSC data
  const response = await searchConsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      dimensions: ['page', 'query'],
      rowLimit: 1000,
      dimensionFilterGroups: [{
        filters: [{
          dimension: 'country',
          expression: 'fra',
        }],
      }],
    },
  });

  const rows = response.data.rows ?? [];
  console.log(`Received ${rows.length} rows from GSC`);

  if (rows.length === 0) {
    console.log('No data available yet. The site may be too new or GSC needs time to collect data.');
    process.exit(0);
  }

  // Group rows by page
  const pageMap = new Map<string, { queries: QueryData[]; totalImpressions: number; totalClicks: number; weightedPosition: number }>();

  for (const row of rows) {
    const pageUrl = row.keys![0];
    const query = row.keys![1];

    // Skip excluded pages
    if (config.excludePatterns.some(p => pageUrl.includes(p))) continue;

    if (!pageMap.has(pageUrl)) {
      pageMap.set(pageUrl, { queries: [], totalImpressions: 0, totalClicks: 0, weightedPosition: 0 });
    }

    const page = pageMap.get(pageUrl)!;
    const impressions = row.impressions ?? 0;
    const clicks = row.clicks ?? 0;
    const ctr = row.ctr ?? 0;
    const position = row.position ?? 0;

    page.queries.push({ query, impressions, clicks, ctr, position });
    page.totalImpressions += impressions;
    page.totalClicks += clicks;
    page.weightedPosition += position * impressions;
  }

  // Sort queries within each page by impressions
  pageMap.forEach((page) => {
    page.queries.sort((a, b) => b.impressions - a.impressions);
  });

  // Sort pages by total impressions, take top N
  const topPages = Array.from(pageMap.entries())
    .filter(([, data]) => data.totalImpressions >= config.minImpressions)
    .sort((a, b) => b[1].totalImpressions - a[1].totalImpressions)
    .slice(0, config.maxPages);

  console.log(`Processing top ${topPages.length} pages...`);

  // Extract metadata from page files
  const projectRoot = process.cwd();
  const pages: PageReport[] = [];

  for (const [pageUrl, data] of topPages) {
    const filePath = urlToFilePath(pageUrl);
    const fullPath = path.join(projectRoot, filePath);

    if (!fs.existsSync(fullPath)) {
      console.warn(`  Skipping ${pageUrl} — file not found: ${filePath}`);
      continue;
    }

    const content = fs.readFileSync(fullPath, 'utf-8');
    const meta = extractPageMeta(content);
    const avgPosition = data.totalImpressions > 0 ? data.weightedPosition / data.totalImpressions : 0;

    pages.push({
      url: new URL(pageUrl).pathname,
      filePath,
      hub: extractHub(pageUrl),
      topQueries: data.queries.slice(0, config.queriesPerPage),
      totalImpressions: data.totalImpressions,
      totalClicks: data.totalClicks,
      averageCTR: data.totalImpressions > 0 ? data.totalClicks / data.totalImpressions : 0,
      averagePosition: Math.round(avgPosition * 10) / 10,
      ...meta,
    });
  }

  // Write report
  const report: SerpMonitorReport = {
    generatedAt: new Date().toISOString(),
    period: { start: formatDate(startDate), end: formatDate(endDate) },
    siteUrl,
    pages,
  };

  const reportDir = path.join(projectRoot, 'reports', 'serp-monitor');
  fs.mkdirSync(reportDir, { recursive: true });

  const latestPath = path.join(reportDir, 'latest.json');
  const archivedPath = path.join(reportDir, `${formatDate(new Date())}.json`);

  fs.writeFileSync(latestPath, JSON.stringify(report, null, 2));
  fs.writeFileSync(archivedPath, JSON.stringify(report, null, 2));

  // Print summary
  console.log(`\n=== SERP Monitor Report ===`);
  console.log(`Period: ${report.period.start} → ${report.period.end}`);
  console.log(`Pages analyzed: ${pages.length}\n`);

  for (const page of pages) {
    const ctrPct = (page.averageCTR * 100).toFixed(1);
    const flag = page.averageCTR < 0.03 ? ' ⚠️ LOW CTR' : '';
    console.log(`  ${page.url}`);
    console.log(`    ${page.totalImpressions} imp | ${page.totalClicks} clicks | CTR ${ctrPct}% | pos ${page.averagePosition}${flag}`);
    console.log(`    Top query: "${page.topQueries[0]?.query ?? 'n/a'}"`);
    console.log('');
  }

  console.log(`Report saved to: ${latestPath}`);
  console.log(`Archive saved to: ${archivedPath}`);
}

main().catch((err) => {
  console.error('SERP Monitor failed:', err.message);
  process.exit(1);
});
