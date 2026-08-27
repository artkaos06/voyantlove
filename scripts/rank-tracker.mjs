#!/usr/bin/env node
/**
 * Weekly keyword rank tracker for voyantlove.fr (DataForSEO SERP API).
 *
 * Usage:  npm run rank:track
 *
 * Requires DATAFORSEO_LOGIN + DATAFORSEO_PASSWORD, taken from the process
 * environment, or from .env.local at the repo root as a fallback.
 *
 * Plain Node >= 18 — global fetch, zero npm dependencies (no dotenv).
 *
 * Reads   scripts/rank-keywords.json
 * Appends reports/rank-history.csv  (date,keyword,position,url)
 *
 * COST — measured, not estimated. On 2026-08-27 a 20-keyword run billed
 * $0.3960, i.e. ~$0.0198 per keyword. DataForSEO prices "live" mode by depth,
 * so depth 100 costs ~10x depth 10. Weekly that is ~$20/year at 20 keywords.
 * To cut it roughly 10x, drop DEPTH to 10 (you then lose ranks 11-100), or
 * move to the queued "/task_post" + "/task_get" endpoints instead of "live".
 * Run this once a week — never on every push or in CI on push.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const KEYWORDS_FILE = path.join(ROOT, 'scripts', 'rank-keywords.json');
const HISTORY_FILE = path.join(ROOT, 'reports', 'rank-history.csv');
const ENV_FILE = path.join(ROOT, '.env.local');

const API_URL = 'https://api.dataforseo.com/v3/serp/google/organic/live/regular';
const TARGET_DOMAIN = 'voyantlove.fr';
const LOCATION_CODE = 2250; // France
const LANGUAGE_CODE = 'fr';
const DEPTH = 100;
const DELAY_MS = 300;
const NOT_FOUND = '>100';

const CSV_HEADER = 'date,keyword,position,url';

/* ------------------------------------------------------------------ utils */

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** Minimal .env parser — enough for KEY=value files, no dotenv dependency. */
function parseEnvFile(filePath) {
  const out = {};
  let raw;
  try {
    raw = fs.readFileSync(filePath, 'utf8');
  } catch {
    return out;
  }
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim().replace(/^export\s+/, '');
    if (!key) continue;
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"') && value.length > 1) ||
      (value.startsWith("'") && value.endsWith("'") && value.length > 1)
    ) {
      value = value.slice(1, -1);
    }
    out[key] = value;
  }
  return out;
}

function getCredentials() {
  let login = process.env.DATAFORSEO_LOGIN;
  let password = process.env.DATAFORSEO_PASSWORD;

  if (!login || !password) {
    const fileEnv = parseEnvFile(ENV_FILE);
    login = login || fileEnv.DATAFORSEO_LOGIN;
    password = password || fileEnv.DATAFORSEO_PASSWORD;
  }

  if (!login || !password) {
    console.error(
      'Missing DataForSEO credentials.\n' +
        '  Set DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD in the environment,\n' +
        `  or add them to ${path.relative(ROOT, ENV_FILE)} (see .env.local.example).`
    );
    process.exit(1);
  }
  return { login, password };
}

function csvEscape(value) {
  const str = String(value ?? '');
  return /[",\n\r]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
}

function today() {
  // Local date, YYYY-MM-DD.
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function truncate(str, max) {
  return str.length > max ? `${str.slice(0, max - 1)}…` : str;
}

/* -------------------------------------------------------------- API layer */

/** Does this SERP item belong to voyantlove.fr? */
function isTarget(item) {
  const domain = String(item?.domain ?? '').toLowerCase();
  const url = String(item?.url ?? '').toLowerCase();
  return domain.includes(TARGET_DOMAIN) || url.includes(TARGET_DOMAIN);
}

/**
 * Query one keyword. Returns { position, url, cost }.
 * Throws on transport / API errors so the caller can record a failure.
 */
async function fetchRank(keyword, authHeader) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: authHeader,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      {
        keyword,
        location_code: LOCATION_CODE,
        language_code: LANGUAGE_CODE,
        depth: DEPTH,
      },
    ]),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => '');
    throw new Error(
      `HTTP ${response.status} ${response.statusText}${body ? ` — ${truncate(body, 200)}` : ''}`
    );
  }

  const payload = await response.json();
  const cost = Number(payload?.cost) || 0;

  if (payload?.status_code !== 20000) {
    throw new Error(
      `API status ${payload?.status_code}: ${payload?.status_message ?? 'unknown error'}`
    );
  }

  const task = payload?.tasks?.[0];
  if (!task) throw new Error('API returned no tasks');
  if (task.status_code !== 20000) {
    throw new Error(
      `Task status ${task.status_code}: ${task.status_message ?? 'unknown error'}`
    );
  }

  const items = task?.result?.[0]?.items ?? [];
  let organicCount = 0;
  let best = null;
  for (const item of items) {
    if (item?.type !== 'organic') continue;
    organicCount++;
    if (!isTarget(item)) continue;
    const rank = Number(item?.rank_absolute);
    if (!Number.isFinite(rank)) continue;
    if (best === null || rank < best.rank) {
      best = { rank, url: String(item?.url ?? '') };
    }
  }

  // organicCount lets us tell "we're genuinely absent from a full SERP" apart
  // from "the SERP came back empty" — both would otherwise look like ">100".
  return best
    ? { position: String(best.rank), url: best.url, cost, organicCount }
    : { position: NOT_FOUND, url: '', cost, organicCount };
}

