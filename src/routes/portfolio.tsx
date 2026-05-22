import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TrendingUp, Phone, MapPin, Star, ArrowUpRight } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";

export const Route = createFileRoute("/portfolio")({ component: Portfolio });

const cases = [
  {
    name: "Aqua Pro Plumbing",
    industry: "Plumbing · Cape Town",
    before: { rank: "Page 3", leads: 12 },
    after: { rank: "#1 Map Pack", leads: 184 },
    growth: "+1,433% leads",
    img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80",
    accent: "from-cyan-400/30 to-blue-600/20",
  },
  {
    name: "Volt & Wire Electrical",
    industry: "Electrical · Johannesburg",
    before: { rank: "Not ranking", leads: 6 },
    after: { rank: "Top 3 in 24 keywords", leads: 142 },
    growth: "+2,266% visibility",
    img: "https://images.unsplash.com/photo-1565608087341-404b25492fee?auto=format&fit=crop&w=1200&q=80",
    accent: "from-amber-300/30 to-rose-500/20",
  },
  {
    name: "Crown Roofing Co.",
    industry: "Roofing · Durban",
    before: { rank: "Page 2", leads: 19 },
    after: { rank: "#1 Local", leads: 211 },
    growth: "+1,010% booked jobs",
    img: "https://images.unsplash.com/photo-1632323093555-7af0c1d12d1d?auto=format&fit=crop&w=1200&q=80",
    accent: "from-purple-500/30 to-cyan-400/20",
  },
  {
    name: "Bright Smile Dental",
    industry: "Dental · Pretoria",
    before: { rank: "Inconsistent", leads: 28 },
    after: { rank: "Map Pack #1", leads: 312 },
    growth: "+1,014% new patients",
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80",
    accent: "from-emerald-300/30 to-cyan-500/20",
  },
];

function Portfolio() {
  return (
    <>
      <section className="px-6 pb-16 pt-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">Portfolio · Results</p>
          <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Real businesses. <span className="text-gradient">Real growth.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/60 md:text-lg">
            Snapshots of the systems we've shipped — and the local domination they unlocked.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-8">
          {cases.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-strong relative overflow-hidden rounded-[2rem] p-3"
            >
              <div className={`grid gap-3 md:grid-cols-5 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative md:col-span-3">
                  <div className={`pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br ${c.accent} blur-3xl`} />
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
                    <img
                      src={c.img}
                      alt={c.name}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                      <div>
                        <p className="text-xs text-white/70">{c.industry}</p>
                        <h3 className="text-xl font-semibold text-white">{c.name}</h3>
                      </div>
                      <span className="glass rounded-full px-3 py-1.5 text-xs font-medium text-white">
                        {c.growth}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-4 md:col-span-2 md:p-6">
                  <p className="text-xs uppercase tracking-wider text-white/40">Before → After</p>
                  <div className="grid grid-cols-2 gap-3">
                    <Metric label="Map rank" before={c.before.rank} after={c.after.rank} icon={MapPin} />
                    <Metric label="Leads / mo" before={c.before.leads.toString()} after={c.after.leads.toString()} icon={Phone} />
                    <Metric label="Reviews" before="3.6 ★" after="4.9 ★" icon={Star} />
                    <Metric label="Visibility" before="Low" after="Dominant" icon={TrendingUp} />
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-xs text-white/60">
                    View full case study <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

function Metric({
  label, before, after, icon: Icon,
}: { label: string; before: string; after: string; icon: React.ElementType }) {
  return (
    <div className="glass rounded-2xl p-3">
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-white/50">
        <Icon className="h-3 w-3" /> {label}
      </div>
      <p className="mt-2 text-xs text-white/40 line-through">{before}</p>
      <p className="text-sm font-semibold text-gradient">{after}</p>
    </div>
  );
}
