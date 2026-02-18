import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 xl:px-28">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
          {/* Left — text */}
          <div className="w-full lg:w-1/2 py-0 lg:py-20">
            <h2 className="font-[family-name:var(--font-heading)] text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold leading-[1.1] text-[#170B25]">
              Prêt à démarrer ?
            </h2>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#170B25] leading-relaxed max-w-[420px]">
              Nous sommes là pour vous aider. Contactez-nous pour planifier un
              appel découverte avec l&apos;un de nos experts et découvrez
              comment Nyquist-Shannon peut accompagner votre organisation.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#E30613] hover:bg-red-700 text-white px-8 py-3.5 rounded-sm text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#E30613]/25 mt-8"
            >
              Contactez-nous
            </a>
          </div>

          {/* Right — image */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <Image
              src="/images/image-cta.png"
              alt="Équipe Nyquist-Shannon"
              width={640}
              height={440}
              className="w-full h-auto object-cover"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
