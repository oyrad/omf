import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import logo from "/public/logo.svg";
import backgroundImage from "/public/bg.webp";
import sectionTwo from "/public/section-photo-1.webp";
import sectionOne from "/public/section-photo-2.webp";
import sectionThree from "/public/section-photo-3.webp";
import Header from "../_components/Header";

import {
  Binoculars,
  CodesandboxLogo,
  Cube,
  IdentificationCard,
  PencilLine,
  Warehouse,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";
import HorizontalRule from "../_atoms/HorizontalRule";
import FixedHeader from "../_components/FixedHeader";
import AboutUs from "./_components/AboutUs";
import ServicesContainer from "./_components/Services/ServicesContainer";
import SelectedProjects from "./_components/Projects/SelectedProjects";
import AnimatedArrowDown from "../_atoms/AnimatedArrowDown";

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
        <AnimatedArrowDown />
      </div>
      <div className="px-44">
        <AboutUs lang={lang} about={about} />
        <ServicesContainer
          firstService={services.servicesList[0]}
          secondService={services.servicesList[1]}
          firstIcon={<PencilLine className="w-72" />}
          secondIcon={<Binoculars className="w-72" />}
          isimageFirst={true}
          isHeaderVisible={true}
          image={sectionTwo}
          services={services}
        />
        <HorizontalRule />
        <ServicesContainer
          firstService={services.servicesList[2]}
          secondService={services.servicesList[3]}
          firstIcon={<CodesandboxLogo className="w-60" />}
          secondIcon={<IdentificationCard className="w-60" />}
          isimageFirst={false}
          isHeaderVisible={false}
          image={sectionOne}
          services={services}
        />
        <HorizontalRule />
        <ServicesContainer
          firstService={services.servicesList[4]}
          secondService={services.servicesList[5]}
          firstIcon={<Cube className="w-64" />}
          secondIcon={<Warehouse className="w-64" />}
          isimageFirst={true}
          isHeaderVisible={false}
          image={sectionThree}
          services={services}
          additionalClass="mb-48"
        />
        <SelectedProjects lang={lang} selectedProjects={selectedProjects} />
      </div>
    </>
  );
}
