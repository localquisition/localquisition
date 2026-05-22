import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

interface RippleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  asChild?: boolean;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

export const RippleButton = React.forwardRef<
  HTMLButtonElement,
  RippleButtonProps
>(({ className, variant = "primary", children, onClick, ...props }, ref) => {
  const [ripples, setRipples] = React.useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const id = Date.now();
    setRipples((r) => [
      ...r,
      { id, x: e.clientX - rect.left - size / 2, y: e.clientY - rect.top - size / 2, size },
    ]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700);
    onClick?.(e);
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 will-change-transform active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60";

  const variants: Record<Variant, string> = {
    primary:
      "bg-gradient-to-b from-white to-white/90 text-black shadow-[0_10px_40px_-10px_oklch(0.85_0.18_200/0.6)] hover:shadow-[0_20px_60px_-10px_oklch(0.85_0.18_200/0.8)] hover:-translate-y-0.5",
    ghost:
      "glass text-white hover:bg-white/10 hover:-translate-y-0.5",
    outline:
      "border border-white/15 bg-white/[0.03] text-white backdrop-blur-xl hover:bg-white/10 hover:-translate-y-0.5",
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
            background: "var(--button-ripple-color)",
            transform: "scale(0)",
            animation: "ripple 700ms ease-out forwards",
          }}
        />
      ))}
    </button>
  );
});
RippleButton.displayName = "RippleButton";
