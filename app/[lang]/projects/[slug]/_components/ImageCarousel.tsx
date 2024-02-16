"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { useEffect } from "react";

import {
  X,
  // @ts-ignore
} from "@phosphor-icons/react/dist/ssr";
import { ImageData } from "@/types/types";

type ImageCarouselProps = {
  featuredImage: ImageData;
  images: ImageData[];
  selectedImage?: number;
  setSelectedImage: (key: number | undefined) => void;
};

export default function ImageCarousel({
  featuredImage,
  images,
  selectedImage,
  setSelectedImage,
}: ImageCarouselProps) {
  useEffect(() => {
    function exitCarousel(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedImage(undefined);
      }
    }
    window.addEventListener("keydown", () => exitCarousel);
    return () => window.removeEventListener("keydown", exitCarousel);
  }, [selectedImage, setSelectedImage]);

  function handleCarouselOpen(key: number) {
    document.body.style.overflow = "hidden";
    setSelectedImage(key + 1);
  }

  function handleCarouselClose() {
    document.body.style.overflow = "auto";
    setSelectedImage(undefined);
  }

  const { fields } = featuredImage;

  return (
    <>
      <div className="grid grid-cols-1 gap-10 my-20 md:grid-cols-2 lg:grid-cols-3">
        {images &&
          images.map((image, key) => (
            <Image
              key={image.fields.title}
              src={`https:${image.fields.file.url}`}
              alt={image.fields.title}
              width={image.fields.file.details.image.width}
              height={image.fields.file.details.image.height}
              onClick={() => handleCarouselOpen(key)}
              className="transition-all cursor-pointer hover:transform hover:scale-105"
            />
          ))}
      </div>
      {selectedImage !== undefined && (
        <div
          onClick={handleCarouselClose}
          className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-70"
        >
          <X className="absolute w-10 h-10 text-white transition-all cursor-pointer top-5 right-5 lg:top-10 lg:right-10 hover:bg-stone-600" />
          <div
            className="px-4 lg:px-0 lg:w-2/3 lg:h-2/3"
            onClick={(e) => e.stopPropagation()}
          >
            {images ? (
              <Carousel
                infiniteLoop={true}
                selectedItem={selectedImage}
                swipeable={true}
                emulateTouch={true}
                useKeyboardArrows={true}
                showThumbs={false}
              >
                {[
                  <Image
                    key={fields.title}
                    src={`https:${fields.file.url}`}
                    alt={fields.title}
                    width={fields.file.details.image.width}
                    height={fields.file.details.image.height}
                  />,
                  ...images.map((image) => (
                    <Image
                      key={image.fields.title}
                      src={`https:${image.fields.file.url}`}
                      alt={image.fields.title}
                      width={image.fields.file.details.image.width}
                      height={image.fields.file.details.image.height}
                    />
                  )),
                ]}
              </Carousel>
            ) : (
              <Carousel
                infiniteLoop={true}
                selectedItem={selectedImage}
                swipeable={true}
                emulateTouch={true}
                useKeyboardArrows={true}
                showThumbs={false}
              >
                {[
                  <Image
                    key={fields.title}
                    src={`https:${fields.file.url}`}
                    alt={fields.title}
                    width={fields.file.details.image.width}
                    height={fields.file.details.image.height}
                  />,
                ]}
              </Carousel>
            )}
          </div>
        </div>
      )}
    </>
  );
}
