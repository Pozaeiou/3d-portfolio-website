// RapturesPage.tsx — Custom immersive story page for the Raptures side quest.
// Content sourced from Medium article: https://pozee.medium.com/the-journey-of-raptures-c03caf709d16

import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./RapturesPage.css";

const chapters = [
  { id: "spark1", label: "Spark 1", emoji: "🔥" },
  { id: "spark2", label: "Spark 2", emoji: "💡" },
  { id: "spark3", label: "Spark 3", emoji: "⚡" },
  { id: "pivot1", label: "Pivot 1", emoji: "🔄" },
  { id: "pivot2", label: "Pivot 2", emoji: "🚀" },
  { id: "final",  label: "Final",   emoji: "🏁" },
];

const RapturesPage = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="rp-page">

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <div className="rp-nav">
        <Link to="/side-quests" className="rp-back" data-cursor="disable">
          ← Back to Side Quests
        </Link>
        <div className="rp-chapter-nav">
          {chapters.map((c) => (
            <button key={c.id} onClick={() => scrollTo(c.id)} className="rp-chapter-dot" data-cursor="disable" title={c.label}>
              <span>{c.emoji}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="rp-hero">
        <div className="rp-hero-tags">
          <span className="rp-tag">Startup</span>
          <span className="rp-tag">2022 – 2024</span>
          <span className="rp-tag rp-tag-archived">Archived</span>
        </div>
        <h1 className="rp-hero-title">The Journey of<br /><span>Raptures</span></h1>
        <p className="rp-hero-sub">Let's begin with the start of my love for startups.</p>

        <div className="rp-hero-image rp-image-placeholder">
          <span>📸 Team Photo — Solana HackerHouse</span>
          <img src="/images/raptures.jpg" alt="Raptures team" />
        </div>

        {/* Stats row */}
        <div className="rp-stats">
          <div className="rp-stat"><span className="rp-stat-num">3+</span><span className="rp-stat-label">Years</span></div>
          <div className="rp-stat"><span className="rp-stat-num">4</span><span className="rp-stat-label">Pivots</span></div>
          <div className="rp-stat"><span className="rp-stat-num">7</span><span className="rp-stat-label">Awards & Grants</span></div>
          <div className="rp-stat"><span className="rp-stat-num">1</span><span className="rp-stat-label">Germany Trip</span></div>
        </div>
      </div>

      {/* ── Intro ───────────────────────────────────────────────────────── */}
      <div className="rp-intro">
        <p>I joined BITS Pilani in November 2020 — the result of grueling entrance prep in Kota. BITS is renowned for its placements, policies, and the wonderful startups it has produced. But was I always sure I wanted to do a startup?</p>
        <p className="rp-intro-answer">No.</p>
      </div>

      <div className="rp-divider" />

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* SPARK 1 */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section id="spark1" className="rp-chapter">
        <div className="rp-chapter-header">
          <span className="rp-chapter-emoji">🔥</span>
          <div>
            <p className="rp-chapter-label">Chapter 01</p>
            <h2 className="rp-chapter-title">Spark 1 — Ignition</h2>
          </div>
        </div>

        <div className="rp-chapter-body">
          <p>My college had a club called the <strong>Center for Entrepreneurial Leadership (CEL)</strong> — the hub for startups and ventures. I applied and had to go through multiple rounds to get selected. Group discussions, interviews revolving around businesses and hot trends.</p>
          <p>My first task was to learn about <strong>Khatabook</strong> — a simple digital ledger for businesses. This is when I first understood the journey of a startup in India. I made it to the final round and was asked to create a pitch deck.</p>

          <div className="rp-image-placeholder rp-image-sm">
            <span>📄 The Pitch Deck — little did I know I'd fall in love with making these</span>
          </div>

          <blockquote className="rp-quote">
            "I failed to pitch it well and wasn't selected. Although I liked it — not because it was cool, but because it was interesting. It was something of my own."
          </blockquote>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* SPARK 2 */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section id="spark2" className="rp-chapter">
        <div className="rp-chapter-header">
          <span className="rp-chapter-emoji">💡</span>
          <div>
            <p className="rp-chapter-label">Chapter 02</p>
            <h2 className="rp-chapter-title">Spark 2 — Flame</h2>
          </div>
        </div>

        <div className="rp-chapter-body">
          <p>I joined during COVID. My whole first year was online. When college reopened in September 2021, I was in a relationship — and we built our first sort-of startup together.</p>
          <p>It was called <strong>Talkin</strong> — providing wide-range 1:1 counselling at low cost to users. We got office space from PIEDS (the college incubator), spoke to counselors in Jaipur, competed for grants, networked with investors.</p>

          <div className="rp-image-placeholder rp-image-sm">
            <span>🖼️ Talkin — The App</span>
          </div>

          <p>But we failed.</p>
        </div>

        <div className="rp-lessons">
          <div className="rp-lesson">
            <span className="rp-lesson-icon">📌</span>
            <p>A startup is not for yourself, but for the people you're building it for. You can't build it if there's no need in the first place.</p>
          </div>
          <div className="rp-lesson">
            <span className="rp-lesson-icon">📌</span>
            <p>Personal and professional lives are extremely difficult to manage without intermixing.</p>
          </div>
        </div>

        <p className="rp-chapter-end">The startup failed. The relationship failed. This chapter was over.</p>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* SPARK 3 */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section id="spark3" className="rp-chapter">
        <div className="rp-chapter-header">
          <span className="rp-chapter-emoji">⚡</span>
          <div>
            <p className="rp-chapter-label">Chapter 03</p>
            <h2 className="rp-chapter-title">Spark 3 — Fire</h2>
          </div>
        </div>

        <div className="rp-chapter-body">
          <p>December 2021. CVR Redi — a tiny eatery. I overheard a conversation about blockchain from the next bench. Being extroverted, I hopped in.</p>
          <p>I had zero clue what blockchain was. Or NFTs, or crypto, or any of the hot terms floating around. That conversation went on for <strong>four hours</strong>.</p>
        </div>

        <blockquote className="rp-quote rp-quote-big">
          "Thus was born the wonderful team behind Raptures."
        </blockquote>

        <div className="rp-chapter-body">
          <p>Our first idea: a social media platform where people could view, own, and rent NFTs. We had a strong network, PIEDS gave us office space and tech credits. We were passionate. We talked to top-level mentors.</p>
          <p>And unfortunately — we concluded it wouldn't work. But it wasn't the end of Raptures.</p>

          <div className="rp-image-placeholder rp-image-sm">
            <span>🖼️ The First Model — NFT Social Platform Mockup</span>
          </div>
        </div>

        <div className="rp-lessons">
          <div className="rp-lesson">
            <span className="rp-lesson-icon">📌</span>
            <p>Amalgamation of big industries in a startup requires greater knowledge and understanding of both. It seems exciting, but ground-level reality is different.</p>
          </div>
        </div>

        <p className="rp-chapter-end">P.S. Meta tried to blend NFTs on Instagram later. It failed miserably too.</p>
      </section>

      <div className="rp-divider" />

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* PIVOT 1 */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section id="pivot1" className="rp-chapter">
        <div className="rp-chapter-header">
          <span className="rp-chapter-emoji">🔄</span>
          <div>
            <p className="rp-chapter-label">Chapter 04</p>
            <h2 className="rp-chapter-title">Pivot 1 — NFT Ticketing</h2>
          </div>
        </div>

        <div className="rp-chapter-body">
          <p>April 2022. We didn't give up on NFTs just yet — even though the world was starting to. New model: <strong>Raptures: The NFT Ticketing Platform.</strong></p>
          <p>This actually solved real-world problems — black market selling, unidentified entry issues with ticketing. We even found competitors in other countries working on the same idea.</p>

          <div className="rp-image-placeholder rp-image-sm">
            <span>🖼️ Second Model — NFT Ticketing Platform</span>
          </div>

          <p>We pitched it to event managers and ticketing platforms. And again, we failed.</p>
        </div>

        <div className="rp-lessons">
          <div className="rp-lesson">
            <span className="rp-lesson-icon">📌</span>
            <p>A model that works in region X won't necessarily work in region Y. India wasn't ready for NFT ecosystems — and we weren't willing to expand beyond it.</p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* PIVOT 2 */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section id="pivot2" className="rp-chapter">
        <div className="rp-chapter-header">
          <span className="rp-chapter-emoji">🚀</span>
          <div>
            <p className="rp-chapter-label">Chapter 05</p>
            <h2 className="rp-chapter-title">Pivot 2 — DAOs & The First Win</h2>
          </div>
        </div>

        <div className="rp-chapter-body">
          <p>July 2022. My tech co-founder called me while I was chilling at a park in Ahmedabad and introduced me to <strong>DAOs</strong> — Decentralized Autonomous Organizations. Think: the Slack/Notion of Web3.</p>
          <p>We came up with a no-code platform for creating DAOs. And then — our first major breakthrough.</p>
        </div>

        {/* Win card */}
        <div className="rp-win-card">
          <span className="rp-win-icon">🏆</span>
          <div>
            <h3>Solana HackerHouse Delhi — September 2022</h3>
            <p>4-day event. 500+ developers, investors, enthusiasts. With a minimal MVP, we registered for Demo Day and pitched to the entire room. We got in touch with multiple VCs. Golden moment.</p>
          </div>
        </div>

        <div className="rp-win-card">
          <span className="rp-win-icon">🥇</span>
          <div>
            <h3>BITS Startup Competition — Overall Winners</h3>
            <p>Competed among 50 startups across four BITS campuses. We won — bagging the highest cash prize. Finally, capital.</p>
          </div>
        </div>

        <div className="rp-chapter-body">
          <p>We were approached by GradCapital, Antler Residency, 100x.vc, Campus Fund, and PIEDS. But we failed to persuade them. The question every VC asked:</p>
        </div>

        <blockquote className="rp-quote rp-quote-big">
          "Will you drop your placements to pursue your startup? Do you see yourself doing this in the next 5 years?"
        </blockquote>

        <div className="rp-chapter-body">
          <p>And we fumbled. Our team of 4 shortened into a team of 2 — myself and Madhav, my tech co-founder.</p>
        </div>

        <div className="rp-lessons">
          <div className="rp-lesson">
            <span className="rp-lesson-icon">📌</span>
            <p>Startup takes commitment. It's not a video game. It asks for your time, money, and sacrifices.</p>
          </div>
          <div className="rp-lesson">
            <span className="rp-lesson-icon">📌</span>
            <p>A startup can't run without a vision, and a vision can't exist without everyone's belief.</p>
          </div>
        </div>
      </section>

      <div className="rp-divider" />

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* FINAL PIVOT */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section id="final" className="rp-chapter">
        <div className="rp-chapter-header">
          <span className="rp-chapter-emoji">🏁</span>
          <div>
            <p className="rp-chapter-label">Chapter 06</p>
            <h2 className="rp-chapter-title">The Final Pivot</h2>
          </div>
        </div>

        <div className="rp-chapter-body">
          <p>Madhav got into a research internship at the <strong>University of Melbourne</strong> to study blockchain and zero-knowledge proofs. I visited the startup camp in <strong>Germany</strong> hosted by the Technical University of Braunschweig — funded by a DAAD grant of ~€1000.</p>

          <div className="rp-image-placeholder rp-image-lg">
            <span>📸 Germany — DAAD Startup Camp, Summer 2023</span>
          </div>

          <p>Our college provided us a grant of ₹2,00,000 under the SPARKLE scheme. We had capital. We had research. We had a final idea.</p>
          <p>The insight: thousands of DApps exist, but hardly a fraction have even 100 users. Everyone was creating products to solve problems that didn't exist.</p>
        </div>

        <div className="rp-final-idea">
          <h3>The Final Model</h3>
          <p>A <strong>Discord bot</strong> that could perform major Web3 functions with a Web2 interface. Our USPs:</p>
          <ul>
            <li>🔑 Eliminated wallet addresses → replaced with social media handles</li>
            <li>🔐 Eliminated 12/24/36-word passkeys → replaced with native device authentication</li>
            <li>✅ Code audited and certified by Shieldify</li>
          </ul>
        </div>

        <div className="rp-chapter-body">
          <p>We attended the <strong>Solana HackerHouse Bengaluru</strong> in September 2023. We pitched. We got a good response. But 2023 was a bear run for crypto — and sector-agnostic VCs had pivoted entirely to AI.</p>

          <div className="rp-image-placeholder rp-image-sm">
            <span>🖼️ Final Model — Discord Bot Interface</span>
          </div>

          <p>Just before I applied for deferred placements, I got placed into a company. In my entire college life, I gave one on-campus interview. I got in. I took it as a backup and decided to focus on Raptures without financial tension.</p>
          <p>We built a website, a MS Office suite, started approaching customers professionally. A small community of users tested and polished our bot. People were finally using our product.</p>
          <p>But still — we failed.</p>
        </div>

        <div className="rp-lessons">
          <div className="rp-lesson">
            <span className="rp-lesson-icon">📌</span>
            <p>"Will someone use your product?" is important. But "Will someone <em>pay</em> to use your product?" is the real deal.</p>
          </div>
        </div>

        <div className="rp-shutdown">
          <span>January 2024</span>
          <h3>We shut down Raptures.</h3>
          <p>Not one reason. Multiple setbacks. Multiple circumstances.</p>
        </div>
      </section>

      <div className="rp-divider" />

      {/* ════════════════════════════════════════════════════════════════ */}
      {/* FINAL LESSON */}
      {/* ════════════════════════════════════════════════════════════════ */}
      <section className="rp-final-lesson">
        <h2>The Real Lesson</h2>

        <blockquote className="rp-quote rp-quote-big">
          "Startups, as one perceives, are full of attractions. You will become rich, you will become your own boss, you will be famous… IF you are successful. The reality is quite different."
        </blockquote>

        <p>It takes years to build a startup that succeeds but moments to quit. The real reason I didn't pursue Raptures further, despite a great partner and opportunities, was not being willing to take the risks — not just of the startup, but of the whole industry.</p>
        <p>College life was a playground where I could do whatever I wished. Real life started the moment I took the first step out of it.</p>

        <blockquote className="rp-quote rp-quote-closing">
          "I definitely wish to build something in the future and not give up on it. At some point in my life, I would dare to take a step out of the smooth corporate world — but only when I personally feel I am ready. Mentally and financially."
        </blockquote>
      </section>

      <div className="rp-divider" />

      {/* ── Awards ──────────────────────────────────────────────────────── */}
      <section className="rp-awards">
        <h2>What We Won</h2>
        <div className="rp-awards-grid">
          {[
            { icon: "🇩🇪", title: "DAAD Grant", desc: "Germany trip fully funded — TU Braunschweig Startup Camp" },
            { icon: "🏆", title: "Desert Hack", desc: "Winner" },
            { icon: "⚡", title: "Solana HackerHouse Delhi '22", desc: "Winner — 500+ audience, VC connections" },
            { icon: "⚡", title: "Solana HackerHouse Bengaluru '23", desc: "Demo Day — strong response" },
            { icon: "💰", title: "SPARKLE Grant", desc: "₹2,00,000 equity-free from BITS Pilani" },
            { icon: "🏛️", title: "PIEDS Incubation", desc: "Pre-seed offer — 1% equity for ₹5,00,000 (declined)" },
            { icon: "🎓", title: "Udaan Bootcamp", desc: "India Accelerator, Gurgaon — April 2023" },
          ].map((award) => (
            <div className="rp-award-card" key={award.title}>
              <span className="rp-award-icon">{award.icon}</span>
              <h4>{award.title}</h4>
              <p>{award.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="rp-divider" />

      {/* ── Team ─────────────────────────────────────────────────────── */}
      <section className="rp-team">
        <h2>The Team</h2>
        <div className="rp-team-cards">
          <div className="rp-team-card">
            <div className="rp-team-avatar">PO</div>
            <h4>Pratham Oza</h4>
            <p>Co-founder · GTM & Product</p>
          </div>
          <div className="rp-team-card">
            <div className="rp-team-avatar">M</div>
            <h4>Madhav</h4>
            <p>Co-founder · Tech & Blockchain</p>
          </div>
        </div>
      </section>

      <div className="rp-divider" />

      {/* ── Links ─────────────────────────────────────────────────────── */}
      <section className="rp-links">
        <a href="https://pozee.medium.com/the-journey-of-raptures-c03caf709d16" target="_blank" rel="noopener noreferrer" className="rp-link-btn" data-cursor="disable">
          Read Original Article →
        </a>
        <a href="https://github.com/Pozaeiou" target="_blank" rel="noopener noreferrer" className="rp-link-btn rp-link-btn-ghost" data-cursor="disable">
          GitHub →
        </a>
      </section>

    </div>
  );
};

export default RapturesPage;
