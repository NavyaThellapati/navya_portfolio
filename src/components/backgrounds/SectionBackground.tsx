export function SectionBackground({ variant = "dark" }: { variant?: "hero" | "light" | "dark" | "timeline" | "contact" }) {
  if (variant === "light") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_12%,rgba(211,154,168,0.10),transparent_32%)]" />
        <div className="orb left-[-90px] top-28 h-64 w-64 bg-[#D39AA8]/35" />
        <div className="orb right-[-120px] bottom-28 h-72 w-72 bg-[#9CAC91]/24" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-35" />
      <div className="orb left-[10%] top-20 h-80 w-80 bg-[#A95F73]/28" />
      <div className="orb right-[8%] top-52 h-72 w-72 bg-[#A95F73]/22" />
      <div className="orb bottom-[-140px] left-1/2 h-96 w-96 -translate-x-1/2 bg-[#D8BA82]/12" />
      {variant === "hero" ? (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_20%,rgba(211,154,168,0.12),transparent_34%)]" />
      ) : null}
      {variant === "timeline" ? <div className="absolute left-1/2 top-0 h-full w-px bg-[#A95F73]/20 shadow-[0_0_70px_rgba(110,66,111,0.24)]" /> : null}
      {variant === "contact" ? <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(197,142,157,0.24),transparent_34%),radial-gradient(circle_at_35%_58%,rgba(143,165,140,0.16),transparent_35%)]" /> : null}
    </div>
  );
}
