/**
 * sideQuests.ts — Single source of truth for all Side Quest content.
 *
 * To edit a side quest:  find it below and change any field.
 * To add a new quest:    copy an existing block, give it a unique id + slug.
 *
 * Fields you can add freely per quest (all optional except id, title, slug):
 *   - links       → { label, url }[]  — GitHub, live site, paper, etc.
 *   - awards      → string[]          — hackathon wins, grants, mentions
 *   - team        → string[]          — co-founders / collaborators
 *   - period      → "2022 – 2023"     — when it happened
 *   - status      → "Ongoing" | "Completed" | "Archived"
 *   - gallery     → string[]          — extra image paths in /public/images/
 *   - longDesc    → string            — extended write-up for the detail page
 */

export interface SideQuestLink {
  label: string;   // Button text e.g. "View on GitHub"
  url:   string;   // Full URL
}

export interface SideQuest {
  // ── Required ──────────────────────────────────────────────────────────────
  id:          number;    // Unique numeric ID (used internally)
  title:       string;    // Card + detail page heading
  slug:        string;    // URL slug → /side-quests/<slug>
  category:    string;    // Tag shown beneath the title e.g. "Startup"
  highlight:   string;    // One-liner shown on the card and detail hero
  description: string;    // "About this project" body text on detail page
  image:       string;    // Cover image path (relative to /public)
  technologies: string;   // Comma-separated pills on the detail page

  // ── Optional — add/remove freely ─────────────────────────────────────────
  longDesc?:   string;    // Longer write-up shown below description (supports \n)
  links?:      SideQuestLink[];
  awards?:     string[];
  team?:       string[];
  period?:     string;
  status?:     "Ongoing" | "Completed" | "Archived";
  gallery?:    string[];  // Extra images shown in a grid on the detail page
}

// ─────────────────────────────────────────────────────────────────────────────
// ADD / EDIT YOUR SIDE QUESTS HERE
// ─────────────────────────────────────────────────────────────────────────────

export const sideQuests: SideQuest[] = [

  // ── 01 · Raptures ────────────────────────────────────────────────────────
  {
    id:       1,
    title:    "Raptures",
    slug:     "raptures",
    category: "Startup",
    period:   "2022 – 2023",
    status:   "Archived",

    highlight:   "My First Venture, a Discord bot that became a Web3 wallet gateway.",
    description: "Co-founded a Discord Bot that converts social media accounts into Web3 gateways — 1-click wallet creation & transactions over channels.",

    longDesc: `We built Raptures during the Solana Hacker House in Delhi and kept iterating through multiple hackathons. The idea was simple: most people won't download a crypto wallet, but everyone's already on Discord. So we made Discord the wallet.\n\nThe bot let you create a Solana wallet, send/receive tokens, and interact with dApps — all inside a Discord server without ever leaving the app.`,

    technologies: "Discord API, Solana Web3 SDK, TypeScript, Node.js, Blockchain",
    image:        "/images/raptures.jpg",

    awards: [
      "DAAD Grant — Germany trip fully funded",
      "Desert Hack — Winner",
      "Solana Hacker House Delhi '22 — Winner",
      "Solana Hacker House Bangalore '23 — Winner",
      "SPARKLE Equity-Free Grant (~₹2L)",
      "Pre-seed incubation at PIEDS, BITS Pilani",
      "Udaan Bootcamp by India Accelerator",
    ],

    team: ["Pratham Oza", "Co-founder"],

    links: [
      { label: "GitHub", url: "https://github.com/Pozaeiou" },
    ],
  },

  // ── 02 · Research Paper ───────────────────────────────────────────────────
  {
    id:       2,
    title:    "GAN Encryption — NFT Security",
    slug:     "research-paper",
    category: "Research",
    period:   "2023",
    status:   "Completed",

    highlight:    "My First Research Paper, Published in IEEE Access.",
    description:  "Published research on advanced encryption using Generative Adversarial Networks to enhance the security of Non-Fungible Tokens (NFTs). Published in IEEE Access (IF: 3.9) achieving <0.45s execution time and reducing image similarity to <1%.",

    longDesc: `This research was conducted under the SPARKLE program at BITS Pilani. We explored whether GANs could be used not just for generating images, but for encrypting them in a way that's visually indistinguishable from noise — making NFT assets significantly harder to steal or replicate.\n\nThe final model achieved under 0.45s execution time with image similarity dropping below 1%, which we verified against standard perceptual metrics.`,

    technologies: "Python, PyTorch, GANs, Cryptography, IEEE Access",
    image:        "/images/research-paper.jpg",

    awards: [
      "Published in IEEE Access (Impact Factor: 3.9)",
      "SPARKLE Research Program, BITS Pilani",
    ],

    team: ["Pratham Oza"],

    links: [
      { label: "Read Paper", url: "https://ieeexplore.ieee.org" },
    ],
  },

];
