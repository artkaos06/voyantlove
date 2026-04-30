#!/usr/bin/env node
// One-shot script: create a Google Ads conversion action of type
// UPLOAD_CLICKS, suitable for receiving offline conversions from our
// BargesTech postback via the uploadClickConversions API.
//
// Why this script exists: the "Import" data source is not exposed in the
// conversion-action UI on our account variant, so we create it via the API.
//
// Run:
//   1. Add Google Ads vars to .env.local (same names as in .env.local.example)
//   2. node scripts/create-conversion-action.js
//   3. Copy the printed Conversion Action ID into Vercel as
//      GOOGLE_ADS_CONVERSION_ACTION_ID, then redeploy.
//
// Re-running this script creates a NEW conversion action each time
// (Google Ads has no idempotency guard on name). Don't run twice unless
// you want a duplicate.

const fs = require('fs');
const path = require('path');

// ---- Config you can tweak before running ----
const CONFIG = {
  name: 'Keen First Purchase (OCI)',
  category: 'PURCHASE',
  // UPLOAD_CLICKS = offline conversions attributed to a stored gclid.
  // This is the type that uploadClickConversions accepts.
  type: 'UPLOAD_CLICKS',
  // Default per-conversion value used when the postback omits a payout.
  // Most Keen first-purchases pay $20-50 — set this to your typical net.
  defaultValue: 50,
  defaultCurrencyCode: 'USD',
  // ONE_PER_CLICK = one conversion counted per gclid even if BargesTech
  // fires multiple status-change postbacks for the same transaction.
  countingType: 'ONE_PER_CLICK',
  clickThroughLookbackWindowDays: 30,
};

// ---- Load .env.local ----
function loadEnvFile(filepath) {
  if (!fs.existsSync(filepath)) return;
  const content = fs.readFileSync(filepath, 'utf8');
  for (const rawLine of content.split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    // Strip surrounding quotes if present
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}
loadEnvFile(path.join(__dirname, '..', '.env.local'));

// ---- Validate required env vars ----
const REQUIRED = [
  'GOOGLE_ADS_DEVELOPER_TOKEN',
  'GOOGLE_ADS_CLIENT_ID',
  'GOOGLE_ADS_CLIENT_SECRET',
  'GOOGLE_ADS_REFRESH_TOKEN',
  'GOOGLE_ADS_CUSTOMER_ID',
];
const missing = REQUIRED.filter((v) => !process.env[v]);
if (missing.length) {
  console.error('❌ Missing env vars in .env.local:');
  for (const v of missing) console.error(`   - ${v}`);
  console.error('');
  console.error('Add them to .env.local and re-run.');
  process.exit(1);
}

const customerId = process.env.GOOGLE_ADS_CUSTOMER_ID.replace(/-/g, '');
const loginCustomerId = (
  process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID || customerId
).replace(/-/g, '');
const apiVersion = process.env.GOOGLE_ADS_API_VERSION || 'v21';

console.log('Config:');
console.log(`  Customer ID:        ${customerId}`);
console.log(`  Login Customer ID:  ${loginCustomerId} (MCC)`);
console.log(`  API version:        ${apiVersion}`);
console.log(`  Conversion name:    ${CONFIG.name}`);
console.log(`  Type:               ${CONFIG.type}`);
console.log(`  Default value:      $${CONFIG.defaultValue} ${CONFIG.defaultCurrencyCode}`);
console.log('');

// ---- 1. Get access token via refresh-token grant ----
async function getAccessToken() {
  console.log('1/3  Fetching access token...');
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_ADS_CLIENT_ID,
      client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
      refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OAuth failed (${res.status}): ${text}`);
  }
  const data = await res.json();
  if (!data.access_token) throw new Error('No access_token in OAuth response');
  console.log('     ✓ access token acquired');
  return data.access_token;
}

// ---- 2. Create conversion action ----
async function createConversionAction(accessToken) {
  console.log('2/3  Creating conversion action...');
  const url = `https://googleads.googleapis.com/${apiVersion}/customers/${customerId}/conversionActions:mutate`;
  const body = {
    operations: [
      {
        create: {
          name: CONFIG.name,
          category: CONFIG.category,
          type: CONFIG.type,
          status: 'ENABLED',
          valueSettings: {
            defaultValue: CONFIG.defaultValue,
            defaultCurrencyCode: CONFIG.defaultCurrencyCode,
            // false = if the upload provides a value, use it; else fall back to default
            alwaysUseDefaultValue: false,
          },
          countingType: CONFIG.countingType,
          clickThroughLookbackWindowDays: CONFIG.clickThroughLookbackWindowDays,
        },
      },
    ],
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'developer-token': process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
      'login-customer-id': loginCustomerId,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error(
      `Unparseable response (${res.status}): ${text.slice(0, 800)}`
    );
  }
  if (!res.ok) {
    throw new Error(
      `Google Ads API ${res.status}:\n${JSON.stringify(parsed, null, 2)}`
    );
  }
  return parsed;
}

// ---- 3. Extract ID and report ----
(async () => {
  try {
    const accessToken = await getAccessToken();
    const result = await createConversionAction(accessToken);

    console.log('     ✓ created');
    console.log('');
    console.log('3/3  Extracting conversion action ID...');

    const resourceName = result.results && result.results[0] && result.results[0].resourceName;
    if (!resourceName) {
      console.error('Unexpected response shape:');
      console.error(JSON.stringify(result, null, 2));
      throw new Error('No resourceName in response');
    }
    const id = resourceName.split('/').pop();

    console.log('');
    console.log('═══════════════════════════════════════════════════════════');
    console.log(' ✅ Conversion action created successfully');
    console.log('═══════════════════════════════════════════════════════════');
    console.log('');
    console.log(`  Resource name: ${resourceName}`);
    console.log(`  Conversion Action ID: ${id}`);
    console.log('');
    console.log('Next: add this to Vercel env vars (and locally too):');
    console.log('');
    console.log(`  GOOGLE_ADS_CONVERSION_ACTION_ID=${id}`);
    console.log('');
    console.log('Then redeploy. Postback handler will start uploading');
    console.log('conversions to Google Ads OCI on the next inbound postback.');
    console.log('');
  } catch (err) {
    console.error('');
    console.error('❌ FAILED:', err.message);
    process.exit(1);
  }
})();
