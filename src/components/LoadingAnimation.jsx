"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LoadingAnimation({ onComplete }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(onComplete, 300);
        }
      });

      // SCREEN 1: Outer hexagon frame fades in (0-1s)
      tl.fromTo(".hex-layer-1",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
      )

      // SCREEN 2: Inner hexagon borders draw in sequence (1-2.5s)
      .to(".hex-border-1", {
        strokeDashoffset: 0,
        duration: 0.6,
        ease: "power2.inOut"
      }, "+=0.2")
      
      .to(".hex-layer-2", {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      }, "-=0.2")
      
      .to(".hex-border-2", {
        strokeDashoffset: 0,
        duration: 0.6,
        ease: "power2.inOut"
      }, "-=0.2")
      
      .to(".hex-layer-3", {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      }, "-=0.2")
      
      .to(".hex-border-3", {
        strokeDashoffset: 0,
        duration: 0.6,
        ease: "power2.inOut"
      }, "-=0.2")

      // SCREEN 3: Logo scales in from center (2.5-3.5s)
      .to(".hex-center", {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      }, "-=0.1")
      
      .fromTo(".logo-reveal",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
      )

      // Hold briefly then fade out (3.5-4s)
      .to({}, { duration: 0.3 })
      
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut"
      });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #c5a05e 0%, #2d5a3d 50%, #1a4d2e 100%)'
      }}
    >
      <div className="relative w-[70vmin] h-[70vmin] max-w-[700px] max-h-[700px] flex items-center justify-center">
        
        {/* Layer 1: Outermost hexagon with shadow/depth */}
        <svg 
          className="hex-layer-1 absolute w-full h-full opacity-0" 
          viewBox="0 0 200 200"
        >
          <defs>
            <filter id="depth-shadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
              <feOffset dx="0" dy="6" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.4"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f4e4b8', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#d4af37', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#b8941f', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          
          {/* Outer filled hexagon with depth */}
          <polygon
            points="100,15 175,57.5 175,142.5 100,185 25,142.5 25,57.5"
            fill="rgba(29, 53, 42, 0.6)"
            stroke="url(#gold-gradient)"
            strokeWidth="2"
            filter="url(#depth-shadow)"
          />
        </svg>

        {/* Layer 2: Second hexagon border */}
        <svg 
          className="hex-layer-2 absolute w-[85%] h-[85%] opacity-0" 
          viewBox="0 0 200 200"
          style={{ transform: 'scale(0.9)' }}
        >
          <polygon
            className="hex-border-1"
            points="100,25 165,62.5 165,137.5 100,175 35,137.5 35,62.5"
            fill="none"
            stroke="url(#gold-gradient)"
            strokeWidth="2.5"
            style={{
              strokeDasharray: 650,
              strokeDashoffset: 650
            }}
          />
        </svg>

        {/* Layer 3: Third hexagon border */}
        <svg 
          className="hex-layer-3 absolute w-[70%] h-[70%] opacity-0" 
          viewBox="0 0 200 200"
          style={{ transform: 'scale(0.8)' }}
        >
          <polygon
            className="hex-border-2"
            points="100,30 160,65 160,135 100,170 40,135 40,65"
            fill="none"
            stroke="url(#gold-gradient)"
            strokeWidth="2.5"
            style={{
              strokeDasharray: 600,
              strokeDashoffset: 600
            }}
          />
        </svg>

        {/* Layer 4: Innermost hexagon with subtle fill */}
        <svg 
          className="hex-center absolute w-[55%] h-[55%] opacity-0" 
          viewBox="0 0 200 200"
          style={{ transform: 'scale(0)' }}
        >
          <defs>
            <radialGradient id="center-glow">
              <stop offset="0%" style={{ stopColor: '#f4e4b8', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#d4af37', stopOpacity: 0.1 }} />
            </radialGradient>
          </defs>
          
          <polygon
            className="hex-border-3"
            points="100,35 155,67.5 155,132.5 100,165 45,132.5 45,67.5"
            fill="url(#center-glow)"
            stroke="url(#gold-gradient)"
            strokeWidth="3"
            style={{
              strokeDasharray: 550,
              strokeDashoffset: 550
            }}
          />
        </svg>

        {/* Logo - scales from 0 to 1 in center */}
        <div className="logo-reveal absolute w-[35%] h-[35%] flex items-center justify-center opacity-0">
          <img 
            src="/logo.svg" 
            alt="Logo" 
            className="w-full h-full object-contain"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.6))'
            }}
          />
        </div>

      </div>
    </div>
  );
}