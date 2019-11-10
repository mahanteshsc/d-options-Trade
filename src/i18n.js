import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";
import en from "./en"
import fr from "./fr"

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    // we init with resources
    fallbackLng: "en",
    keySeparator: false,
    debug: true,
    // interpolation: {
    //   escapeValue: false // not needed for react!!
    // },
    resources: {
      en: en,
      fr: fr
    },
    react: {
      wait: true
    }
  });

export default i18n;
