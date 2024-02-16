"use client";

import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import { useEffect, useState } from "react";

import {
  ArrowRight,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";
import { ProjectDetails, ProjectTextData } from "@/types/types";

type ProjectProps = {
  lang: Locale;
  projectDetails: ProjectDetails;
};

export default function Project({ lang, projectDetails }: ProjectProps) {
  const [isArrowVisible, setIsArrowVisible] = useState(false);
  const [projectTextData, setProjectTextData] = useState<ProjectTextData>();
  const [projectTitleClassNames, setProjectTitleClassNames] = useState(
    "font-semibold mr-12"
  );

  useEffect(() => {
    if (lang === "en") {
      setProjectTextData(projectDetails.fields.en);
    } else {
      setProjectTextData(projectDetails.fields.hr);
    }
  }, [lang, projectDetails.fields.en, projectDetails.fields.hr]);

  return (
    <Link
      href={`/${lang}/projects/${projectDetails.fields.slug}`}
      onMouseEnter={() => {
        setIsArrowVisible(true);
        setProjectTitleClassNames("font-semibold mr-4");
      }}
      onMouseLeave={() => {
        setIsArrowVisible(false);
        setProjectTitleClassNames("font-semibold mr-12");
      }}
    >
      <Image
        src={`https:${projectDetails.fields.featuredImage.fields.file.url}`}
        alt={projectDetails.fields.featuredImage.fields.title}
        height={600}
        width={600}
        className="mb-2"
      />
      <div className="flex items-start justify-between">
        <div>
          <p className={projectTitleClassNames}>
            {projectTextData?.fields.title}
          </p>
          <p className="text-sm text-stone-400">
            {projectTextData?.fields.type}
          </p>
        </div>
        {isArrowVisible && <ArrowRight className="w-8 h-8 p-1 bg-stone-200" />}
      </div>
    </Link>
  );
}
