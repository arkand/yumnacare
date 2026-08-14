import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ProgramsContent from "./ProgramsContent";

export const metadata: Metadata = {
  title: "Programs | Yumnacare",
  description:
    "From their first smile to their first day of school — we meet your child exactly where they are.",
};



const scheduleItems = [
  { time: "7:00 AM", activity: "Arrival & Free Play" },
  { time: "8:30 AM", activity: "Circle Time" },
  { time: "9:00 AM", activity: "Learning Activities" },
  { time: "10:00 AM", activity: "Outdoor Play" },
  { time: "11:00 AM", activity: "Lunch" },
  { time: "12:00 PM", activity: "Nap / Rest Time" },
  { time: "2:00 PM", activity: "Afternoon Activities" },
  { time: "3:00 PM", activity: "Snack Time" },
  { time: "3:30 PM", activity: "Creative Play" },
  { time: "5:00–6:00 PM", activity: "Pickup" },
];

export default function ProgramsPage() {
  return (
    <div className="bg-warm-white">
      {/* Page Header - Angular */}
      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80"
          alt="Children learning"
          fill
          className="object-cover object-[center_60%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 clip-diamond translate-x-10 -translate-y-10" />
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-light mb-4">Our Programs</p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Programs Designed for Every Stage of Growth
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            From their first smile to their first day of school — we meet your
            child exactly where they are.
          </p>
        </div>
      </section>

      {/* Programs - Structured geometric cards */}
      <ProgramsContent />

      {/* Daily Schedule - Geometric timeline */}
      <section className="section-padding bg-surface-alt geo-grid">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Daily Routine</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark accent-line-center">
              A Day at Yumnacare
            </h2>
          </div>

          <div className="grid gap-px bg-border border border-border">
            {scheduleItems.map((item) => (
              <div
                key={item.time}
                className="flex items-center bg-surface px-6 py-4"
              >
                <span className="w-28 shrink-0 text-sm font-semibold text-primary font-mono">
                  {item.time}
                </span>
                <div className="w-2 h-2 bg-accent clip-diamond shrink-0 mx-4" />
                <span className="text-sm font-medium text-dark">{item.activity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark">
            Find the right program for your child.
          </h2>
          <p className="mt-4 text-warm-gray">
            We&apos;d love to show you around and answer any questions.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center bg-accent px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Schedule a Visit
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
