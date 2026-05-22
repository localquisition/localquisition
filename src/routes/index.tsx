import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Search,
  Sparkles,
  Phone,
  MapPin,
  BarChart3,
  Zap,
  Target,
  Layers,
  Repeat,
  LineChart,
  Star,
} from "lucide-react";
import { RippleButton } from "@/components/ui/multi-type-ripple-buttons";
import { FinalCTA } from "@/components/FinalCTA";

export const Route = createFileRoute("/")({ component: Home });

const trust = [
  { label: "Avg. lead lift", value: "+312%" },
  { label: "Local rankings", value: "Top 3" },
  { label: "Time to launch", value: "14 days" },
  { label: "Client retention", value: "96%" },
];

const reasons = [
  { icon: Target, title: "Lead Generation Focused", desc: "Every system we build is engineered around inbound calls, WhatsApp leads and booked jobs." },
  { icon: Search, title: "Google Visibility Systems", desc: "Local SEO, GBP optimization and Maps dominance — built to compound monthly." },
  { icon: Zap, title: "AI-Accelerated Delivery", desc: "We ship premium websites in days, not months — without sacrificing polish." },
  { icon: Repeat, title: "Subscription Simplicity", desc: "One predictable monthly fee. Everything you need to grow, with zero surprises." },
  { icon: LineChart, title: "ROI Driven", desc: "Tracking on every call, click and form. If it doesn't move pipeline, we cut it." },
  { icon: Layers, title: "Ongoing Optimization", desc: "Every month: fresh experiments, refined funnels, sharper campaigns." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative px-6 pb-24 pt-16 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70 backdrop-blur-xl">
              <Sparkles className="h-3 w-3 text-cyan-300" />
              AI-powered local growth systems
            </div>
            <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl lg:text-[5.5rem]">
              Turn local searches into{" "}
              <span className="text-gradient text-glow">paying customers.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-balance text-base leading-relaxed text-white/65 md:text-lg">
              Localquisition builds AI-powered websites, local SEO systems,
              Google optimization and lead generation infrastructure that helps
              service businesses dominate their area online.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact">
                <RippleButton variant="primary">
                  Book Free Strategy Call <ArrowRight className="h-4 w-4" />
                </RippleButton>
              </Link>
              <Link to="/pricing">
                <RippleButton variant="ghost">View Packages</RippleButton>
              </Link>
            </div>
          </motion.div>

          {/* Floating dashboard mock */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto mt-20 max-w-5xl"
          >
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-b from-cyan-500/20 via-blue-600/10 to-transparent blur-3xl" />
            <div className="glass-strong relative rounded-[2rem] p-3 md:p-4">
              <div className="rounded-[1.5rem] bg-gradient-to-b from-black/40 to-black/10 p-6 md:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  </div>
                  <p className="text-xs text-white/40">localquisition.app/dashboard</p>
                  <div className="text-xs text-white/40">Live</div>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <DashCard icon={Phone} label="Inbound calls" value="148" trend="+42%" />
                  <DashCard icon={MapPin} label="Map views" value="12.4k" trend="+87%" />
                  <DashCard icon={TrendingUp} label="Leads / mo" value="237" trend="+312%" />
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="glass rounded-2xl p-5 md:col-span-2">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-white/50">Local visibility</p>
                      <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] text-emerald-300">+24%</span>
                    </div>
                    <p className="mt-1 text-2xl font-semibold text-white">Top 3 in 18 keywords</p>
                    <div className="mt-5 flex h-24 items-end gap-1.5">
                      {[20, 35, 28, 48, 55, 42, 68, 75, 70, 88, 92, 100].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-md bg-gradient-to-t from-cyan-400/30 to-cyan-300"
                          style={{ height: `${h}%`, animation: `pulse-glow 3s ease-in-out ${i * 0.1}s infinite` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="glass rounded-2xl p-5">
                    <p className="text-xs text-white/50">Conversion rate</p>
                    <p className="mt-1 text-2xl font-semibold text-white">9.8%</p>
                    <div className="mt-4 space-y-2.5">
                      {["Plumbing call-outs", "Maintenance booking", "WhatsApp quote"].map((s, i) => (
                        <div key={s}>
                          <div className="flex justify-between text-[10px] text-white/50">
                            <span>{s}</span>
                            <span>{[88, 64, 47][i]}%</span>
                          </div>
                          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                            <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-500" style={{ width: `${[88, 64, 47][i]}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating mini cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 -top-8 hidden md:block"
            >
              <div className="glass-strong rounded-2xl p-4">
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <BarChart3 className="h-4 w-4 text-cyan-300" />
                  Ranked #1
                </div>
                <p className="mt-1 text-sm font-semibold text-white">"plumber near me"</p>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-1/3 hidden md:block"
            >
              <div className="glass-strong rounded-2xl p-4">
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <Star className="h-4 w-4 text-amber-300" />
                  4.9 / 5
                </div>
                <p className="mt-1 text-sm font-semibold text-white">+86 reviews</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Trust strip */}
          <div className="mt-20 grid grid-cols-2 gap-3 md:grid-cols-4">
            {trust.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-5"
              >
                <p className="text-3xl font-semibold text-gradient">{t.value}</p>
                <p className="mt-1 text-xs text-white/50">{t.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LOCALQUISITION */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">Why Localquisition</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Built for growth — <span className="text-gradient">not just pretty websites.</span>
            </h2>
            <p className="mt-4 text-white/60">
              We engineer end-to-end systems that compound traffic, calls, and
              booked jobs every month.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group glass relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-opacity duration-500 group-hover:bg-cyan-400/30" />
                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl glass">
                    <r.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

function DashCard({
  icon: Icon, label, value, trend,
}: { icon: React.ElementType; label: string; value: string; trend: string }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">
          <Icon className="h-4 w-4 text-cyan-300" />
        </div>
        <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] text-emerald-300">{trend}</span>
      </div>
      <p className="mt-4 text-xs text-white/50">{label}</p>
      <p className="text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}
