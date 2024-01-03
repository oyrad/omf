import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
  image: string;
  title: string;
  description: string;
};

export default function Project({ image, title, description }: ProjectProps) {
  return (
    <Link href={`projects/1`}>
      <Image
        src={image}
        alt={title}
        height={600}
        width={600}
        className="mb-2"
      />
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-stone-400">{description}</p>
    </Link>
  );
}
