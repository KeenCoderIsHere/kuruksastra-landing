'use client';

import styles from './ArtistsShowcase.module.css';

/**
 * Background with curved golden lines pattern
 * Matches the reference image with radiating wave pattern
 */
export default function CurvedLinesBackground() {
  // Generate curved lines that radiate outward
  const generateLines = () => {
    const lines = [];
    const lineCount = 60;

    for (let i = 0; i < lineCount; i++) {
      const progress = i / lineCount;
      const yBase = progress * 120 - 10; // Distribute lines vertically

      // Create subtle curved paths
      const curve1 = 15 + Math.sin(progress * Math.PI) * 25;
      const curve2 = 10 + Math.cos(progress * Math.PI * 0.5) * 20;

      // Path creates a gentle curve across the screen
      const d = `M -5 ${yBase} Q 25 ${yBase + curve1} 50 ${yBase + curve2} T 105 ${yBase - 5}`;

      lines.push(
        <path
          key={i}
          d={d}
          fill="none"
          stroke="rgba(180, 160, 60, 0.12)"
          strokeWidth={0.25}
        />
      );
    }
    return lines;
  };

  return (
    <div className={styles.curvedBackground}>
      {/* Base gradient */}
      <div className={styles.baseGradient} />

      {/* Curved lines SVG */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className={styles.curvesSvg}
      >
        {generateLines()}
      </svg>

      {/* Radial glow overlay */}
      <div className={styles.radialGlow} />
    </div>
  );
}
