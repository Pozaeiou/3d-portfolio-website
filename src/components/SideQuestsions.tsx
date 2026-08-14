// SideQuestsions.tsx — Inverted-pyramid grid with a video background.
// Items are placeholders ("Coming Soon") — icons and URLs removed.

import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
}

// Same pyramid shape (12 → 10 → 8 → 6 → 4 → 2), all placeholders for now
const items: TechItem[][] = [
  Array(12).fill({ name: "Coming Soon" }),
  Array(10).fill({ name: "Coming Soon" }),
  Array(8).fill({ name: "Coming Soon" }),
  Array(6).fill({ name: "Coming Soon" }),
  Array(4).fill({ name: "Coming Soon" }),
  Array(2).fill({ name: "Coming Soon" }),
];

const SideQuestsions = () => {
  return (
    <div className="techstack-new" id="sidequestions">

      {/* ── Video background ─────────────────────────────────────────────── */}
      <div className="techstack-video-container">
        <video autoPlay loop muted playsInline className="techstack-video">
          <source src="/video/video.webm" type="video/webm" />
        </video>
        <div className="techstack-overlay"></div>
      </div>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="techstack-content">
        <h2>Side Quests(ions)</h2>

        <div className="techstack-pyramid">
          {items.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="techstack-item"
                  data-cursor="disable"
                >
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideQuestsions;
