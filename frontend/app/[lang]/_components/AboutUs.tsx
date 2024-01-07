import AnimatedContainer from "@/app/_atoms/AnimatedContainer";
import Image from "next/image";
import { Locale } from "@/i18n.config";
import skyscraper from "/public/skyscraper.webp";
import Button from "@/app/_atoms/Button";

type AboutUsProps = {
  lang: Locale;
  about: any;
};

export default function AboutUs({ lang, about }: AboutUsProps) {
  return (
    <AnimatedContainer>
      <h4 className="text-4xl font-bold text-stone-500 mb-2">{about.title}</h4>
      <div className="flex items-center space-x-6 mb-10">
        <div className="h-1.5 w-8 bg-stone-800" />
        <p className="text-stone-800 text-3xl font-bold">{about.subtitle}</p>
      </div>
      <div className="grid grid-cols-2 gap-16 mb-48">
        <div className="flex flex-col items-start space-y-8 text-stone-800 font-open text-base">
          <p>
            {about.firstAboutParagraph}{" "}
            <span className="font-bold">
              {about.firstAboutParagraphBoldText}
            </span>{" "}
            {about.firstAboutParagraphRest}
          </p>
          <div className="flex space-x-4">
            <div className="h-18 w-12 bg-stone-300" />
            <p className="font-bold italic">{about.secondAboutParagraph}</p>
          </div>
          <p>{about.thirdAboutParagraph}</p>
          <p>{about.fourthAboutParagraph}</p>
          <Button
            link={`/${lang}/contact`}
            buttonText={about.contactButtonText}
          />
        </div>
        <Image src={skyscraper} alt="skyscraper" />
      </div>
    </AnimatedContainer>
  );
}
