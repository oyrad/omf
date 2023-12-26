import Link from "next/link";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import LocaleSwitcher from "./LocaleSwitcher";

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <nav className="flex justify-between px-8 py-4">
      <h1>OMF | structural solutions</h1>
      <div className="flex space-x-8">
        <Link href={`/${lang}`}>{navigation.home}</Link>
        <Link href={`/${lang}/projects`}>{navigation.projects}</Link>
        <Link href={`/${lang}/contact`}>{navigation.contact}</Link>
        <LocaleSwitcher />
      </div>
    </nav>
  );
}
