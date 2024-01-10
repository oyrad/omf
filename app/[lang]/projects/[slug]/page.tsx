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
      <div className="mt-16 px-44 font-open">
        <ProjectInfo lang={lang} projects={projects} />
      </div>
    </>
  );
}