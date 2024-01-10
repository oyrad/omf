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
      className="flex items-center px-4 py-1 mb-20 space-x-2 text-white transition-all bg-stone-800 w-fit hover:space-x-3 hover:bg-stone-500"
    >
      <p className="font-open">{buttonText}</p>
      <ArrowRight className="w-5" />
    </Link>
  );
}
