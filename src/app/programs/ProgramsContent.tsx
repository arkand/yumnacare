"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";

export default function ProgramsContent() {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 space-y-16">
        {t.programs.items.map((program, index) => (
          <div key={index} className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Text side */}
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl font-bold text-border select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {program.subprograms?.map((sub, idx) => (
                  <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                    {sub}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl font-bold text-dark">{program.title}</h2>
              <p className="mt-2 text-base font-medium text-accent">{program.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-warm-gray">{program.copy}</p>
              <ul className="mt-6 space-y-3">
                {program.highlights?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 w-2 h-2 bg-primary shrink-0 clip-diamond" />
                    <span className="text-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image rendering */}
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <div className="relative">
                <div className="absolute -inset-3 border border-border" />
                <div className="relative aspect-[4/3] bg-surface-alt border border-border flex items-center justify-center overflow-hidden">
                  <Image
                    src={index === 0 ? "/daycare.jpg" : index === 1 ? "/bimbel.png" : "/pkbm.png"}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
