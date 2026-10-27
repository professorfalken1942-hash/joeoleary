import { ImageResponse } from "next/og";

// The card that shows when a joeoleary.me link is shared on LinkedIn, Slack, iMessage and so on.
export const alt = "Joseph O'Leary, product designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #d6f0e3 0%, #eaf6ee 55%, #ffffff 100%)",
          color: "#384b42",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 3, textTransform: "uppercase", color: "#687a71" }}>
          Joseph O&apos;Leary · Product Designer
        </div>
        <div style={{ display: "flex", fontSize: 64, lineHeight: 1.15, fontWeight: 300, maxWidth: 980 }}>
          I understand problems, question complexity, and build better ways forward.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#16794c", fontWeight: 600 }}>joeoleary.me</div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 14,
            background: "linear-gradient(90deg, #a8dcb4, #5ec298, #16794c)",
          }}
        />
      </div>
    ),
    size
  );
}
