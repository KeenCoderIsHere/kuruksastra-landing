"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./HeroSection.module.css";
import RollingNumber from "./MirroredNumber";

export default function HeroSection({ isVisible }) {
  const heroRef = useRef(null);
  const [countdown, setCountdown] = useState({
    days: 50,
    hours: 1,
    minutes: 1
  });

  useEffect(() => {
    if (!isVisible) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Fade in hero section
      tl.fromTo(heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      )
        // Animate gold frame and dot pattern
        .fromTo(".hex-frame, .dot-pattern",
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.5)" },
          "-=0.5"
        )

        // Animate nav
        .fromTo(".hero-nav",
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.8"
        )
        // Animate countdown stacks
        .fromTo(".countdown-stack",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out"
          },
          "-=0.4"
        )
        // Animate labels
        .fromTo(".countdown-label",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.4 },
          "-=0.3"
        );

      // Subtle float for logo (continuous)
      gsap.to(`.${styles.logo}`, {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, heroRef);

    return () => ctx.revert();
  }, [isVisible]);

  // Real countdown logic
  useEffect(() => {
    const targetDate = new Date('2026-04-03T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <section ref={heroRef} className={styles.hero}>
      {/* Dot Pattern Background */}
      <div className={`dot-pattern ${styles.dotPattern}`} />

      {/* Gold frame — flat-top hexagon, full height */}
      <svg className={`hex-frame ${styles.hexFrame}`} viewBox="0 0 1200 700" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gold-gradient-hero" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f4e4b8', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#d4af37', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#b8941f', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="frame-shadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="0" dy="4" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.35" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/*
          Pointy-top hexagon — TALLER, 3 concentric borders (triple-stripe style)
          viewBox: 1200 × 700
          Outer tips at y=4/y=696, flat sides at x=25/x=1175
          Each border spaced ~14px apart
        */}
        {/* Border 1 — outermost (thick) */}
        <polygon
          points="600,4 1178,162 1178,538 600,696 22,538 22,162"
          fill="none"
          stroke="url(#gold-gradient-hero)"
          strokeWidth="6"
          filter="url(#frame-shadow)"
        />
        {/* Border 2 — middle */}
        <polygon
          points="600,22 1160,175 1160,525 600,678 40,525 40,175"
          fill="none"
          stroke="url(#gold-gradient-hero)"
          strokeWidth="4"
        />
        {/* Border 3 — innermost */}
        <polygon
          points="600,40 1142,188 1142,512 600,660 58,512 58,188"
          fill="none"
          stroke="url(#gold-gradient-hero)"
          strokeWidth="6"
        />
      </svg>

      {/* Navigation */}
      <nav className={`hero-nav ${styles.nav}`}>
        <a href="#about" className={styles.navLink} onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>About</a>
        <a href="#sponsorship" className={styles.navLink} onClick={(e) => { e.preventDefault(); document.getElementById('sponsorship')?.scrollIntoView({ behavior: 'smooth' }); }}>Sponsorship</a>
        <img src="/ks_logo.png" alt="Kuruksastra" className={styles.logo} />
        <a href="#artists" className={styles.navLink} onClick={(e) => { e.preventDefault(); document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' }); }}>Artists</a>
        <a href="#contact" className={styles.navLink} onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</a>
      </nav>

      {/* Countdown Display - Rolling Numbers */}
      <div className={styles.countdownContainer}>
        {/* Days */}
        <div className={styles.countdownItem}>
          <div className="countdown-stack">
            <RollingNumber value={countdown.days} max={99} />
          </div>
          <span className={`countdown-label ${styles.label}`}>Days</span>
        </div>

        {/* Hours */}
        <div className={styles.countdownItem}>
          <div className="countdown-stack">
            <RollingNumber value={countdown.hours} max={23} />
          </div>
          <span className={`countdown-label ${styles.label}`}>Hours</span>
        </div>

        {/* Minutes */}
        <div className={styles.countdownItem}>
          <div className="countdown-stack">
            <RollingNumber value={countdown.minutes} max={59} />
          </div>
          <span className={`countdown-label ${styles.label}`}>Minutes</span>
        </div>
      </div>
    </section>
  );
}