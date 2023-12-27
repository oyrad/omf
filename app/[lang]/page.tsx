import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import logo from "/public/logo.svg";
import backgroundImage from "/public/bg.png";

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
        <div className="flex items-center space-x-4">
          <div className="h-1.5 w-8 bg-stone-800" />
          <p className="text-stone-800 text-3xl font-bold">
            {page.home.mission}
          </p>
        </div>
      </div>
    </>
  );
}
