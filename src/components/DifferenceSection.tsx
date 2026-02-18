"use client";

import { ArrowRight, MapPin, Settings, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const cards = [
  {
    icon: MapPin,
    title: "Expertise locale",
    desc: "Une équipe d'experts certifiés avec une connaissance approfondie des réglementations africaines.",
    highlight: false,
  },
  {
    icon: Settings,
    title: "Approche sur mesure",
    desc: "Des solutions adaptées à votre secteur, votre marché. Pas de solution générique.",
    highlight: true,
  },
  {
    icon: Globe,
    title: "Couverture régionale",
    desc: "Présents au Bénin, en France et aux USA. Nous accompagnons les organisations à travers l'espace OHADA.",
    highlight: false,
  },
];

function DifferenceCard({
  icon: Icon,
  title,
  desc,
  highlight,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  highlight: boolean;
}) {
  return (
    <div className="relative pt-7 h-full">
      {/* Icon circle — overlapping the card top */}
      <div
        className={cn(
          "absolute top-0 left-8 z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-md",
          highlight ? "bg-white" : "bg-[#E30613]",
        )}
      >
        <Icon
          className={cn(
            "w-6 h-6",
            highlight ? "text-[#E30613]" : "text-white",
          )}
        />
      </div>

      {/* Card body */}
      <div
        className={cn(
          "relative overflow-hidden shadow-md h-full flex flex-col",
          highlight
            ? "bg-gradient-to-b from-red-800 via-[#E30613] to-red-600"
            : "bg-white",
        )}
        style={{ borderRadius: "0 0 0 50px" }}
      >
        {/* Red top border */}
        <div
          className={cn(
            "h-[6px] shrink-0",
            highlight ? "opacity-0" : "opacity-100",
          )}
          style={{
            background: "linear-gradient(90deg, #CC1616 0%, #660B0B 100%)",
          }}
        />

        <div className="px-7 pt-10 pb-10 flex-1">
          <h3
            className={cn(
              "font-[family-name:var(--font-heading)] font-bold text-xl sm:text-2xl",
              highlight ? "text-white" : "text-[#170B25]",
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "mt-3 text-base leading-relaxed",
              highlight ? "text-white" : "text-[#170B25]",
            )}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DifferenceSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Background — same as StatsSection */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bgstats.png')" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-24 xl:px-32">
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.1] text-[#170B25]">
            La différence{" "}
            <span className="text-[#E30613]">Nyquist-Shannon</span>
          </h2>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg font-bold text-[#170B25] leading-relaxed">
            Nyquist-Shannon élimine vos risques cyber en rendant la sécurité
            opérationnelle
          </p>

          <p className="mt-3 text-base sm:text-lg text-[#170B25] leading-relaxed">
            Notre combinaison unique d&apos;expertise en gouvernance, conformité
            et technologies de confiance est conçue pour offrir une sécurité à
            grande échelle.
          </p>

          {/* CTA */}
          <a
            href="#approche"
            className="group inline-flex items-center gap-2 border-2 border-[#170B25] text-[#170B25] hover:bg-[#170B25] hover:text-white px-7 py-3 rounded-sm text-base font-semibold transition-all duration-300 mt-8"
          >
            Comment ça marche
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Cards — equal height */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mt-14 sm:mt-16 items-stretch">
          {cards.map((card) => (
            <DifferenceCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
              highlight={card.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
