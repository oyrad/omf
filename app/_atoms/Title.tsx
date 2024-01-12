type TitleProps = {
  text: string;
};

export default function Title({ text }: TitleProps) {
  return (
    <h4 className="mb-2 text-4xl font-bold md:text-4xl text-stone-500">
      {text}
    </h4>
  );
}
{
}
