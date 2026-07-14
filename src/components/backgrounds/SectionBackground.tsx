export function SectionBackground({ variant = "dark" }: { variant?: "hero" | "light" | "dark" | "timeline" | "contact" }) {
  if (variant === "light") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_12%,rgba(217,70,239,0.10),transparent_32%)]" />
        <div className="orb left-[-90px] top-28 h-64 w-64 bg-[#F08AB8]/35" />
        <div className="orb right-[-120px] bottom-28 h-72 w-72 bg-[#C4A7FF]/24" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-35" />
      <div className="orb left-[10%] top-20 h-80 w-80 bg-[#D946EF]/28" />
      <div className="orb right-[8%] top-52 h-72 w-72 bg-[#D946EF]/22" />
      <div className="orb bottom-[-140px] left-1/2 h-96 w-96 -translate-x-1/2 bg-[#C4A7FF]/12" />
      {variant === "hero" ? (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_20%,rgba(217,70,239,0.12),transparent_34%)]" />
      ) : null}
      {variant === "timeline" ? <div className="absolute left-1/2 top-0 h-full w-px bg-[#D946EF]/20 shadow-[0_0_70px_rgba(110,66,111,0.24)]" /> : null}
      {variant === "contact" ? <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(240,138,184,0.24),transparent_34%),radial-gradient(circle_at_35%_58%,rgba(196,167,255,0.16),transparent_35%)]" /> : null}
    </div>
  );
}
