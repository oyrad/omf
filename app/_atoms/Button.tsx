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
      className="bg-stone-800 hover:bg-stone-500 transition-all text-white px-4 py-1 flex space-x-2 items-center w-fit mb-20"
    >
      <p className="font-open">{buttonText}</p>
      <ArrowRight className="w-5" />
    </Link>
  );
}
