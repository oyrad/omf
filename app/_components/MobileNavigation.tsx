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
  handleMenuClose: () => void;
};

export default function MobileNavigation({
  lang,
  navigation,
  handleMenuClose,
}: MobileNavigationProps) {
  const pathname = usePathname();

  return (
    <div className="absolute top-0 left-0 z-20 w-full h-svh bg-[#222] p-4">
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-lg">
            <span className="font-semibold">OMF</span> |{" "}
            <span className="font-medium">structural solutions</span>
          </h1>
          <X className="w-8 h-8" onClick={handleMenuClose} />
        </div>
        <nav className="flex flex-col items-center space-y-8 w-fit">
          <Link
            href={`/${lang}`}
            onClick={handleMenuClose}
            className={`text-2xl hover:border-b hover:border-white font-alternate
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
            onClick={handleMenuClose}
            className={`text-2xl hover:border-b hover:border-white font-alternate
        ${pathname.includes("projects") ? "border-b border-white" : ""}
      `}
          >
            {navigation.projects}
          </Link>
          <Link
            href={`/${lang}/contact`}
            onClick={handleMenuClose}
            className={`text-2xl hover:border-b hover:border-white font-alternate
        ${pathname.includes("contact") ? "border-b border-white" : ""}
      `}
          >
            {navigation.contact}
          </Link>
        </nav>
        <LocaleSwitcher />
      </div>
    </div>
  );
}
