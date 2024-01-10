import footerBackground from "/public/images/footer-bg.webp";
import logo from "/public/images/logo.svg";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import HorizontalRule from "../_atoms/HorizontalRule";

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
      <div className="grid grid-cols-1 gap-16 py-16 text-white md:grid-cols-3">
        <div>
          <Image src={logo} width={260} alt="logo" className="h-auto mb-4" />
          <p className="text-xl">
            <span className="font-semibold">OMF</span> |{" "}
            <span className="font-medium">structural solutions</span>
          </p>
        </div>
        <div>
          <p className="text-xl font-semibold uppercase mb-7">
            {footer.location.title}
          </p>
          {footer.location.countries.map((country) => (
            <CountryInfo key={country.name} lang={lang} {...country} />
          ))}
        </div>
        <div>
          <p className="text-xl font-semibold uppercase mb-7">
            {footer.contact.title}
          </p>
          <div className="font-open">
            <p className="font-bold text-lg mb-0.5">{footer.contact.email}</p>
            <a href="mailto:info@omf.hr">info@omf.hr</a>
            <p className="font-bold text-lg mb-0.5 mt-5">
              {footer.contact.office}
            </p>
            <a href="tel:+3854586698">+385 458 6698</a>
          </div>
          <SocialMediaIcons isHoverable={false} />
        </div>
      </div>
      <HorizontalRule className="mb-6 bg-stone-800" />
      <BottomNavigation lang={lang} navigation={navigation} />
    </footer>
  );
}
