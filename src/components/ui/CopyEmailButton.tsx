import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { email } from "../../data/portfolioData";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-sm font-bold text-[var(--text)] transition hover:border-[#D8BA82]/70"
      aria-live="polite"
    >
      {copied ? <Check className="h-4 w-4 text-[#D8BA82]" /> : <Copy className="h-4 w-4" />}
      {copied ? "Email Copied" : "Copy Email"}
    </button>
  );
}
