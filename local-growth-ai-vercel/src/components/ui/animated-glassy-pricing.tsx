import { motion } from "framer-motion";
import { Check, Sparkles, Crown, Rocket, Zap } from "lucide-react";
import { RippleButton } from "./multi-type-ripple-buttons";
import { cn } from "@/lib/utils";

export interface PricingTier {
  name: string;
  price: string;
  priceSuffix?: string;
  description: string;
  features: string[];
  adSpend?: string;
  cta: string;
  badge?: string;
  icon: React.ElementType;
  highlight?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "The Local Starter",
    price: "R990",
    priceSuffix: "/month",
    description:
      "Perfect for businesses needing a professional online presence and strong local visibility.",
    icon: Zap,
    features: [
      'High-Converting "Free" Website',
      "Secure Hosting",
      "Mobile Optimization",
      "Basic Maintenance",
      "Initial Google Business Profile Setup",
      "Local SEO Foundations",
      "WhatsApp Integration",
      "Contact Forms",
      "Fast Loading Infrastructure",
    ],
    adSpend: "R0 — Organic Growth Focus",
    cta: "Get Started",
  },
  {
    name: "The Lead Accelerator",
    price: "R1,490",
    priceSuffix: "/month",
    description:
      "Built for businesses wanting consistent inbound calls, WhatsApp leads and Google visibility.",
    icon: Rocket,
    badge: "Most Popular",
    highlight: true,
    features: [
      'High-Converting "Free" Website',
      "Secure Hosting",
      "Active GBP Management",
      "Google Ads Setup & Management",
      "Lead Tracking Integration",
      "Local SEO Optimization",
      "Conversion Optimization",
      "WhatsApp Lead System",
      "Monthly Reporting",
      "Google Maps Optimization",
    ],
    adSpend: "R1,500 – R2,500/month paid directly to Google (PPC)",
    cta: "Accelerate My Growth",
  },
  {
    name: "The Market Dominator",
    price: "R2,490",
    priceSuffix: "/month",
    description:
      "Aggressive multi-campaign growth systems for businesses ready to dominate their local market.",
    icon: Crown,
    features: [
      'High-Converting "Free" Website',
      "Premium Hosting",
      "Advanced GBP Optimization",
      "Multi-Campaign Google Ads",
      "Conversion Funnel Optimization",
      "Landing Page Systems",
      "Aggressive Local SEO",
      "Advanced Analytics",
      "Lead Tracking Dashboard",
      "Performance Scaling Systems",
      "Priority Support",
    ],
    adSpend: "R3,000+ / month paid directly to Google (PPC)",
    cta: "Dominate My Market",
  },
];

export function AnimatedGlassyPricing() {
  return (
    <div className="relative">
      <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
        {tiers.map((tier, i) => (
          <PricingCard key={tier.name} tier={tier} index={i} />
        ))}
      </div>
    </div>
  );
}

function PricingCard({ tier, index }: { tier: PricingTier; index: number }) {
  const Icon = tier.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative flex flex-col",
        tier.highlight && "lg:-my-4 lg:scale-[1.03]"
      )}
    >
      {tier.highlight && (
        <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-cyan-400/40 via-blue-500/20 to-purple-500/30 opacity-80 blur-xl" />
      )}
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition-all duration-500",
          tier.highlight
            ? "glass-strong glow-cyan border-white/20"
            : "glass hover:border-white/20 hover:-translate-y-1"
        )}
      >
        {/* Inner shimmer */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <div
            className="absolute -inset-x-20 -top-20 h-40 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-2xl"
            style={{ animation: "float 6s ease-in-out infinite" }}
          />
        </div>

        {tier.badge && (
          <div className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur-xl">
            <Sparkles className="h-3 w-3" />
            {tier.badge}
          </div>
        )}

        <div className="relative">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl glass">
            <Icon className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/60">
            {tier.description}
          </p>
        </div>

        <div className="mt-8 flex items-baseline gap-1">
          <span className="text-5xl font-semibold tracking-tight text-gradient">
            {tier.price}
          </span>
          {tier.priceSuffix && (
            <span className="text-sm text-white/50">{tier.priceSuffix}</span>
          )}
        </div>

        {tier.adSpend && (
          <p className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/60">
            <span className="font-medium text-white/80">Ad spend:</span>{" "}
            {tier.adSpend}
          </p>
        )}

        <ul className="mt-8 space-y-3">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-white/75">
              <span
                className={cn(
                  "mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full",
                  tier.highlight
                    ? "bg-gradient-to-br from-cyan-300 to-blue-500 text-black"
                    : "bg-white/10 text-white"
                )}
              >
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-4">
          <RippleButton
            variant={tier.highlight ? "primary" : "outline"}
            className="w-full"
          >
            {tier.cta}
          </RippleButton>
        </div>
      </div>
    </motion.div>
  );
}
