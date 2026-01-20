"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function CertifiedSection() {
  const animation = { duration: 30000 };

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
  });

  return (
    <section className="w-full bg-[rgba(47, 27, 82, 1)] text-white py-10 px-4 flex flex-col items-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-4">Certification</h2>

      <p className="text-center max-w-xl text-gray-300 mt-3 mb-10 text-sm md:text-base">
        We maintain strict quality and security standards to ensure the highest
        level of trust and performance.
      </p>

      <div className="relative w-full max-w-7xl overflow-hidden  rounded-xl">
        

        <div ref={sliderRef} className="keen-slider py-6">

          {/* Image 1 */}
          <div className="keen-slider__slide min-w-[180px]">
            <div className="relative w-48 h-48 -mt-5 mx-auto rounded-xl flex items-center justify-center">
              <Image src="/certified/banner 1.png" alt="Certification 1" fill className="object-contain" />
            </div>
          </div>

          {/* Image 2 */}
          <div className="keen-slider__slide min-w-[180px]">
            <div className="relative w-40 h-40 mx-auto rounded-xl flex items-center justify-center">
              <Image src="/certified/circle-cropped.png" alt="Certification 2" fill className="object-contain" />
            </div>
          </div>

          {/* Image 3 */}
          <div className="keen-slider__slide min-w-[180px]">
            <div className="relative w-42 h-42 mx-auto rounded-xl flex items-center justify-center">
              <Image src="/certified/soc.png" alt="Certification 3" fill className="object-contain" />
            </div>
          </div>

          {/* Image 4 */}
          <div className="keen-slider__slide min-w-[180px]">
            <div className="relative w-42 h-42 mx-auto rounded-xl flex items-center justify-center">
              <Image src="/certified/banner 4.png" alt="Certification 4" fill className="object-contain" />
            </div>
          </div>

          {/* Image 5 */}
          <div className="keen-slider__slide min-w-[180px]">
            <div className="relative w-42 h-42 mx-auto rounded-xl flex items-center justify-center">
              <Image src="/certified/banner 5.png" alt="Certification 5" fill className="object-contain" />
            </div>
          </div>

          {/* Image 6 */}
          <div className="keen-slider__slide min-w-[180px]">
            <div className="relative w-48 h-48 mx-auto rounded-xl flex items-center justify-center">
              <Image src="/certified/banner 6.png" alt="Certification 6" fill className="object-contain" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
