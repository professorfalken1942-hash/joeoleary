"use client";

import { useEffect, useRef, useState } from "react";

// Wide screens: a muted loop that autoplays unless the visitor asked for
// reduced motion. Phones: the frame is too small to read inline, so the poster
// carries a button that plays the demo full screen in landscape.
const COMPACT = "(max-width: 700px)";

type FullscreenVideo = HTMLVideoElement & { webkitEnterFullscreen?: () => void };

export default function DemoVideo({ src, poster, label, className }: { src: string; poster: string; label: string; className?: string }) {
  const ref = useRef<FullscreenVideo>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video || window.matchMedia(COMPACT).matches) return;
    // Phones keep the bare poster and button until tapped; everyone else gets controls now.
    video.controls = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.loop = true;
    video.play().catch(() => {});
  }, []);

  async function playFullScreen() {
    const video = ref.current;
    if (!video) return;
    setStarted(true);
    video.controls = true;
    video.currentTime = 0;
    video.play().catch(() => {});
    if (!video.requestFullscreen) {
      // iPhone Safari only supports native full screen on the video itself.
      video.webkitEnterFullscreen?.();
      return;
    }
    try {
      await video.requestFullscreen();
    } catch {
      video.webkitEnterFullscreen?.();
      return;
    }
    // Turning sideways is optional; browsers that refuse the lock still play.
    const orientation = screen.orientation as ScreenOrientation & { lock?: (o: string) => Promise<void> };
    orientation.lock?.("landscape").catch(() => {});
  }

  return (
    <div className="demo-video-wrap">
      <video ref={ref} className={className} src={src} poster={poster} aria-label={label} muted playsInline preload="metadata" onPlay={() => setStarted(true)} />
      {!started && (
        <button type="button" className="demo-video-play" onClick={playFullScreen}>
          <span aria-hidden="true" className="demo-video-play-icon" />
          <span className="demo-video-play-label">Watch full screen · 47 sec</span>
        </button>
      )}
    </div>
  );
}
