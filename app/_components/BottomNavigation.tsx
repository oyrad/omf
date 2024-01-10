"use client";

import { NavigationDictionary } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type BottomNavigationProps = {
  lang: string;
  navigation: NavigationDictionary;
};

export default function BottomNavigation({
  lang,
  navigation,
}: BottomNavigationProps) {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center pb-6 space-x-8 text-stone-200 font-alternate">
      <Link
        href={`/${lang}`}
        className={`${
          pathname === "/en" || pathname === "/hr"
            ? "border-b border-white"
            : ""
        } hover:border-b hover:border-white`}
      >
        {navigation.home}
      </Link>
      <Link
        href={`/${lang}/projects`}
        className={`${
          pathname.includes("projects") ? "border-b border-white" : ""
        } hover:border-b hover:border-white`}
      >
        {navigation.projects}
      </Link>
      <Link
        href={`/${lang}/contact`}
        className={`${
          pathname.includes("contact") ? "border-b border-white" : ""
        } hover:border-b hover:border-white`}
      >
        {navigation.contact}
      </Link>
    </div>
  );
}
