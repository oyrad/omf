"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LocaleSwitcher() {
  const pathname = usePathname();

  function redirectedPathName(locale: string) {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  }

  return (
    <div className="flex space-x-2 lg:pl-8">
      <Link
        href={redirectedPathName("hr")}
        className={`hover:opacity-80 transition-all ${
          pathname.includes("hr") ? "font-bold" : "font-light"
        }`}
      >
        HR
      </Link>
      <p>|</p>
      <Link
        href={redirectedPathName("en")}
        className={`hover:opacity-80 transition-all ${
          pathname.includes("en") ? "font-bold" : "font-light"
        }`}
      >
        ENG
      </Link>
    </div>
  );
}
