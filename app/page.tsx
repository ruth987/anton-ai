"use client";
import Hero from "@/components/sections/Hero";

import Plans from "@/components/sections/Plans";

import { useState, useEffect } from "react";
import Footer from "@/components/common/Footer";



export default function Home() {
  const [mounted, setMounted] = useState(false);

  // This pattern is used to handle hydration in Next.js client-side components
  // When the page first loads, mounted is false, so we return null to avoid hydration mismatches
  // After the component mounts on the client side, mounted becomes true and we render the content
  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full">
      <Hero />
      <Plans />
      <Footer />
    </div>
  );
}
