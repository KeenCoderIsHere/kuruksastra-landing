'use client';

import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { timing, easing } from '@/lib/tokens';

/**
 * Custom hook that creates the GSAP master timeline for the Artists Showcase animation.
 * Respects prefers-reduced-motion media query.
 */
export default function useShowcaseTimeline({
  cornersRef,
  titleRef,
  yearRef,
  photosRef,
  descriptionRef,
  onComplete,
}) {
  const timelineRef = useRef(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mediaQuery.matches;

    const handleChange = (e) => {
      prefersReducedMotion.current = e.matches;
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const buildTimeline = useCallback(() => {
    const tl = gsap.timeline({
      paused: true,
      onComplete: onComplete,
    });

    const duration = prefersReducedMotion.current ? 0.1 : timing.base;
    const stagger = prefersReducedMotion.current ? 0 : 0.15;

    // Phase 1: Corners fade in (0-0.5s)
    if (cornersRef.current) {
      const corners = cornersRef.current.querySelectorAll('[class*="corner"]');
      tl.to(corners, {
        opacity: 1,
        duration: duration,
        stagger: stagger,
        ease: easing.smooth,
      }, 0);
    }

    // Phase 2: Title appears (0.3-1s)
    if (titleRef.current) {
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: timing.slow,
        ease: easing.smooth,
      }, 0.3);
    }

    // Phase 3: Photos appear one by one (0.8-2.5s)
    if (photosRef.current) {
      const photos = photosRef.current.querySelectorAll('[class*="photoFrame"]');
      tl.to(photos, {
        opacity: 1,
        scale: 1,
        rotation: () => gsap.utils.random(-5, 5),
        duration: timing.base,
        stagger: {
          each: 0.2,
          from: 'random',
        },
        ease: easing.bounce,
      }, 0.8);
    }

    // Phase 4: Year text appears (2.5-3s)
    if (yearRef.current) {
      tl.to(yearRef.current, {
        opacity: 1,
        scale: 1,
        duration: timing.base,
        ease: easing.bounce,
      }, 2.5);
    }

    // Phase 5: Pause, then fade out photos and title (4-5s)
    tl.addPause(4);

    if (photosRef.current) {
      const photos = photosRef.current.querySelectorAll('[class*="photoFrame"]');
      tl.to(photos, {
        opacity: 0,
        scale: 0.8,
        y: -30,
        duration: timing.base,
        stagger: 0.05,
        ease: easing.sharp,
      }, 4.5);
    }

    if (titleRef.current) {
      tl.to(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: timing.base,
        ease: easing.sharp,
      }, 4.5);
    }

    // Phase 6: Description panel slides up (5-6s)
    if (descriptionRef.current) {
      tl.to(descriptionRef.current, {
        y: 0,
        duration: timing.slow,
        ease: easing.smooth,
      }, 5.2);
    }

    return tl;
  }, [cornersRef, titleRef, yearRef, photosRef, descriptionRef, onComplete]);

  useEffect(() => {
    timelineRef.current = buildTimeline();

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [buildTimeline]);

  const play = useCallback(() => {
    timelineRef.current?.play();
  }, []);

  const pause = useCallback(() => {
    timelineRef.current?.pause();
  }, []);

  const restart = useCallback(() => {
    timelineRef.current?.restart();
  }, []);

  const resume = useCallback(() => {
    timelineRef.current?.resume();
  }, []);

  return {
    play,
    pause,
    restart,
    resume,
    timeline: timelineRef,
  };
}
