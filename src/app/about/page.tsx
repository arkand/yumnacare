import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us — Yumnacare",
  description:
    "Learn about Yumnacare's story, values, and the team that makes our daycare a place that feels like home.",
};

const values = [
  {
    icon: "◆",
    title: "Safety First",
    description: "Secure access, live cameras, background-checked staff, and CPR-certified caregivers. Your child's safety is non-negotiable.",
  },
  {
    icon: "◆",
    title: "Play-Based Learning",
    description: "We believe play is a child's work. Our curriculum is rooted in developmental research and delivered through joy.",
  },
  {
    icon: "◆",
    title: "Nurturing Environment",
    description: "Warm, calm spaces. Patient caregivers. A rhythm that respects childhood instead of rushing it.",
  },
  {
    icon: "◆",
    title: "Transparent Communication",
    description: "No surprises. Daily updates, open-door policy, live camera access, and honest conversations about your child's growth.",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    initials: "SJ",
    role: "Lead Infant Caregiver",
    years: 8,
    quote: "Every baby deserves to feel completely safe and deeply loved.",
  },
  {
    name: "Maria Rodriguez",
    initials: "MR",
    role: "Toddler Room Lead",
    years: 6,
    quote: "I love watching toddlers discover they can do things all by themselves.",
  },
  {
    name: "David Chen",
    initials: "DC",
    role: "Preschool Teacher",
    years: 10,
    quote: "My goal is to make every child excited about learning before they even start school.",
  },
  {
    name: "Amara Williams",
    initials: "AW",
    role: "Program Director",
    years: 12,
    quote: "A great daycare starts with great people. I'm proud of every single person on our team.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-warm-white">
      {/* Page Header */}
      <section className="relative overflow-hidden">
        <Image
          src="/us.jpeg"
          alt="About Us background"
          fill
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 clip-hexagon -translate-x-8 translate-y-8" />
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center relative pointer-events-none">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-light mb-4">About Us</p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            A Place That Feels Like Home — Because It Should
          </h1>
        </div>
      </section>

      {/* Our Story - Balanced asymmetric layout */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Label */}
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent accent-line">Our Story</p>
            </div>
            {/* Content */}
            <div className="lg:col-span-3 space-y-6 text-base leading-relaxed text-warm-gray">
              <p>
                Yumnacare was founded on a simple belief: the early years shape
                everything. We wanted to create a space where children feel safe
                enough to be curious, brave enough to try, and loved enough to
                thrive.
              </p>
              <p>
                Every decision we make — from the food we serve to the caregivers we
                hire — is guided by one question:{" "}
                <span className="font-semibold text-dark">
                  Would this be good enough for our own children?
                </span>
              </p>
              <p>
                We&apos;re not the biggest daycare. We don&apos;t want to be. We
                want to be the one where every child is known by name, every parent
                feels heard, and every day ends with a story worth telling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geometric divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="divider-geometric" />
      </div>

      {/* Our Values - Structured grid with borders */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Foundation</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark accent-line-center">
              Our Values
            </h2>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2 border border-border">
            {values.map((value) => (
              <div key={value.title} className="bg-surface p-8 lg:p-10">
                <span className="text-primary text-lg">{value.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-dark">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team - Geometric avatars */}
      <section className="section-padding bg-surface-alt geo-dots">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">The People</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark accent-line-center">
              Our Team
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm text-warm-gray">
              Dedicated, experienced, and genuinely passionate about early childhood.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="border border-border bg-surface p-6 text-center">
                {/* Hexagonal avatar */}
                <div className="mx-auto w-20 h-20 bg-primary/10 clip-hexagon flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">{member.initials}</span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-dark">{member.name}</h3>
                <p className="text-xs font-medium text-primary">{member.role}</p>
                <p className="text-xs text-warm-gray">{member.years} years experience</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs italic leading-relaxed text-warm-gray">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-primary geo-pattern-dark overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 clip-diamond translate-x-8 -translate-y-8" />
        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Want to meet us in person?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center bg-white px-8 py-4 text-base font-semibold text-primary transition-all hover:bg-warm-white"
          >
            Book a Tour
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
