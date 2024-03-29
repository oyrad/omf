"use client";

import Image, { StaticImageData } from "next/image";
import Service from "./Service";
import React from "react";
import AnimatedContainer from "@/app/_atoms/AnimatedContainer";
import { HomeDictionary } from "@/types/types";

type ServicesHeaderProps = {
  firstService: {
    title: string;
    description: string;
  };
  secondService: {
    title: string;
    description: string;
  };
  firstIcon: React.ReactNode;
  secondIcon: React.ReactNode;
  isimageFirst: boolean;
  isHeaderVisible: boolean;
  image: StaticImageData;
  services: HomeDictionary["services"];
};

export default function ServicesContainer({
  firstService,
  secondService,
  firstIcon,
  secondIcon,
  isimageFirst,
  isHeaderVisible,
  image,
  services,
}: ServicesHeaderProps) {
  return (
    <AnimatedContainer>
      {isHeaderVisible && (
        <div className="2xl:-mb-20">
          <h4 className="mb-2 text-4xl font-bold text-stone-500">
            {services.title}
          </h4>
          <p className="mb-4 text-4xl font-bold text-stone-800">
            {services.subtitle}
          </p>
          <div className="h-1.5 w-20 bg-stone-800 mb-8" />
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20 font-open">
        {isimageFirst && (
          <Image src={image} alt="section photo 1" className="w-96 -z-50" />
        )}
        <Service service={firstService} icon={firstIcon} />
        <Service service={secondService} icon={secondIcon} />
        {!isimageFirst && (
          <Image
            src={image}
            alt="section photo 1"
            className="w-96 -z-50 justify-self-end"
          />
        )}
      </div>
    </AnimatedContainer>
  );
}
