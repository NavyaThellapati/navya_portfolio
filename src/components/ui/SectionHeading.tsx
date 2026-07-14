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
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[var(--plum)]">{eyebrow}</p> : null}
      <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold leading-tight text-[var(--text)]">{title}</h2>
      {body ? <p className="mt-4 text-[clamp(1rem,1.35vw,1.125rem)] leading-7 text-[var(--muted)]">{body}</p> : null}
    </div>
  );
}
