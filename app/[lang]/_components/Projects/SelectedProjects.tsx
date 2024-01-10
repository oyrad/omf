"use client";

import { Locale } from "@/i18n.config";
import Project from "../../projects/_components/Project";
import Button from "@/app/_atoms/Button";
import AnimatedContainer from "@/app/_atoms/AnimatedContainer";
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PrevSlideIcon from "./PrevSlideIcon";
import NextSlideIcon from "./NextSlideIcon";
import { HomeDictionary, ProjectDetails } from "@/types/types";

import "swiper/css";
import "swiper/css/pagination";

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
    <AnimatedContainer className="mb-20 grid grid-cols-3 gap-10">
      <div className="flex flex-col">
        <h4 className="text-4xl font-bold text-stone-500 mb-2">
          {selectedProjects.title}
        </h4>
        <div className="flex items-center space-x-6 mb-8">
          <div className="h-1.5 w-12 bg-stone-800" />
          <p className="text-stone-800 text-3xl font-bold">
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
      <div className="col-span-2">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={25}
          slidesPerView={2}
          pagination={{
            clickable: true,
          }}
          rewind={true}
        >
          {projects.length > 2 && (
            <div className="flex justify-between mt-4">
              <PrevSlideIcon />
              <NextSlideIcon />
            </div>
          )}
          {projects.length > 0 &&
            projects.map((project: ProjectDetails) => (
              <SwiperSlide key={project.fields.slug}>
                <Project projectDetails={project} lang={lang} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </AnimatedContainer>
  );
}
