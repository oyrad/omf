"use client";

import ProjectsSwiper from "./ProjectsSwiper";
import { Locale } from "@/i18n.config";
import Button from "@/app/_atoms/Button";
import { motion } from "framer-motion";

type SelectedProjectsProps = {
  lang: Locale;
  selectedProjects: any;
};

export default function SelectedProjects({
  lang,
  selectedProjects,
}: SelectedProjectsProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="mb-20 grid grid-cols-3 gap-10"
    >
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
        <ProjectsSwiper lang={lang} />
      </div>
    </motion.div>
  );
}
