"use client";

import { useEffect, useRef } from "react";

// Muted, looping demo with native controls. Autoplays only when the visitor
// hasn't asked for reduced motion; otherwise it waits for a play click.
export default function DemoVideo({ src, poster, label, className }: { src: string; poster: string; label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().catch(() => {});
  }, []);

  return (
    <video ref={ref} className={className} src={src} poster={poster} aria-label={label} muted loop playsInline controls preload="metadata" />
  );
}
