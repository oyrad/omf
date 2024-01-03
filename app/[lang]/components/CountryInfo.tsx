import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

type CountryInfoProps = {
  lang: Locale;
  name: string;
  hqAddress: string;
  officeAddress?: string;
  itemClassName?: string;
};

export default async function CountryInfo({
  lang,
  name,
  hqAddress,
  officeAddress,
  itemClassName,
}: CountryInfoProps) {
  const { footer } = await getDictionary(lang);

  return (
    <div className={itemClassName}>
      <p className="font-bold text-lg mb-0.5">{name}</p>
      <p>
        <span className="font-semibold">{footer.location.hq}:</span> {hqAddress}
      </p>
      {officeAddress && (
        <p className="mb-7">
          <span className="font-semibold">{footer.location.office}:</span>{" "}
          {officeAddress}
        </p>
      )}
    </div>
  );
}
