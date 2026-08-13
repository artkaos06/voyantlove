// "Approfondir avec une IA", deep-links to AI assistants (ChatGPT, Perplexity,
// Claude) with the current page's context pre-filled as the prompt (each reads
// the `q` query param). Zero-JS: plain links with a prebuilt prompt, fully
// server-rendered. No API keys, no runtime cost. Bonus for AI visibility: the
// prompt cites the page URL, nudging each assistant back toward the site.

interface AskAIProps {
  /** Page title / topic, e.g. "Le Soleil en Amour : Signification Tarot". */
  title: string;
  /** Canonical page URL, cited in the prompt so the AI can reference it. */
  url: string;
  /** Short context (answer capsule / summary); trimmed to keep the link short. */
  context?: string;
  /** Optional seed question; defaults to a guided love-reading prompt. */
  question?: string;
  /** Override the default button styling. */
  className?: string;
  /** Override the button label. */
  label?: string;
}

// AI assistants that accept a prefilled prompt via a `q` query param. Add more
// here (one line each) when their deep-link is stable, e.g. Google AI, Copilot.
const PROVIDERS: { key: string; label: string; base: string }[] = [
  { key: 'chatgpt', label: 'ChatGPT', base: 'https://chatgpt.com/?q=' },
  { key: 'perplexity', label: 'Perplexity', base: 'https://www.perplexity.ai/search?q=' },
  { key: 'claude', label: 'Claude', base: 'https://claude.ai/new?q=' },
];
const CONTEXT_MAX = 320;

function buildPrompt({ title, url, context, question }: AskAIProps): string {
  const lines = [
    'Tu es un assistant de voyance amoureuse, bienveillant et nuancé.',
    `Je viens de lire cet article de VoyantLove : « ${title} » (${url}).`,
  ];
  if (context) {
    const trimmed =
      context.length > CONTEXT_MAX
        ? `${context.slice(0, CONTEXT_MAX).trimEnd()}…`
        : context;
    lines.push(`Résumé de la page : ${trimmed}`);
  }
  lines.push(
    question?.trim()
      ? `Ma question : ${question.trim()}`
      : 'Aide-moi à comprendre ma situation amoureuse en lien avec ce sujet. Pose-moi d’abord 2 ou 3 questions sur ma situation, puis donne-moi une guidance concrète et honnête.',
  );
  return lines.join('\n');
}

export default function AskAI(props: AskAIProps) {
  const q = encodeURIComponent(buildPrompt(props));
  return (
    <div className={props.className ?? 'rounded-xl border border-gray-200 bg-white p-4 shadow-sm'}>
      <p className="mb-3 text-sm font-semibold text-gray-700">
        <span aria-hidden>✨</span> {props.label ?? 'Approfondir avec une IA'}
      </p>
      <div className="flex flex-wrap gap-2">
        {PROVIDERS.map((p) => (
          <a
            key={p.key}
            href={`${p.base}${q}`}
            target="_blank"
            rel="noopener noreferrer"
            data-cta={`ask-ai-${p.key}`}
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-indigo-400 hover:text-indigo-700"
          >
            {p.label}
          </a>
        ))}
      </div>
    </div>
  );
}
