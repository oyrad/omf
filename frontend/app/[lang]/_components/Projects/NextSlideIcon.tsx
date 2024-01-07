import {
  CaretRight,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";
import { useSwiper } from "swiper/react";

export default function NextSlideIcon() {
  const swiper = useSwiper();

  return (
    <button className="z-10" onClick={() => swiper.slideNext()}>
      <CaretRight className="w-10 h-10 cursor-pointer hover:bg-stone-200" />
    </button>
  );
}
