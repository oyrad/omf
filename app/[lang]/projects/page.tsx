import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Header from "../../_components/Header";
import SocialMediaIcons from "../../_components/SocialMediaIcons";
import { client } from "@/contentful";
import Project from "./_components/Project";
import Title from "@/app/_atoms/Title";
import Subtitle from "@/app/_atoms/Subtitle";
import FixedHeader from "@/app/_components/FixedHeader";

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
      <FixedHeader lang={lang} navigation={navigation} />
      <Header lang={lang} navigation={navigation} />
      <div className="px-8 mt-16 md:px-16 xl:px-44">
        <div className="flex flex-col justify-between mb-12 lg:items-end lg:flex-row">
          <div>
            <Title text={projects.title} />
            <div className="flex items-center space-x-4">
              <div className="h-1 lg:h-1.5 w-10 bg-stone-800" />
              <Subtitle text={projects.subtitle} />
            </div>
          </div>
          <SocialMediaIcons />
        </div>
        <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2 lg:grid-cols-3">
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
