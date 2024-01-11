import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Header from "../../_components/Header";
import SocialMediaIcons from "../../_components/SocialMediaIcons";
import { client } from "@/contentful";
import Project from "./_components/Project";

export default async function Projects({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { navigation, page } = await getDictionary(lang);
  const { projects } = page;

  const { items } = await client.getEntries({ content_type: "project" });

  return (
    <>
      <Header lang={lang} navigation={navigation} />
      <div className="px-8 mt-16 md:px-44">
        <div className="flex flex-col justify-between mb-12 md:items-end md:flex-row">
          <div>
            <h4 className="mb-2 text-4xl font-bold text-stone-500">
              {projects.title}
            </h4>
            <div className="flex items-center space-x-4">
              <div className="h-1.5 w-10 bg-stone-800" />
              <p className="text-3xl font-bold text-stone-800">
                {projects.subtitle}
              </p>
            </div>
          </div>
          <SocialMediaIcons />
        </div>
        <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-3">
          {items.length > 0 &&
            items.map((project: any) => (
              <Project
                key={project.fields.slug}
                projectDetails={project}
                lang={lang}
              />
            ))}
        </div>
      </div>
    </>
  );
}
