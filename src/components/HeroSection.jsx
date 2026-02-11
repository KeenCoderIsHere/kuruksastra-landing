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
        // Animate gold frame
        .fromTo(".hex-frame",
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

    }, heroRef);

    return () => ctx.revert();
  }, [isVisible]);

  // Real countdown logic
  useEffect(() => {
    const targetDate = new Date('2026-03-30T00:00:00').getTime();

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
      {/* Gold frame — style from LoadingAnimation, chamfered landscape shape */}
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
        {/* Outer border */}
        <polygon
          points="80,20 1120,20 1180,80 1180,620 1120,680 80,680 20,620 20,80"
          fill="none"
          stroke="url(#gold-gradient-hero)"
          strokeWidth="3"
          filter="url(#frame-shadow)"
        />
        {/* Inner border */}
        <polygon
          points="100,42 1100,42 1155,97 1155,603 1100,658 100,658 45,603 45,97"
          fill="none"
          stroke="url(#gold-gradient-hero)"
          strokeWidth="2"
        />
      </svg>

      {/* Navigation */}
      <nav className={`hero-nav ${styles.nav}`}>
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#sponsorship" className={styles.navLink}>Sponsorship</a>
        <span className={styles.logo}>Kuruksastra</span>
        <a href="#events" className={styles.navLink}>Events</a>
        <a href="#contact" className={styles.navLink}>Contact</a>
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