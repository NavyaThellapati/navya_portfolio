export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#D39AA8]">{eyebrow}</p> : null}
      <h2 className="font-display text-[clamp(1.65rem,2.9vw,2.25rem)] font-bold leading-tight text-[var(--text)]">{title}</h2>
      {body ? <p className="mt-3 text-[clamp(0.95rem,1.25vw,1.05rem)] leading-7 text-[var(--muted)]">{body}</p> : null}
    </div>
  );
}
