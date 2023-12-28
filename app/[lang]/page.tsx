import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import logo from "/public/logo.svg";
import backgroundImage from "/public/bg.png";
import skyscraper from "/public/skyscraper.png";
import Link from "next/link";

import {
  ArrowRight,
  Binoculars,
  CodesandboxLogo,
  Cube,
  IdentificationCard,
  PencilLine,
  Warehouse,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";
import Service from "./components/Service";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  const { about, services, selectedProjects } = page.home;

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
          {about.title}
        </h4>
        <div className="flex items-center space-x-6 mb-8">
          <div className="h-1.5 w-8 bg-stone-800" />
          <p className="text-stone-800 text-3xl font-bold">{about.subtitle}</p>
        </div>
        <div className="flex justify-between items-center mb-48">
          <div className="flex flex-col items-start space-y-8 text-stone-800 basis-1/2">
            <p>
              {about.firstAboutParagraph}{" "}
              <span className="font-bold">
                {about.firstAboutParagraphBoldText}
              </span>{" "}
              {about.firstAboutParagraphRest}
            </p>
            <div className="flex space-x-4">
              <div className="h-18 w-12 bg-stone-300" />
              <p className="font-bold italic">{about.secondAboutParagraph}</p>
            </div>
            <p>{about.thirdAboutParagraph}</p>
            <p>{about.fourthAboutParagraph}</p>
            <Link
              href={`/${lang}/contact`}
              className="bg-stone-800 text-white px-4 py-1 flex space-x-2 items-center"
            >
              <p>{about.contactButtonText}</p>
              <ArrowRight className="w-5" />
            </Link>
          </div>
          <Image src={skyscraper} alt="skyscraper" className="w-1/3" />
        </div>
        <h4 className="text-4xl font-bold text-stone-500 mb-2">
          {services.title}
        </h4>
        <p className="text-stone-800 text-4xl font-bold mb-4">
          {services.subtitle}
        </p>
        <div className="h-1.5 w-20 bg-stone-800 mb-8" />
        <div className="grid grid-cols-3 gap-24 mb-24">
          <div />
          <Service
            service={services.servicesList[0]}
            icon={<PencilLine className="w-64" />}
          />
          <Service
            service={services.servicesList[1]}
            icon={<Binoculars className="w-64" />}
          />
        </div>
        <div className="w-full bg-stone-200 h-[1px] mb-24" />
        <div className="grid grid-cols-3 gap-24 mb-24">
          <Service
            service={services.servicesList[2]}
            icon={<CodesandboxLogo className="w-56" />}
          />
          <Service
            service={services.servicesList[3]}
            icon={<IdentificationCard className="w-56" />}
          />
          <div />
        </div>
        <div className="w-full bg-stone-200 h-[1px] mb-24" />
        <div className="grid grid-cols-3 gap-24 mb-48">
          <div />
          <Service
            service={services.servicesList[4]}
            icon={<Cube className="w-60" />}
          />
          <Service
            service={services.servicesList[5]}
            icon={<Warehouse className="w-60" />}
          />
        </div>
        <h4 className="text-4xl font-bold text-stone-500 mb-2">
          {selectedProjects.title}
        </h4>
        <div className="grid grid-cols-3">
          <div className="flex flex-col">
            <div className="flex items-center space-x-6 mb-8">
              <div className="h-1.5 w-12 bg-stone-800" />
              <p className="text-stone-800 text-3xl font-bold">
                {selectedProjects.subtitle}
              </p>
            </div>
            <p className="mb-8">{selectedProjects.decsription}</p>
            <Link
              href={`/${lang}/projects`}
              className="bg-stone-800 text-white px-4 py-1 flex space-x-2 items-center w-fit mb-20"
            >
              <p>{selectedProjects.buttonText}</p>
              <ArrowRight className="w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
