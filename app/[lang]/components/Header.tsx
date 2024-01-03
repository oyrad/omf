"use client";

import { Locale } from "@/i18n.config";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { usePathname } from "next/navigation";

export default function Header({
  lang,
  navigation,
  className,
}: {
  lang: Locale;
  navigation: any;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <header
      className={`flex justify-between px-8 py-4 text-white w-full ${
        pathname === "/en" || pathname === "/hr" ? "" : "bg-[#222]"
      } ${className}`}
    >
      <h1>
        <span className="font-semibold">OMF</span> |{" "}
        <span className="font-medium">structural solutions</span>
      </h1>
      <nav className="flex space-x-8">
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
          {navigation.home}
        </Link>
        <Link
          href={`/${lang}/projects`}
          className={`hover:opacity-80 transition-all
        ${pathname.includes("projects") ? "border-b border-white" : ""}
      `}
        >
          {navigation.projects}
        </Link>
        <Link
          href={`/${lang}/contact`}
          className={`hover:opacity-80 transition-all
        ${pathname.includes("contact") ? "border-b border-white" : ""}
      `}
        >
          {navigation.contact}
        </Link>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
