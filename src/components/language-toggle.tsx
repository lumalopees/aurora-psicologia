"use client";

import { useLanguage } from "@/components/language-provider";
import type { Language } from "@/lib/i18n";

const options: Array<{ value: Language; label: string }> = [
  { value: "pt", label: "PT" },
  { value: "en", label: "EN" },
  { value: "es", label: "ES" }
];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border border-muted bg-card p-1 text-xs font-medium text-foreground">
      {options.map((option) => {
        const isActive = option.value === language;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLanguage(option.value)}
            className={`rounded-full px-3 py-1 transition ${
              isActive
                ? "bg-foreground text-background shadow-sm"
                : "text-foreground/70 hover:text-foreground"
            }`}
            aria-pressed={isActive}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

