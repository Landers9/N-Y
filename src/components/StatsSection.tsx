"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 95,
    label: "des incidents cyber sont liés à une erreur humaine",
  },
  {
    value: 68,
    label: "des entreprises africaines n'ont pas de politique de sécurité",
  },
  {
    value: 43,
    label: "seulement forment leurs employés à la cybersécurité",
  },
];

function ProgressBar({
  value,
  label,
  animate,
}: {
  value: number;
  label: string;
  animate: boolean;
}) {
  return (
    <div>
      <p className="text-sm sm:text-base text-[#170B25] mb-2">{label}</p>
      <div className="relative h-12 sm:h-14 rounded-full overflow-hidden bg-[#170B25]">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-[#E30613] flex items-center justify-center transition-all duration-1000 ease-out"
          style={{ width: animate ? `${value}%` : "0%" }}
        >
          <span className="text-white font-bold text-sm sm:text-base">
            {value}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bgstats.png')" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-24 xl:px-32">
        {/* $10.5T — décalé au-dessus de l'alignement des colonnes */}
        <p className="font-[family-name:var(--font-heading)] text-[64px] sm:text-[80px] lg:text-[100px] font-black leading-none text-[#170B25] tracking-tight lg:w-1/2">
          $10.5T
        </p>

        {/* Two columns — alignées à partir du sous-titre */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-0 mt-4">
          {/* ── Left column ── */}
          <div className="w-full lg:w-1/2 lg:pr-12">
            <p className="text-xs sm:text-sm font-bold tracking-[0.15em] text-[#170B25] uppercase">
              Coût mondial de la cybercriminalité en 2025
            </p>

            {/* Heading */}
            <h2 className="font-[family-name:var(--font-heading)] text-[22px] sm:text-[28px] lg:text-[34px] font-extrabold leading-[1.15] text-[#170B25] mt-8 sm:mt-10">
              La cybersécurité a un
              <br />
              problème d&apos;efficacité.
            </h2>

            {/* Description */}
            <div className="mt-6 max-w-[420px] space-y-2">
              <p className="text-sm sm:text-base text-[#170B25] leading-relaxed">
                Malgré des investissements croissants, les violations de données
                continuent d&apos;augmenter.
              </p>
              <p className="text-sm sm:text-base text-[#E30613] font-bold leading-relaxed">
                La cause ? Une gouvernance insuffisante et un manque de
                sensibilisation.
              </p>
              <p className="text-sm sm:text-base text-[#170B25] leading-relaxed">
                Notre approche GRC transforme cette réalité.
              </p>
            </div>
          </div>

          {/* ── Divider + "EN 2024" ── */}
          <div className="hidden lg:flex flex-col items-center self-stretch py-4">
            <div className="w-px flex-1 bg-[#E30613]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#170B25] uppercase py-4 [writing-mode:vertical-lr]">
              En 2024
            </span>
            <div className="w-px flex-1 bg-[#E30613]" />
          </div>

          {/* Mobile divider */}
          <div className="lg:hidden flex items-center gap-4">
            <div className="h-px flex-1 bg-[#E30613]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#170B25] uppercase">
              En 2024
            </span>
            <div className="h-px flex-1 bg-[#E30613]" />
          </div>

          {/* ── Right column — progress bars ── */}
          <div className="w-full lg:w-1/2 lg:pl-12 flex flex-col justify-center space-y-6 sm:space-y-8">
            {stats.map((stat) => (
              <ProgressBar
                key={stat.label}
                value={stat.value}
                label={stat.label}
                animate={animate}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
