"use client";

import { useState, useEffect, useCallback, useRef, useSyncExternalStore } from "react";
import {
  ArrowRight,
  Shield,
  Fingerprint,
  FileCheck,
  Cloud,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Shield,
    title: "Gouvernance & GRC",
    desc: "Pilotage des risques",
  },
  {
    icon: Fingerprint,
    title: "Identité numérique",
    desc: "Systèmes souverains",
  },
  {
    icon: FileCheck,
    title: "Signature électronique",
    desc: "Services de confiance",
  },
  {
    icon: Cloud,
    title: "Cloud souverain",
    desc: "Hébergement sécurisé",
  },
];

function ServiceCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full max-w-[420px] ml-auto cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={cn(
          "relative overflow-hidden shadow-md transition-all duration-400 ease-out",
          hovered
            ? "bg-gradient-to-r from-red-800 via-ns-red to-red-600"
            : "bg-white",
        )}
        style={{
          borderRadius: "0 0 0 50px",
        }}
      >
        {/* Red top border — gradient */}
        <div
          className={cn(
            "h-[10px] transition-opacity duration-300",
            hovered ? "opacity-0" : "opacity-100",
          )}
          style={{
            background: "linear-gradient(90deg, #CC1616 0%, #660B0B 100%)",
          }}
        />

        <div className="p-7 sm:p-8">
          {/* Icon */}
          <div
            className={cn(
              "w-14 h-14 rounded-sm flex items-center justify-center mb-5 transition-all duration-100",
              hovered ? "bg-white" : "bg-ns-dark/8",
            )}
          >
            <Icon
              className={cn(
                "w-7 h-7 transition-colors duration-100",
                hovered ? "text-ns-red" : "text-ns-dark/70",
              )}
            />
          </div>

          {/* Title */}
          <h3
            className={cn(
              "font-[family-name:var(--font-heading)] font-bold text-lg sm:text-xl transition-colors duration-100",
              hovered ? "text-white" : "text-ns-dark",
            )}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className={cn(
              "mt-2 text-sm sm:text-base transition-colors duration-100",
              hovered ? "text-white" : "text-ns-dark",
            )}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const isLg = useSyncExternalStore(
    (cb) => {
      const mql = window.matchMedia("(min-width: 1024px)");
      mql.addEventListener("change", cb);
      return () => mql.removeEventListener("change", cb);
    },
    () => window.matchMedia("(min-width: 1024px)").matches,
    () => false,
  );

  const maxIndex = Math.max(0, services.length - 2);
  const SCROLL_STEP_VH = 70;

  // Scroll-driven carousel: map scroll position to activeIndex
  useEffect(() => {
    if (!isLg) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableDistance = container.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const scrolled = Math.max(0, -rect.top);
      const progress = scrolled / scrollableDistance;
      const index = Math.round(progress * maxIndex);
      setActiveIndex(Math.max(0, Math.min(index, maxIndex)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLg, maxIndex]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const container = containerRef.current;
      if (!container) return;
      const clamped = Math.max(0, Math.min(index, maxIndex));
      const scrollableDistance = container.offsetHeight - window.innerHeight;
      const targetScroll =
        container.offsetTop + (clamped / maxIndex) * scrollableDistance;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    },
    [maxIndex],
  );

  const CARD_HEIGHT = 220;
  const GAP = 20;
  const VISIBLE_HEIGHT = CARD_HEIGHT * 2 + GAP;

  return (
    <div
      ref={containerRef}
      className="bg-white"
      style={
        isLg
          ? { height: `calc(100vh + ${maxIndex * SCROLL_STEP_VH}vh)` }
          : undefined
      }
    >
      <section
        className={cn(
          "relative bg-white overflow-hidden",
          isLg && "sticky top-0",
        )}
        style={{ height: isLg ? "100vh" : "90vh", minHeight: "550px" }}
      >
      {/* Dark container — 3/4 width, full rounded right */}
      <div
        className="absolute top-0 left-0 h-full w-3/4 bg-ns-dark"
        style={{
          borderRadius: "0 9999px 9999px 0",
          clipPath: "inset(0 0 0 0 round 0 9999px 9999px 0)",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/bgservice.png')" }}
        />
      </div>

      {/* Content — generous symmetric padding */}
      <div className="relative z-10 h-full px-8 sm:px-14 lg:px-24 xl:px-32">
        <div className="flex items-center h-full max-w-[1400px] mx-auto">
          {/* ── Left text ── */}
          <div
            className="w-full lg:w-1/2"
            style={{ minHeight: `${VISIBLE_HEIGHT}px` }}
          >
            <h2 className="font-[family-name:var(--font-heading)] text-[24px] sm:text-[32px] lg:text-[40px] font-extrabold leading-[1.1] text-white">
              Réduire le
              <br />
              risque cyber
              <br /> à zéro.
            </h2>

            <p className="mt-6 text-white/80 text-sm sm:text-base leading-relaxed max-w-[420px]">
              Nous accompagnons les organisations de toutes tailles à renforcer
              leur posture de sécurité et leur résilience à long terme.
            </p>
            <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed max-w-[420px]">
              En combinant gouvernance, conformité et technologies de confiance,
              nous vous aidons à éliminer les risques cyber.
            </p>
            <a
              href="#services"
              className="group inline-flex items-center gap-2.5 bg-ns-red hover:bg-red-700 text-white px-7 py-3 rounded-sm text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-ns-red/25 mt-10 w-fit"
            >
              Découvrir nos services
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            {/* Progress dots */}
            <div className="mt-8 flex items-center gap-2">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className={cn(
                    "transition-all duration-300 rounded-full",
                    i === activeIndex
                      ? "w-8 h-2 bg-ns-red"
                      : i === activeIndex + 1
                        ? "w-4 h-2 bg-white/30"
                        : "w-2 h-2 bg-white/20 hover:bg-white/40",
                  )}
                />
              ))}
            </div>
          </div>

          {/* ── Right: Vertical carousel — 2 cards visible ── */}
          <div className="hidden lg:flex w-1/2 h-full items-center overflow-hidden">
            <div
              className="relative w-full overflow-hidden"
              style={{ height: `${VISIBLE_HEIGHT}px` }}
            >
              <div
                className="absolute w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: `translateY(-${activeIndex * (CARD_HEIGHT + GAP)}px)`,
                }}
              >
                {services.map((service) => (
                  <div
                    key={service.title}
                    style={{
                      height: `${CARD_HEIGHT}px`,
                      marginBottom: `${GAP}px`,
                    }}
                  >
                    <ServiceCard
                      icon={service.icon}
                      title={service.title}
                      desc={service.desc}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
