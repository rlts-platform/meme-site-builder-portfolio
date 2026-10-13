/**
 * Meme Site Builder portfolio sample — adapted design-selection UI.
 * It demonstrates component state via props only; no token data, payment flow,
 * AI prompts, backend integration, or production logic is included.
 */
const variants = {
  dark: { label: "Dark / Moody", description: "High contrast, dramatic presentation" },
  vibrant: { label: "Vibrant / Energetic", description: "Bold colors and lively layouts" },
  minimal: { label: "Clean / Minimal", description: "A focused, restrained presentation" },
};

export default function DesignVariantCard({ variant, selected, onSelect }) {
  const details = variants[variant];

  if (!details) return null;

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => onSelect?.(variant)}
      className={[
        "w-full rounded-xl border p-4 text-left transition",
        selected
          ? "border-violet-500 bg-violet-500/10 ring-1 ring-violet-400/30"
          : "border-neutral-700 bg-neutral-900 hover:border-neutral-500",
      ].join(" ")}
    >
      <span className="block text-sm font-semibold">{details.label}</span>
      <span className="mt-1 block text-xs text-neutral-400">
        {details.description}
      </span>
      <span className="mt-3 block text-xs">
        {selected ? "Selected" : "Choose this design"}
      </span>
    </button>
  );
}
