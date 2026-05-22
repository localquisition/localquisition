import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Globe, Search, MapPin, Megaphone, Server, Magnet,
  MousePointerClick, MessageCircle, ArrowUpRight,
} from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";

export const Route = createFileRoute("/services")({ component: Services });

const services = [
  { icon: Globe, title: "AI-Powered Websites", desc: "High-converting, lightning-fast sites engineered to turn visitors into booked jobs." },
  { icon: MapPin, title: "Google Business Profile Optimization", desc: "Rank in the Map Pack with active GBP management, posts, photos and reviews." },
  { icon: Search, title: "Local SEO", desc: "Citations, on-page, schema and authority building that compounds monthly." },
  { icon: Megaphone, title: "Google Ads Management", desc: "Multi-campaign PPC built around qualified local intent — not vanity clicks." },
  { icon: Server, title: "Hosting & Maintenance", desc: "Premium cloud hosting, SSL, daily backups and proactive monitoring." },
  { icon: Magnet, title: "Lead Generation Systems", desc: "End-to-end pipelines that capture, qualify and route leads automatically." },
  { icon: MousePointerClick, title: "Conversion Optimization", desc: "Continuous experimentation on copy, layouts and offers — measured by ROI." },
  { icon: MessageCircle, title: "WhatsApp Integration", desc: "Instant WhatsApp lead flow with smart routing, templates and follow-ups." },
];

function Services() {
  return (
    <>
      <section className="px-6 pb-16 pt-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">Services</p>
          <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Premium systems for <span className="text-gradient">local domination.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/60 md:text-lg">
            One subscription. Every system your service business needs to be found, chosen and booked online.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.07 }}
              className="group glass relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-400/30" />
              <div className="relative flex h-full flex-col">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl glass-strong">
                  <s.icon className="h-5 w-5 text-white transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1 text-xs text-white/50 transition-colors group-hover:text-white">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
