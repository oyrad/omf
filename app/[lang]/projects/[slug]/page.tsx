import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Header from "../../../_components/Header";
import ProjectInfo from "./_components/ProjectInfo";

export default async function ProjectDetails({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { navigation, page } = await getDictionary(lang);
  const { projects } = page;

  return (
    <>
      <Header lang={lang} navigation={navigation} />
      <div className="px-8 mt-12 md:mt-16 md:px-44 font-open">
        <ProjectInfo lang={lang} projects={projects} />
      </div>
    </>
  );
}
