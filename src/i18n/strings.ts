export type Language = 'zu' | 'en'

export const strings = {
  // --- Welcome Screen ---
  welcome: {
    eyebrow: {
      en: 'Township Tool',
      zu: 'Ithuluzi Le-Township',
    },
    headline: {
      en: 'Run your business better.',
      zu: 'Lawula ibhizinisi lakho kangcono.',
    },
    sub: {
      en: "Answer 7 quick questions. Get a plan made for your life — not someone else's.",
      zu: 'Phendula imibuzo emi-7 emifushane. Thola uhlelo olwenziwe ngokuqondene nokuphila kwakho — hhayi okunye.',
    },
    cta: {
      en: 'Start →',
      zu: 'Qala →',
    },
    noSignup: {
      en: 'No sign-up. Offline-ready.',
      zu: 'Awudingeki ukubhalisa. Usebenza ngaphandle kwe-inthanethi.',
    },
  },

  // --- Language Toggle ---
  lang: {
    switch: {
      en: 'IsiZulu',
      zu: 'English',
    },
  },

  // --- Navigation / Common ---
  nav: {
    back: {
      en: '← Back',
      zu: '← Emuva',
    },
    next: {
      en: 'Next →',
      zu: 'Okulandelayo →',
    },
    continue: {
      en: 'Continue →',
      zu: 'Qhubeka →',
    },
    step: {
      en: (current: number, total: number) => `Step ${current} of ${total}`,
      zu: (current: number, total: number) => `Isigaba ${current} ku-${total}`,
    },
  },

  // --- Onboarding ---
  onboarding: {
    q1: {
      en: 'What do you want to be called?',
      zu: 'Ufuna ukubizwa ngani?',
    },
    q1placeholder: {
      en: 'Your name or nickname',
      zu: 'Igama lakho noma isiteketiso',
    },
    q2: {
      en: 'Which area do you work in?',
      zu: 'Usebenza endaweni njani?',
    },
    q2placeholder: {
      en: 'e.g. Thembisa, Soweto, Khayelitsha',
      zu: 'isb. Thembisa, Soweto, Khayelitsha',
    },
    q3: {
      en: 'What kind of business do you run?',
      zu: 'Usebenza muphi uhlobo lwebhizinisi?',
    },
    q4: {
      en: 'How many people depend on your income?',
      zu: 'Abangaki abantu abencika kumali yakho?',
    },
    q5: {
      en: 'What keeps you up at night?',
      zu: 'Yini ekuvimbela ukuphumula ebusuku?',
    },
    q5sub: {
      en: 'Pick up to 2',
      zu: 'Khetha okungenani oku-2',
    },
    q6: {
      en: 'Which of these do you use regularly?',
      zu: 'Kuwani la okusebenzisa njalo?',
    },
    q7: {
      en: 'Do you have a bank account for your business?',
      zu: 'Unayo i-akhawunti yasebhange yebhizinisi lakho?',
    },
    finish: {
      en: 'Show my plan →',
      zu: 'Ngibonakalise uhlelo lwami →',
    },

    // Business types
    businessTypes: {
      'food-catering': { en: 'Food & catering', zu: 'Ukudla & ukulungisa ukudla' },
      'hair-beauty':   { en: 'Hair, nails & beauty', zu: 'Izinwele, izinzipho & ubuhle' },
      'spaza':         { en: 'Spaza / general dealer', zu: 'Isitolo sespaza / umthengisi jikelele' },
      'clothing':      { en: 'Clothing & alterations', zu: 'Izingubo & ukuguqula' },
      'transport':     { en: 'Transport (bakkie, delivery)', zu: 'Izithuthi (ibhakkie, ukuhambisa)' },
      'cleaning':      { en: 'Cleaning & domestic', zu: 'Ukuhlanza & ekhaya' },
      'building':      { en: 'Building & repairs', zu: 'Ukwakha & ukulungisa' },
      'other':         { en: 'Something else', zu: 'Okunye' },
    },

    // Dependants
    dependants: {
      'just-me': { en: 'Just me', zu: 'Mina kuphela' },
      '1-2':     { en: '1–2 people', zu: 'Abantu aba-1 kuya ku-2' },
      '3-5':     { en: '3–5 people', zu: 'Abantu aba-3 kuya ku-5' },
      '5-plus':  { en: 'More than 5 people', zu: 'Ngaphezu kwabantu abayi-5' },
    },

    // Challenges
    challenges: {
      'cash-flow':    { en: "I never have enough money at month-end", zu: "Angikaze ngibe nemali eyanele ekupheleni kwenyanga" },
      'late-payment': { en: "Customers don't pay me on time", zu: "Abathengi abangikhokheli ngesikhathi" },
      'pricing':      { en: "I don't know if I'm charging the right price", zu: "Angazi ukuthi nginamiza intengo efanele yini" },
      'load-shedding':{ en: 'Load shedding is hurting my business', zu: 'Ukugunyazwa kukagesi kukhonzela ibhizinisi lami' },
      'growth':       { en: "I want to grow but don't know how", zu: "Ngifuna ukukhula kodwa angazi ukuthi kanjani" },
      'registration': { en: 'I need to register my business officially', zu: 'Ngidinga ukubhalisa ibhizinisi lami ngokusemthethweni' },
      'customers':    { en: "I don't know how to find more customers", zu: "Angazi ukuthi ngingathola kanjani abathengi abengeziwe" },
    },

    // Social media
    social: {
      'whatsapp': { en: 'WhatsApp', zu: 'i-WhatsApp' },
      'facebook': { en: 'Facebook', zu: 'i-Facebook' },
      'tiktok':   { en: 'TikTok', zu: 'i-TikTok' },
      'none':     { en: 'None of these', zu: 'Akukho kulawa' },
    },

    // Banking
    banking: {
      'business-account': { en: 'Yes, a proper business account', zu: 'Yebo, i-akhawunti yebhizinisi eyiqiniso' },
      'personal-account': { en: 'I use my personal account for everything', zu: 'Ngisebenzisa i-akhawunti yami yomuntu siqu kuzo zonke izinto' },
      'cash-only':        { en: 'I mostly deal in cash', zu: 'Ngisebenza kakhulu ngemali yekheshi' },
    },
  },

  // --- Profile Screen ---
  profile: {
    eyebrow: { en: 'Your profile', zu: 'Iphrofayili yakho' },
    headline: {
      en: (name: string) => `Here's what we know, ${name}.`,
      zu: (name: string) => `Nansi into esiyaziyo, ${name}.`,
    },
    row1: { en: 'You run a', zu: 'Usebenza ku' },
    row2: { en: 'Supporting', zu: 'Ukusekela' },
    row3: { en: 'Biggest challenge', zu: 'Inselele enkulu' },
    body: {
      en: "We're going to focus on what matters most to you — starting now.",
      zu: 'Sizogxila kulokho okubaluleke kakhulu kuwe — kusukela manje.',
    },
    cta: { en: "Let's go →", zu: 'Masihambe →' },
  },

  // --- Module List ---
  moduleList: {
    eyebrow: { en: 'Your learning path', zu: 'Indlela yakho yokufunda' },
    headline: {
      en: (name: string) => `Start here, ${name}.`,
      zu: (name: string) => `Qala lapha, ${name}.`,
    },
    recommended: { en: 'Highly Recommended', zu: 'Kuphakanyiswa Kakhulu' },
    inProgress: { en: 'In progress', zu: 'Kuyaqhubeka' },
  },

  // --- Lesson Screen ---
  lesson: {
    stepLabel: {
      en: (current: number, total: number) => `Step ${current} of ${total}`,
      zu: (current: number, total: number) => `Isigaba ${current} ku-${total}`,
    },
    next: { en: 'Next →', zu: 'Okulandelayo →' },
  },

  // --- WhatsApp CTA ---
  cta: {
    header: { en: 'Do this now', zu: 'Yenza lokhu manje' },
    openWa: { en: 'Open WhatsApp →', zu: 'Vula i-WhatsApp →' },
    defer: { en: "I'll do it later", zu: 'Ngizokwenza ngemuva' },
  },
}

/** Helper to resolve a bilingual string for the current language */
export function t(entry: { en: string; zu: string }, lang: Language): string {
  return entry[lang]
}
