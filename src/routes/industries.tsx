import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Wrench, Zap, Home as HomeIcon, ThermometerSun, Sparkles as SparkIcon,
  ShieldCheck, HardHat, Scale, Smile, Flower, Building2, Car, ArrowRight, CheckCircle2,
} from "lucide-react";
import { RippleButton } from "@/components/ui/multi-type-ripple-buttons";
import { FinalCTA } from "@/components/FinalCTA";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/industries")({ component: Industries });

interface Industry {
  key: string; label: string; icon: React.ElementType;
  pain: string[]; help: string[]; features: string[]; strategy: string;
}

const industries: Industry[] = [
  { key: "plumbing", label: "Plumbing", icon: Wrench,
    pain: ["Inconsistent emergency call volume", "Low Google Maps visibility", "Losing to franchise competitors"],
    help: ["24/7 lead-capture website", "GBP optimized for 'plumber near me'", "Call tracking on every campaign"],
    features: ["Instant WhatsApp quotes", "Click-to-call hero", "Service area schema"],
    strategy: "Local SEO + emergency-intent Google Ads + GBP dominance in 5km radius." },
  { key: "electrical", label: "Electrical", icon: Zap,
    pain: ["Hard to differentiate from competitors", "Outdated brochure website", "No system for repeat customers"],
    help: ["Premium credibility-first design", "Trust badges & certifications", "Email & WhatsApp re-engagement"],
    features: ["Service-area landing pages", "Inspection booking forms", "Review automation"],
    strategy: "High-intent PPC + neighborhood-targeted SEO + reputation engine." },
  { key: "roofing", label: "Roofing", icon: HomeIcon,
    pain: ["Seasonal lead spikes & droughts", "Long sales cycles", "Tire-kicker leads"],
    help: ["Qualifier forms before booking", "Storm-season campaign automation", "Drip nurture for slow leads"],
    features: ["Roof inspection scheduler", "Before/after gallery", "Financing CTAs"],
    strategy: "Seasonal Ads + lead scoring + landing pages per service vertical." },
  { key: "hvac", label: "HVAC", icon: ThermometerSun,
    pain: ["Service membership churn", "Reactive instead of recurring revenue", "Generic competitor websites"],
    help: ["Membership-focused funnels", "Service plan landing pages", "Premium animated brand"],
    features: ["Maintenance plan signup", "Live availability widgets", "Click-to-text"],
    strategy: "Membership-first funnels + branded search + Maps & local SEO." },
  { key: "cleaning", label: "Cleaning", icon: SparkIcon,
    pain: ["Race-to-the-bottom pricing", "Hard to win recurring contracts", "Low booking conversion"],
    help: ["Premium positioning & visuals", "Recurring service offers", "Instant online quotes"],
    features: ["Quote calculator", "Subscription booking", "WhatsApp reminders"],
    strategy: "Premium brand + targeted PPC + automated quote-to-booking flow." },
  { key: "security", label: "Security", icon: ShieldCheck,
    pain: ["Crowded armed-response market", "Trust & credibility gap", "Long enquiry-to-install cycle"],
    help: ["Authority-first website", "Compliance & accreditation badges", "Site survey booking system"],
    features: ["Quote request automation", "Service area maps", "Live response timing"],
    strategy: "Trust-led SEO + neighborhood ads + survey-booking automations." },
  { key: "construction", label: "Construction", icon: HardHat,
    pain: ["Project pipeline is unpredictable", "Word-of-mouth only", "Outdated portfolio site"],
    help: ["Cinematic portfolio website", "Lead-qualifying enquiry flow", "Case study system"],
    features: ["Animated project gallery", "Tender-ready brand assets", "Phased project enquiry"],
    strategy: "Portfolio-led SEO + retargeting + premium brand experience." },
  { key: "law", label: "Law Firms", icon: Scale,
    pain: ["Highly competitive CPCs", "Generic, untrustworthy websites", "Lead leakage at intake"],
    help: ["Authority & trust-first design", "Practice-area landing pages", "Intake automation"],
    features: ["Consultation booking", "Case-type qualifier forms", "Encrypted document upload"],
    strategy: "Practice-area SEO + tightly geofenced Ads + intake automation." },
  { key: "dentists", label: "Dentists", icon: Smile,
    pain: ["Low new-patient flow", "Insurance confusion", "Cancellation rates"],
    help: ["New-patient promo landing pages", "Online booking", "Review generation"],
    features: ["Smile gallery", "Insurance verification", "SMS confirmations"],
    strategy: "Service-line PPC + Maps + automated patient re-activation." },
  { key: "medspa", label: "Med Spas", icon: Flower,
    pain: ["Brand looks like every competitor", "Inconsistent treatment bookings", "Low online conversion"],
    help: ["Luxury brand system", "Treatment-specific funnels", "Membership upsells"],
    features: ["Treatment menu", "Consultation booking", "Loyalty program"],
    strategy: "Luxury brand + Instagram-aligned site + premium PPC + retention." },
  { key: "realestate", label: "Real Estate", icon: Building2,
    pain: ["Generic Zillow-style sites", "Slow buyer/seller lead nurture", "Brand parity"],
    help: ["Cinematic property storytelling", "Buyer & seller funnels", "Automated nurture"],
    features: ["Property gallery", "Valuation tool", "WhatsApp viewings"],
    strategy: "Listing SEO + buyer-intent PPC + agent personal brand systems." },
  { key: "auto", label: "Auto Services", icon: Car,
    pain: ["Bay utilization is uneven", "Generic auto-shop sites", "Lost calls = lost revenue"],
    help: ["Booking-first site design", "Call tracking + recording", "Service-specific landing pages"],
    features: ["Online booking", "Service quote system", "WhatsApp updates"],
    strategy: "Service-type PPC + Maps dominance + booking-first conversion design." },
];

