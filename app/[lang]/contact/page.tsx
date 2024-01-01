import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import ContactForm from "./components/ContactForm";

export default async function Contact({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <div className="px-48 mt-16">
      <h4 className="text-4xl font-bold text-stone-500 mb-2">Kontakt</h4>
      <div className="flex items-center space-x-4 mb-8">
        <div className="h-1.5 w-10 bg-stone-800" />
        <p className="text-stone-800 text-3xl font-bold">
          pošaljite izravan upit
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <p className="mb-8">
            Vaša poruka će biti proslijeđena našem timu koji će odgovoriti u
            najkraćem mogućem roku.
          </p>
          <ContactForm />
        </div>
        <div>socials</div>
      </div>
    </div>
  );
}
