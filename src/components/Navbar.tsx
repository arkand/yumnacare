"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, t, setLocale } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/programs", label: t.nav.programs },
    { href: "/about", label: t.nav.about },
    { href: "/tuition", label: t.nav.tuition },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-fuchsia-50/40 backdrop-blur-md" : "bg-fuchsia-50 shadow-[0_1px_0_0_var(--color-border-soft)]"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo2.png" alt="Yumnacare" width={240} height={80} className="h-18 w-auto" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full ${
                  scrolled ? "text-gray-900 font-bold hover:text-primary" : "text-muted font-medium hover:text-main"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language switch + CTA + hamburger */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center rounded-full border border-border-soft bg-canvas p-0.5">
            <button
              type="button"
              onClick={() => setLocale("id")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${locale === "id"
                ? "bg-primary text-white shadow-sm"
                : "text-muted hover:text-main"
                }`}
              aria-label="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${locale === "en"
                ? "bg-primary text-white shadow-sm"
                : "text-muted hover:text-main"
                }`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          <Link
            href="/contact"
            className="hidden bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover md:inline-block rounded-xl shadow-soft"
          >
            {t.nav.bookTour}
          </Link>

          {/* Hamburger button */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-main md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${mobileOpen ? "max-h-96 border-t border-border-soft" : "max-h-0"
          }`}
      >
        <ul className="space-y-1 px-6 pb-4 pt-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block border-l-2 border-transparent px-4 py-2 text-base font-medium text-muted transition-colors hover:border-primary hover:bg-canvas hover:text-main"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="mt-3 block bg-primary px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-hover rounded-xl shadow-soft"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.bookTour}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
