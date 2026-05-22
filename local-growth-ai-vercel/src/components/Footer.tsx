import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5 px-6 pb-10 pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong rounded-3xl p-10">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-2 text-white">
                <img src={logo} alt="Localquisition" className="h-9 w-auto" />
                <span className="text-base font-semibold">Localquisition</span>
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
                AI-powered local business growth systems engineered to turn
                local searches into paying customers.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/50">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> South Africa &middot; Worldwide
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5" /> hello@localquisition.com
                </span>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                Company
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/services" className="hover:text-white">Services</Link></li>
                <li><Link to="/industries" className="hover:text-white">Industries</Link></li>
                <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                Get Started
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li>
                  <a href="#" className="inline-flex items-center gap-1.5 hover:text-white">
                    <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} Localquisition. All rights reserved.</span>
            <span>Built for local domination.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
