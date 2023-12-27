import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import LocaleSwitcher from "./LocaleSwitcher";
import Navigation from "./Navigation";

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <nav className="flex justify-between px-8 py-4">
      <h1>
        <span className="font-semibold">OMF</span> |{" "}
        <span className="font-medium">structural solutions</span>
      </h1>
      <div className="flex space-x-8">
        <Navigation lang={lang} dictionaryNavigation={navigation} />
        <LocaleSwitcher />
      </div>
    </nav>
  );
}
