"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Locale } from "@/i18n.config";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

type NavigationProps = {
  lang: Locale;
  dictionaryNavigation: any;
};

export default function Navigation({
  lang,
  dictionaryNavigation,
}: NavigationProps) {
  const pathname = usePathname();

  useEffect(() => {
    const nav = document.querySelector("nav");
    console.log(pathname);
    const handleScroll = () => {
      if (window.scrollY > 0) {
        nav?.classList.add("nav-scrolled");
      } else {
        nav?.classList.remove("nav-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <nav
        className={`flex justify-between px-8 py-4 text-white w-full ${
          pathname === "/en" || pathname === "/hr"
            ? "absolute"
            : "fixed bg-stone-800"
        }`}
      >
        <h1>
          <span className="font-semibold">OMF</span> |{" "}
          <span className="font-medium">structural solutions</span>
        </h1>
        <div className="flex space-x-8">
          <Link
            href={`/${lang}`}
            className={
              pathname === "/en" || pathname === "/hr"
                ? "border-b border-white"
                : ""
            }
          >
            {dictionaryNavigation.home}
          </Link>
          <Link
            href={`/${lang}/projects`}
            className={
              pathname.includes("projects") ? "border-b border-white" : ""
            }
          >
            {dictionaryNavigation.projects}
          </Link>
          <Link
            href={`/${lang}/contact`}
            className={
              pathname.includes("contact") ? "border-b border-white" : ""
            }
          >
            {dictionaryNavigation.contact}
          </Link>
          <LocaleSwitcher />
        </div>
      </nav>
    </>
  );
}
