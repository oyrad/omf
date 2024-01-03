import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Header from "../components/Header";

export default async function Projects({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { navigation, page } = await getDictionary(lang);
  return <Header lang={lang} navigation={navigation} />;
}
