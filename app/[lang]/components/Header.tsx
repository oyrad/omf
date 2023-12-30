import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Navigation from "./Navigation";

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return <Navigation lang={lang} dictionaryNavigation={navigation} />;
}
