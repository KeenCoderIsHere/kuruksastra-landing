'use client';

import { forwardRef } from 'react';
import styles from './ArtistsShowcase.module.css';
import CurvedLinesBackground from './CurvedLinesBackground';

const DescriptionPanel = forwardRef(function DescriptionPanel(props, ref) {
  return (
    <section ref={ref} className={styles.descriptionPanel}>
      {/* Same curved lines background as hero */}
      <div className={styles.descriptionBackground}>
        <CurvedLinesBackground />
      </div>

      <div className={styles.descriptionContent}>
        <p className={styles.descParagraph}>
          Kuruksastra, SASTRA Deemed University&apos;s legendary cultural extravaganza, marks its 20th
          edition this year. Drawing from the mythic grandeur of Kurukshetra—the epic battle of Hindu
          lore—Kuruksastra ignites Southern India&apos;s fiercest talent showdown, spotlighting proven stars
          and unearthing hidden gems. This electrifying fusion of style, substance, glamour, and color
          features arts, music, literary events in English, Tamil, Telugu, and Hindi, plus mesmerizing dance
          competitions.
        </p>

        <p className={styles.descParagraph}>
          Top institutes across India converge for cutthroat rivalry, all vying for the ultimate glory: the
          overall championship title at Kuruksastra.
        </p>

        <p className={styles.descParagraph}>
          The Pro Shows remain the pulsating heart of KS&apos;20. Renowned artists who ignite the stage have
          been a staple of our pro-nights—icons like Shankar Mahadevan, Benny Dayal, Crazy Mohan,
          Vijay Prakash, and Sid Sriram have thrilled massive crowds, leaving them craving encores. With
          explosive past responses and our powerhouse student teams plus support staff, the 20th edition
          promises to eclipse them all.
        </p>
      </div>
    </section>
  );
});

export default DescriptionPanel;
