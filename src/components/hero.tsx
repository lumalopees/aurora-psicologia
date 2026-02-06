"use client";

import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLanguage } from "@/components/language-provider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-10 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 -translate-x-1/3 -translate-y-1/3 rounded-full bg-accent/40 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 translate-x-1/3 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
          {t.brand}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-foreground/60">
            {t.tagline}
          </p>
          <h1 className="font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {t.impact}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-foreground/80">
            {t.intro}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/5521999999999"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
              aria-label={t.ctaPrimary}
            >
              {t.ctaPrimary}
            </a>
            <a
              href="#como-funciona"
              className="rounded-full border border-muted bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-foreground/40"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-muted bg-card p-8 shadow-soft">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
              Consulta inicial
            </p>
            <h2 className="font-display text-2xl text-foreground">
              Uma conversa tranquila para entender seu momento.
            </h2>
            <p className="text-sm leading-relaxed text-foreground/70">
              {t.availability}
            </p>
            <div className="rounded-2xl bg-muted/60 p-4 text-sm text-foreground/80">
              Atendimento adulto · Sessao online · 50 minutos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

