export default function Subtitle({ text }: { text: string }) {
  return (
    <h5 className="text-2xl font-bold md:text-3xl text-stone-800">{text}</h5>
  );
}
