'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './ArtistsShowcase.module.css';
import { colors } from '@/lib/tokens';

export default function WavyBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const waves = containerRef.current?.querySelectorAll('path');
    if (!waves) return;

    // Animate wave paths
    waves.forEach((wave, i) => {
      gsap.to(wave, {
        attr: { d: wave.getAttribute('data-alt') },
        duration: 3 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }, []);

  return (
    <div ref={containerRef} className={styles.wavyBackground}>
      <svg
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        className={styles.waveSvg}
      >
        {/* Wave 1 */}
        <path
          d="M0,200 C240,280 480,120 720,200 C960,280 1200,120 1440,200 L1440,800 L0,800 Z"
          data-alt="M0,200 C240,120 480,280 720,200 C960,120 1200,280 1440,200 L1440,800 L0,800 Z"
          fill="rgba(42, 122, 94, 0.3)"
        />
        {/* Wave 2 */}
        <path
          d="M0,350 C240,420 480,280 720,350 C960,420 1200,280 1440,350 L1440,800 L0,800 Z"
          data-alt="M0,350 C240,280 480,420 720,350 C960,280 1200,420 1440,350 L1440,800 L0,800 Z"
          fill="rgba(42, 122, 94, 0.4)"
        />
        {/* Wave 3 */}
        <path
          d="M0,500 C240,560 480,440 720,500 C960,560 1200,440 1440,500 L1440,800 L0,800 Z"
          data-alt="M0,500 C240,440 480,560 720,500 C960,440 1200,560 1440,500 L1440,800 L0,800 Z"
          fill="rgba(42, 122, 94, 0.5)"
        />
      </svg>
    </div>
  );
}
