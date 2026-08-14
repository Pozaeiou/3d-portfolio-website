import type { SideQuest } from "../sideQuests";

const raptures: SideQuest = {
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

  team:  ["Pratham Oza", "Co-founder"],
  links: [{ label: "GitHub", url: "https://github.com/Pozaeiou" }],
};

export default raptures;
