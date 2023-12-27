import "server-only";
import type { Locale } from "@/i18n.config";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  hr: () => import("@/dictionaries/hr.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  if (!(locale === "en" || locale === "hr")) {
    throw new Error('Invalid locale. Supported locales are "en" and "hr".');
  }

  return dictionaries[locale]();
};
