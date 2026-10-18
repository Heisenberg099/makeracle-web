"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from "react";
import { dictionaries, type DictKey, type Lang } from "./dictionaries";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: DictKey) => string };

const LangContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => dictionaries.en[k],
});

const STORAGE_KEY = "makeracle.lang";
const EVENT = "makeracle:lang";

// The saved language lives in localStorage; read it as an external store so the
// server render (always "en") and the first client render agree.
function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}
function readLang(): Lang {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "hi" ? "hi" : "en";
  } catch {
    return "en";
  }
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => "en" as Lang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore — language just won't persist */
    }
    window.dispatchEvent(new Event(EVENT));
  }, []);

  const t = useCallback((k: DictKey) => dictionaries[lang][k] ?? dictionaries.en[k], [lang]);

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
