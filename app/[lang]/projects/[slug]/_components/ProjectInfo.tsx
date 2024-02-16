"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import ImageCarousel from "./ImageCarousel";
import {
  ArrowLeft,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";
import { createClient } from "contentful";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

type ProjectInfoProps = {
  lang: Locale;
  projects: any;
};

export default function ProjectInfo({ lang, projects }: ProjectInfoProps) {
  const [selectedImage, setSelectedImage] = useState<number>();
  const [projectDetails, setProjectDetails] = useState<any>();
  const [projectTextData, setProjectTextData] = useState<any>();
  const [isNotFound, setIsNotFound] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    async function getProjectDetails() {
      const { items } = await client.getEntries({
        content_type: "project",
        "fields.slug": slug,
      });

      if (items.length === 0) {
        setIsNotFound(true);
        return;
      }

      setProjectDetails(items[0]);

      if (lang === "hr") {
        setProjectTextData(items[0].fields.hr);
      } else {
        setProjectTextData(items[0].fields.en);
      }
    }

    if (slug) {
      getProjectDetails();
    }
  }, [slug, lang]);

  if (isNotFound) {
    return <div>Traženi projekt nije pronađen.</div>;
  }

  if (!projectDetails) {
    return <div>Učitavanje...</div>;
  }

  const { fields } = projectDetails;

  return (
    <>
      <div className="flex items-start md:items-center mb-12 space-x-4 text-stone-800">
        <Link href={`/${lang}/projects`}>
          <ArrowLeft className="w-10 transition-all hover:bg-stone-200" />
        </Link>
        <p className="text-3xl font-bold font-montserrat">
          {projectTextData.fields.title}
        </p>
      </div>
      <div className="flex flex-col-reverse lg:space-x-16 lg:flex-row">
        <div className="flex-1">
          <ul className="mb-4 space-y-4 list-disc list-outside lg:list-inside text-stone-800">
            <li>
              <span className="mr-2 font-bold">{projects.projectName}</span>
              {projectTextData.fields.title}
            </li>
            <li>
              <span className="mr-2 font-bold">{projects.projectType}</span>
              {projectTextData.fields.type}
            </li>
            {projectTextData.fields.location !== undefined && (
              <li>
                <span className="mr-2 font-bold">
                  {projects.projectLocation}
                </span>
                {projectTextData.fields.location}
              </li>
            )}
            <li>
              <span className="mr-2 font-bold">{projects.projectFunction}</span>
              {projectTextData.fields.function}
            </li>
            {projectTextData.fields.participants !== undefined && (
              <li>
                <span className="mr-2 font-bold">
                  {projects.projectParticipants}
                </span>
                {projectTextData.fields.participants}
              </li>
            )}
          </ul>
          <p className="text-sm text-stone-600">
            {projectTextData.fields.description}
          </p>
        </div>
        <div className="flex-1 mb-12 lg:mb-0">
          <Image
            src={`https:${fields.featuredImage.fields.file.url}`}
            alt={fields.featuredImage.fields.title}
            width={600}
            height={600}
            onClick={() => {
              document.body.style.overflow = "hidden";
              setSelectedImage(0);
            }}
            className="object-cover w-full transition-all cursor-pointer hover:transform hover:scale-105"
          />
        </div>
      </div>
      {fields.featuredImage && (
        <ImageCarousel
          featuredImage={fields.featuredImage}
          images={fields.images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </>
  );
}
