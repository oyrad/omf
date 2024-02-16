"use client";

import Header from "./Header";
import { Locale } from "@/i18n.config";
import { NavigationDictionary } from "@/types/types";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type FixedHeaderProps = {
  lang: Locale;
  navigation: NavigationDictionary;
};

export default function FixedHeader({ lang, navigation }: FixedHeaderProps) {
  const pathname = usePathname();
  const [currentScrollY, setCurrentScrolly] = useState(0);
  const [currentClassName, setCurrentClassName] = useState("nav-hidden");

  useEffect(() => {
    function handleScroll() {
      const newScrollY = window.scrollY;

      if (newScrollY === 0) {
        setCurrentClassName("nav-hidden");
        return;
      }

      if (newScrollY < currentScrollY) {
        setCurrentClassName("nav-scrolled");
      } else {
        setCurrentClassName("nav-hidden");
      }

      setCurrentScrolly(newScrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, currentScrollY]);
  return (
    <Header lang={lang} navigation={navigation} className={currentClassName} />
  );
}
