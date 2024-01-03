import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n.config";

import {
  ArrowRight,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";

type ProjectProps = {
  image: string;
  title: string;
  description: string;
  lang: Locale;
};

export default function Project({
  image,
  title,
  description,
  lang,
}: ProjectProps) {
  return (
    <Link href={`/${lang}/projects/1`}>
      <Image
        src={image}
        alt={title}
        height={600}
        width={600}
        className="mb-2"
      />
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-stone-400">{description}</p>
        </div>
        <ArrowRight className="w-8 h-8 p-1 bg-stone-200" />
      </div>
    </Link>
  );
}
