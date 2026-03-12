import { useEffect, useRef } from "react";

const STAR_COUNT = 180;
const DRIFT_SPEED = 0.08;
const TWINKLE_SPEED = 0.006;
const MIN_SIZE = 0.4;
const MAX_SIZE = 1.6;
const MIN_OPACITY = 0.15;
const MAX_OPACITY = 0.85;
const BG_COLOR = "#000000";

function createStar(w, h) {
  const size = MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE);
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    size,
    baseOpacity: MIN_OPACITY + Math.random() * (MAX_OPACITY - MIN_OPACITY),
    opacity: 0,
    phase: Math.random() * Math.PI * 2,
    twinkleRate: TWINKLE_SPEED + Math.random() * 0.004,
    dx: (Math.random() - 0.5) * DRIFT_SPEED,
    dy: (Math.random() - 0.5) * DRIFT_SPEED,
  };
}

export default function GrokStarfield() {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      starsRef.current = Array.from({ length: STAR_COUNT }, () =>
        createStar(w, h)
      );
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, w, h);

      for (const star of starsRef.current) {
        star.x += star.dx;
        star.y += star.dy;

        if (star.x < -2) star.x = w + 2;
        if (star.x > w + 2) star.x = -2;
        if (star.y < -2) star.y = h + 2;
        if (star.y > h + 2) star.y = -2;

        star.phase += star.twinkleRate;
        star.opacity = star.baseOpacity * (0.5 + 0.5 * Math.sin(star.phase));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        display: "block",
        background: BG_COLOR,
      }}
    />
  );
}
