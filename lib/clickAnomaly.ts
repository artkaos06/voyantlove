// Click-rate anomaly detection — server-only.
//
// Catches bot/abuse traffic against /api/go/<offer> by tracking click
// timestamps per IP. If an IP exceeds the per-minute threshold, fires a
// red Discord alert (with cooldown to avoid spamming the channel).
//
// Memory-bounded: when the IP map exceeds MAX_TRACKED_IPS, oldest entries
// are evicted on each call. This is an approximate detector — serverless
// functions may run on multiple instances, so a distributed bot hitting
// many instances at low rates each can still slip through. For our scale
// (low volume, Google Ads filtering most bot traffic upstream), this is
// good enough.

const ANOMALY_THRESHOLD_PER_MIN = 10;
const ALERT_COOLDOWN_MS = 5 * 60_000; // 5 min between alerts for same IP
const MAX_TRACKED_IPS = 200;

const recentByIp = new Map<string, number[]>();
const lastAlertedAtByIp = new Map<string, number>();

export interface AnomalyCheckResult {
  /** Number of clicks from this IP in the last 60s (including current). */
  count: number;
  /** True if this click crossed the anomaly threshold AND cooldown allows alerting. */
  shouldAlert: boolean;
}

export function checkClickAnomaly(ip: string | null): AnomalyCheckResult {
  if (!ip) return { count: 1, shouldAlert: false };

  const now = Date.now();
  const cutoff = now - 60_000;

  const bucket = recentByIp.get(ip) || [];
  const recent = bucket.filter((t) => t >= cutoff);
  recent.push(now);
  recentByIp.set(ip, recent);

  // Memory bound: when map gets large, sweep stale buckets.
  if (recentByIp.size > MAX_TRACKED_IPS) {
    for (const [otherIp, otherBucket] of recentByIp.entries()) {
      if (otherIp === ip) continue;
      const filtered = otherBucket.filter((t) => t >= cutoff);
      if (filtered.length === 0) recentByIp.delete(otherIp);
      else recentByIp.set(otherIp, filtered);
    }
  }

  if (recent.length < ANOMALY_THRESHOLD_PER_MIN) {
    return { count: recent.length, shouldAlert: false };
  }

  // Cooldown: don't re-alert for the same IP within 5 min.
  const lastAlerted = lastAlertedAtByIp.get(ip) || 0;
  if (now - lastAlerted < ALERT_COOLDOWN_MS) {
    return { count: recent.length, shouldAlert: false };
  }

  lastAlertedAtByIp.set(ip, now);
  return { count: recent.length, shouldAlert: true };
}
