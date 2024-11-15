"use client";

import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import { useEffect, useState } from "react";

import { ProjectDetails, ProjectTextData } from "@/types/types";

type ProjectProps = {
  lang: Locale;
  projectDetails: ProjectDetails;
};

export default function Project({ lang, projectDetails }: ProjectProps) {
  const [projectTextData, setProjectTextData] = useState<ProjectTextData>();

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
          <p className="font-semibold">{projectTextData?.fields.title}</p>
          <p className="text-sm text-stone-400">
            {projectTextData?.fields.type}
            {projectTextData?.fields.location &&
              `, ${projectTextData?.fields.location}`}
          </p>
        </div>
      </div>
    </Link>
  );
}
