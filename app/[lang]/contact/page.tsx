import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import ContactForm from "./_components/ContactForm";
import Header from "../../_components/Header";
import CountryInfo from "../../_components/CountryInfo";
import SocialMediaIcons from "../../_components/SocialMediaIcons";
import contactBackground from "/public/images/contact.webp";

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
      <div
        className="mt-16 bg-right-bottom bg-no-repeat px-44"
        style={{
          backgroundImage: `url(${contactBackground.src})`,
        }}
      >
        <h4 className="mb-2 text-4xl font-bold text-stone-500">
          {contact.title}
        </h4>
        <div className="flex items-center mb-8 space-x-4">
          <div className="h-1.5 w-10 bg-stone-800" />
          <p className="text-3xl font-bold text-stone-800">
            {contact.subtitle}
          </p>
        </div>
        <div className="flex justify-between space-x-16">
          <div className="w-1/2 font-open">
            <p className="mb-8">{contact.message}</p>
            <ContactForm formText={contact.form} />
          </div>
          <div className="w-[1px] h-[30rem] bg-stone-300" />
          <div className="flex flex-col w-1/2">
            <div className="flex text-stone-800">
              <div className="w-1/2">
                <p className="text-xl font-bold">E-mail</p>
                <div className="h-1 mb-6 w-14 bg-stone-800" />
                <div className="font-open">
                  <p className="font-bold">{contact.info}</p>
                  <p className="mb-6 text-sm">info@omf.hr</p>
                  <p className="font-bold">Filip Omazić, CEO</p>
                  <p className="mb-12 text-sm">filip@omf.hr</p>
                </div>
              </div>
              <div className="w-1/2">
                <div className="font-open">
                  <p className="text-xl font-bold">{contact.phone}</p>
                  <div className="h-1 mb-6 w-14 bg-stone-800" />
                  <p className="font-bold">{contact.office}</p>
                  <p className="mb-6 text-sm">+385 458 6698</p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-xl font-bold">{contact.locations}</p>
              <div className="h-1 mb-6 w-14 bg-stone-800" />
              {footer.location.countries.map((country) => (
                <CountryInfo
                  key={country.name}
                  lang={lang}
                  itemClassName="text-sm"
                  {...country}
                />
              ))}
            </div>
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </>
  );
}
