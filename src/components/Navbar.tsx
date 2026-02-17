'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Phone,
  BookOpen,
  Globe,
  ArrowRight,
  Shield,
  Fingerprint,
  FileCheck,
  Cloud,
  Scale,
  Search,
  Download,
  Users,
  MonitorSmartphone,
  Stethoscope,
} from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const megaMenuData = {
  cybersecurite: {
    title: 'CYBERSÉCURITÉ ET GRC',
    items: [
      {
        icon: Shield,
        label: 'Gouvernance  des risques',
        desc: 'Pilotez vos risques cyber',
        href: '#',
      },
      {
        icon: Scale,
        label: 'Conformité réglementaire',
        desc: 'RGPD, LPD, normes africaines',
        href: '#',
      },
      {
        icon: Search,
        label: 'Audit et Sensibilisation',
        desc: 'Diagnostic et formation',
        href: '#',
      },
    ],
  },
  confiance: {
    title: 'CONFIANCE NUMÉRIQUE',
    items: [
      {
        icon: Fingerprint,
        label: 'Identité numérique',
        desc: "Systèmes d'identité souverains",
        href: '#',
      },
      {
        icon: FileCheck,
        label: 'Signature électronique',
        desc: 'Solutions conformes',
        href: '#',
      },
      {
        icon: Cloud,
        label: 'Certification et Cloud',
        desc: 'PKI et hébergement souverain',
        href: '#',
      },
    ],
  },
  produits: {
    title: 'NOS PRODUITS',
    items: [
      {
        icon: MonitorSmartphone,
        label: 'eVoduun',
        desc: 'Info juridique OHADA',
        href: '#',
      },
      {
        icon: Stethoscope,
        label: 'Tojumi',
        desc: 'Santé à distance',
        href: '#',
      },
      {
        icon: Users,
        label: 'AOEE',
        desc: 'ONG à vocation amicale',
        href: '#',
      },
    ],
  },
}

const navLinks = [
  { label: 'Services', hasDropdown: true, key: 'services' },
  { label: 'Pourquoi N-S ?', hasDropdown: true, key: 'pourquoi', href: '#pourquoi' },
  { label: 'Ressources', hasDropdown: true, key: 'ressources', href: '#ressources' },
  { label: 'À propos', hasDropdown: true, key: 'about', href: '#about' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ───── Top Banner ───── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5">
          {/* Left side */}
          <div className="flex items-center gap-3">
            <span className="bg-ns-red text-white text-xs font-semibold px-3 py-1 rounded-xs">
              Nouveau
            </span>
            <a
              href="#guide"
              className="hidden sm:flex items-center gap-2 text-ns-dark text-sm font-medium hover:text-ns-red transition-colors"
            >
              Guide GRC 2026 pour l&apos;Afrique
              <Download className="w-4 h-4" />
            </a>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-0 text-sm text-ns-dark/70">
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-3 hover:text-ns-dark transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Contact
            </a>
            <span className="text-ns-dark/20">|</span>
            <a
              href="#blog"
              className="flex items-center gap-1.5 px-3 hover:text-ns-dark transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Blog
            </a>
            <span className="text-ns-dark/20">|</span>
            <button className="flex items-center gap-1.5 px-3 hover:text-ns-dark transition-colors">
              <Globe className="w-3.5 h-3.5" />
              Fr
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* ───── Main Navbar ───── */}
      <nav
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 bg-ns-dark",
          isScrolled && "shadow-xl shadow-black/20",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Nyquist-Shannon"
                width={480}
                height={120}
                className="w-60 h-auto"
                quality={100}
                unoptimized
                priority
              />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => {
                    if (link.key === "services") setMegaMenuOpen(!megaMenuOpen);
                  }}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-sm text-[15px] font-medium transition-all duration-200",
                    link.key === "services" && megaMenuOpen
                      ? "text-white"
                      : "text-white/70 hover:text-white",
                  )}
                >
                  {link.label}
                  {link.hasDropdown &&
                    (link.key === "services" && megaMenuOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    ))}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#diagnostic"
                className="group inline-flex items-center gap-2 bg-ns-red hover:bg-red-700 text-white px-6 py-2.5 rounded-sm text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-ns-red/30"
              >
                Diagnostic gratuit
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* ───── Mega Menu ───── */}
        <AnimatePresence>
          {megaMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseLeave={() => setMegaMenuOpen(false)}
              className="absolute left-0 w-full bg-white shadow-2xl shadow-black/10"
            >
              <div className="max-w-7xl mx-auto px-6 py-6">
                {/* 3 columns */}
                <div className="grid grid-cols-3 gap-16">
                  {Object.values(megaMenuData).map((section) => (
                    <div key={section.title}>
                      <h3 className="text-xs font-bold tracking-[0.15em] text-ns-dark/40 uppercase mb-6">
                        {section.title}
                      </h3>
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="group flex items-start gap-4 px-3 py-3 -mx-3 rounded-sm hover:bg-ns-light transition-colors duration-150"
                          >
                            <div className="w-10 h-10 rounded-sm bg-ns-dark/5 flex items-center justify-center shrink-0 group-hover:bg-ns-purple/10 transition-colors duration-150">
                              <item.icon className="w-5 h-5 text-ns-dark/60 group-hover:text-ns-purple transition-colors duration-150" />
                            </div>
                            <div className="pt-0.5">
                              <p className="font-semibold text-ns-dark text-[15px] leading-tight group-hover:text-ns-purple transition-colors duration-150">
                                {item.label}
                              </p>
                              <p className="text-ns-dark/45 text-sm mt-1">
                                {item.desc}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t border-ns-dark/8 flex items-center justify-between">
                  <a
                    href="#accompagnement"
                    className="text-[15px] text-ns-purple font-medium hover:text-ns-red transition-colors"
                  >
                    Besoin d&apos;accompagnement ?
                  </a>
                  <a
                    href="#diagnostic"
                    className="group inline-flex items-center gap-2 bg-ns-red hover:bg-red-700 text-white px-6 py-3 rounded-sm text-[15px] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-ns-red/30"
                  >
                    Demander un diagnostic
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ───── Mobile Menu ───── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-ns-dark border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.key}
                    href={link.href || "#"}
                    className="block px-4 py-3 rounded-sm text-white/70 hover:text-white hover:bg-white/5 font-medium transition-colors text-[15px]"
                  >
                    {link.label}
                  </a>
                ))}

                {/* Mobile mega menu items */}
                <div className="pt-4 mt-4 border-t border-white/10 space-y-4">
                  {Object.values(megaMenuData).map((section) => (
                    <div key={section.title}>
                      <h3 className="text-[10px] font-bold tracking-[0.15em] text-white/30 uppercase px-4 mb-2">
                        {section.title}
                      </h3>
                      {section.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          <item.icon className="w-4 h-4 shrink-0" />
                          <span className="text-sm">{item.label}</span>
                        </a>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="pt-4 mt-2">
                  <a
                    href="#diagnostic"
                    className="flex items-center justify-center gap-2 bg-ns-red hover:bg-red-700 text-white px-6 py-3.5 rounded-sm font-semibold w-full transition-colors text-sm"
                  >
                    Diagnostic gratuit
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Mobile secondary links */}
                <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-center gap-6 text-sm text-white/50">
                  <a
                    href="#contact"
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Contact
                  </a>
                  <a
                    href="#blog"
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Blog
                  </a>
                  <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <Globe className="w-3.5 h-3.5" />
                    Fr
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}