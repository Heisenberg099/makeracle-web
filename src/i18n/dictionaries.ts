/**
 * UI strings in English and Hindi.
 * Launch scope: navigation, calls to action and form chrome.
 * Page body copy is English for now — move it here section by section
 * (see docs/I18N.md). Code keywords always stay in English.
 */
export const dictionaries = {
  en: {
    "nav.schools": "For Schools",
    "nav.programmes": "Programmes",
    "nav.workshops": "Workshops",
    "nav.teachers": "Teachers",
    "nav.parents": "Parents",
    "nav.about": "About",
    "nav.contact": "Contact",
    "cta.book": "Book a free workshop",
    "cta.programmes": "See programmes",
    "cta.pilot": "Request a pilot proposal",
    "lang.switch": "हिंदी",
    "lang.label": "Switch language to Hindi",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "form.submit": "Send",
    "form.sending": "Sending…",
    "form.required": "Required",
  },
  hi: {
    "nav.schools": "स्कूलों के लिए",
    "nav.programmes": "कार्यक्रम",
    "nav.workshops": "वर्कशॉप",
    "nav.teachers": "शिक्षक",
    "nav.parents": "अभिभावक",
    "nav.about": "हमारे बारे में",
    "nav.contact": "संपर्क",
    "cta.book": "मुफ़्त वर्कशॉप बुक करें",
    "cta.programmes": "कार्यक्रम देखें",
    "cta.pilot": "पायलट प्रस्ताव माँगें",
    "lang.switch": "EN",
    "lang.label": "भाषा अंग्रेज़ी में बदलें",
    "menu.open": "मेन्यू खोलें",
    "menu.close": "मेन्यू बंद करें",
    "form.submit": "भेजें",
    "form.sending": "भेजा जा रहा है…",
    "form.required": "ज़रूरी",
  },
} as const;

export type Lang = keyof typeof dictionaries;
export type DictKey = keyof (typeof dictionaries)["en"];
