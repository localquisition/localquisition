import { useEffect, useRef } from "react";

export function ShaderBackground() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        el.style.setProperty("--mx", `${x}%`);
        el.style.setProperty("--my", `${y}%`);
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Base gradient */}
      <div
        ref={ref}
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(800px circle at var(--mx,50%) var(--my,30%), oklch(0.3 0.15 230 / 0.35), transparent 60%), radial-gradient(1200px circle at 20% 80%, oklch(0.25 0.18 260 / 0.4), transparent 55%), radial-gradient(900px circle at 90% 10%, oklch(0.3 0.2 200 / 0.3), transparent 50%)",
        }}
      />
      {/* Floating shader blobs */}
      <div
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "conic-gradient(from 0deg, oklch(0.7 0.22 250), oklch(0.85 0.18 200), oklch(0.7 0.22 250))",
          animation: "shader-drift 24s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-40 -right-40 h-[700px] w-[700px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "conic-gradient(from 180deg, oklch(0.6 0.25 290), oklch(0.7 0.2 220), oklch(0.6 0.25 290))",
          animation: "shader-drift 32s ease-in-out infinite reverse",
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />
      {/* Noise/vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
    </div>
  );
}
