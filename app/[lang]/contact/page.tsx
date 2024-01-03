import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import ContactForm from "./components/ContactForm";
import Header from "../components/Header";
import CountryInfo from "../components/CountryInfo";

import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";

export default async function Contact({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page, navigation, footer } = await getDictionary(lang);
  const { contact } = page;
  return (
    <>
      <Header lang={lang} navigation={navigation} />
      <div className="px-48 mt-16">
        <h4 className="text-4xl font-bold text-stone-500 mb-2">
          {contact.title}
        </h4>
        <div className="flex items-center space-x-4 mb-8">
          <div className="h-1.5 w-10 bg-stone-800" />
          <p className="text-stone-800 text-3xl font-bold">
            {contact.subtitle}
          </p>
        </div>
        <div className="flex justify-between space-x-16">
          <div className="w-1/2">
            <p className="mb-8">{contact.message}</p>
            <ContactForm formText={contact.form} />
          </div>
          <div className="w-[1px] h-[30rem] bg-stone-300" />
          <div className="flex flex-col w-1/2">
            <div className="text-stone-800 flex">
              <div className="w-1/2">
                <p className="font-bold text-xl">E-mail</p>
                <div className="h-1 w-14 bg-stone-800 mb-6" />
                <p className="font-bold">{contact.info}</p>
                <p className="text-sm mb-6">info@omf.hr</p>
                <p className="font-bold">Filip Omazić, CEO</p>
                <p className="text-sm mb-12">filip@omf.hr</p>
              </div>
              <div className="w-1/2">
                <p className="font-bold text-xl">{contact.phone}</p>
                <div className="h-1 w-14 bg-stone-800 mb-6" />
                <p className="font-bold">{contact.office}</p>
                <p className="text-sm mb-6">+385 458 6698</p>
              </div>
            </div>
            <div className="mb-6">
              <p className="font-bold text-xl">{contact.locations}</p>
              <div className="h-1 w-14 bg-stone-800 mb-6" />
              {footer.location.countries.map((country) => (
                <CountryInfo
                  key={country.name}
                  lang={lang}
                  itemClassName="text-sm"
                  {...country}
                />
              ))}
            </div>
            <div className="mt-5 flex space-x-6">
              <a
                href="https://www.linkedin.com/company/omf-hr/"
                target="_blank"
              >
                <LinkedinLogo weight="fill" className="w-8" />
              </a>
              <a href="#" target="_blank">
                <FacebookLogo weight="fill" className="w-8" />
              </a>
              <a href="https://www.instagram.com/omf.hr/" target="_blank">
                <InstagramLogo weight="fill" className="w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
