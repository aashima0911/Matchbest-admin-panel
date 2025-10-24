"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import i18n from "../../lib/i18n";

export default function LanguageWatcher() {
  const lang = useSelector((state) => {
    console.log("LanguageWatcher: Full Redux state:", state);
    console.log("LanguageWatcher: Language code from state:", state.language?.code);
    return state.language?.code;
  });

  useEffect(() => {
    console.log("LanguageWatcher: Language code changed to:", lang);
    console.log("LanguageWatcher: i18n is initialized:", i18n.isInitialized);

    if (i18n.isInitialized) {
      console.log("LanguageWatcher: i18n current language:", i18n.language);
      console.log("LanguageWatcher: Available i18n languages:", Object.keys(i18n.services?.resourceStore?.data || {}));

      if (lang) {
        // Check if the language code exists in i18n resources
        const availableLanguages = Object.keys(i18n.services?.resourceStore?.data || {});
        console.log("LanguageWatcher: Available languages in i18n:", availableLanguages);

      if (availableLanguages.includes(lang)) {
        console.log("LanguageWatcher: Changing language to:", lang);
        i18n.changeLanguage(lang).then(() => {
          console.log("LanguageWatcher: Language changed successfully to:", lang);
          console.log("LanguageWatcher: New i18n language:", i18n.language);
        }).catch((error) => {
          console.error("LanguageWatcher: Error changing language:", error);
        });
      } else {
        console.warn("LanguageWatcher: Language code", lang, "not found in i18n resources. Available:", availableLanguages);
        console.log("LanguageWatcher: Language not supported for translation, but Redux state updated");
        // Don't fallback to English - keep the selected language in Redux
        // but i18n will continue using the last valid language
      }
      }
    } else {
      console.log("LanguageWatcher: i18n not initialized yet, waiting...");
    }
  }, [lang]);

  return null;
}
