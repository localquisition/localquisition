import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Minus, Crown, Sparkles } from "lucide-react";
import { AnimatedGlassyPricing } from "@/components/ui/animated-glassy-pricing";
import { RippleButton } from "@/components/ui/multi-type-ripple-buttons";
import { FinalCTA } from "@/components/FinalCTA";

export const Route = createFileRoute("/pricing")({ component: Pricing });

const comparison = [
  { feature: "Hosting", starter: "Secure", accel: "Secure + Monitoring", dom: "Premium Cloud" },
  { feature: "SEO", starter: "Foundations", accel: "Local Optimized", dom: "Aggressive Multi-Geo" },
  { feature: "Google Ads", starter: false, accel: "Setup + Management", dom: "Multi-Campaign" },
  { feature: "GBP Optimization", starter: "Initial Setup", accel: "Active Management", dom: "Advanced" },
  { feature: "Lead Tracking", starter: false, accel: "Integrated", dom: "Dashboard" },
  { feature: "Landing Pages", starter: false, accel: false, dom: "Included" },
  { feature: "Analytics", starter: "Basic", accel: "Monthly Reporting", dom: "Advanced" },
  { feature: "Maintenance", starter: "Basic", accel: "Included", dom: "Performance Scaling" },
  { feature: "Support", starter: "Standard", accel: "Standard", dom: "Priority" },
];

const corporateFeatures = [
  "Bespoke Multi-Page Website Design",
  "Advanced Animations & Interactions",
  "Premium Visual Systems",
  "Cloud Hosting Infrastructure",
  "SSL Security Certificate",
  "Daily Automated Backups",
  "Security Monitoring & Updates",
  "30 Minutes Monthly Content Edits",
  "Premium UI/UX Architecture",
  "Mobile & Tablet Optimization",
  "SEO Foundation Setup",
];

function Pricing() {
  return (
    <>
      <section className="px-6 pb-16 pt-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">Pricing</p>
          <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Simple pricing. Built for{" "}
            <span className="text-gradient">local business growth.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/60 md:text-lg">
            Flexible monthly growth systems designed to help service businesses
            generate more leads, dominate Google locally, and scale consistently.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              AI-Powered Lead Generation Packages
            </h2>
            <p className="mt-3 text-white/60">
              Everything your business needs to generate more local enquiries, calls and booked jobs.
            </p>
          </div>
          <AnimatedGlassyPricing />
        </div>
      </section>

      {/* CORPORATE */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200/80">For Established Brands & Corporate Businesses</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              The <span className="text-gradient">Premium Brand Asset</span>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-amber-300/20 via-cyan-400/10 to-purple-500/20 blur-2xl" />
            <div className="glass-strong relative grid gap-10 overflow-hidden rounded-[2rem] p-10 md:p-14 lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-200/5 px-3 py-1.5 text-[11px] uppercase tracking-wider text-amber-200">
                  <Crown className="h-3.5 w-3.5" /> Premium
                </div>
                <h3 className="mt-5 text-3xl font-semibold text-white md:text-4xl">
                  Bespoke, world-class digital brand experience.
                </h3>
                <p className="mt-4 max-w-md text-white/65">
                  Engineered for businesses that require elevated design, premium positioning and a world-class online presence.
                </p>
                <div className="mt-7 flex items-baseline gap-2">
                  <span className="text-5xl font-semibold text-gradient">R18,500 – R35,000+</span>
                </div>
                <p className="mt-2 text-sm text-white/55">+ R490/month upkeep</p>
                <p className="mt-4 text-xs text-white/45">
                  Excludes active Google Ads management & active GBP posting.
                </p>
                <div className="mt-8">
                  <RippleButton variant="primary">Request Premium Proposal</RippleButton>
                </div>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {corporateFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-to-br from-amber-200 to-amber-400 text-black">
                      <Sparkles className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Compare <span className="text-gradient">monthly packages</span>
            </h2>
          </div>
          <div className="glass-strong overflow-hidden rounded-3xl">
            <p className="border-b border-white/10 px-6 py-3 text-center text-[11px] uppercase tracking-wider text-white/40 md:hidden">
              Swipe to compare →
            </p>
            <div className="overflow-x-auto">
              <div className="min-w-[720px]">
                <div className="grid grid-cols-4 gap-4 border-b border-white/10 bg-white/[0.03] px-6 py-5 text-xs uppercase tracking-wider text-white/50">
                  <div>Feature</div>
                  <div>Local Starter</div>
                  <div className="text-cyan-300">Lead Accelerator</div>
                  <div>Market Dominator</div>
                </div>
                {comparison.map((row, i) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-4 items-center gap-4 px-6 py-4 text-sm ${
                      i % 2 ? "bg-white/[0.015]" : ""
                    }`}
                  >
                    <div className="min-w-0 break-words font-medium text-white/90">{row.feature}</div>
                    <Cell value={row.starter} />
                    <Cell value={row.accel} highlight />
                    <Cell value={row.dom} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

function Cell({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
  if (value === false)
    return (
      <div className="text-white/30">
        <Minus className="h-4 w-4" />
      </div>
    );
  if (value === true)
    return (
      <div className="text-emerald-300">
        <Check className="h-4 w-4" />
      </div>
    );
  return (
    <div className={`text-sm ${highlight ? "text-white" : "text-white/70"}`}>
      {value}
    </div>
  );
}
