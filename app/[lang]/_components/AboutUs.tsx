import AnimatedContainer from "@/app/_atoms/AnimatedContainer";
import Image from "next/image";
import { Locale } from "@/i18n.config";
import skyscraper from "/public/images/skyscraper.webp";
import Button from "@/app/_atoms/Button";
import { HomeDictionary } from "@/types/types";
import Title from "@/app/_atoms/Title";
import Subtitle from "@/app/_atoms/Subtitle";

type AboutUsProps = {
  lang: Locale;
  about: HomeDictionary["about"];
};

export default function AboutUs({ lang, about }: AboutUsProps) {
  return (
    <AnimatedContainer className="px-8 md:px-44">
      <Title text={about.title} />
      <div className="flex items-center mb-10 space-x-6">
        <div className="h-1.5 w-8 bg-stone-800" />
        <Subtitle text={about.subtitle} />
      </div>
      <div className="grid grid-cols-1 gap-12 mb-48 md:grid-cols-2">
        <div className="flex flex-col items-start space-y-8 text-base text-stone-800 font-open">
          <p>
            {about.firstAboutParagraph}{" "}
            <span className="font-bold">
              {about.firstAboutParagraphBoldText}
            </span>{" "}
            {about.firstAboutParagraphRest}
          </p>
          <div className="flex space-x-4">
            <div className="w-12 h-18 bg-stone-300" />
            <p className="italic font-bold">{about.secondAboutParagraph}</p>
          </div>
          <p>{about.thirdAboutParagraph}</p>
          <p>{about.fourthAboutParagraph}</p>
          <Button
            link={`/${lang}/contact`}
            buttonText={about.contactButtonText}
          />
        </div>
        <Image
          src={skyscraper}
          alt="skyscraper"
          width={600}
          className="hidden justify-self-end md:block"
        />
      </div>
    </AnimatedContainer>
  );
}
