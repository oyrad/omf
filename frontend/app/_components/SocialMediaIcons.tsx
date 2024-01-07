import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";

export default function SocialMediaIcons() {
  return (
    <div className="mt-5 flex space-x-6">
      <a href="https://www.linkedin.com/company/omf-hr/" target="_blank">
        <LinkedinLogo weight="fill" className="w-8" />
      </a>
      <a href="https://facebook.com/people/OMF/61555176722868/" target="_blank">
        <FacebookLogo weight="fill" className="w-8" />
      </a>
      <a href="https://www.instagram.com/omf.hr/" target="_blank">
        <InstagramLogo weight="fill" className="w-8" />
      </a>
    </div>
  );
}
