// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import KOR from "../locales/KOR.json";
import ENG from "../locales/ENG.json";

i18n.use(initReactI18next).init({
    resources: {
        KOR: { translation: KOR },
        ENG: { translation: ENG },
    },
    lng: "KOR", // 기본 언어
    fallbackLng: "ENG",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
