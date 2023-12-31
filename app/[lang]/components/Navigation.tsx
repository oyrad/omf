"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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
  const [currentScrolY, setCurrentScrolLy] = useState(0);

  useEffect(() => {
    const nav = document.querySelector("nav");

    const handleScroll = () => {
      const newScrollY = window.scrollY;
      if (pathname === "/hr" || pathname === "/en") {
        if (newScrollY === 0) {
          nav?.classList.add("nav-top");
          setCurrentScrolLy(0);
          return;
        }

        if (nav?.classList.contains("nav-top"))
          nav?.classList.remove("nav-top");
      }

      if (newScrollY < currentScrolY) {
        nav?.classList.add("nav-scrolled");
        nav?.classList.remove("nav-hidden");
      } else {
        nav?.classList.remove("nav-scrolled");
        nav?.classList.add("nav-hidden");
      }
      setCurrentScrolLy(newScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <nav
        className={`flex justify-between px-8 py-4 text-white w-full ${
          pathname === "/en" || pathname === "/hr" ? "absolute" : "bg-stone-800"
        }`}
      >
        <h1>
          <span className="font-semibold">OMF</span> |{" "}
          <span className="font-medium">structural solutions</span>
        </h1>
        <div className="flex space-x-8">
          <Link
            href={`/${lang}`}
            className={`hover:opacity-80 transition-all
              ${
                pathname === "/en" || pathname === "/hr"
                  ? "border-b border-white"
                  : ""
              }
            `}
          >
            {dictionaryNavigation.home}
          </Link>
          <Link
            href={`/${lang}/projects`}
            className={`hover:opacity-80 transition-all
              ${pathname.includes("projects") ? "border-b border-white" : ""}
            `}
          >
            {dictionaryNavigation.projects}
          </Link>
          <Link
            href={`/${lang}/contact`}
            className={`hover:opacity-80 transition-all
              ${pathname.includes("contact") ? "border-b border-white" : ""}
            `}
          >
            {dictionaryNavigation.contact}
          </Link>
          <LocaleSwitcher />
        </div>
      </nav>
    </>
  );
}
