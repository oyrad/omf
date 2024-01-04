"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type BottomNavigationProps = {
  lang: string;
  navigation: any;
};

export default function BottomNavigation({
  lang,
  navigation,
}: BottomNavigationProps) {
  const pathname = usePathname();

  return (
    <div className="text-stone-200 flex justify-center items-center space-x-8 pb-6">
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
