"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex space-x-2 pl-8">
      <Link
        href={redirectedPathName("hr")}
        className={`${pathName.includes("hr") ? "font-bold" : "font-light"}`}
      >
        HR
      </Link>
      <p>|</p>
      <Link
        href={redirectedPathName("en")}
        className={`${pathName.includes("en") ? "font-bold" : "font-light"}`}
      >
        ENG
      </Link>
    </div>
  );
}
