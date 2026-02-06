export type Language = "pt" | "en" | "es";

type Dictionary = {
  localeLabel: string;
  brand: string;
  tagline: string;
  intro: string;
  impact: string;
  ctaPrimary: string;
  ctaSecondary: string;
  availability: string;
};

export const dictionaries: Record<Language, Dictionary> = {
  pt: {
    localeLabel: "Português",
    brand: "Aurora Psicologia",
    tagline: "Psicologia clinica para adultos",
    intro:
      "Atendo pessoas que buscam clareza emocional, equilibrio e um caminho mais gentil para lidar com ansiedade, estresse e transicoes de vida.",
    impact:
      "Acolhimento, ciencia e autonomia para construir escolhas mais leves.",
    ctaPrimary: "Agendar conversa inicial",
    ctaSecondary: "Saiba como funciona",
    availability: "Atendimento online, com horario fixo e acompanhamento continuo."
  },
  en: {
    localeLabel: "English",
    brand: "Aurora Psychology",
    tagline: "Clinical psychology for adults",
    intro:
      "I support people seeking emotional clarity, balance, and a gentler path through anxiety, stress, and life transitions.",
    impact:
      "Warmth, science, and autonomy to build lighter, more meaningful choices.",
    ctaPrimary: "Schedule an initial call",
    ctaSecondary: "See how it works",
    availability: "Online sessions with a fixed schedule and consistent follow-up."
  },
  es: {
    localeLabel: "Español",
    brand: "Aurora Psicologia",
    tagline: "Psicologia clinica para adultos",
    intro:
      "Acompaño a personas que buscan claridad emocional, equilibrio y un camino mas amable para la ansiedad, el estres y los cambios de vida.",
    impact:
      "Cuidado, ciencia y autonomia para construir decisiones mas livianas.",
    ctaPrimary: "Agendar primera conversacion",
    ctaSecondary: "Ver como funciona",
    availability: "Atencion online con horario fijo y seguimiento continuo."
  }
};

