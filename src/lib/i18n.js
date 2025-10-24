"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../messages/en.json";
import de from "../messages/de.json";
import fr from "../messages/fr.json";
import nl from "../messages/nl.json";
import zh from "../messages/zh.json";
import da from "../messages/da.json";
import fi from "../messages/fi.json";
import el from "../messages/el.json";
import hi from "../messages/hi.json";
import id from "../messages/id.json";
import ga from "../messages/ga.json";
import it from "../messages/it.json";
import ja from "../messages/ja.json";
import es from "../messages/es.json";
import no from "../messages/no.json";
import pl from "../messages/pl.json";
import pt from "../messages/pt.json";
import ru from "../messages/ru.json";
import ko from "../messages/ko.json";
import sv from "../messages/sv.json";
import tr from "../messages/tr.json";
import uk from "../messages/uk.json";
import vi from "../messages/vi.json";
import ar from "../messages/ar.json";
import ur from "../messages/ur.json";
import mai from "../messages/mai.json";

const resources = {
  en: { translation: en },
  de: { translation: de },
  fr: { translation: fr },
  nl: { translation: nl },
  zh: { translation: zh },
  da: { translation: da },
  fi: { translation: fi },
  el: { translation: el },
  hi: { translation: hi },
  id: { translation: id },
  ga: { translation: ga },
  it: { translation: it },
  ja: { translation: ja },
  es: { translation: es },
  no: { translation: no },
  pl: { translation: pl },
  pt: { translation: pt },
  ru: { translation: ru },
  ko: { translation: ko },
  sv: { translation: sv },
  tr: { translation: tr },
  uk: { translation: uk },
  vi: { translation: vi },
  ar: { translation: ar },
  ur: { translation: ur },
  mai: { translation: mai },
};

console.log("i18n: Initializing with resources:", Object.keys(resources));
console.log("i18n: Available language codes:", Object.keys(resources));

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en", // default language
    fallbackLng: "en", // Disable fallback to prevent always showing English
    interpolation: {
      escapeValue: false // react already safe
    },
    react: {
      useSuspense: false
    }
  }).then(() => {
    console.log("i18n: Initialization completed successfully");
    console.log("i18n: Current language:", i18n.language);
  }).catch((error) => {
    console.error("i18n: Initialization failed:", error);
  });
}

export default i18n;
