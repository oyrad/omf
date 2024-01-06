"use client";

import { Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import Project from "../../projects/_components/Project";
import projectPhoto from "/public/project-house.webp";
import { Locale } from "@/i18n.config";

import PrevSlideIcon from "./PrevSlideIcon";
import NextSlideIcon from "./NextSlideIcon";

export default function ProjectsSwiper({ lang }: { lang: Locale }) {
  return (
    <Swiper
      modules={[Pagination, A11y]}
      spaceBetween={25}
      slidesPerView={2}
      pagination={{
        clickable: true,
      }}
      rewind={true}
    >
      <div className="flex justify-between mt-4">
        <PrevSlideIcon />
        <NextSlideIcon />
      </div>
      <SwiperSlide>
        <Project
          image={projectPhoto.src}
          title="Vila 1"
          description="opis vile na slici"
          lang={lang}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Project
          image={projectPhoto.src}
          title="Vila 2"
          description="opis vile na slici"
          lang={lang}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Project
          image={projectPhoto.src}
          title="Vila 3"
          description="opis vile na slici"
          lang={lang}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Project
          image={projectPhoto.src}
          title="Vila 4"
          description="opis vile na slici"
          lang={lang}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Project
          image={projectPhoto.src}
          title="Vila 5"
          description="opis vile na slici"
          lang={lang}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Project
          image={projectPhoto.src}
          title="Vila 6"
          description="opis vile na slici"
          lang={lang}
        />
      </SwiperSlide>
    </Swiper>
  );
}
