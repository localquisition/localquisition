import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { RippleButton } from "@/components/ui/multi-type-ripple-buttons";
import { MessageCircle, ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] glass-strong p-12 text-center md:p-20"
        >
          <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl" />
          <h2 className="relative text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
            Your competitors are already
            <br />
            <span className="text-gradient">investing in visibility.</span>
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-base text-white/60 md:text-lg">
            Start building a predictable customer acquisition system for your
            business today.
          </p>
          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact">
              <RippleButton variant="primary">
                Book Free Strategy Call <ArrowRight className="h-4 w-4" />
              </RippleButton>
            </Link>
            <RippleButton variant="ghost">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </RippleButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
