"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import projectPhoto from "/public/project-house.webp";
import { useState, useEffect } from "react";

import {
  X,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";

export default function ImageCarousel() {
  const [selectedImage, setSelectedImage] = useState<number | undefined>();

  useEffect(() => {
    function exitCarousel(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedImage(undefined);
      }
    }
    window.addEventListener("keydown", () => exitCarousel);
    return () => window.removeEventListener("keydown", exitCarousel);
  }, [selectedImage]);

  return (
    <>
      <div className="grid grid-cols-3 gap-10 my-20">
        <Image
          src={projectPhoto}
          alt="villa"
          width={600}
          height={600}
          onClick={() => setSelectedImage(0)}
          className="cursor-pointer hover:transform hover:scale-105 transition-all"
        />
        <Image
          src={projectPhoto}
          alt="villa"
          width={600}
          height={600}
          onClick={() => setSelectedImage(1)}
          className="cursor-pointer hover:transform hover:scale-105 transition-all"
        />
        <Image
          src={projectPhoto}
          alt="villa"
          width={600}
          height={600}
          onClick={() => setSelectedImage(2)}
          className="cursor-pointer hover:transform hover:scale-105 transition-all"
        />
        <Image
          src={projectPhoto}
          alt="villa"
          width={600}
          height={600}
          onClick={() => setSelectedImage(3)}
          className="cursor-pointer hover:transform hover:scale-105 transition-all"
        />
        <Image
          src={projectPhoto}
          alt="villa"
          width={600}
          height={600}
          onClick={() => setSelectedImage(4)}
          className="cursor-pointer hover:transform hover:scale-105 transition-all"
        />
        <Image
          src={projectPhoto}
          alt="villa"
          width={600}
          height={600}
          onClick={() => setSelectedImage(5)}
          className="cursor-pointer hover:transform hover:scale-105 transition-all"
        />
      </div>
      {selectedImage !== undefined && (
        <div
          onClick={() => setSelectedImage(undefined)}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center"
        >
          <X className="absolute top-10 right-10 w-10 h-10 text-white hover:bg-stone-600 transition-all cursor-pointer" />
          <div className="w-2/3 h-2/3" onClick={(e) => e.stopPropagation()}>
            <Carousel
              infiniteLoop={true}
              selectedItem={selectedImage}
              swipeable={true}
              emulateTouch={true}
              useKeyboardArrows={true}
            >
              <Image src={projectPhoto} alt="villa" width={600} height={600} />
              <Image src={projectPhoto} alt="villa" width={600} height={600} />
              <Image src={projectPhoto} alt="villa" width={600} height={600} />
              <Image src={projectPhoto} alt="villa" width={600} height={600} />
              <Image src={projectPhoto} alt="villa" width={600} height={600} />
              <Image src={projectPhoto} alt="villa" width={600} height={600} />
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
}