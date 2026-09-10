 "use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children, reduced }: { children: React.ReactNode; reduced: boolean }) {
  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, syncTouch: false });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reduced]);
  return <>{children}</>;
}