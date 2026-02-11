"use client";

/**
 * RollingNumber Component
 * 
 * Mechanical counter display:
 * - Ghost prev/next numbers (no background)
 * - Center number with tight green plate behind it
 */

import { useEffect, useRef, useState } from "react";
import styles from "./MirroredNumber.module.css";

export default function RollingNumber({
    value,
    max = 99,
    className = ""
}) {
    const [displayValue, setDisplayValue] = useState(value);
    const [isAnimating, setIsAnimating] = useState(false);
    const prevValueRef = useRef(value);

    const getPrevValue = (val) => (val === 0 ? max : val - 1);
    const getNextValue = (val) => (val === max ? 0 : val + 1);
    const format = (num) => String(num).padStart(2, '0');

    useEffect(() => {
        if (value !== prevValueRef.current) {
            setIsAnimating(true);
            const timer = setTimeout(() => {
                setDisplayValue(value);
                setIsAnimating(false);
            }, 50);
            prevValueRef.current = value;
            return () => clearTimeout(timer);
        }
    }, [value]);

    const prevVal = getPrevValue(displayValue);
    const prevVal2 = getPrevValue(prevVal);
    const nextVal = getNextValue(displayValue);
    const nextVal2 = getNextValue(nextVal);

    return (
        <div className={`${styles.rollingWrapper} ${className}`}>
            <div className={`${styles.rollingStack} ${isAnimating ? styles.animating : ''}`}>
                {/* Ghost prev-2 (furthest above) */}
                <span className={styles.ghostNumber} style={{ zIndex: 1 }} aria-hidden="true">
                    {format(prevVal2)}
                </span>

                {/* Ghost prev-1 */}
                <span className={styles.ghostNumber} style={{ zIndex: 3 }} aria-hidden="true">
                    {format(prevVal)}
                </span>

                {/* Center number */}
                <span className={styles.currentNumber} style={{ zIndex: 5 }}>
                    {format(displayValue)}
                </span>

                {/* Ghost next+1 */}
                <span className={styles.ghostNumber} style={{ zIndex: 3 }} aria-hidden="true">
                    {format(nextVal)}
                </span>

                {/* Ghost next+2 (furthest below) */}
                <span className={styles.ghostNumber} style={{ zIndex: 1 }} aria-hidden="true">
                    {format(nextVal2)}
                </span>
            </div>
        </div>
    );
}
