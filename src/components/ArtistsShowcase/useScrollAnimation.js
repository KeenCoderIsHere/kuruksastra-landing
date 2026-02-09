'use client';

import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Scroll-triggered animation hook for card spreading effect.
 * Cards start stacked and spread out on scroll down.
 * Animation reverses on scroll up.
 */
export default function useScrollAnimation({
  containerRef,
  cardsRef,
  titleRef,
}) {
  const scrollTriggerRef = useRef(null);

  const initAnimation = useCallback(() => {
    if (!containerRef?.current || !cardsRef?.current) return;

    const cards = cardsRef.current.querySelectorAll('[data-card]');
    if (!cards.length) return;

    // Kill previous ScrollTrigger if exists
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
    }

    // Card spread positions (from center stacked to spread out)
    const spreadPositions = [
      { x: -350, y: -100, rotation: -15 },
      { x: -200, y: -150, rotation: -8 },
      { x: -50, y: -50, rotation: -3 },
      { x: 0, y: 0, rotation: 0 },
      { x: 50, y: -50, rotation: 3 },
      { x: 200, y: -150, rotation: 8 },
      { x: 350, y: -100, rotation: 15 },
      { x: 0, y: 150, rotation: 5 },
    ];

    // Set initial stacked state
    gsap.set(cards, {
      x: 0,
      y: 0,
      rotation: (i) => (i - Math.floor(cards.length / 2)) * 2,
      scale: 1,
      zIndex: (i) => cards.length - i,
    });

    // Create scroll-triggered timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate each card to its spread position
    cards.forEach((card, i) => {
      const pos = spreadPositions[i % spreadPositions.length];
      tl.to(card, {
        x: pos.x,
        y: pos.y,
        rotation: pos.rotation,
        ease: 'power2.out',
        duration: 1,
      }, 0);
    });

    // Store reference for cleanup
    scrollTriggerRef.current = tl.scrollTrigger;

  }, [containerRef, cardsRef]);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(initAnimation, 100);

    return () => {
      clearTimeout(timer);
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [initAnimation]);

  const refresh = useCallback(() => {
    ScrollTrigger.refresh();
  }, []);

  return { refresh };
}
