import Link from "next/link";

import {
  ArrowRight,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";

type ButtonProps = {
  link: string;
  buttonText: string;
};

export default function Button({ link, buttonText }: ButtonProps) {
  return (
    <Link
      href={link}
      className="flex items-center gap-2 px-4 py-2 lg:py-1.5 mb-8 text-white transition-all lg:mb-20 bg-stone-800 w-fit hover:bg-stone-500 hover:gap-4"
    >
      <p className="font-open">{buttonText}</p>
      <ArrowRight className="w-5" />
    </Link>
  );
}
