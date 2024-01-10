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
        <p className="mb-4 font-bold">{service.title}</p>
        <p className="text-sm">{service.description}</p>
      </div>
    </div>
  );
}
