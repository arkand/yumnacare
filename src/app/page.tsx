"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  const featureIcons = ["📅", "🎓", "🎨", "👶", "🌿", "✏️", "🛜"];
  const badgeIcons = ["👩‍👧", "📋", "💬"];
  const badgeKeys = ["small", "licensed", "updates"] as const;

  return (
    <div className="bg-canvas">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1920&q=80"
          alt="Girl holding a toy camera in a warm playroom"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-main/70" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 shape-blob-1 translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-coral/10 shape-blob-2 -translate-x-8 translate-y-8" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8 w-full">
          <div className="max-w-6xl">
            <div className="inline-block border border-primary-light/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-light mb-6">
              {t.hero.badge}
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
              {t.hero.titleLine1}
              <span className="block text-primary-light mt-2">{t.hero.titleLine2}</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              {t.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center bg-accent-coral px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-coral-hover rounded-xl shadow-soft hover:shadow-hover"
              >
                {t.hero.cta}
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5 rounded-xl"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="border-b border-border-soft bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border-soft">
            {badgeKeys.map((key, i) => (
              <div
                key={key}
                className="flex-1 flex flex-col items-center justify-center py-6 px-4 text-center"
              >
                <span className="text-2xl mb-2" aria-hidden="true">{badgeIcons[i]}</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-main">{t.badges[key]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="section-padding pattern-dots">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-coral">{t.features.subtitle}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-main md:text-4xl accent-line">
              {t.features.title}
            </h2>
          </div>

          <div className="mt-16 grid gap-px bg-border-soft sm:grid-cols-2 lg:grid-cols-3 border border-border-soft rounded-2xl overflow-hidden shadow-soft">
            {t.features.items.map((feature, i) => (
              <div
                key={i}
                className="bg-surface p-8 lg:p-10 group hover:bg-primary/[0.02] transition-colors"
              >
                <span className="text-3xl">{featureIcons[i]}</span>
                <h3 className="mt-4 text-lg font-semibold text-main">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS OVERVIEW */}
      <section className="section-padding relative overflow-hidden">
        <Image
          src="/programs.jpeg"
          alt="Programs background"
          fill
          className="object-cover object-[center_90%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-canvas/40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-teal">{t.programs.subtitle}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-main md:text-4xl accent-line-center">
              {t.programs.title}
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {t.programs.items.map((program, i) => (
              <div
                key={i}
                className="card-playful p-8 relative overflow-hidden"
              >
                <span className="absolute top-4 right-4 text-6xl font-bold text-border-soft select-none opacity-50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <div className="flex flex-wrap gap-2">
                    {program.subprograms?.map((sub, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                        {sub}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-main">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {program.description}
                  </p>
                  <Link
                    href="/programs"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-light transition-colors"
                  >
                    {t.programs.learnMore}
                    <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding pattern-dots">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-coral">{t.testimonials.subtitle}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-main md:text-4xl accent-line-center">
              {t.testimonials.title}
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {t.testimonials.items.map((testimonial, i) => (
              <div
                key={i}
                className="border border-border-soft bg-surface p-8 relative rounded-2xl shadow-soft hover:shadow-hover transition-shadow"
              >
                <div className="absolute top-6 right-6 w-8 h-8 bg-primary/5 shape-blob-1 flex items-center justify-center">
                  <span className="text-primary text-xs font-bold">&ldquo;</span>
                </div>
                <div className="flex gap-0.5 text-accent-coral mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-muted">
                  {testimonial.quote}
                </blockquote>
                <div className="mt-6 pt-4 border-t border-border-soft">
                  <p className="font-semibold text-sm text-main">{testimonial.name}</p>
                  <p className="text-xs text-muted">{testimonial.childAge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative bg-primary pattern-waves overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 shape-blob-1" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 shape-blob-2 translate-x-12 translate-y-12" />

        <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-24 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {t.cta.description}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center bg-white px-8 py-4 text-base font-semibold text-primary transition-all hover:bg-canvas rounded-xl shadow-soft hover:shadow-hover"
          >
            {t.cta.button}
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
