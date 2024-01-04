import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Header from "../../components/Header";
import Link from "next/link";
import Image from "next/image";
import projectPhoto from "/public/project-house.webp";

import {
  ArrowLeft,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";

const projectMock = {
  title: "Villa Bartol",
  type: "Kuća za odmor",
  function:
    "Glavni projekt arhitekture i konstrukcije, Nadzor, Vođenje projekta",
  participants: "Scorpus7, MIPA",
  description:
    "Villa za odmor smještena je u Dalmaciji te osim osnovnog zatvorenog prostora građevina ima spektar sadržaja koje nudi, kao što je wellness & spa zona koja uključuje vanjski i unutarnji grijani bazen. Budući da je građevina smještena na zatečenu konfiguraciju terena velikog nagiba, to joj pruža izniman pogled prema Dalmatinskoj obali iz svake točke građevine.",
};

export default async function ProjectDetails({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { navigation } = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} navigation={navigation} />
      <div className="px-44 mt-16 font-open">
        <div className="flex items-center space-x-4 text-stone-800 mb-12">
          <Link href={`/${lang}/projects`}>
            <ArrowLeft className="w-10 hover:bg-stone-200 transition-all" />
          </Link>
          <p className="text-3xl font-bold">{projectMock.title}</p>
        </div>
        <div className="flex space-x-8">
          <div className="w-1/2">
            <ul className="space-y-4 text-stone-800 mb-4 list-disc">
              <li>
                <span className="font-bold mr-2">Naziv:</span>{" "}
                {projectMock.title}
              </li>
              <li>
                <span className="font-bold mr-2">Vrsta projekta:</span>
                {projectMock.type}
              </li>
              <li>
                <span className="font-bold mr-2">Uloga:</span>
                {projectMock.function}
              </li>
              <li>
                <span className="font-bold mr-2">
                  Sudionici u projektiranju:
                </span>
                {projectMock.participants}
              </li>
            </ul>
            <p className="text-sm text-stone-600">{projectMock.description}</p>
          </div>
          <Image
            src={projectPhoto}
            alt={projectMock.title}
            width={600}
            height={600}
            className="w-1/2 pl-20"
          />
        </div>
        <div className="grid grid-cols-3 gap-8 my-20">
          <Image
            src={projectPhoto}
            alt={projectMock.title}
            width={600}
            height={600}
          />
          <Image
            src={projectPhoto}
            alt={projectMock.title}
            width={600}
            height={600}
          />
          <Image
            src={projectPhoto}
            alt={projectMock.title}
            width={600}
            height={600}
          />
          <Image
            src={projectPhoto}
            alt={projectMock.title}
            width={600}
            height={600}
          />
          <Image
            src={projectPhoto}
            alt={projectMock.title}
            width={600}
            height={600}
          />
          <Image
            src={projectPhoto}
            alt={projectMock.title}
            width={600}
            height={600}
          />
        </div>
      </div>
    </>
  );
}
