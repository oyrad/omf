import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import logo from "/public/logo.svg";
import backgroundImage from "/public/bg.webp";
import skyscraper from "/public/skyscraper.webp";
import sectionTwo from "/public/section-photo-1.webp";
import sectionOne from "/public/section-photo-2.webp";
import sectionThree from "/public/section-photo-3.webp";
import Link from "next/link";
import ArrowDown from "./components/ArrowDown";
import Header from "./components/Header";

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
import HorizontalRule from "./components/HorizontalRule";
import FixedHeader from "./components/FixedHeader";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { navigation, page } = await getDictionary(lang);
  const { about, services, selectedProjects } = page.home;

  return (
    <>
      <div
        className="flex flex-col items-center justify-between h-screen text-white mb-32"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
        }}
      >
        <FixedHeader lang={lang} navigation={navigation} />
        <Header lang={lang} navigation={navigation} />
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={logo}
            width={400}
            height={400}
            alt="logo"
            className="mb-8"
          />
          <h2 className="text-3xl font-medium mb-1">{page.home.heroTitle}</h2>
          <h3 className="text-xl">{page.home.heroSubtitle}</h3>
        </div>
        <ArrowDown />
      </div>
      <div className="px-44">
        <h4 className="text-4xl font-bold text-stone-500 mb-2">
          {about.title}
        </h4>
        <div className="flex items-center space-x-6 mb-10">
          <div className="h-1.5 w-8 bg-stone-800" />
          <p className="text-stone-800 text-3xl font-bold">{about.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 gap-16 mb-48">
          <div className="flex flex-col items-start space-y-8 text-stone-800 font-open text-base">
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
              className="bg-stone-800 hover:bg-stone-500 transition-all text-white px-4 py-1 flex space-x-2 items-center"
            >
              <p>{about.contactButtonText}</p>
              <ArrowRight className="w-5" />
            </Link>
          </div>
          <Image src={skyscraper} alt="skyscraper" />
        </div>
        <div className="-mb-20">
          <h4 className="text-4xl font-bold text-stone-500 mb-2">
            {services.title}
          </h4>
          <p className="text-stone-800 text-4xl font-bold mb-4">
            {services.subtitle}
          </p>
          <div className="h-1.5 w-20 bg-stone-800 mb-8" />
        </div>
        <div className="grid grid-cols-3 gap-16 mb-24 font-open">
          <Image
            src={sectionTwo}
            alt="section photo 1"
            className="w-96 -z-50"
          />
          <Service
            service={services.servicesList[0]}
            icon={<PencilLine className="w-72" />}
          />
          <Service
            service={services.servicesList[1]}
            icon={<Binoculars className="w-72" />}
          />
        </div>
        <HorizontalRule />
        <div className="grid grid-cols-3 gap-16 mb-24 font-open">
          <Service
            service={services.servicesList[2]}
            icon={<CodesandboxLogo className="w-60" />}
          />
          <Service
            service={services.servicesList[3]}
            icon={<IdentificationCard className="w-60" />}
          />
          <Image
            src={sectionOne}
            alt="section photo 2"
            className="w-96 justify-self-center"
          />
        </div>
        <HorizontalRule />
        <div className="grid grid-cols-3 gap-16 mb-48 font-open">
          <Image
            src={sectionThree}
            alt="section photo 3"
            className="w-96 justify-self-center"
          />
          <Service
            service={services.servicesList[4]}
            icon={<Cube className="w-64" />}
          />
          <Service
            service={services.servicesList[5]}
            icon={<Warehouse className="w-64" />}
          />
        </div>
        <h4 className="text-4xl font-bold text-stone-500 mb-2">
          {selectedProjects.title}
        </h4>
        <div className="grid grid-cols-3 mb-20">
          <div className="flex flex-col">
            <div className="flex items-center space-x-6 mb-8">
              <div className="h-1.5 w-12 bg-stone-800" />
              <p className="text-stone-800 text-3xl font-bold">
                {selectedProjects.subtitle}
              </p>
            </div>
            <p className="mb-8 font-open text-stone-800">
              {selectedProjects.decsription}
            </p>
            <Link
              href={`/${lang}/projects`}
              className="bg-stone-800 hover:bg-stone-500 transition-all text-white px-4 py-1 flex space-x-2 items-center w-fit mb-20"
            >
              <p className="font-open">{selectedProjects.buttonText}</p>
              <ArrowRight className="w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
