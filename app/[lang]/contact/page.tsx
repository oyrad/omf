import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Contact({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return <div />;
}
