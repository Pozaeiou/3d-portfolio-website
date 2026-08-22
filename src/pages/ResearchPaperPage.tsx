// ResearchPaperPage.tsx — Immersive deep-dive page for the IEEE research paper
// "Advanced Encryption Using GAN for Enhancing Security of NFTs"
// Content sourced directly from the published paper (IEEE Access, 2025)
// Route: /side-quests/research-paper

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  TbArrowLeft,
  TbShieldLock,
  TbBolt,
  TbCheck,
  TbExternalLink,
  TbBrain,
  TbChartBar,
  TbLock,
  TbAlertTriangle,
} from "react-icons/tb";
import "./ResearchPaperPage.css";

// Nav sections used in the sticky chapter dots
const chapters = [
  { id: "problem",     label: "The Problem",        num: "01" },
  { id: "gans",        label: "How GANs Work",       num: "02" },
  { id: "algorithms",  label: "Encryption Methods",  num: "03" },
  { id: "algorithm",   label: "The Algorithm",       num: "04" },
  { id: "results",     label: "Results",             num: "05" },
  { id: "conclusion",  label: "Conclusion",          num: "06" },
];

const ResearchPaperPage = () => {
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Body overflow fix so the page scrolls properly
  useEffect(() => {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  // Cursor spotlight that follows the mouse
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = `${e.clientX}px`;
        cursorGlowRef.current.style.top  = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Reading progress bar at the very top
  useEffect(() => {
    const onScroll = () => {
      const scrollTop    = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-reveal: add "visible" class when elements enter the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".rp-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="rp-page">

      {/* Cursor spotlight glow */}
      <div className="rp-cursor-glow" ref={cursorGlowRef} />

      {/* Floating ambient orbs */}
      <div className="rp-orbs" aria-hidden="true">
        <div className="rp-orb rp-orb-1" />
        <div className="rp-orb rp-orb-2" />
        <div className="rp-orb rp-orb-3" />
        <div className="rp-orb rp-orb-4" />
      </div>

      {/* Reading progress bar */}
      <div className="rp-progress-bar" style={{ width: `${progress}%` }} />

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <div className="rp-nav">
        <Link to="/side-quests" className="rp-back" data-cursor="disable">
          <TbArrowLeft size={14} />
          Back to Side Quests
        </Link>
        <div className="rp-chapter-nav">
          {chapters.map((c) => (
            <button
              key={c.id}
              onClick={() => scrollTo(c.id)}
              className="rp-chapter-dot"
              data-cursor="disable"
              title={c.label}
            >
              {c.num}
            </button>
          ))}
        </div>
      </div>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="rp-hero">
        <div className="rp-hero-tags rp-reveal">
          <span className="rp-tag">Research Paper</span>
          <span className="rp-tag">2025</span>
          <span className="rp-tag">BITS Pilani</span>
          <span className="rp-tag rp-tag-ieee">IEEE Access</span>
        </div>

        <h1 className="rp-hero-title rp-reveal">
          Encrypting NFTs<br />
          with <span>GANs</span>
        </h1>

        <p className="rp-hero-sub rp-reveal">
          My first research paper — published in IEEE Access.
        </p>

        {/* Hero — cover image */}
        <div className="rp-hero-image rp-reveal">
          <img src="/images/research-paper.jpg" alt="IEEE Access — GAN Encryption for NFTs" />
          <div className="rp-hero-image-caption">
            Advanced Encryption Using GAN for Enhancing Security of NFTs — IEEE Access, Vol. 13, 2025
          </div>
        </div>

        {/* Stats row — 4 items */}
        <div className="rp-stats rp-reveal">
          <div className="rp-stat">
            <span className="rp-stat-num">3.9</span>
            <span className="rp-stat-label">IEEE Access<br />Impact Factor</span>
          </div>
          <div className="rp-stat">
            <span className="rp-stat-num">&lt;0.45s</span>
            <span className="rp-stat-label">Encryption<br />Execution Time</span>
          </div>
          <div className="rp-stat">
            <span className="rp-stat-num">&lt;1%</span>
            <span className="rp-stat-label">Image Similarity<br />After Encryption</span>
          </div>
          <div className="rp-stat">
            <span className="rp-stat-num">16</span>
            <span className="rp-stat-label">Pages<br />Published</span>
          </div>
        </div>
      </div>

      {/* ── Intro ───────────────────────────────────────────────────────── */}
      <div className="rp-intro rp-reveal">
        <p>
          Can you hide an image so completely that even an AI can't tell what's inside it — while still being
          able to perfectly restore it in under half a second? That's the core question this paper tries to answer,
          in the context of NFT security on the blockchain.
        </p>
      </div>

      <div className="rp-divider" />

      {/* ══════════════════════════════════════════════════════════════════
          CHAPTER 01 — THE PROBLEM
          ══════════════════════════════════════════════════════════════════ */}
      <section id="problem" className="rp-chapter rp-reveal">
        <div className="rp-chapter-header">
          <span className="rp-chapter-ghost-num">01</span>
          <div>
            <p className="rp-chapter-label">Chapter 01</p>
            <h2 className="rp-chapter-title">The Problem: NFTs Aren't as Safe as You Think</h2>
          </div>
        </div>

        <div className="rp-chapter-body">
          <p>
            NFTs (Non-Fungible Tokens) are unique digital assets stored on a blockchain — think digital art,
            collectibles, music, even real estate. They use <strong>Ethereum's smart contracts</strong> to
            prove ownership and enable transfers. In theory, the decentralized architecture should make them
            secure. In practice, they're not.
          </p>
          <p>
            When you transfer an NFT from one wallet to another, the <strong>original image metadata is exposed
            on the blockchain</strong> during transit. This is the vulnerability. A bad actor can intercept it,
            clone the image, and effectively steal the asset — even before the transfer completes.
          </p>
        </div>

        <div className="rp-lessons">
          <div className="rp-lesson">
            <span className="rp-lesson-icon"><TbAlertTriangle size={18} /></span>
            <p>
              <strong>2021 Beeple hack</strong> — A hacker exploited a smart contract vulnerability to steal one
              of the most valuable NFT artworks and transfer it to their own wallet.
            </p>
          </div>
          <div className="rp-lesson">
            <span className="rp-lesson-icon"><TbAlertTriangle size={18} /></span>
            <p>
              <strong>2016 DAO hack</strong> — A smart contract vulnerability led to millions of dollars worth of
              Ether being stolen, exposing the systemic risks of on-chain transfers.
            </p>
          </div>
        </div>

        <div className="rp-chapter-body">
          <p>
            The core issue: existing NFT transfer systems upload the <strong>raw image metadata on-chain</strong>.
            Any intermediary with enough access and time can grab it. There's no extra encryption layer on the
            image itself — just the ownership record.
          </p>
          <p>
            Our proposal: instead of transferring the original image, transfer an <strong>encrypted version so
            visually scrambled</strong> that it's indistinguishable from noise. Then send the decryption key
            via a completely separate off-chain channel. Neither channel alone is enough to reconstruct the image.
          </p>
        </div>

        <blockquote className="rp-quote rp-quote-big">
          "No intermediary should have access to the complete metadata at any point in time."
        </blockquote>
      </section>

      <div className="rp-divider" />

      {/* ══════════════════════════════════════════════════════════════════
          CHAPTER 02 — HOW GANS WORK
          ══════════════════════════════════════════════════════════════════ */}
      <section id="gans" className="rp-chapter rp-reveal">
        <div className="rp-chapter-header">
          <span className="rp-chapter-ghost-num">02</span>
          <div>
            <p className="rp-chapter-label">Chapter 02</p>
            <h2 className="rp-chapter-title">How GANs Work</h2>
          </div>
        </div>

        <div className="rp-chapter-body">
          <p>
            A <strong>Generative Adversarial Network (GAN)</strong> is a machine learning model made of two
            neural networks in competition with each other: a <strong>Generator</strong> that creates fake images,
            and a <strong>Discriminator</strong> that tries to tell them apart from real ones. They train together
            in a loop until the generator becomes so good, its images are indistinguishable from reality.
          </p>
        </div>

        <div className="rp-equation rp-reveal">
          <p className="rp-equation-label">Eq. 1 — Generator Function</p>
          <p className="rp-equation-formula">x_fake = G(z; θ_G)</p>
          <p className="rp-equation-sub">
            z = random noise input &nbsp;|&nbsp; θ_G = generator network parameters
          </p>
        </div>

        <div className="rp-equation rp-reveal">
          <p className="rp-equation-label">Eq. 2 — Discriminator Function</p>
          <p className="rp-equation-formula">D(x_real) = D(x; θ_D)</p>
          <p className="rp-equation-sub">
            x = real or generated image &nbsp;|&nbsp; θ_D = discriminator network parameters
          </p>
        </div>

        <div className="rp-chapter-body">
          <p>
            The two networks compete using an <strong>adversarial objective function</strong>. The generator
            tries to maximize the chance its fakes fool the discriminator. The discriminator tries to correctly
            identify real vs. fake. Over time, a Nash equilibrium is reached.
          </p>
        </div>

        <div className="rp-equation rp-reveal">
          <p className="rp-equation-label">Eq. 5 — GAN Minimax Objective</p>
          <p className="rp-equation-formula">
            min max V(G, D) = E[log D(x_real)] + E[log(1 − D(G(z)))]
          </p>
          <p className="rp-equation-sub">
            The generator minimises · the discriminator maximises this function
          </p>
        </div>

        <div className="rp-chapter-body">
          <p>
            In our context, we use a trained GAN not to generate fake art, but to produce
            <strong> unique random images</strong> that serve as encryption keys. These are combined with the
            original NFT image through a technique called <strong>alpha composition</strong>. The result looks
            like visual noise — but it's mathematically reversible if you have the GAN image.
          </p>
        </div>

        <div className="rp-lessons">
          <div className="rp-lesson">
            <span className="rp-lesson-icon"><TbBrain size={18} /></span>
            <p>
              GANs generate images that are <strong>slightly different each time</strong>, making it impossible
              for an attacker to predict or recreate the encryption key even if they know the model.
            </p>
          </div>
        </div>
      </section>

      <div className="rp-divider" />

      {/* ══════════════════════════════════════════════════════════════════
          CHAPTER 03 — ENCRYPTION METHODS COMPARED
          ══════════════════════════════════════════════════════════════════ */}
      <section id="algorithms" className="rp-chapter rp-reveal">
        <div className="rp-chapter-header">
          <span className="rp-chapter-ghost-num">03</span>
          <div>
            <p className="rp-chapter-label">Chapter 03</p>
            <h2 className="rp-chapter-title">Five Encryption Methods, One Winner</h2>
          </div>
        </div>

        <div className="rp-chapter-body">
          <p>
            Before choosing an algorithm, we implemented and benchmarked five different pixel-based encryption
            approaches. Each was measured on two dimensions: <strong>how hard it is to decrypt</strong> (FLANN
            matching — lower is better) and <strong>how fast it runs</strong> (execution time in seconds).
          </p>
        </div>

        {/* Algorithm 1 — RGB Bitwise */}
        <div className="rp-algo rp-reveal">
          <div className="rp-algo-header">
            <span className="rp-algo-name">Algorithm 1 — RGB Bitwise Encryption</span>
            <span className="rp-algo-tag">Pixel-level XOR operations</span>
          </div>
          <div className="rp-algo-body">
            <span className="rp-algo-kw">for</span> each pixel (i, j) <span className="rp-algo-kw">in</span> image:{"\n"}
            {"  "}P = <span className="rp-algo-num">50</span> × (i <span className="rp-algo-kw">XOR</span> j){"\n"}
            {"  "}r = (P <span className="rp-algo-kw">XOR</span> r − g) <span className="rp-algo-kw">XOR</span> b{"\n"}
            {"  "}g = (P <span className="rp-algo-kw">XOR</span> g − b) <span className="rp-algo-kw">XOR</span> r{"\n"}
            {"  "}b = (P <span className="rp-algo-kw">XOR</span> b − r) <span className="rp-algo-kw">XOR</span> g{"\n"}
            {"  "}<span className="rp-algo-comment">// if value {'>'} 255 → store overflow, take remainder</span>
          </div>
        </div>

        {/* Algorithm 2 — Alpha Blending */}
        <div className="rp-algo rp-reveal">
          <div className="rp-algo-header">
            <span className="rp-algo-name">Algorithm 2 — Alpha Blending</span>
            <span className="rp-algo-tag">Transparency-based superimposition</span>
          </div>
          <div className="rp-algo-body">
            <span className="rp-algo-kw">for</span> each pixel (x, y):{"\n"}
            {"  "}channel_blend = α × RGB₁[x,y] + (<span className="rp-algo-num">1</span>−α) × RGB₂[x,y]{"\n"}
            <span className="rp-algo-comment">{"  "}// α controls how much of each image shows through</span>{"\n"}
            {"  "}<span className="rp-algo-kw">return</span> <span className="rp-algo-fn">superimposed_image</span>
          </div>
        </div>

        {/* Algorithm 3 — Gaussian Noise */}
        <div className="rp-algo rp-reveal">
          <div className="rp-algo-header">
            <span className="rp-algo-name">Algorithm 3 — Gaussian Noise Addition</span>
            <span className="rp-algo-tag">Statistical randomness layer</span>
          </div>
          <div className="rp-algo-body">
            noise = <span className="rp-algo-fn">Random</span>(<span className="rp-algo-num">0</span>, σ, imageSize){"\n"}
            noisy = <span className="rp-algo-fn">AlphaBlend</span>(image, noise){"\n"}
            <span className="rp-algo-kw">return</span> <span className="rp-algo-fn">Clip</span>(noisy, <span className="rp-algo-num">0</span>, <span className="rp-algo-num">255</span>){"\n"}
            <span className="rp-algo-comment">// σ = standard deviation, controls noise intensity</span>
          </div>
        </div>

        <div className="rp-chapter-body">
          <p>
            We also implemented <strong>AES (Advanced Encryption Standard)</strong> — a symmetric block cipher
            used industry-wide. Each pixel block is substituted, shifted, and mixed across 10+ rounds using an
            expanded secret key. Highly secure, but computationally expensive.
          </p>
          <p>
            And finally, <strong>RGB Multiplexing</strong> — combining the pixel values of two images channel by
            channel using a 2:1 MUX (multiplexer), where the select line determines which image's values
            dominate each pixel.
          </p>
        </div>

        {/* Comparison table */}
        <div className="rp-table-wrap rp-reveal">
          <table className="rp-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>FLANN Match %</th>
                <th>Exec. Time (s)</th>
                <th>AI-Resistant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Grayscale (baseline)</td>
                <td className="rp-red-cell">75.00%</td>
                <td>~0.05</td>
                <td className="rp-red-cell">No</td>
              </tr>
              <tr>
                <td>RGB Bitwise XOR</td>
                <td className="rp-red-cell">17.68%</td>
                <td>~0.30</td>
                <td className="rp-red-cell">No</td>
              </tr>
              <tr>
                <td>Alpha Blending + Noise</td>
                <td className="rp-accent-cell">0.62%</td>
                <td>~0.18</td>
                <td className="rp-accent-cell">Partial</td>
              </tr>
              <tr>
                <td>RGB Multiplexing</td>
                <td className="rp-green-cell">0.01%</td>
                <td>~0.10</td>
                <td className="rp-red-cell">No</td>
              </tr>
              <tr className="rp-table-highlight">
                <td><strong>GAN + Alpha Blend + Noise ★</strong></td>
                <td className="rp-green-cell">0.55%</td>
                <td className="rp-accent-cell">~0.45</td>
                <td className="rp-green-cell">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rp-chapter-body">
          <p>
            RGB Multiplexing had the lowest FLANN score (0.01%) but was vulnerable to AI-based pattern analysis
            — its select-line logic is predictable. The proposed GAN method achieves <strong>0.55% FLANN
            matching</strong> while also being resistant to ML-based decryption, because the GAN image is
            randomly generated and changes every time. That's the key insight.
          </p>
        </div>

        {/* FLANN chart */}
        <div className="rp-chart rp-reveal">
          <img src="/images/rp-flann.jpg" alt="FLANN Matching vs Encryption Time" />
          <p className="rp-chart-caption">Fig. 7 — FLANN Matching (%) vs Encryption Time (sec) across all methods</p>
        </div>
      </section>

      <div className="rp-divider" />

      {/* ══════════════════════════════════════════════════════════════════
          CHAPTER 04 — THE PROPOSED ALGORITHM
          ══════════════════════════════════════════════════════════════════ */}
      <section id="algorithm" className="rp-chapter rp-reveal">
        <div className="rp-chapter-header">
          <span className="rp-chapter-ghost-num">04</span>
          <div>
            <p className="rp-chapter-label">Chapter 04</p>
            <h2 className="rp-chapter-title">The Proposed Algorithm</h2>
          </div>
        </div>

        <div className="rp-chapter-body">
          <p>
            Our enhanced encryption-decryption pipeline has three phases: <strong>Encrypt → Transfer → Decrypt</strong>.
            The entire process is designed so that at no point does any single party — sender, receiver, or the
            blockchain itself — have access to the complete image NFT metadata.
          </p>
        </div>

        {/* Phase 1 — Encryption */}
        <p className="rp-chapter-label" style={{ marginBottom: 16 }}>Phase 1 — Encryption</p>

        <div className="rp-algo rp-reveal">
          <div className="rp-algo-header">
            <span className="rp-algo-name">Algorithm 6 — EncryptBMD (Blockchain Metadata)</span>
            <span className="rp-algo-tag">Two-layer alpha composition</span>
          </div>
          <div className="rp-algo-body">
            <span className="rp-algo-comment">// Step 1: blend NFT image with GAN-generated random image</span>{"\n"}
            BlendedImage = <span className="rp-algo-fn">AlphaBlend</span>(NFTImage, GANImage, α₁){"\n"}
            {"\n"}
            <span className="rp-algo-comment">// Step 2: add a layer of Gaussian noise on top</span>{"\n"}
            EncryptedImage = <span className="rp-algo-fn">AlphaBlend</span>(BlendedImage, GaussianNoise, α₂){"\n"}
            {"\n"}
            <span className="rp-algo-comment">// Step 3: hash the encrypted image for integrity verification</span>{"\n"}
            metadata[<span className="rp-algo-fn">"hash"</span>]   = <span className="rp-algo-fn">SHA256</span>(EncryptedImage){"\n"}
            metadata[<span className="rp-algo-fn">"alpha1"</span>] = α₁{"\n"}
            metadata[<span className="rp-algo-fn">"alpha2"</span>] = α₂{"\n"}
            <span className="rp-algo-kw">return</span> metadata
          </div>
        </div>

        {/* Alpha blend formula */}
        <div className="rp-equation rp-reveal">
          <p className="rp-equation-label">Eq. 10 — Alpha Blending Formula</p>
          <p className="rp-equation-formula">
            I_blended[ch] = α × I₁[ch] + (1−α) × I₂[ch]
          </p>
          <p className="rp-equation-sub">
            ch ∈ {"{"} R, G, B {"}"} &nbsp;|&nbsp; α ∈ [0, 1] controls transparency ratio
          </p>
        </div>

        {/* Phase 2 — Transfer */}
        <p className="rp-chapter-label" style={{ margin: "40px 0 16px" }}>Phase 2 — Transfer (On-chain + Off-chain)</p>

        <div className="rp-pipeline rp-reveal">
          <div className="rp-pipeline-step">
            <span className="rp-pipeline-num">01</span>
            <div className="rp-pipeline-content">
              <h4>On-chain (Blockchain)</h4>
              <p>The encrypted image metadata + SHA-256 hash + alpha values are sent over Ethereum blockchain via smart contract. No raw image, only scrambled data.</p>
            </div>
          </div>
          <div className="rp-pipeline-step">
            <span className="rp-pipeline-num">02</span>
            <div className="rp-pipeline-content">
              <h4>Off-chain (Separate Channel)</h4>
              <p>The GAN-generated image and the Gaussian noise pattern are sent via OTP or QR code — refreshed every 15–30 seconds. Completely separate from the blockchain.</p>
            </div>
          </div>
          <div className="rp-pipeline-step">
            <span className="rp-pipeline-num">03</span>
            <div className="rp-pipeline-content">
              <h4>Split Metadata — Zero Single Point of Failure</h4>
              <p>On-chain data alone cannot reconstruct the image. Off-chain data alone cannot either. An attacker needs both simultaneously within seconds — practically impossible.</p>
            </div>
          </div>
        </div>

        {/* Phase 3 — Decryption */}
        <p className="rp-chapter-label" style={{ margin: "40px 0 16px" }}>Phase 3 — Decryption</p>

        <div className="rp-algo rp-reveal">
          <div className="rp-algo-header">
            <span className="rp-algo-name">Algorithm 6 — DecryptBMD</span>
            <span className="rp-algo-tag">Two-step reverse alpha blend</span>
          </div>
          <div className="rp-algo-body">
            <span className="rp-algo-comment">// Verify image integrity first</span>{"\n"}
            <span className="rp-algo-kw">if</span> <span className="rp-algo-fn">SHA256</span>(ReceivedImage) ≠ metadata[<span className="rp-algo-fn">"hash"</span>]:{"\n"}
            {"  "}<span className="rp-algo-fn">abort</span>() <span className="rp-algo-comment">// image was tampered with</span>{"\n"}
            {"\n"}
            <span className="rp-algo-comment">// Step 1: remove Gaussian noise layer</span>{"\n"}
            Blended = <span className="rp-algo-fn">ReverseAlphaBlend</span>(EncryptedImage, Noise, α₂){"\n"}
            {"\n"}
            <span className="rp-algo-comment">// Step 2: remove GAN layer → original image recovered</span>{"\n"}
            OriginalNFT = <span className="rp-algo-fn">ReverseAlphaBlend</span>(Blended, GANImage, α₁){"\n"}
            <span className="rp-algo-kw">return</span> OriginalNFT
          </div>
        </div>

        <div className="rp-equation rp-reveal">
          <p className="rp-equation-label">Eq. — Reverse Alpha Blend</p>
          <p className="rp-equation-formula">
            I_original[ch] = (I_blended[ch] − (1−α) × I₂[ch]) / α
          </p>
          <p className="rp-equation-sub">
            Mathematically exact inverse — recovers the original pixel values perfectly
          </p>
        </div>

        <div className="rp-lessons">
          <div className="rp-lesson">
            <span className="rp-lesson-icon"><TbShieldLock size={18} /></span>
            <p>
              The receiver must have: the <strong>private blockchain address</strong>, the <strong>transaction ID</strong>,
              and the <strong>off-chain GAN + noise data</strong> simultaneously. Missing any one of these makes
              decryption impossible.
            </p>
          </div>
          <div className="rp-lesson">
            <span className="rp-lesson-icon"><TbBolt size={18} /></span>
            <p>
              Total added latency is <strong>~1 second</strong> — only 1.75% of the median Ethereum transaction
              time of 57 seconds. The security overhead is negligible.
            </p>
          </div>
        </div>
      </section>

      <div className="rp-divider" />

      {/* ══════════════════════════════════════════════════════════════════
          CHAPTER 05 — RESULTS
          ══════════════════════════════════════════════════════════════════ */}
      <section id="results" className="rp-chapter rp-reveal">
        <div className="rp-chapter-header">
          <span className="rp-chapter-ghost-num">05</span>
          <div>
            <p className="rp-chapter-label">Chapter 05</p>
            <h2 className="rp-chapter-title">Results & Validation</h2>
          </div>
        </div>

        <div className="rp-chapter-body">
          <p>
            We validated the encryption strength using three independent metrics: <strong>FLANN feature matching</strong>,
            <strong> SSIM (Structural Similarity Index)</strong>, and <strong>PSNR (Peak Signal-to-Noise Ratio)</strong>.
            Together they measure both how visually different the encrypted image is from the original, and how
            resistant it is to reconstruction.
          </p>
        </div>

        {/* Key metrics */}
        <div className="rp-metrics rp-reveal">
          <div className="rp-metric">
            <div className="rp-metric-val">0.55%</div>
            <div className="rp-metric-label">FLANN Feature Match<br />(lower = better encrypted)</div>
          </div>
          <div className="rp-metric">
            <div className="rp-metric-val">0.38</div>
            <div className="rp-metric-label">SSIM Score<br />(1.0 = identical, lower = more scrambled)</div>
          </div>
          <div className="rp-metric">
            <div className="rp-metric-val">12 dB</div>
            <div className="rp-metric-label">PSNR Value<br />(lower = higher distortion from original)</div>
          </div>
          <div className="rp-metric">
            <div className="rp-metric-val">0.45s</div>
            <div className="rp-metric-label">Total Encryption Time<br />(alpha blend + noise)</div>
          </div>
        </div>

        <div className="rp-chapter-body">
          <p>
            The <strong>SSIM</strong> (Structural Similarity Index) measures perceptual similarity between two
            images on a scale of −1 to 1, where 1 means identical. A value of <strong>0.38 for the GAN method</strong>
            means the encrypted image retains some structural pattern — but this is expected when using
            alpha blending with a random image.
          </p>
        </div>

        <div className="rp-equation rp-reveal">
          <p className="rp-equation-label">Eq. 7 — Structural Similarity Index (SSIM)</p>
          <p className="rp-equation-formula">
            SSIM(x, y) = (2μₓμᵧ + C₁)(2σₓᵧ + C₂) / (μₓ² + μᵧ² + C₁)(σₓ² + σᵧ² + C₂)
          </p>
          <p className="rp-equation-sub">
            μ = mean intensity &nbsp;|&nbsp; σ² = variance &nbsp;|&nbsp; σₓᵧ = covariance &nbsp;|&nbsp; C₁, C₂ = stability constants
          </p>
        </div>

        <div className="rp-equation rp-reveal">
          <p className="rp-equation-label">Eq. 8 — Peak Signal-to-Noise Ratio (PSNR)</p>
          <p className="rp-equation-formula">
            PSNR = 10 · log₁₀(L² / MSE)
          </p>
          <p className="rp-equation-sub">
            L = max pixel value (255) &nbsp;|&nbsp; MSE = mean squared error between original and encrypted images
          </p>
        </div>

        {/* SSIM chart */}
        <div className="rp-chart rp-reveal">
          <img src="/images/rp-ssim.jpg" alt="SSIM Comparison across encryption methods" />
          <p className="rp-chart-caption">Fig. 9 — SSIM comparison: lower values indicate stronger encryption</p>
        </div>

        {/* PSNR chart */}
        <div className="rp-chart rp-reveal">
          <img src="/images/rp-psnr.jpg" alt="PSNR Comparison across encryption methods" />
          <p className="rp-chart-caption">Fig. 10 — PSNR comparison (dB): lower indicates higher distortion from original</p>
        </div>

        <div className="rp-chapter-body">
          <p>
            We also ran <strong>Cosine Similarity</strong> analysis using both raw pixel values and high-level
            features extracted from a <strong>VGG-16 deep learning model</strong>. Feature-based cosine
            similarity captures semantic content — not just pixel-level differences. Our method scored
            <strong> 0.3446 on feature-based similarity</strong>, confirming the encrypted image carries no
            recoverable semantic information about the original NFT.
          </p>
        </div>

        {/* Cosine chart */}
        <div className="rp-chart rp-reveal">
          <img src="/images/rp-cosine.jpg" alt="Cosine Similarity comparison" />
          <p className="rp-chart-caption">Fig. 8 — Cosine similarity (pixel-level vs VGG-16 feature-based) across methods</p>
        </div>

        {/* Full comparison table */}
        <div className="rp-table-wrap rp-reveal">
          <table className="rp-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>Pixel Cosine</th>
                <th>VGG-16 Cosine</th>
                <th>SSIM</th>
                <th>PSNR (dB)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Grayscale (baseline)</td>
                <td>0.6915</td>
                <td>0.5017</td>
                <td>1.00</td>
                <td>~40.0</td>
              </tr>
              <tr>
                <td>Alpha Blending + Noise</td>
                <td>0.7877</td>
                <td>0.2715</td>
                <td>0.54</td>
                <td>~17.0</td>
              </tr>
              <tr>
                <td>RGB Bitwise XOR</td>
                <td>0.3833</td>
                <td>0.0265</td>
                <td>0.12</td>
                <td>~13.0</td>
              </tr>
              <tr className="rp-table-highlight">
                <td><strong>GAN + Alpha Blend + Noise ★</strong></td>
                <td className="rp-accent-cell">0.4628</td>
                <td className="rp-accent-cell">0.3446</td>
                <td className="rp-accent-cell">0.38</td>
                <td className="rp-accent-cell">~12.0</td>
              </tr>
              <tr>
                <td>RGB Multiplexing</td>
                <td>0.3051</td>
                <td>0.1477</td>
                <td>~0.01</td>
                <td>~10.0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rp-lessons">
          <div className="rp-lesson">
            <span className="rp-lesson-icon"><TbChartBar size={18} /></span>
            <p>
              RGB Multiplexing had <em>lower</em> SSIM and PSNR than our method, but it's trivially breakable:
              the XOR select-line can be reverse-engineered by pattern analysis. Our GAN method's randomness
              makes it <strong>resistant to AI-based decryption</strong>, which is the real-world threat.
            </p>
          </div>
        </div>
      </section>

      <div className="rp-divider" />

      {/* ══════════════════════════════════════════════════════════════════
          CHAPTER 06 — CONCLUSION
          ══════════════════════════════════════════════════════════════════ */}
      <section id="conclusion" className="rp-chapter rp-reveal">
        <div className="rp-chapter-header">
          <span className="rp-chapter-ghost-num">06</span>
          <div>
            <p className="rp-chapter-label">Chapter 06</p>
            <h2 className="rp-chapter-title">What This Means</h2>
          </div>
        </div>

        <div className="rp-chapter-body">
          <p>
            This paper proposes a practical, lightweight encryption layer that any NFT platform could add to
            their transfer pipeline without fundamentally changing the underlying blockchain infrastructure.
            The total overhead is around <strong>1 second</strong> — barely noticeable against Ethereum's
            ~57-second median transaction time.
          </p>
          <p>
            The key contribution is combining three existing techniques in a novel way: <strong>GAN-generated
            random images</strong> (for unpredictability), <strong>alpha composition</strong> (for fast, reversible
            blending), and <strong>Gaussian noise</strong> (for ML-resistance). No single one of these alone
            is sufficient — together, they create an encryption scheme that's both fast and robust.
          </p>
        </div>

        <blockquote className="rp-quote rp-quote-big">
          "The proposed scheme will deter any third party from accessing the original image completely — while adding only 1.75% overhead to the median NFT transfer time."
        </blockquote>

        <div className="rp-chapter-body">
          <p>
            We also identified several <strong>future directions</strong>: adding Multi-Factor Authentication (MFA)
            to the off-chain transfer, browser extensions that verify NFT authenticity on the fly, and exploring
            zero-knowledge proofs for even stronger ownership verification without exposing any metadata at all.
          </p>
        </div>

        <div className="rp-lessons">
          <div className="rp-lesson">
            <span className="rp-lesson-icon"><TbCheck size={18} /></span>
            <p><strong>GAN randomness</strong> — Every encryption run produces a different key image. Attackers can't predict it.</p>
          </div>
          <div className="rp-lesson">
            <span className="rp-lesson-icon"><TbCheck size={18} /></span>
            <p><strong>Split metadata</strong> — On-chain and off-chain data are both required. Neither alone reconstructs the image.</p>
          </div>
          <div className="rp-lesson">
            <span className="rp-lesson-icon"><TbCheck size={18} /></span>
            <p><strong>SHA-256 integrity</strong> — Any tampering in transit is immediately detected on decryption.</p>
          </div>
          <div className="rp-lesson">
            <span className="rp-lesson-icon"><TbLock size={18} /></span>
            <p><strong>Platform-agnostic</strong> — Works with any NFT marketplace (OpenSea, Rarible, etc.) without modification to the existing smart contract layer.</p>
          </div>
        </div>
      </section>

      <div className="rp-divider" />

      {/* ── Publication Details ──────────────────────────────────────────── */}
      <section className="rp-chapter rp-reveal">
        <div className="rp-awards">
          <h2>Publication</h2>
          <div className="rp-awards-grid">
            <div className="rp-award-card">
              <span className="rp-award-icon"><TbShieldLock size={20} /></span>
              <h4>IEEE Access</h4>
              <p>Impact Factor 3.9 · Open Access · Vol. 13, 2025</p>
            </div>
            <div className="rp-award-card">
              <span className="rp-award-icon"><TbBrain size={20} /></span>
              <h4>SPARKLE Program</h4>
              <p>BITS Pilani research grant — funded under NFSG & CDRF (Grant C1/23/168)</p>
            </div>
            <div className="rp-award-card">
              <span className="rp-award-icon"><TbChartBar size={20} /></span>
              <h4>DOI</h4>
              <p>10.1109/ACCESS.2025.3603088</p>
            </div>
          </div>
        </div>
      </section>

      <div className="rp-divider" />

      {/* ── Team ────────────────────────────────────────────────────────── */}
      <section className="rp-chapter rp-reveal">
        <div className="rp-team">
          <h2>Authors</h2>
          <div className="rp-team-cards">
            <div className="rp-team-card">
              <div className="rp-team-avatar">PO</div>
              <h4>Pratham Oza</h4>
              <p>BITS Pilani CS, 2024</p>
            </div>
            <div className="rp-team-card">
              <div className="rp-team-avatar">AG</div>
              <h4>Arnav Gujarathi</h4>
              <p>BITS Pilani CS, 2024 · SDE at Amazon</p>
            </div>
            <div className="rp-team-card">
              <div className="rp-team-avatar">AB</div>
              <h4>Prof. Asish Bera</h4>
              <p>Asst. Professor, BITS Pilani · Senior Member IEEE</p>
            </div>
          </div>
        </div>
      </section>

      <div className="rp-divider" />

      {/* ── Read Paper link ──────────────────────────────────────────────── */}
      <section className="rp-chapter rp-reveal">
        <div className="rp-links">
          <a
            href="https://ieeexplore.ieee.org/document/11142250"
            target="_blank"
            rel="noopener noreferrer"
            className="rp-link-btn"
            data-cursor="disable"
          >
            Read on IEEE Xplore
            <TbExternalLink size={15} />
          </a>
        </div>
      </section>

      {/* ── Bottom back link ─────────────────────────────────────────────── */}
      <div className="rp-bottom-back rp-reveal">
        <Link to="/side-quests" className="rp-back" data-cursor="disable">
          <TbArrowLeft size={14} />
          Back to Side Quests
        </Link>
      </div>

    </div>
  );
};

export default ResearchPaperPage;
