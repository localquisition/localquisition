import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Calendar, Send, Mail, Phone, MapPin } from "lucide-react";
import { RippleButton } from "@/components/ui/multi-type-ripple-buttons";

export const Route = createFileRoute("/contact")({ component: Contact });

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="px-6 pb-16 pt-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">Contact</p>
          <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Let's build your <span className="text-gradient">growth system.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/65 md:text-lg">
            Tell us about your business. We'll send a tailored proposal and book
            a free strategy call within 24 hours.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-10 lg:col-span-3"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="relative grid gap-4 md:grid-cols-2"
            >
              <Field label="Name" name="name" placeholder="Jane Smith" />
              <Field label="Business Name" name="business" placeholder="Aqua Pro Plumbing" />
              <Field label="Email" name="email" type="email" placeholder="you@business.com" />
              <Field label="Phone" name="phone" placeholder="+27 ..." />
              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-white/50">Industry</label>
                <select
                  name="industry"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none backdrop-blur-xl focus:border-cyan-300/40"
                >
                  {["Plumbing","Electrical","Roofing","HVAC","Cleaning","Security","Construction","Law Firm","Dentist","Med Spa","Real Estate","Auto Services","Other"].map(o=> <option key={o} className="bg-zinc-900">{o}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-white/50">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="What's your biggest growth challenge right now?"
                  className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none backdrop-blur-xl placeholder:text-white/35 focus:border-cyan-300/40"
                />
              </div>
              <div className="md:col-span-2 flex flex-wrap items-center gap-3 pt-2">
                <RippleButton variant="primary" type="submit">
                  {sent ? "Message sent ✓" : "Send message"} <Send className="h-4 w-4" />
                </RippleButton>
                <RippleButton variant="ghost" type="button">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </RippleButton>
              </div>
            </form>
          </motion.div>

          {/* Side info */}
          <div className="space-y-6 lg:col-span-2">
            <div className="glass rounded-3xl p-7">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl glass-strong">
                <Calendar className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">Book a free strategy call</h3>
              <p className="mt-2 text-sm text-white/60">30 minutes. No pitch. Just a clear map of where the leads are hiding in your market.</p>
              <div className="mt-5">
                <RippleButton variant="outline" className="w-full">Open calendar</RippleButton>
              </div>
            </div>

            <div className="glass rounded-3xl p-7 space-y-3">
              <InfoRow icon={Mail} label="Email" value="hello@localquisition.com" />
              <InfoRow icon={Phone} label="Phone" value="+27 (0) 12 345 6789" />
              <InfoRow icon={MapPin} label="HQ" value="South Africa · Worldwide" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", placeholder,
}: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-white/50">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none backdrop-blur-xl placeholder:text-white/35 focus:border-cyan-300/40"
      />
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl glass-strong">
        <Icon className="h-4 w-4 text-cyan-300" />
      </span>
      <div>
        <p className="text-[10px] uppercase tracking-wider text-white/40">{label}</p>
        <p className="text-sm text-white">{value}</p>
      </div>
    </div>
  );
}