function Industries() {
  const [active, setActive] = useState(industries[0].key);
  const current = industries.find((i) => i.key === active)!;

  return (
    <>
      <section className="px-6 pb-12 pt-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">Industries</p>
          <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Built for the industries that <span className="text-gradient">live & die by local search.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/60 md:text-lg">
            Each system is tuned to the specific pain, intent and customer journey of your trade.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          {/* Tabs */}
          <div className="glass-strong rounded-3xl p-3">
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => {
                const isActive = ind.key === active;
                return (
                  <button
                    key={ind.key}
                    onClick={() => setActive(ind.key)}
                    className={cn(
                      "group relative inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm transition-all duration-300",
                      isActive ? "text-white" : "text-white/55 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="ind-pill"
                        className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/15 to-white/[0.04] border border-white/15"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <ind.icon className="relative h-4 w-4" />
                    <span className="relative">{ind.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 grid gap-6 lg:grid-cols-5"
            >
              <div className="glass-strong rounded-3xl p-8 lg:col-span-3">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl glass">
                    <current.icon className="h-5 w-5 text-cyan-300" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">{current.label}</h2>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <Block title="Pain points" items={current.pain} tone="rose" />
                  <Block title="How we help" items={current.help} tone="cyan" />
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-wider text-white/40">Lead generation strategy</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{current.strategy}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {current.features.map((f) => (
                    <span key={f} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/75">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <Link to="/contact">
                    <RippleButton variant="primary">
                      Get a {current.label} growth plan <ArrowRight className="h-4 w-4" />
                    </RippleButton>
                  </Link>
                </div>
              </div>

              {/* Mockup */}
              <div className="lg:col-span-2">
                <div className="glass-strong relative overflow-hidden rounded-3xl p-6">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
                  <p className="text-xs uppercase tracking-wider text-white/40">Sample dashboard</p>
                  <p className="mt-1 text-lg font-semibold text-white">{current.label} growth panel</p>
                  <div className="mt-5 space-y-3">
                    {[
                      { k: "New leads / mo", v: "+184" },
                      { k: "Map pack rank", v: "#1 – #3" },
                      { k: "Call conversion", v: "62%" },
                      { k: "Cost per lead", v: "↓ 41%" },
                    ].map((s, i) => (
                      <div key={s.k} className="glass flex items-center justify-between rounded-2xl px-4 py-3">
                        <span className="text-xs text-white/55">{s.k}</span>
                        <span className="text-sm font-semibold text-gradient" style={{ animationDelay: `${i * 0.1}s` }}>
                          {s.v}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex h-20 items-end gap-1.5 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                    {[30, 45, 38, 55, 62, 75, 70, 88, 92, 96].map((h, i) => (
                      <div key={i} className="flex-1 rounded-md bg-gradient-to-t from-cyan-400/40 to-cyan-300" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

function Block({ title, items, tone }: { title: string; items: string[]; tone: "rose" | "cyan" }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-white/40">{title}</p>
      <ul className="mt-3 space-y-2.5">
        {items.map((p) => (
          <li key={p} className="flex items-start gap-2.5 text-sm text-white/80">
            <CheckCircle2 className={cn("mt-0.5 h-4 w-4 flex-none", tone === "cyan" ? "text-cyan-300" : "text-rose-300")} />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
