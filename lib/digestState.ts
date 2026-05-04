// In-memory daily digest state — server-only.
//
// Tracks event counts for the current UTC day so the daily Discord digest
// can post real numbers. Resets automatically at UTC midnight (or whenever
// the cron snapshots-and-resets).
//
// Caveats:
//   - Module-level state lives only as long as a serverless function instance.
//     Cold starts mid-day reset counters, so digest counts may UNDERCOUNT
//     reality (they never overcount).
//   - In low-volume periods (overnight in target geo), the function may be
//     cold-started multiple times; counts then diverge from truth.
//   - For accurate metrics, cross-reference Google Ads + BargesTech reports.
//     The digest is meant for "did anything noteworthy happen today" at-a-
//     glance signal, not for billing reconciliation.

export interface DayState {
  /** YYYY-MM-DD in UTC. */
  date: string;
  /** Total click-outs (anyone hitting /api/go/<offer>). */
  clicksTotal: number;
  /** Subset: clicks with gclid attribution. */
  clicksWithGclid: number;
  /** Subset: clicks with gbraid (iOS restricted) attribution. */
  clicksWithGbraid: number;
  /** Subset: clicks with wbraid (web restricted) attribution. */
  clicksWithWbraid: number;
  /** Subset: clicks with no attribution (likely bots / direct). */
  clicksNoAttribution: number;
  /** BargesTech postbacks received. */
  conversionsReceived: number;
  /** Successful Google Ads OCI uploads. */
  ociUploadsOk: number;
  /** Failed Google Ads OCI uploads. */
  ociUploadsFailed: number;
  /** Unauthorized postback attempts (security). */
  unauthorizedPostbacks: number;
  /** Goracash phone-callback form submissions (FR side). */
  goracashLeads: number;
  /** Unique IPs that hit /api/go today. */
  uniqueIps: Set<string>;
  /** Estimated total payout (sum of postback payouts). */
  estimatedPayoutUsd: number;
}

let state: DayState = freshState();

function todayUtc(): string {
  return new Date().toISOString().slice(0, 10);
}

function freshState(): DayState {
  return {
    date: todayUtc(),
    clicksTotal: 0,
    clicksWithGclid: 0,
    clicksWithGbraid: 0,
    clicksWithWbraid: 0,
    clicksNoAttribution: 0,
    conversionsReceived: 0,
    ociUploadsOk: 0,
    ociUploadsFailed: 0,
    unauthorizedPostbacks: 0,
    goracashLeads: 0,
    uniqueIps: new Set(),
    estimatedPayoutUsd: 0,
  };
}

function ensureCurrentDay() {
  if (state.date !== todayUtc()) {
    state = freshState();
  }
}

export function recordClickOut(opts: {
  attributionType: 'gclid' | 'gbraid' | 'wbraid' | 'none';
  ip: string | null;
}): void {
  ensureCurrentDay();
  state.clicksTotal++;
  if (opts.attributionType === 'gclid') state.clicksWithGclid++;
  else if (opts.attributionType === 'gbraid') state.clicksWithGbraid++;
  else if (opts.attributionType === 'wbraid') state.clicksWithWbraid++;
  else state.clicksNoAttribution++;
  if (opts.ip) state.uniqueIps.add(opts.ip);
}

export function recordConversion(payoutUsd?: number): void {
  ensureCurrentDay();
  state.conversionsReceived++;
  if (payoutUsd && Number.isFinite(payoutUsd)) {
    state.estimatedPayoutUsd += payoutUsd;
  }
}

export function recordOciOk(): void {
  ensureCurrentDay();
  state.ociUploadsOk++;
}

export function recordOciFailed(): void {
  ensureCurrentDay();
  state.ociUploadsFailed++;
}

export function recordUnauthorizedPostback(): void {
  ensureCurrentDay();
  state.unauthorizedPostbacks++;
}

export function recordGoracashLead(): void {
  ensureCurrentDay();
  state.goracashLeads++;
}

/**
 * Take a snapshot of the current day state. Used by the digest cron to
 * read accumulated counts before posting the summary.
 */
export function snapshot(): DayState {
  ensureCurrentDay();
  return { ...state, uniqueIps: new Set(state.uniqueIps) };
}

/**
 * Take a snapshot AND reset state to a fresh day. Called by the digest
 * cron after successfully posting the summary so the next day starts clean.
 */
export function snapshotAndReset(): DayState {
  const snap = snapshot();
  state = freshState();
  return snap;
}
