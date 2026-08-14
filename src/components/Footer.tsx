"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "/programs", label: t.nav.programs },
    { href: "/about", label: t.nav.about },
    { href: "/tuition", label: t.nav.tuition },
    { href: "/contact", label: t.nav.contact },
    { href: "/contact", label: t.nav.bookTour },
  ];

  return (
    <footer className="bg-main pattern-dots-dark text-white/80">
      {/* Playful top border */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent-coral to-primary" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Yumnacare" width={200} height={100} className="h-16 w-auto" />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {t.footer.description}
            </p>
            {/* Playful value tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["Safe", "Nurturing", "Playful", "Transparent"].map((tag) => (
                <span
                  key={tag}
                  className="border border-white/10 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-primary-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
              {t.footer.contact}
            </h4>
            <address className="space-y-3 text-sm not-italic text-white/60">
              <p className="flex items-start gap-2">
                <span className="text-white/30 mt-0.5">▸</span>
                PUP sektor 5 Blok Q1 no 2, Babelan, Bekasi.
              </p>
              <p className="flex items-start gap-2">
                <span className="text-white/30 mt-0.5">▸</span>
                0813-1963-0307 - 0896-3785-7330
              </p>
              <p className="flex items-start gap-2">
                <span className="text-white/30 mt-0.5">▸</span>
                hello@yumnacare.com
              </p>
              <p className="flex items-start gap-2">
                <span className="text-white/30 mt-0.5">▸</span>
                Mon–Fri: 7:00 AM – 6:00 PM
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Yumnacare. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
