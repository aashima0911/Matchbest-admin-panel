"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function CertifiedSection() {
  const animation = { duration: 30000, easing: (t) => t };

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: "auto",
      spacing: 32,
    },
    created(slider) {
      slider.moveToIdx(6, true, animation);
    },
    updated(slider) {
      slider.moveToIdx(slider.track.details.abs + 6, true, animation);
    },
    animationEnded(slider) {
      slider.moveToIdx(slider.track.details.abs + 6, true, animation);
    },
  });

  return (
    <section className="w-full text-white py-5 px-4 flex flex-col items-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center">Certification</h2>

      <p className="text-center max-w-xl text-gradient mt-3 mb-10 text-lg ">
        We maintain strict quality and security standards to ensure the highest
        level of trust and performance. 
      </p>

      <div className="relative w-full max-w-9xl overflow-hidden  rounded-xl bg-black">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

        <div ref={sliderRef} className="keen-slider py-6">

          {/* Image 1 */}
          <div className="keen-slider__slide min-w-[180px]">
            <div className="relative w-48 h-48 -mt-5 mx-auto rounded-xl bg-black">
              <Image src="/certified/banner 1.png" alt="Certification 1" fill className="object-contain" />
            </div>
          </div>

          {/* Image 2 */}
          <div className="keen-slider__slide min-w-[180px]">
            <div className="relative w-32 h-32 mx-auto rounded-xl bg-black mt-3">
              <Image src="/certified/circle-cropped.png" alt="Certification 2" fill className="object-contain" />
            </div>
          </div>

          {/* Image 3 */}
          <div className="keen-slider__slide min-w-[180px]">
            <div className="relative w-40 h-40 mx-auto rounded-xl bg-black">
              <Image src="/certified/soc.png" alt="Certification 3" fill className="object-contain" />
            </div>
          </div>

          {/* Image 4 */}
          <div className="keen-slider__slide min-w-[180px]">
            <div className="relative w-36 h-36 mx-auto rounded-xl bg-black mt-2">
              <Image src="/certified/banner 4.png" alt="Certification 4" fill className="object-contain" />
            </div>
          </div>

          {/* Image 5 */}
          <div className="keen-slider__slide min-w-[180px]">
            <div className="relative w-40 h-40 mx-auto rounded-xl bg-black">
              <Image src="/certified/banner 5.png" alt="Certification 5" fill className="object-contain" />
            </div>
          </div>

          {/* Image 6 */}
          <div className="keen-slider__slide min-w-[180px]">
            <div className="relative w-48 h-48 mx-auto rounded-xl bg-black -mt-5">
              <Image src="/certified/banner 6.png" alt="Certification 6" fill className="object-contain" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
