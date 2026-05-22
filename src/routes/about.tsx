import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Cpu, Workflow, Repeat, Compass, Rocket } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";

export const Route = createFileRoute("/about")({ component: About });

const steps = [
  { icon: Compass, title: "Discover", desc: "We audit your market, competitors and current visibility — and map the highest-ROI opportunities." },
  { icon: Cpu, title: "Architect", desc: "AI-accelerated design + system architecture: site, funnels, tracking, automations." },
  { icon: Rocket, title: "Launch", desc: "Premium website, GBP, ads and lead system go live — typically inside 14 days." },
  { icon: Repeat, title: "Compound", desc: "Monthly optimization across SEO, ads and conversion — leads compound every month." },
];

function About() {
  return (
    <>
      <section className="px-6 pb-16 pt-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">About</p>
          <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight text-white md:text-7xl">
            We build <span className="text-gradient">growth systems</span>, not just websites.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-white/65 md:text-lg">
            Localquisition is a modern, AI-powered growth partner for service-based
            businesses. We engineer end-to-end acquisition systems that turn local
            intent into predictable, compounding revenue.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Our Mission", body: "Make world-class digital growth infrastructure accessible to every serious service business." },
            { icon: Workflow, title: "Systems Approach", body: "We design websites, SEO, ads, and CRM as one connected revenue engine — not isolated tactics." },
            { icon: Repeat, title: "Subscription Model", body: "One predictable monthly fee. Everything inside. Cancel anytime. No agency lock-in games." },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-3xl p-7"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl glass-strong">
                <c.icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-white/60">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              The Localquisition <span className="text-gradient">process.</span>
            </h2>
            <p className="mt-3 text-white/60">From audit to dominant local presence in weeks — not quarters.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass relative overflow-hidden rounded-3xl p-7"
              >
                <span className="absolute right-5 top-5 text-5xl font-semibold text-white/5">
                  0{i + 1}
                </span>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl glass-strong">
                  <s.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/60">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
