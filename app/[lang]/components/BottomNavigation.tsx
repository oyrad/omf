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

  function handleBottomNavigationClick() {
    if (pathname !== "/en" && pathname !== "/hr") return;

    const nav = document.querySelector("nav");
    nav?.classList.add("nav-top");
    nav?.classList.remove("nav-hidden");
  }

  return (
    <div className="text-stone-200 flex justify-center items-center space-x-8 pb-4">
      <Link href={`/${lang}`} onClick={handleBottomNavigationClick}>
        {navigation.home}
      </Link>
      <Link href={`/${lang}/projects`}>{navigation.projects}</Link>
      <Link href={`/${lang}/contact`}>{navigation.contact}</Link>
    </div>
  );
}
