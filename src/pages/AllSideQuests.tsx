// AllSideQuests.tsx — Full side quests gallery page (/side-quests).

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { sideQuests } from "../data/sideQuests/index";
import "./AllSideQuests.css";

const AllSideQuests = () => {

  useEffect(() => {
    // The global body has overflow:hidden for Lenis on the home page.
    // This page doesn't use Lenis, so we restore native scroll here.
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <div className="sq-page">

      {/* ── Header ────────────────────────────────────────────────────────── */}
      <div className="sq-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>All <span>Side Quests</span></h1>
        <p>All the things I've built, shipped & explored</p>
      </div>

      {/* ── Grid ──────────────────────────────────────────────────────────── */}
      <div className="sq-grid">
        {sideQuests.map((project, index) => (
          <Link
            to={`/side-quests/${project.slug}`}
            className="sq-card"
            key={project.id}
            data-cursor="disable"
          >
            <div className="sq-card-number">0{index + 1}</div>

            <div className="sq-card-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="sq-card-info">
              <h3>{project.title}</h3>
              <p className="sq-card-category">{project.category}</p>
              <p className="sq-card-description">{project.description}</p>
              <p className="sq-card-tech">{project.technologies}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllSideQuests;
