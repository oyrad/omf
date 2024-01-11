"use client";

import { Locale } from "@/i18n.config";
import Project from "../../projects/_components/Project";
import Button from "@/app/_atoms/Button";
import AnimatedContainer from "@/app/_atoms/AnimatedContainer";
import { HomeDictionary, ProjectDetails } from "@/types/types";

type SelectedProjectsProps = {
  lang: Locale;
  projects: any;
  selectedProjects: HomeDictionary["selectedProjects"];
};

export default function SelectedProjects({
  lang,
  projects,
  selectedProjects,
}: SelectedProjectsProps) {
  return (
    <AnimatedContainer className="grid grid-cols-1 gap-10 mb-20 md:grid-cols-3">
      <div className="flex flex-col">
        <h4 className="mb-2 text-4xl font-bold text-stone-500">
          {selectedProjects.title}
        </h4>
        <div className="flex items-center mb-8 space-x-6">
          <div className="h-1.5 w-12 bg-stone-800" />
          <p className="text-3xl font-bold text-stone-800">
            {selectedProjects.subtitle}
          </p>
        </div>
        <p className="mb-8 font-open text-stone-800">
          {selectedProjects.decsription}
        </p>
        <Button
          link={`/${lang}/projects`}
          buttonText={selectedProjects.buttonText}
        />
      </div>
      {projects.length > 0 &&
        projects.map((project: ProjectDetails) => (
          <Project projectDetails={project} lang={lang} />
        ))}
    </AnimatedContainer>
  );
}
