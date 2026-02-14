'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ArtistsShowcase.module.css';
import CurvedLinesBackground from './CurvedLinesBackground';
import GoldBorders from './GoldBorders';
import DescriptionPanel from './DescriptionPanel';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// 5 artist photos from public/artists folder
const artistImages = [
  '/artists/artist1.png',
  '/artists/artist2.png',
  '/artists/artist3.png',
  '/artists/artist4.png',
  '/artists/artist5.png',
];

// Get spread positions based on viewport width
function getSpreadPositions(viewportWidth) {
  // Mobile: < 480px
  if (viewportWidth < 480) {
    return [
      { x: -80, y: -160, rotation: 0 },
      { x: -55, y: 120, rotation: 0 },
      { x: 0, y: 0, rotation: 0 },
      { x: 55, y: -120, rotation: 0 },
      { x: 80, y: 160, rotation: 0 },
    ];
  }

  // Tablet: 480px - 1023px
  if (viewportWidth < 1024) {
    return [
      { x: -220, y: -180, rotation: 0 },
      { x: -150, y: 140, rotation: 0 },
      { x: 0, y: 0, rotation: 0 },
      { x: 150, y: -140, rotation: 0 },
      { x: 220, y: 180, rotation: 0 },
    ];
  }

  // Desktop: 1024px+ - slightly increased spread
  const scale = Math.min(viewportWidth / 1440, 1.3);
  return [
    { x: -520 * scale, y: -140, rotation: 0 },
    { x: -300 * scale, y: 110, rotation: 0 },
    { x: 0, y: 10, rotation: 0 },
    { x: 300 * scale, y: -110, rotation: 0 },
    { x: 520 * scale, y: 140, rotation: 0 },
  ];
}

export default function ArtistsShowcase({
  artistPhotos = artistImages,
  onAnimationComplete,
}) {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const titleRef = useRef(null);
  const goldBordersRef = useRef(null);
  const descriptionRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(1200); // Default to desktop

  // Track viewport width
  useEffect(() => {
    const updateWidth = () => {
      setViewportWidth(window.innerWidth);
    };

    // Set initial width
    updateWidth();

    // Listen for resize
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Setup GSAP animation
  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('[data-card]');
    if (!cards.length) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Get current viewport width
    const vw = window.innerWidth;

    // Get spread positions for current viewport
    const spreadPositions = getSpreadPositions(vw);

    // Set initial stacked state - all cards at center, NO rotation
    // Set initial stacked state - cards start from below
    gsap.set(cards, {
      x: 0,
      y: window.innerHeight * 0.8, // Start well below the view
      rotation: 0,
      scale: 1,
      opacity: 0,
      zIndex: (i) => 10 - i,
    });

    // Create smooth scroll-triggered timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=400%', // Increased scroll distance for longer animation sequence
        scrub: 1,
        pin: sectionRef.current,
        fastScrollEnd: true,
        onLeave: () => onAnimationComplete?.(),
      },
    });

    // Phase 1: Cards fly in from below and stack in center
    tl.to(cards, {
      y: 0,
      opacity: 1,
      stagger: 0.25, // One by one
      duration: 1,
      ease: 'power3.out',
    });

    // Phase 2: Cards spread to their positions
    cards.forEach((card, i) => {
      const pos = spreadPositions[i];

      tl.to(card, {
        x: pos.x,
        y: pos.y,
        rotation: pos.rotation,
        ease: 'power2.out',
        duration: 2,
      }, 2.5); // Start spreading after stacking is mostly done
    });

    // Phase 3: Blur title after cards are spread
    tl.to(titleRef.current, {
      filter: 'blur(8px)',
      opacity: 0.3,
      duration: 1,
      ease: 'power2.inOut',
      overwrite: 'auto', // Prevent conflicts during fast scroll
      immediateRender: false, // Ensure it starts only when reached
    }, 1.2); // Start blurring slightly before the spread fully finishes for a smoother transition

    // Phase 4: About Section Text Entrance
    const paragraphs = sectionRef.current.querySelectorAll(`.${styles.descParagraph}`);
    gsap.from(paragraphs, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: paragraphs[0],
        start: 'top 85%',
        toggleActions: 'play none none none',
      }
    });

    // Handle resize - kill and recreate
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [viewportWidth, onAnimationComplete]); // Re-run when viewport changes

  // Fade out gold borders when scrolling into the description section
  useEffect(() => {
    if (!goldBordersRef.current || !descriptionRef.current) return;

    const st = ScrollTrigger.create({
      trigger: descriptionRef.current,
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
      onUpdate: (self) => {
        if (goldBordersRef.current) {
          goldBordersRef.current.style.opacity = 1 - self.progress;
        }
      },
    });

    return () => st.kill();
  }, []);

  return (
    <div id="artists" ref={containerRef} className={styles.showcase}>
      {/* Fixed Gold Borders */}
      <GoldBorders ref={goldBordersRef} />

      {/* Hero Section with scroll-triggered animation */}
      <section
        ref={sectionRef}
        className={styles.stickySection}
        role="region"
        aria-label="Artists Showcase"
      >
        <CurvedLinesBackground />

        {/* Title - positioned above cards */}
        <div ref={titleRef} className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>
            <span className={styles.titleLine}>ARTISTS WHO&apos;VE</span>
            <span className={styles.titleLine}>
              <span className={styles.litText}>LIT</span> UP OUR <span className={styles.yearText}>2025</span> STAGE
            </span>
          </h1>
        </div>

        {/* Photo Cards - 5 cards */}
        <div ref={cardsRef} className={styles.cardsContainer}>
          {artistPhotos.slice(0, 5).map((photo, index) => (
            <div
              key={index}
              data-card
              className={styles.photoCard}
            >
              <div className={styles.photoCardInner}>
                <img
                  src={photo}
                  alt={`Artist ${index + 1}`}
                  className={styles.photoCardImage}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Description Section */}
      <DescriptionPanel ref={descriptionRef} />
    </div>
  );
}
