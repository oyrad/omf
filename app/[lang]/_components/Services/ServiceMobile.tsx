"use client";

import Collapsible from "react-collapsible";
import { useEffect, useState } from "react";
import {
  CaretDown,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";

type ServiceMobileProps = {
  serviceId: number;
  title: string;
  description: string;
  expandedServiceId: number | null;
  setExpandedServiceId: (id: number | null) => void;
  icon: JSX.Element;
};

export default function ServiceMobile({
  serviceId,
  title,
  description,
  expandedServiceId,
  setExpandedServiceId,
  icon,
}: ServiceMobileProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (expandedServiceId === serviceId) setIsExpanded(true);
    else setIsExpanded(false);
  }, [expandedServiceId, serviceId]);

  return (
    <Collapsible
      open={isExpanded}
      onOpening={() => {
        setIsExpanded(true);
        setExpandedServiceId(serviceId);
      }}
      onClosing={() => setIsExpanded(false)}
      trigger={
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-4">
            {icon}
            <p className="font-semibold">{title}</p>
          </div>
          <CaretDown
            className={`min-w-6 w-6 transform transition-transform duration-300 ease-in-out ${
              isExpanded && "rotate-180"
            }`}
          />
        </div>
      }
      className="border border-gray-200 p-4 bg-white"
      openedClassName="border border-gray-200 p-4 bg-white"
      contentInnerClassName="pt-4"
      transitionTime={200}
    >
      <p>{description}</p>
    </Collapsible>
  );
}
