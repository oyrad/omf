import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import logo from "/public/logo.svg";
import backgroundImage from "/public/bg.png";
import skyscraper from "/public/skyscraper.png";
import Link from "next/link";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <>
      <div
        className="flex flex-col items-center justify-center space-y-2 h-screen text-white mb-32"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
        }}
      >
        <Image
          src={logo}
          width={400}
          height={400}
          alt="logo"
          className="mb-4"
        />
        <h2 className="text-3xl font-medium">{page.home.heroTitle}</h2>
        <h3 className="text-xl">{page.home.heroSubtitle}</h3>
      </div>
      <div className="px-48">
        <h4 className="text-4xl font-bold text-stone-500 mb-2">
          {page.home.about}
        </h4>
        <div className="flex items-center space-x-4 mb-8">
          <div className="h-1.5 w-8 bg-stone-800" />
          <p className="text-stone-800 text-3xl font-bold">
            {page.home.mission}
          </p>
        </div>
        <div className="flex justify-between items-center gap-44 mb-48">
          <div className="flex flex-col items-start space-y-8 basis-1/2">
            <p>{page.home.firstAboutParagraph}</p>
            <div className="flex space-x-4">
              <div className="h-18 w-12 bg-stone-300" />
              <p className="font-bold italic">
                {page.home.secondAboutParagraph}
              </p>
            </div>
            <p>{page.home.thirdAboutParagraph}</p>
            <p>{page.home.fourthAboutParagraph}</p>
            <button className="bg-stone-800 text-white px-4 py-1">
              <Link href={`/${lang}/contact`}>
                {page.home.contactButtonText}
              </Link>
            </button>
          </div>
          <Image src={skyscraper} alt="skyscraper" className="w-1/3" />
        </div>
        <h4 className="text-4xl font-bold text-stone-500 mb-2">
          {page.home.services}
        </h4>
        <p className="text-stone-800 text-4xl font-bold mb-4">
          {page.home.forClients}
        </p>
        <div className="h-1.5 w-20 bg-stone-800 mb-48" />
      </div>
    </>
  );
}
