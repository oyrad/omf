"use client";

import { HomeDictionary } from "@/types/types";
import ServiceMobile from "./ServiceMobile";
import { useState } from "react";
import bgImage from "/public/images/bg-services-mobile.png";
import Title from "../../../_atoms/Title";
import Subtitle from "../../../_atoms/Subtitle";

import {
  Binoculars,
  CodesandboxLogo,
  Cube,
  IdentificationCard,
  PencilLine,
  Warehouse,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";

const icons = [
  <PencilLine className="min-w-7 w-7" />,
  <Binoculars className="min-w-7 w-7" />,
  <CodesandboxLogo className="min-w-7 w-7" />,
  <IdentificationCard className="min-w-7 w-7" />,
  <Cube className="min-w-7 w-7" />,
  <Warehouse className="min-w-7 w-7" />,
];

type ServicesMobileProps = {
  services: HomeDictionary["services"];
};

export default function ServicesMobile({ services }: ServicesMobileProps) {
  const [expandedServiceId, setExpandedServiceId] = useState<number | null>(
    null
  );

  return (
    <div className="md:hidden mb-48">
      <div>
        <Title text={services.title} />
        <Subtitle text={services.subtitle} />
        <div className="h-1.5 w-20 bg-stone-800 mb-8 mt-4" />
      </div>
      <div className="flex flex-col gap-6">
        {services.servicesList.map((service, index) => (
          <ServiceMobile
            key={index}
            serviceId={index}
            title={service.title}
            description={service.description}
            expandedServiceId={expandedServiceId}
            setExpandedServiceId={setExpandedServiceId}
            icon={icons[index]}
            isLastService={index === services.servicesList.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
