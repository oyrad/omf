import React from "react";

type ServiceProps = {
  service: {
    title: string;
    description: string;
  };
  icon: React.ReactNode;
};

export default function Service({ service, icon }: ServiceProps) {
  return (
    <div className="flex items-start space-x-4">
      {icon}
      <div>
        <p className="font-bold text-stone-800 mb-4">{service.title}</p>
        <p className="text-sm text-stone-600">{service.description}</p>
      </div>
    </div>
  );
}
