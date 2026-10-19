/**
 * Header and navigation strings in English and Hindi (switchable in the
 * browser today). Page copy lives in src/content/website/en.ts — see docs/I18N.md
 * for how Hindi page copy will be added. Have a native speaker review every
 * Hindi string before launch. Code keywords always stay in English.
 */
export const dictionaries = {
  en: {
    "nav.schools": "For Schools",
    "nav.programmes": "Programmes",
    "nav.workshops": "Workshops",
    "nav.teachers": "For Teachers",
    "nav.parents": "For Parents",
    "nav.about": "About",
    "nav.login": "Sign in",
    "cta.book": "Book a free workshop",
    "lang.group": "Language",
    "lang.en": "English",
    "lang.hi": "Hindi",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "whatsapp.label": "Message us on WhatsApp",
    "home.label": "makeracle home",
  },
  hi: {
    "nav.schools": "स्कूलों के लिए",
    "nav.programmes": "कार्यक्रम",
    "nav.workshops": "वर्कशॉप",
    "nav.teachers": "शिक्षकों के लिए",
    "nav.parents": "अभिभावकों के लिए",
    "nav.about": "हमारे बारे में",
    "nav.login": "साइन इन",
    "cta.book": "मुफ़्त वर्कशॉप बुक करें",
    "lang.group": "भाषा",
    "lang.en": "अंग्रेज़ी",
    "lang.hi": "हिंदी",
    "menu.open": "मेन्यू खोलें",
    "menu.close": "मेन्यू बंद करें",
    "whatsapp.label": "WhatsApp पर संदेश भेजें",
    "home.label": "makeracle होम",
  },
} as const;

export type Lang = keyof typeof dictionaries;
export type DictKey = keyof (typeof dictionaries)["en"];
