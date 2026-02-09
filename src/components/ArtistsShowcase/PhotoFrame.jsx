'use client';

import { forwardRef } from 'react';
import styles from './ArtistsShowcase.module.css';

const PhotoFrame = forwardRef(function PhotoFrame({
  src,
  alt = 'Artist photo',
  size = 'medium',
  style = {},
  className = '',
}, ref) {
  const sizeClasses = {
    small: styles.photoSmall,
    medium: styles.photoMedium,
    large: styles.photoLarge,
  };

  return (
    <div
      ref={ref}
      className={`${styles.photoFrame} ${sizeClasses[size]} ${className}`}
      style={style}
    >
      <div className={styles.photoInner}>
        {src ? (
          <img
            src={src}
            alt={alt}
            className={styles.photoImage}
            loading="lazy"
          />
        ) : (
          <div className={styles.photoPlaceholder}>
            <svg viewBox="0 0 24 24" fill="currentColor" className={styles.placeholderIcon}>
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </div>
      <div className={styles.photoGlow} />
    </div>
  );
});

export default PhotoFrame;
