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

  function handleMenuClick() {
    setIsMenuOpen(true);
    const body = document.querySelector("body");
    const main = document.querySelector("main");

    if (isMenuOpen) {
      setIsMenuOpen(false);
      if (body && main) {
        body.style.overflow = "auto";
        main.style.overflow = "auto";
      }
    } else {
      setIsMenuOpen(true);
      if (body && main) {
        body.style.overflow = "hidden";
        main.style.overflow = "hidden";
      }
    }
  }

  return (
    <header
      className={`flex justify-between items-center px-4 md:px-6 lg:px-8 py-4 text-white w-full ${
        pathname === "/en" || pathname === "/hr" ? "" : "bg-[#222]"
      } ${className}`}
    >
      <Link href={`/${lang}`}>
        <h1 className="font-lg lg:font-base">
          <span className="font-semibold">OMF</span> |{" "}
          <span className="font-medium">structural solutions</span>
        </h1>
      </Link>
      <nav className="hidden space-x-8 lg:flex">
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
          handleMenuClose={handleMenuClick}
        />
      ) : (
        <List className="w-8 h-8 lg:hidden" onClick={handleMenuClick} />
      )}
    </header>
  );
}
