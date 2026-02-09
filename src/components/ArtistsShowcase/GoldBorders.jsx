'use client';

import styles from './ArtistsShowcase.module.css';

/**
 * Gold border decorations on left and right edges
 * Full screen height vertical gold stripes
 */
export default function GoldBorders() {
  return (
    <>
      {/* Left border - vertical gold lines */}
      <div className={styles.goldBorderLeft}>
        <div className={styles.verticalLines}>
          <span className={styles.thickLine} />
          <span className={styles.thinLine} />
          <span className={styles.thinLine} />
        </div>
      </div>

      {/* Right border - vertical gold lines */}
      <div className={styles.goldBorderRight}>
        <div className={styles.verticalLines}>
          <span className={styles.thinLine} />
          <span className={styles.thinLine} />
          <span className={styles.thickLine} />
        </div>
      </div>
    </>
  );
}
