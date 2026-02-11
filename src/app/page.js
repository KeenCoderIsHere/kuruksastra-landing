"use client";
import { useState } from "react";
import HexReveal from "@/components/HexReveal";
import HeroSection from "@/components/HeroSection";
import ArtistsShowcase from "@/components/ArtistsShowcase";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  return (
    <>
      {!loadingComplete && (
        <HexReveal 
          onComplete={() => setLoadingComplete(true)}
          logoSrc="/logo.png"
          logoAlt="Kuruksatna Logo"
        />
      )}
      <HeroSection isVisible={loadingComplete} />
      <ArtistsShowcase autoPlay={true} />
    </>
  );
}
