"use client";

import { Locale } from "@/i18n.config";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { usePathname } from "next/navigation";
import { NavigationDictionary } from "@/types/types";

import {
  List,
  X,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";

export default function Header({
  lang,
  navigation,
  className,
}: {
  lang: Locale;
  navigation: NavigationDictionary;
  className?: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={`flex justify-between items-center px-4 md:px-8 py-4 text-white w-full ${
        pathname === "/en" || pathname === "/hr" ? "" : "bg-[#222]"
      } ${className}`}
    >
      <h1>
        <span className="font-semibold">OMF</span> |{" "}
        <span className="font-medium">structural solutions</span>
      </h1>
      <nav className="hidden space-x-8 md:flex">
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
        <LocaleSwitcher />
      </nav>
      {isMenuOpen ? (
        <MobileNavigation
          lang={lang}
          navigation={navigation}
          setIsMenuOpen={setIsMenuOpen}
        />
      ) : (
        <List
          className="w-8 h-8 md:hidden"
          onClick={() => setIsMenuOpen(true)}
        />
      )}
    </header>
  );
}
