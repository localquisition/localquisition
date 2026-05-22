import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { RippleButton } from "./ui/multi-type-ripple-buttons";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/pricing", label: "Pricing" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full px-3 py-2 transition-all duration-500 border border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-2xl",
          scrolled
            ? "bg-slate-950/90"
            : "bg-slate-950/80"
        )}
      >
        <Link
          to="/"
          className="flex items-center gap-2 pl-3 pr-2 text-sm font-semibold text-white"
        >
          <span className="relative inline-flex h-8 w-8 items-center justify-center">
            <img src={logo} alt="Localquisition" className="h-8 w-8 object-contain" />
          </span>
          <span className="tracking-tight">Localquisition</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={cn(
                    "relative inline-flex rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors",
                    active ? "text-white" : "text-white/60 hover:text-white"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link to="/contact">
            <RippleButton className="px-5 py-2.5 text-xs">
              Book Free Strategy Call
            </RippleButton>
          </Link>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-4 top-20 z-40 lg:hidden"
          >
            <div className="glass-strong rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-2xl backdrop-blur-2xl">
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="block rounded-2xl px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link to="/contact">
                  <RippleButton className="w-full">
                    Book Free Strategy Call
                  </RippleButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
