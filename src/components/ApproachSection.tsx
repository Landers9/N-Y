"use client";

const pillars = [
  {
    category: "GOUVERNANCE",
    stat: "90%",
    subtitle: "Risques maîtrisés",
    desc: "Mettez en place une gouvernance solide pour piloter vos risques cyber avec une vision stratégique et opérationnelle.",
  },
  {
    category: "CONFORMITÉ",
    stat: "100%",
    subtitle: "Conformité réglementaire",
    desc: "Assurez votre conformité RGPD, OHADA et aux normes sectorielles avec nos experts certifiés.",
  },
  {
    category: "RÉSILIENCE",
    stat: "24/7",
    subtitle: "Protection continue",
    desc: "Renforcez votre résilience avec des solutions de détection, réponse et récupération adaptées à votre contexte.",
  },
];

export default function ApproachSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      {/* Background — mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
        style={{ backgroundImage: "url('/images/bgabout-mobile.png')" }}
      />
      {/* Background — desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg:block"
        style={{ backgroundImage: "url('/images/bgabout.png')" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-24 xl:px-32">
        <div className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Heading */}
          <h2 className="font-[family-name:var(--font-heading)] text-[28px] sm:text-[36px] lg:text-[48px] font-extrabold leading-[1.1] text-white text-center max-w-[700px] mx-auto">
            La première approche GRC intégrée pour l&apos;Afrique
          </h2>

          {/* Subtitle */}
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-white text-center">
            Des bénéfices concrets qui{" "}
            <span className="font-bold">éliminent les risques cyber</span>
          </p>

          {/* Separator */}
          <div className="w-24 h-[3px] bg-white mx-auto mt-8 sm:mt-10" />

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-12 mt-12 sm:mt-14">
            {pillars.map((pillar) => (
              <div key={pillar.category}>
                {/* Category label with red underline */}
                <div className="inline-block">
                  <p className="text-xs font-bold tracking-[0.15em] text-white uppercase">
                    {pillar.category}
                  </p>
                  <div className="w-full h-[2px] bg-[#E30613] mt-2" />
                </div>

                {/* Big stat */}
                <p className="font-[family-name:var(--font-heading)] text-[56px] sm:text-[48px] lg:text-[64px] font-black leading-none text-white mt-4 sm:mt-5 tracking-tight">
                  {pillar.stat}
                </p>

                {/* Subtitle */}
                <p className="text-sm sm:text-base font-bold text-white mt-3">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-white leading-relaxed mt-2">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
