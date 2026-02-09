'use client';

import { forwardRef } from 'react';
import styles from './ArtistsShowcase.module.css';

const ShowTitle = forwardRef(function ShowTitle(props, ref) {
  return (
    <div ref={ref} className={styles.titleContainer}>
      <h1 className={styles.mainTitle}>
        <span className={styles.titleLine}>ARTISTS WHO&apos;VE</span>
        <span className={styles.titleLine}>
          <span className={styles.litText}>LIT</span> UP OUR STAGE
        </span>
      </h1>
    </div>
  );
});

export default ShowTitle;
