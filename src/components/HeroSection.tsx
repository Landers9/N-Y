'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

// Banner ~44px + Nav 72px = 116px
const NAV_HEIGHT = 'calc(100vh - 116px)'

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-ns-dark"
      style={{ height: NAV_HEIGHT, minHeight: '420px' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bghero.png')" }}
      />

      {/* Subtle overlay for text readability on mobile */}
      <div className="absolute inset-0 bg-ns-dark/40 sm:bg-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full">
        <div className="flex items-center h-full">
          {/* Left content */}
          <div className="w-full lg:max-w-[600px]">
            {/* Heading */}
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-[family-name:var(--font-heading)] text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[46px] font-extrabold leading-[1.08] tracking-tight text-white"
            >
              Construire la{' '}
              <span className="text-ns-red">confiance</span>
              <br />
              <span className="text-ns-red">numérique</span>{' '}
              en Afrique
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 lg:mt-8 text-white/60 text-base sm:text-lg leading-relaxed max-w-[480px]"
            >
              Gouvernance, Risques et Conformité (GRC), identité
              numérique, signature électronique et souveraineté
              numérique.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-10 lg:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href="#diagnostic"
                className="group inline-flex items-center justify-center gap-2.5 bg-ns-red hover:bg-red-700 text-white px-8 py-3 rounded-sm text-sm sm:text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-ns-red/25"
              >
                Demander un diagnostic
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>

              <a
                href="#approche"
                className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white px-8 py-3 rounded-sm text-sm sm:text-base font-medium transition-all duration-300 hover:bg-white/5"
              >
                Découvrir notre approche
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}