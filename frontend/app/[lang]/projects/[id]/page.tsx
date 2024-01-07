import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Header from "../../../_components/Header";
import Link from "next/link";
import Image from "next/image";
import projectPhoto from "/public/project-house.webp";

import {
  ArrowLeft,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";
import ImageCarousel from "./_components/ImageCarousel";
import ProjectInfo from "./_components/ProjectInfo";

const projectMock = {
  hr: {
    title: "Vila Bartol",
    type: "Kuća za odmor",
    function:
      "Glavni projekt arhitekture i konstrukcije, Nadzor, Vođenje projekta",
    participants: "Scorpus7, MIPA",
    description:
      "Villa za odmor smještena je u Dalmaciji te osim osnovnog zatvorenog prostora građevina ima spektar sadržaja koje nudi, kao što je wellness & spa zona koja uključuje vanjski i unutarnji grijani bazen. Budući da je građevina smještena na zatečenu konfiguraciju terena velikog nagiba, to joj pruža izniman pogled prema Dalmatinskoj obali iz svake točke građevine.",
  },
  en: {
    title: "Villa Bartol",
    type: "House type",
    function: "Project function description",
    participants: "Scorpus7, MIPA",
    description: "Description in english.",
  },
};

export default async function ProjectDetails({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { navigation, page } = await getDictionary(lang);
  const { projects } = page;

  return (
    <>
      <Header lang={lang} navigation={navigation} />
      <div className="px-44 mt-16 font-open">
        <div className="flex items-center space-x-4 text-stone-800 mb-12">
          <Link href={`/${lang}/projects`}>
            <ArrowLeft className="w-10 hover:bg-stone-200 transition-all" />
          </Link>
          <p className="text-3xl font-bold">
            {lang === "hr" ? projectMock.hr.title : projectMock.en.title}
          </p>
        </div>
        <div className="flex space-x-8">
          <ProjectInfo
            projects={projects}
            projectDetails={lang === "hr" ? projectMock.hr : projectMock.en}
          />
          <Image
            src={projectPhoto}
            alt="project photo"
            width={600}
            height={600}
            className="w-1/2 pl-20"
          />
        </div>
        <ImageCarousel />
      </div>
    </>
  );
}
