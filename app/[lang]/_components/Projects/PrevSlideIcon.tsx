import {
  CaretLeft,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";
import { useSwiper } from "swiper/react";

export default function PrevSlideIcon() {
  const swiper = useSwiper();

  return (
    <button className="z-10" onClick={() => swiper.slidePrev()}>
      <CaretLeft className="w-10 h-10 cursor-pointer hover:bg-stone-200" />
    </button>
  );
}
