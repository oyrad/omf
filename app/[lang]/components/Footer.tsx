import footerBackground from "/public/footer-bg.webp";
import logo from "/public/logo.svg";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import HorizontalRule from "./HorizontalRule";

import Image from "next/image";
import CountryInfo from "./CountryInfo";

import BottomNavigation from "./BottomNavigation";
import SocialMediaIcons from "./SocialMediaIcons";

export default async function Footer({ lang }: { lang: Locale }) {
  const { navigation, footer } = await getDictionary(lang);

  return (
    <footer
      className="px-44"
      style={{
        backgroundImage: `url(${footerBackground.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="grid grid-cols-3 gap-16 pt-20 text-white pb-20">
        <div>
          <Image
            src={logo}
            width={260}
            height={260}
            alt="logo"
            className="mb-4"
          />
          <p className="text-xl">
            <span className="font-semibold">OMF</span> |{" "}
            <span className="font-medium">structural solutions</span>
          </p>
        </div>
        <div>
          <p className="uppercase font-semibold mb-7 text-xl">
            {footer.location.title}
          </p>
          {footer.location.countries.map((country) => (
            <CountryInfo key={country.name} lang={lang} {...country} />
          ))}
        </div>
        <div>
          <p className="uppercase font-semibold mb-7 text-xl">
            {footer.contact.title}
          </p>
          <p className="font-bold text-lg mb-0.5">{footer.contact.email}</p>
          <a href="mailto:info@omf.hr">info@omf.hr</a>
          <p className="font-bold text-lg mb-0.5 mt-5">
            {footer.contact.office}
          </p>
          <a href="tel:+3854586698">+385 458 6698</a>
          <SocialMediaIcons />
        </div>
      </div>
      <HorizontalRule className="bg-stone-800 mb-6" />
      <BottomNavigation lang={lang} navigation={navigation} />
    </footer>
  );
}
