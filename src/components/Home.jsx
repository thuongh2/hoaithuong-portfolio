import React, { useEffect, useRef } from "react";
import Animation from "./Animation";

const RESUME =
  "https://drive.google.com/file/d/1k7fk0yExVC-8fDyTBiCE3j7SwBB3kpoB/view?usp=drive_link";

// Sign-in traffic as a character field: noisy requests arrive on the left,
// converge on one service line, and leave as clean, resolved rows.
const RAMP = " .:-=+*#%@";

function useTrafficField(ref) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    const css = getComputedStyle(document.documentElement);
    const tint = [
      css.getPropertyValue("--color-glyph-1"),
      css.getPropertyValue("--color-glyph-2"),
      css.getPropertyValue("--color-glyph-3"),
      css.getPropertyValue("--color-glyph-4"),
      css.getPropertyValue("--color-accent-deep"),
    ].map((c) => c.trim());
    const font = css.getPropertyValue("--font-outlier").trim();
    const CW = 8;
    const CH = 16;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let cols = 0;
    let rows = 0;
    let raf = 0;
    let last = 0;
    let visible = true;
    const t0 = performance.now();

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / CW);
      rows = Math.ceil(h / CH);
    };

    const hash = (x, y) => {
      const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
      return s - Math.floor(s);
    };

    const draw = (now) => {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);
      ctx.font = `12px ${font}`;
      ctx.textBaseline = "top";
      const bus = Math.floor(cols * 0.62);
      const lanes = Math.max(5, Math.floor(rows / 6));
      for (let y = 0; y < rows; y += 1) {
        const ny = y / rows;
        for (let x = 0; x < cols; x += 1) {
          const nx = x / cols;
          // keep the lower band calm: the name and its line sit there
          const calm = Math.max(
            Math.min(1, Math.max(0, (0.58 - ny) / 0.16)),
            Math.min(1, Math.max(0, (nx - 0.82) / 0.1)) * 0.7
          );
          if (calm <= 0) continue;
          let v = 0;
          if (x < bus) {
            // raw side: lanes bend toward the bus, with jitter
            const k = x / bus;
            for (let i = 0; i < lanes; i += 1) {
              const start = (i + 0.5) / lanes;
              const end = 0.12 + (i / lanes) * 0.76;
              const ly = start + (end - start) * k * k + Math.sin(t * 0.6 + i * 1.7 + k * 5) * 0.02 * (1 - k);
              const d = Math.abs(ny - ly) * rows;
              if (d < 2.4) {
                const packet = (Math.sin(x * 0.18 - t * 3.2 + i * 2.3) + 1) / 2;
                v = Math.max(v, (1 - d / 2.4) * (0.35 + 0.65 * packet * k));
              }
            }
            v *= 0.55 + 0.45 * hash(x, y + Math.floor(t * 4));
          } else if (x === bus) {
            v = 0.62;
          } else {
            // resolved side: clean rows that pulse when a packet passes
            const lane = Math.round(ny * lanes * 1.6);
            const ly = lane / (lanes * 1.6);
            const d = Math.abs(ny - ly) * rows;
            if (d < 0.5) {
              const run = (Math.sin((x - bus) * 0.12 - t * 2.4 + lane) + 1) / 2;
              v = 0.28 + 0.6 * run * run;
            }
          }
          v *= calm * 0.85;
          if (v < 0.08) continue;
          const ci = Math.min(RAMP.length - 1, Math.floor(v * RAMP.length));
          const ti = Math.min(tint.length - 1, Math.floor(v * tint.length));
          ctx.fillStyle = tint[ti];
          ctx.fillText(RAMP[ci], x * CW, y * CH);
        }
      }
    };

    const loop = (now) => {
      raf = requestAnimationFrame(loop);
      if (!visible || now - last < 33) return;
      last = now;
      draw(now);
    };

    canvas.style.backgroundImage = "none";
    resize();
    draw(performance.now());
    const ro = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    io.observe(canvas);
    if (!reduce) raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [ref]);
}

const Home = () => {
  const field = useRef(null);
  useTrafficField(field);

  return (
    <section name="home" id="home" className="hero">
      <canvas ref={field} className="hero__field" aria-hidden="true" />
      <div className="container hero__inner">
        <h1 className="hero__name">Vo Hoai Thuong</h1>
        <p className="lead hero__line">
          <Animation /> at VNGGames, building account services for 40M+ users.
        </p>
        <div className="hero__actions">
          <a className="key key--primary" href={RESUME} target="_blank" rel="noreferrer">
            View résumé
          </a>
          <a className="key" href="mailto:hoaithuong.data@gmail.com">
            Email me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
