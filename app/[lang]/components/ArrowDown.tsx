"use client";

import {
  ArrowDown as ArrowDownIcon,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";

export default function ArrowDown() {
  function handleClick() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }
  return (
    <ArrowDownIcon
      onClick={handleClick}
      className="w-8 animate-bounce cursor-pointer absolute bottom-5 left-1/2 transform -translate-x-1/2 hover:opacity-80 transition-all"
    />
  );
}
