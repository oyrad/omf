"use client";

import {
  ArrowDown,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";

export default function AnimatedArrowDown() {
  function handleClick() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }
  return (
    <ArrowDown
      onClick={handleClick}
      className="w-16 animate-bounce cursor-pointer hover:opacity-80 transition-all pb-8 pr-8 ml-auto"
    />
  );
}
