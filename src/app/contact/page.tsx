"use client";

import { useState } from "react";

export default function ContactPage() {
  const [contactMethod, setContactMethod] = useState("email");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you within one business day.");
  };

  return (
    <div className="bg-warm-white">
      {/* Page Header */}
      <section className="relative overflow-hidden h-[400px] bg-dark">
        <iframe
          src="https://maps.google.com/maps?q=PUP%20sektor%205%20Blok%20Q1%20no%202,%20Babelan,%20Bekasi&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center relative pointer-events-none flex flex-col items-center justify-center h-full">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-light mb-4">Get in Touch</p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            We&apos;d Love to Hear From You
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">
            Have a question? Want to schedule a tour? We respond within one business day.
          </p>
        </div>
      </section>

      {/* Two-column Layout */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Contact Form (3/5) */}
            <div className="lg:col-span-3">
              <div className="border border-border bg-surface p-6 md:p-8">
                <h2 className="text-xl font-bold text-dark mb-6 accent-line">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-warm-gray mb-2">
                        Parent/Guardian Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-border bg-warm-white text-sm text-dark focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-warm-gray mb-2">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-border bg-warm-white text-sm text-dark focus:outline-none focus:border-primary transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone + Child's Age row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-warm-gray mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-border bg-warm-white text-sm text-dark focus:outline-none focus:border-primary transition-colors"
                        placeholder="+62 812-3456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="childAge" className="block text-xs font-semibold uppercase tracking-wider text-warm-gray mb-2">
                        Child&apos;s Age
                      </label>
                      <select
                        id="childAge"
                        name="childAge"
                        className="w-full px-4 py-3 border border-border bg-warm-white text-sm text-dark focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="">Select age range</option>
                        <option value="1-2">1–2 years</option>
                        <option value="2-3">2–3 years</option>
                        <option value="3-4">3–4 years</option>
                        <option value="4-5">4–5 years</option>
                        <option value="4-5">5–6 years</option>
                        <option value="4-5">7–9 years</option>
                        <option value="4-5">10–12 years</option>
                        <option value="12+">12+ years</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-warm-gray mb-2">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-border bg-warm-white text-sm text-dark focus:outline-none focus:border-primary transition-colors resize-vertical"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  {/* Contact Method */}
                  <fieldset>
                    <legend className="block text-xs font-semibold uppercase tracking-wider text-warm-gray mb-3">
                      Preferred Contact Method
                    </legend>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { value: "email", label: "Email" },
                        { value: "phone", label: "Phone" },
                        { value: "whatsapp", label: "WhatsApp" },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center gap-2 border px-4 py-2 cursor-pointer transition-colors text-sm ${contactMethod === option.value
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border text-warm-gray hover:border-primary/30"
                            }`}
                        >
                          <input
                            type="radio"
                            name="contactMethod"
                            value={option.value}
                            checked={contactMethod === option.value}
                            onChange={(e) => setContactMethod(e.target.value)}
                            className="sr-only"
                          />
                          <span className={`w-3 h-3 border-2 flex items-center justify-center ${contactMethod === option.value ? "border-primary" : "border-border"
                            }`}>
                            {contactMethod === option.value && (
                              <span className="w-1.5 h-1.5 bg-primary" />
                            )}
                          </span>
                          {option.label}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Contact Info (2/5) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Details */}
              <div className="border border-border bg-surface p-6">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-dark mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {[
                    { label: "Address", value: "PUP sektor 5 Blok Q1 no 2, Babelan, Bekasi" },
                    { label: "Phone", value: "0813-1963-0307 - 0896-3785-7330", href: "tel:+0813-1963-0307" },
                    { label: "Email", value: "hello@yumnacare.com", href: "mailto:hello@yumnacare.com" },
                    { label: "Hours", value: "Mon–Fri, 7:00 AM – 6:00 PM" },
                    { label: "WhatsApp1", value: "0813-1963-0307", href: "https://wa.me/0813-1963-0307" },
                    { label: "WhatsApp2", value: "0896-3785-7330", href: "https://wa.me/0896-3785-7330" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
                      <span className="mt-1 w-1.5 h-1.5 bg-primary shrink-0" />
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-warm-gray">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-primary hover:text-primary-light transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-sm text-dark">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid gap-2">
                <a href="/contact" className="block border border-primary bg-primary px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark">
                  Book a Tour
                </a>
                <a href="tel:+0813-1963-0307 - 0896-3785-7330" className="block border border-border px-5 py-3 text-center text-sm font-semibold text-dark transition-colors hover:border-primary hover:text-primary">
                  Call Us Now
                </a>
              </div>

              {/* Map Placeholder - Geometric */}
              {/*
              <div className="border border-border bg-surface-alt h-48 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 geo-grid opacity-50" />
                <div className="relative text-center">
                  <div className="w-8 h-8 mx-auto border-2 border-warm-gray/30 clip-diamond flex items-center justify-center">
                    <span className="text-warm-gray text-xs">◆</span>
                  </div>
                  <p className="mt-2 text-xs font-medium text-warm-gray">Google Map</p>
                  <p className="text-[10px] text-warm-gray/60">Embed requires API key</p>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
