import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tuition & Admissions | Yumnacare",
  description:
    "Simple, transparent pricing for Yumnacare daycare. View tuition rates and learn about our enrollment process.",
};

const pricingPlans = [
  { name: "Infant", ages: "0–12 months", fullTime: "$1,800", partTime: "$1,200", popular: false },
  { name: "Toddler", ages: "1–3 years", fullTime: "$1,500", partTime: "$1,000", popular: true },
  { name: "Preschool", ages: "3–5 years", fullTime: "$1,300", partTime: "$900", popular: false },
];

const included = [
  "Organic meals and snacks (breakfast, lunch, afternoon snack)",
  "All curriculum materials and supplies",
  "Live camera access",
  "Daily progress reports and photos",
  "Sunscreen, diapers, and wipes (infant/toddler rooms)",
];

const steps = [
  { number: 1, title: "Schedule a Tour", description: "Visit our center, meet our team, and see the classrooms in action." },
  { number: 2, title: "Submit an Application", description: "Complete a short enrollment form. We'll confirm availability within 48 hours." },
  { number: 3, title: "Secure Your Spot", description: "Pay the registration fee and complete onboarding paperwork. Welcome to the Yumnacare family." },
];

const faqs = [
  { question: "Do you offer sibling discounts?", answer: "Yes — ask us about our sibling pricing during your tour." },
  { question: "What is your sick policy?", answer: "Children with fever, vomiting, or contagious illness must stay home for 24 hours after symptoms resolve." },
  { question: "Can I switch between full-time and part-time?", answer: "Schedule changes can be made with 30 days' notice, subject to availability." },
  { question: "What are your hours of operation?", answer: "Monday–Friday, 7:00 AM – 6:00 PM." },
];

export default function TuitionPage() {
  return (
    <div className="bg-warm-white">
      {/* Header */}
      <section className="relative overflow-hidden">
        <Image
          src="/tuitution.jpg"
          alt="Tuition background"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        <div className="absolute top-0 left-0 w-48 h-48 bg-accent/5 clip-hexagon -translate-x-12 -translate-y-12" />
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center relative pointer-events-none">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-light mb-4">Tuition & Admissions</p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-white/70">
            We believe you deserve to know exactly what you&apos;re paying for.
          </p>
        </div>
      </section>

      {/* Pricing Cards - Angular geometric */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative border p-8 transition-all ${
                  plan.popular
                    ? "border-primary bg-surface shadow-lg"
                    : "border-border bg-surface hover:border-primary/30"
                }`}
              >
                {/* Geometric top accent for popular */}
                {plan.popular && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                      Most Popular
                    </span>
                  </>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-dark">{plan.name}</h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-warm-gray mt-1">{plan.ages}</p>
                </div>
                <div className="mt-8 space-y-3">
                  <div className="border border-border p-4 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-warm-gray">Full-time (5 days)</p>
                    <p className="mt-1 text-3xl font-bold text-dark">{plan.fullTime}<span className="text-sm font-normal text-warm-gray">/mo</span></p>
                  </div>
                  <div className="border border-border p-4 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-warm-gray">Part-time (3 days)</p>
                    <p className="mt-1 text-3xl font-bold text-dark">{plan.partTime}<span className="text-sm font-normal text-warm-gray">/mo</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-surface-alt geo-grid">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-dark accent-line-center">What&apos;s Included</h2>
          </div>
          <div className="border border-border bg-surface">
            {included.map((item, i) => (
              <div key={item} className={`flex items-start gap-4 px-6 py-4 ${i !== included.length - 1 ? "border-b border-border" : ""}`}>
                <span className="mt-1 w-2 h-2 bg-primary shrink-0 clip-diamond" />
                <span className="text-sm text-dark">{item}</span>
              </div>
            ))}
          </div>

          {/* Additional Fees */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="border border-border bg-surface p-6 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-warm-gray">Registration Fee (one-time)</p>
              <p className="mt-2 text-2xl font-bold text-dark">$150</p>
            </div>
            <div className="border border-border bg-surface p-6 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-warm-gray">Annual Activity Fee</p>
              <p className="mt-2 text-2xl font-bold text-dark">$200</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Process - Geometric steps */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Getting Started</p>
            <h2 className="mt-3 text-2xl font-bold text-dark accent-line-center">Enrollment Process</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px bg-border" />
                )}
                <div className="mx-auto w-12 h-12 border-2 border-primary flex items-center justify-center text-lg font-bold text-primary relative bg-warm-white">
                  {step.number}
                </div>
                <h3 className="mt-4 text-base font-semibold text-dark">{step.title}</h3>
                <p className="mt-2 text-sm text-warm-gray">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface-alt">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-dark accent-line-center">Frequently Asked Questions</h2>
          </div>
          <div className="border border-border bg-surface divide-y divide-border">
            {faqs.map((faq) => (
              <div key={faq.question} className="px-6 py-5">
                <h3 className="text-sm font-semibold text-dark">{faq.question}</h3>
                <p className="mt-2 text-sm text-warm-gray">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-primary geo-pattern-dark overflow-hidden">
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 clip-hexagon translate-x-10 translate-y-10" />
        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Ready to Join the Yumnacare Family?
          </h2>
          <p className="mt-3 text-white/70">Spots fill quickly — start your application today.</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center bg-white px-8 py-4 text-base font-semibold text-primary transition-all hover:bg-warm-white"
          >
            Start Your Application
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
