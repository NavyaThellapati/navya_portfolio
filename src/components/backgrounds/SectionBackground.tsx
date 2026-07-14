export function SectionBackground({ variant = "dark" }: { variant?: "hero" | "light" | "dark" | "blueprint" | "contact" }) {
  if (variant === "light") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-45" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(238,242,255,0.5))]" />
        <div className="orb left-[-90px] top-28 h-64 w-64 bg-rose-300/35" />
        <div className="orb right-[-120px] bottom-28 h-72 w-72 bg-purple-300/24" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-35" />
      <div className="orb left-[10%] top-20 h-80 w-80 bg-[#6E426F]/28" />
      <div className="orb right-[8%] top-52 h-72 w-72 bg-[#8A4F62]/22" />
      <div className="orb bottom-[-140px] left-1/2 h-96 w-96 -translate-x-1/2 bg-[#C9A86A]/12" />
      {variant === "hero" ? (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_20%,rgba(210,220,235,0.16),transparent_34%),linear-gradient(135deg,rgba(8,13,22,0.22),rgba(8,13,22,0.9))]" />
      ) : null}
      {variant === "blueprint" ? <div className="absolute left-1/2 top-0 h-full w-px bg-[#6E426F]/20 shadow-[0_0_70px_rgba(110,66,111,0.24)]" /> : null}
      {variant === "contact" ? <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(155,92,255,0.25),transparent_34%),radial-gradient(circle_at_35%_58%,rgba(98,216,255,0.15),transparent_35%)]" /> : null}
    </div>
  );
}
