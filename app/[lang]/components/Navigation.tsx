"use client";

import Link from "next/link";

import { Locale } from "@/i18n.config";
import { usePathname } from "next/navigation";

type NavigationProps = {
  lang: Locale;
  dictionaryNavigation: any;
};

export default function Navigation({
  lang,
  dictionaryNavigation,
}: NavigationProps) {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={`/${lang}`}
        className={
          pathname === "/en" || pathname === "/hr"
            ? "border-b border-black"
            : ""
        }
      >
        {dictionaryNavigation.home}
      </Link>
      <Link
        href={`/${lang}/projects`}
        className={pathname.includes("projects") ? "border-b border-black" : ""}
      >
        {dictionaryNavigation.projects}
      </Link>
      <Link
        href={`/${lang}/contact`}
        className={pathname.includes("contact") ? "border-b border-black" : ""}
      >
        {dictionaryNavigation.contact}
      </Link>
    </>
  );
}
