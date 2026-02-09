'use client';

import styles from './ArtistsShowcase.module.css';

export default function GoldCorners() {
  return (
    <>
      <div className={`${styles.corner} ${styles.cornerTopLeft}`}>
        <svg viewBox="0 0 120 120" className={styles.cornerSvg}>
          <path
            d="M10,10 L110,10 L110,30 L30,30 L30,110 L10,110 Z"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f4d03f" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#b8941f" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={`${styles.corner} ${styles.cornerTopRight}`}>
        <svg viewBox="0 0 120 120" className={styles.cornerSvg}>
          <path
            d="M110,10 L10,10 L10,30 L90,30 L90,110 L110,110 Z"
            fill="none"
            stroke="url(#goldGradient2)"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="goldGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f4d03f" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#b8941f" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={`${styles.corner} ${styles.cornerBottomLeft}`}>
        <svg viewBox="0 0 120 120" className={styles.cornerSvg}>
          <path
            d="M10,110 L110,110 L110,90 L30,90 L30,10 L10,10 Z"
            fill="none"
            stroke="url(#goldGradient3)"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="goldGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f4d03f" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#b8941f" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={`${styles.corner} ${styles.cornerBottomRight}`}>
        <svg viewBox="0 0 120 120" className={styles.cornerSvg}>
          <path
            d="M110,110 L10,110 L10,90 L90,90 L90,10 L110,10 Z"
            fill="none"
            stroke="url(#goldGradient4)"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="goldGradient4" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#f4d03f" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#b8941f" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
