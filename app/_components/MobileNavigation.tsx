import Link from "next/link";
import {
  X,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";
import { NavigationDictionary } from "@/types/types";
import { Locale } from "@/i18n.config";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

type MobileNavigationProps = {
  lang: Locale;
  navigation: NavigationDictionary;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export default function MobileNavigation({
  lang,
  navigation,
  setIsMenuOpen,
}: MobileNavigationProps) {
  const pathname = usePathname();

  return (
    <div className="absolute top-0 left-0 z-20 w-full h-full bg-[#222] px-4 py-5 flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <h1>
          <span className="font-semibold">OMF</span> |{" "}
          <span className="font-medium">structural solutions</span>
        </h1>
        <X className="w-8 h-8" onClick={() => setIsMenuOpen(false)} />
      </div>
      <nav className="flex flex-col items-center space-x-8 w-fit">
        <Link
          href={`/${lang}`}
          className={`hover:border-b hover:border-white font-alternate
        ${
          pathname === "/en" || pathname === "/hr"
            ? "border-b border-white"
            : ""
        }`}
        >
          {navigation.home}
        </Link>
        <Link
          href={`/${lang}/projects`}
          className={`hover:border-b hover:border-white font-alternate
        ${pathname.includes("projects") ? "border-b border-white" : ""}
      `}
        >
          {navigation.projects}
        </Link>
        <Link
          href={`/${lang}/contact`}
          className={`hover:border-b hover:border-white font-alternate
        ${pathname.includes("contact") ? "border-b border-white" : ""}
      `}
        >
          {navigation.contact}
        </Link>
      </nav>
      <LocaleSwitcher />
    </div>
  );
}
