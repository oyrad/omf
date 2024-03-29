import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import logo from "/public/images/logo.svg";
import backgroundImage from "/public/images/bg.webp";
import sectionTwo from "/public/images/section-photo-1.webp";
import sectionOne from "/public/images/section-photo-2.webp";
import sectionThree from "/public/images/section-photo-3.webp";
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
import { client } from "@/contentful";
import ServicesMobileContainer from "./_components/Services/ServicesMobileContainer";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { navigation, page } = await getDictionary(lang);
  const { about, services, selectedProjects } = page.home;

  const { items } = await client.getEntries({
    content_type: "project",
    "fields.featured": true,
  });

  return (
    <>
      <div
        className="flex flex-col items-center justify-between mb-16 text-white lg:mb-32 h-svh lg:h-screen"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
        }}
      >
        <FixedHeader lang={lang} navigation={navigation} />
        <Header lang={lang} navigation={navigation} />
        <div className="flex flex-col items-center px-10 space-y-2 lg:px-0">
          <Image
            src={logo}
            width={400}
            alt="logo"
            className="h-auto mb-4 md:mb-6 lg:mb-8 w-72 md:w-auto"
            priority
          />
          <h2 className="mb-1 text-xl font-medium text-center md:text-2xl lg:text-3xl">
            {page.home.heroTitle}
          </h2>
          <h3 className="hidden text-xl lg:block">{page.home.heroSubtitle}</h3>
        </div>
        <AnimatedArrowDown />
      </div>
      <AboutUs lang={lang} about={about} />
      <div className="hidden lg:block px-16 xl:px-44">
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
        />
      </div>
      <ServicesMobileContainer services={services} />
      <SelectedProjects
        lang={lang}
        projects={items}
        selectedProjects={selectedProjects}
      />
    </>
  );
}
