import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Header from "../components/Header";
import Project from "./components/Project";
import projectPhoto from "/public/project-house.png";

export default async function Projects({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { navigation, page } = await getDictionary(lang);
  const { projects } = page;
  return (
    <>
      <Header lang={lang} navigation={navigation} />
      <div className="px-48 mt-16">
        <h4 className="text-4xl font-bold text-stone-500 mb-2">
          {projects.title}
        </h4>
        <div className="flex items-center space-x-4 mb-12">
          <div className="h-1.5 w-10 bg-stone-800" />
          <p className="text-stone-800 text-3xl font-bold">
            {projects.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 mb-20">
          <Project
            image={projectPhoto.src}
            title="Vila template"
            description="opis vile na slici"
          />
          <Project
            image={projectPhoto.src}
            title="Vila template"
            description="opis vile na slici"
          />
          <Project
            image={projectPhoto.src}
            title="Vila template"
            description="opis vile na slici"
          />
          <Project
            image={projectPhoto.src}
            title="Vila template"
            description="opis vile na slici"
          />
          <Project
            image={projectPhoto.src}
            title="Vila template"
            description="opis vile na slici"
          />
          <Project
            image={projectPhoto.src}
            title="Vila template"
            description="opis vile na slici"
          />
          <Project
            image={projectPhoto.src}
            title="Vila template"
            description="opis vile na slici"
          />
          <Project
            image={projectPhoto.src}
            title="Vila template"
            description="opis vile na slici"
          />
          <Project
            image={projectPhoto.src}
            title="Vila template"
            description="opis vile na slici"
          />
        </div>
      </div>
    </>
  );
}
