"use client";

import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#170B25] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10">
          {/* Column 1 — Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Nyquist-Shannon"
              width={480}
              height={120}
              className="w-40 sm:w-60 h-auto"
              quality={100}
              unoptimized
              priority
            />

            <p className="mt-6 text-base text-white/70 leading-relaxed max-w-[280px]">
              Nyquist-Shannon est un cabinet de conseil indépendant panafricain
              spécialisé en Gouvernance, Risques et Conformité (GRC), identité
              numérique, signature électronique et souveraineté numérique.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Addresses */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold">
              Nos adresses
            </h3>

            <div className="mt-6 space-y-6">
              {/* Benin */}
              <div>
                <p className="text-base font-bold">
                  Au Bénin : Nyquist-Shannon SARL
                </p>
                <div className="mt-2 space-y-1 text-base text-white/70">
                  <p>
                    E-mail :{" "}
                    <a
                      href="mailto:contact@nyquist-shannon.com"
                      className="hover:text-white transition-colors"
                    >
                      contact@nyquist-shannon.com
                    </a>
                  </p>
                  <p>
                    Tél. :{" "}
                    <a
                      href="tel:+22990000000"
                      className="hover:text-white transition-colors"
                    >
                      +229 90 00 00 00
                    </a>
                  </p>
                  <p>
                    Lot 2019 - Maison Colonel BOSSOU Emmanuel, Zogbohouè -
                    Cotonou, Bénin
                  </p>
                </div>
              </div>

              {/* France */}
              <div>
                <p className="text-base font-bold">En France : FACTULIB SAS</p>
                <div className="mt-2 space-y-1 text-base text-white/70">
                  <p>
                    E-mail :{" "}
                    <a
                      href="mailto:info@factulib.com"
                      className="hover:text-white transition-colors"
                    >
                      info@factulib.com
                    </a>
                  </p>
                  <p>
                    Tél. :{" "}
                    <a
                      href="tel:+33632808316"
                      className="hover:text-white transition-colors"
                    >
                      +33 6 32 80 83 16
                    </a>
                  </p>
                  <p>60 rue François 1er 75008 Paris, France</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 — Newsletter */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold">
              Inscrivez-vous à notre Newsletter
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="mt-6 space-y-4"
            >
              <input
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-sm text-white placeholder:text-white/40 text-base focus:outline-none focus:border-[#E30613] transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[#E30613] hover:bg-red-700 text-white py-3.5 rounded-sm text-base font-bold tracking-[0.1em] uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#E30613]/25"
              >
                ENVOYER
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-white/50 text-center">
            <span>© 2026 Nyquist-Shannon. All Rights Reserved</span>
            <div className="flex items-center gap-2">
              <a href="#" className="hover:text-white transition-colors">
                Conditions Générales
              </a>
              <span>&</span>
              <a href="#" className="hover:text-white transition-colors">
                Politique de Confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
