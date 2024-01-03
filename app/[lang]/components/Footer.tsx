import footerBackground from "/public/footer-bg.png";
import logo from "/public/logo.svg";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import HorizontalRule from "./HorizontalRule";

import Image from "next/image";
import CountryInfo from "./CountryInfo";

import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";
import BottomNavigation from "./BottomNavigation";

export default async function Footer({ lang }: { lang: Locale }) {
  const { navigation, footer } = await getDictionary(lang);

  return (
    <div
      className="px-48"
      style={{
        backgroundImage: `url(${footerBackground.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="grid grid-cols-3 gap-20 pt-16 text-white mb-8">
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
          <div className="mt-5 flex space-x-6">
            <a href="https://www.linkedin.com/company/omf-hr/" target="_blank">
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
      <HorizontalRule className="bg-stone-800 mb-4" />
      <BottomNavigation lang={lang} navigation={navigation} />
    </div>
  );
}
