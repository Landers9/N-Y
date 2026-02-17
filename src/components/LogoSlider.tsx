"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const partners = [
  { name: "KnowBe4", logo: "/images/partners/knowbe4.png" },
  { name: "Fortra", logo: "/images/partners/fortra.png" },
  { name: "Proofpoint", logo: "/images/partners/proofpoint.png" },
  { name: "SoSafe", logo: "/images/partners/sosafe.png" },
  { name: "Riot", logo: "/images/partners/riot.png" },
  { name: "Sophos", logo: "/images/partners/sophos.png" },
  { name: "Cofense", logo: "/images/partners/cofense.png" },
  { name: "Microsoft", logo: "/images/partners/microsoft.png" },
  { name: "Hoxhunt", logo: "/images/partners/hoxhunt.png" },
];

export default function LogoSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let position = 0;
    const speed = 1.5;

    const animate = () => {
      if (!pausedRef.current) {
        position += speed;
        if (position >= container.scrollWidth / 2) {
          position = 0;
        }
        container.scrollLeft = position;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const allPartners = [...partners, ...partners];

  return (
    <section className="bg-white py-4 lg:py-5 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-10 sm:gap-14 overflow-x-hidden items-center"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
      >
        {allPartners.map((partner, i) => (
          <div
            key={`${partner.name}-${i}`}
            className="flex-shrink-0 w-[160px] sm:w-[200px] h-12 sm:h-16 flex items-center justify-center"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={240}
              height={80}
              className="max-w-full max-h-full object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  );
}
