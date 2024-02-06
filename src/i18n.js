import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import Config from "./config";

i18next
    .use(backend)
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init(
        {
            backend: {
                // load from i18next-gitbook repo
                loadPath: "/locales/{{lng}}/{{ns}}.json",
            },
            lng: localStorage.getItem('default_locale') ? localStorage.getItem('default_locale') : Config.defaultLocale,
            fallbackLng: "en_US",
            debug: false,
            // have a common namespace used around the full app
            ns: [
                "common",
                "auth"
            ],
            defaultNS: "common",
            interpolation: {
                escapeValue: false, // not needed for react!!
                formatSeparator: ','
            },
            react: {
                wait: true
            }
        }
    );

export default i18next;