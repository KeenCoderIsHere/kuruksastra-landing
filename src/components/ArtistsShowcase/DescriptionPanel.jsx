'use client';

import { forwardRef } from 'react';
import styles from './ArtistsShowcase.module.css';
import CurvedLinesBackground from './CurvedLinesBackground';

const DescriptionPanel = forwardRef(function DescriptionPanel(props, ref) {
  return (
    <section ref={ref} id="about" className={styles.descriptionPanel}>
      {/* Same curved lines background as hero */}
      <div className={styles.descriptionBackground}>
        <CurvedLinesBackground />
      </div>

      <div className={`${styles.descriptionContent}`}>
        <p className={`${styles.descParagraph}`}>
          Kuruksastra is one of South India's largest cultural extravaganzas. It is not just a fest, but a three day celebration of SASTRA's culture, talent, and diversity.
        </p>

        <p className={styles.descParagraph}>
          Inspired by Kurukshetra, the greatest battle of Hindu mythology, Kuruksastra transforms the campus into a battleground of brilliance where talent reigns supreme. Top institutes from across India gather for intense and exhilarating competitions in art, dance, music, and literary events across Tamil, English, Telugu, and Hindi, all striving to claim the coveted Overall Championship.
        </p>

        <p className={styles.descParagraph}>
          The highlight of Kuruksastra is its iconic Proshows that set the stage ablaze. The KS stage has witnessed electrifying performances by celebrated artists such as Sid Sriram, Benny Dayal, Shankar Mahadevan, Haricharan, Staccato Live, Sathyaprakash and So many more. Their performances define KS Nights, where music does not just play, it pulses through every heartbeat.
        </p>

        <p className={styles.descParagraph}>
          In just a few years, Kuruksastra has risen to remarkable heights. Driven by an unstoppable student force and an exceptional organizing crew, KS continues to evolve, expand, and exceed expectations. Each edition builds upon the thunderous success of the previous one, raising the bar, amplifying the scale, and redefining what a cultural fest can truly be.
        </p>

        <p className={styles.descParagraph}>
          Every year, the fest begins with electrifying sky shots and concludes with hearts full of memories and happiness. With over 1000 participants, vibrant crowds, and fierce competition, KS is your stage to shine, your arena to conquer, and your moment to make history. Bring your passion, power and show the world your unbreakable spirit. Kuruksastra awaits.
        </p>
      </div>
    </section>
  );
});

export default DescriptionPanel;
