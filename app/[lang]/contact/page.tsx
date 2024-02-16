import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import ContactForm from "./_components/ContactForm";
import Header from "../../_components/Header";
import CountryInfo from "../../_components/CountryInfo";
import SocialMediaIcons from "../../_components/SocialMediaIcons";
import Title from "@/app/_atoms/Title";
import Subtitle from "@/app/_atoms/Subtitle";
import FixedHeader from "@/app/_components/FixedHeader";

export default async function Contact({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page, navigation, footer } = await getDictionary(lang);
  const { contact } = page;
  return (
    <>
      <FixedHeader lang={lang} navigation={navigation} />
      <Header lang={lang} navigation={navigation} />
      <div className="px-8 mt-16 md:px-16 xl:px-44 contact-bg">
        <div className="flex flex-col justify-between mb-12 lg:items-end lg:flex-row">
          <div>
            <Title text={contact.title} />
            <div className="flex items-center space-x-4">
              <div className="h-1 lg:h-1.5 w-10 bg-stone-800" />
              <Subtitle text={contact.subtitle} />
            </div>
          </div>
          <SocialMediaIcons />
        </div>
        <div className="flex flex-col justify-between pb-20 lg:pb-0 lg:space-x-16 lg:flex-row">
          <div className="lg:w-1/2 font-open">
            <ContactForm
              contactMessage={contact.message}
              formText={contact.form}
            />
          </div>
          <div className="w-[1px] h-[30rem] bg-stone-300 hidden lg:block" />
          <div className="flex flex-col lg:w-1/2">
            <div className="flex text-stone-800 mb-12">
              <div className="w-1/2">
                <p className="text-xl font-bold">E-mail</p>
                <div className="h-1 mb-6 w-14 bg-stone-800" />
                <div className="font-open flex flex-col gap-6">
                  <div>
                    <p className="font-bold">{contact.info}</p>
                    <a className="mb-6 text-sm" href="mailto:info@omf.hr">
                      info@omf.hr
                    </a>
                  </div>
                  <div>
                    <p className="font-bold">Filip Omazić, CEO</p>
                    <a className="mb-12 text-sm" href="mailto:filip@omf.hr">
                      filip@omf.hr
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
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
              {/* <div className="w-1/2">
                <div className="font-open">
                  <p className="text-xl font-bold">{contact.phone}</p>
                  <div className="h-1 mb-6 w-14 bg-stone-800" />
                  <p className="font-bold">{contact.office}</p>
                  <p className="mb-6 text-sm">+385 458 6698</p>
                </div>
              </div> */}
            </div>
            <div className="font-open flex flex-col gap-1">
              <p className="font-bold text-xl">{contact.teamInviteHeader}</p>
              <p>
                {contact.teamInviteDescription}
                <a
                  href="mailto:info@omf.hr"
                  className="ml-1 hover:underline text-blue-700"
                >
                  info@omf.hr
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
