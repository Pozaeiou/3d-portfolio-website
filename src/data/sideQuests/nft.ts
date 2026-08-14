import type { SideQuest } from "./index";

const nft: SideQuest = {
  id:       2,
  title:    "GAN Encryption — NFT Security",
  slug:     "research-paper",
  category: "Research",
  period:   "2023",
  status:   "Completed",

  highlight:   "My First Research Paper, Published in IEEE Access.",
  description: "Published research on advanced encryption using Generative Adversarial Networks to enhance the security of Non-Fungible Tokens (NFTs). Published in IEEE Access (IF: 3.9) achieving <0.45s execution time and reducing image similarity to <1%.",

  longDesc: `This research was conducted under the SPARKLE program at BITS Pilani. We explored whether GANs could be used not just for generating images, but for encrypting them in a way that's visually indistinguishable from noise — making NFT assets significantly harder to steal or replicate.\n\nThe final model achieved under 0.45s execution time with image similarity dropping below 1%, which we verified against standard perceptual metrics.`,

  technologies: "Python, PyTorch, GANs, Cryptography, IEEE Access",
  image:        "/images/research-paper.jpg",

  awards: [
    "Published in IEEE Access (Impact Factor: 3.9)",
    "SPARKLE Research Program, BITS Pilani",
  ],

  team:  ["Pratham Oza"],
  links: [{ label: "Read Paper", url: "https://ieeexplore.ieee.org" }],
};

export default nft;