/* ------------------------------------------------------------------- main */

async function main() {
  const { login, password } = getCredentials();
  const authHeader = `Basic ${Buffer.from(`${login}:${password}`).toString('base64')}`;

  let keywords;
  try {
    keywords = JSON.parse(fs.readFileSync(KEYWORDS_FILE, 'utf8'));
  } catch (err) {
    console.error(`Could not read ${KEYWORDS_FILE}: ${err.message}`);
    process.exit(1);
  }
  if (!Array.isArray(keywords) || keywords.length === 0) {
    console.error(`${KEYWORDS_FILE} must contain a non-empty JSON array of keywords.`);
    process.exit(1);
  }

  const date = today();
  console.log(
    `Rank tracker — ${TARGET_DOMAIN} — ${date} — ${keywords.length} keywords (France, fr, depth ${DEPTH})\n`
  );

  const rows = [];
  const failures = [];
  let totalCost = 0;

  for (let i = 0; i < keywords.length; i++) {
    const keyword = String(keywords[i]);
    const label = `[${String(i + 1).padStart(2, ' ')}/${keywords.length}] ${keyword}`;
    try {
      const { position, url, cost, organicCount } = await fetchRank(keyword, authHeader);
      totalCost += cost;
      rows.push({ date, keyword, position, url, organicCount });
      const warn = organicCount === 0 ? '  [!] empty SERP — ">100" is not meaningful' : '';
      console.log(`${label} → ${position}${url ? ` (${url})` : ''}${warn}`);
    } catch (err) {
      // One bad keyword must not abort the run.
      failures.push({ keyword, error: err.message });
      console.error(`${label} → FAILED: ${err.message}`);
    }
    if (i < keywords.length - 1) await sleep(DELAY_MS);
  }

  // ---- append to reports/rank-history.csv -------------------------------
  if (rows.length > 0) {
    fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });
    const needsHeader =
      !fs.existsSync(HISTORY_FILE) || fs.statSync(HISTORY_FILE).size === 0;
    const lines = rows.map((r) =>
      [r.date, r.keyword, r.position, r.url].map(csvEscape).join(',')
    );
    const chunk = (needsHeader ? `${CSV_HEADER}\n` : '') + lines.join('\n') + '\n';
    fs.appendFileSync(HISTORY_FILE, chunk, 'utf8');
  }

  // ---- results table ----------------------------------------------------
  const kwWidth = Math.max(7, ...rows.map((r) => r.keyword.length));
  const posWidth = Math.max(8, ...rows.map((r) => r.position.length));

  console.log(`\n${'Keyword'.padEnd(kwWidth)}  ${'Position'.padEnd(posWidth)}  URL`);
  console.log(`${'-'.repeat(kwWidth)}  ${'-'.repeat(posWidth)}  ${'-'.repeat(40)}`);
  for (const r of rows) {
    console.log(
      `${r.keyword.padEnd(kwWidth)}  ${r.position.padEnd(posWidth)}  ${r.url || '-'}`
    );
  }

  const ranked = rows.filter((r) => r.position !== NOT_FOUND);
  console.log(
    `\n${rows.length}/${keywords.length} keywords checked — ` +
      `${ranked.length} ranked in top ${DEPTH}, ${rows.length - ranked.length} not found.`
  );

  const empty = rows.filter((r) => r.organicCount === 0);
  if (empty.length > 0) {
    console.log(
      `[!] ${empty.length} keyword(s) returned an EMPTY SERP — their ">100" reflects ` +
        `a bad API response, not the ranking. Re-check before trusting those rows.`
    );
  } else {
    const minSerp = Math.min(...rows.map((r) => r.organicCount));
    console.log(`SERP coverage OK — every keyword returned >= ${minSerp} organic results.`);
  }
  if (failures.length > 0) {
    console.log(`${failures.length} keyword(s) failed and were NOT written to the CSV:`);
    for (const f of failures) console.log(`  - ${f.keyword}: ${f.error}`);
  }
  console.log(`Total API cost: $${totalCost.toFixed(4)}`);
  if (rows.length > 0) {
    console.log(`Appended ${rows.length} row(s) to ${path.relative(ROOT, HISTORY_FILE)}`);
  }
}

main().catch((err) => {
  console.error(`Fatal: ${err?.stack ?? err}`);
  process.exit(1);
});
