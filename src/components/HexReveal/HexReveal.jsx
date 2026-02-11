"use client";

/**
 * HexReveal Component - PRECISION FIXED
 * 
 * Design System:
 * - Outer hex: 80% of wrapper (leaves 10% safe area each side)
 * - Inner plate: 57.6% (0.72 × 80)
 * - Center badge: 33.6% (0.42 × 80)
 * - Uniform 4% gap between each layer
 * - Gold strokes: 2px uniform thickness
 * 
 * Animation: outer polygon → inner polygons → gold strokes → badge → logo
 */

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import styles from "./HexReveal.module.css";
import "@/styles/tokens.css";

// Hexagon clip-path (6-point, symmetric)
const CLIP_PATH = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
const CLIP_PATH_HIDDEN = "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)";

/**
 * PROPORTIONS SYSTEM (based on 1 : 0.72 : 0.42 hierarchy)
 * 
 * Base unit: 80% (outer hex with 10% safe area each side)
 * 
 * Layer 1 (Outer frame):    80% - darkest green
 * Layer 2 (Middle plate):   72% - medium green (80 × 0.9)
 * Layer 3 (Inner plate):    64% - deep green (80 × 0.8) 
 * Gold strokes between:     68%, 66%, 64% (grouped between layers)
 * Badge:                    34% (0.42 × 80, approximately)
 */

const GREEN_LAYERS = [
    { size: 210, color: "#0A3F28" },   // Outermost - darkest emerald
    { size: 180, color: "#0D5A35" },   // Middle - rich green  
    { size: 160, color: "#0A4F30" },   // Innermost plate - deep green
];

// Gold stroke lines - uniform spacing, positioned between layers
const GOLD_STROKES = [
    { size: 150, strokeWidth: 10 },  // Outermost - thickest
    { size: 140, strokeWidth: 7 },    // Middle
    { size: 130, strokeWidth: 5 },  // Inner
    { size: 90, strokeWidth: 3 },   // NEW: Additional stroke outside badge
];

export default function HexReveal({
    onComplete,
    logoSrc = "/logo.png",
    logoAlt = "Kuruksatna Logo"
}) {
    const containerRef = useRef(null);
    const greenLayerRefs = useRef([]);
    const goldStrokeRefs = useRef([]);
    const badgeRef = useRef(null);
    const logoRef = useRef(null);

    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const timelineRef = useRef(null);

    const animate = useCallback(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power2.out" },
            });
            timelineRef.current = tl;

            // Phase 1: Reveal green layers (outer to inner, staggered)
            greenLayerRefs.current.forEach((layer, i) => {
                tl.to(
                    layer,
                    {
                        clipPath: CLIP_PATH,
                        duration: 0.5,
                    },
                    i * 0.15 // Stagger by 150ms
                );
            });

            // Phase 2: Fade in gold strokes
            tl.to(
                goldStrokeRefs.current,
                {
                    opacity: 1,
                    duration: 0.4,
                    stagger: 0.1,
                },
                "-=0.3"
            );

            // Phase 3: Scale in badge
            tl.to(
                badgeRef.current,
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    ease: "back.out(1.2)",
                },
                "-=0.2"
            );

            // Phase 4: Fade in logo
            tl.to(
                logoRef.current,
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                },
                "-=0.2"
            );

            // Phase 5: Hold then callback
            tl.to({}, { duration: 1.5 });
            tl.call(() => {
                if (onComplete) {
                    setTimeout(() => onComplete?.(), 500);
                }
            });
        });

        return ctx;
    }, [onComplete]);

    useEffect(() => {
        if (prefersReducedMotion) {
            // Skip animation
            greenLayerRefs.current.forEach((layer) => {
                if (layer) layer.style.clipPath = CLIP_PATH;
            });
            goldStrokeRefs.current.forEach((stroke) => {
                if (stroke) stroke.style.opacity = "1";
            });
            if (badgeRef.current) {
                badgeRef.current.style.opacity = "1";
                badgeRef.current.style.transform = "scale(1)";
            }
            if (logoRef.current) {
                logoRef.current.style.opacity = "1";
                logoRef.current.style.transform = "scale(1)";
            }
            setTimeout(() => onComplete?.(), 100);
            return;
        }

        const ctx = animate();

        return () => {
            ctx.revert();
            if (timelineRef.current) timelineRef.current.kill();
        };
    }, [onComplete, prefersReducedMotion, animate]);

    return (
        <div
            ref={containerRef}
            className={styles.revealRoot}
            role="presentation"
            aria-label="Loading animation"
        >
            {/* Aspect Ratio Container */}
            <div className={styles.aspectWrapper}>
                {/* Gold Background */}
                <div className={styles.goldBackground} />

                {/* Green Hex Layers (outer to inner) */}
                {GREEN_LAYERS.map((layer, i) => (
                    <div
                        key={`green-${i}`}
                        ref={(el) => (greenLayerRefs.current[i] = el)}
                        className={styles.greenLayer}
                        style={{
                            width: `${layer.size}%`,
                            height: `${layer.size}%`,
                            backgroundColor: layer.color,
                            clipPath: CLIP_PATH_HIDDEN,
                            zIndex: 10 + i,
                        }}
                    />
                ))}

                {/* Gold Stroke Lines (SVG-based, uniform 2px) */}
                {GOLD_STROKES.map((stroke, i) => (
                    <div
                        key={`stroke-${i}`}
                        ref={(el) => (goldStrokeRefs.current[i] = el)}
                        className={styles.goldStroke}
                        style={{
                            width: `${stroke.size}%`,
                            height: `${stroke.size}%`,
                            zIndex: 20 + i,
                        }}
                    >
                        <svg
                            viewBox="0 0 100 100"
                            preserveAspectRatio="xMidYMid meet"
                            className={styles.goldStrokeSvg}
                        >
                            <polygon
                                points="50,0 100,25 100,75 50,100 0,75 0,25"
                                fill="none"
                                stroke="#d4af37"
                                strokeWidth={stroke.strokeWidth}  // ← Use from array
                                vectorEffect="non-scaling-stroke"
                            />
                        </svg>
                    </div>
                ))}

                {/* Center Badge */}
                <div
                    ref={badgeRef}
                    className={styles.centerBadge}
                    style={{ zIndex: 30 }}
                >
                    {/* Outer gold ring */}
                    <div className={styles.badgeGold}>
                        {/* Green border ring */}
                        <div className={styles.badgeGreenBorder}>
                            {/* Inner gold fill */}

                        </div>
                    </div>

                    {/* Logo */}
                    <img
                        ref={logoRef}
                        src={logoSrc}
                        alt={logoAlt}
                        className={styles.logo}
                    />
                </div>
            </div>
        </div>
    );
}
