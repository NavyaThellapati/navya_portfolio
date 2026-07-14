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
      <h2 className="font-display text-3xl font-bold text-[var(--text)] sm:text-4xl lg:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">{body}</p> : null}
    </div>
  );
}
