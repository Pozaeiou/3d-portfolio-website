// AllSideQuests.tsx — Full project gallery page (/myworks).
//
// Displays all projects from config.projects as a grid of cards.
// Unlike the Work section on the homepage (which shows only 5 in a
// horizontal scroll), this page shows every project in a simple
// responsive grid layout.
//
// Each card shows:
//   • Zero-padded index number (01, 02, …)
//   • Project thumbnail image
//   • Title, category, description, and technologies used
//
// Navigation: a "Back to Home" link in the header returns to the root route.

import { Link } from "react-router-dom";
import { config } from "../config";
import "./AllSideQuests.css";

const AllSideQuests = () => {
  return (
    <div className="sq-page">
      {/* ── Page header ─────────────────────────────────────────────────── */}
      <div className="sq-header">
        {/* Back navigation — uses React Router Link (no page reload) */}
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          All <span>Side Quests</span>
        </h1>
        <p>All the things I've built, shipped & explored</p>
      </div>

      {/* ── Project grid ────────────────────────────────────────────────── */}
      {/* Renders all projects — not sliced, unlike the homepage Work section */}
      <div className="sq-grid">
        {config.projects.map((project, index) => (
          <div className="sq-card" key={project.id} data-cursor="disable">
            {/* Zero-padded card number */}
            <div className="sq-card-number">0{index + 1}</div>

            {/* Project thumbnail */}
            <div className="sq-card-image">
              <img src={project.image} alt={project.title} />
            </div>

            {/* Project metadata */}
            <div className="sq-card-info">
              <h3>{project.title}</h3>
              <p className="sq-card-category">{project.category}</p>
              <p className="sq-card-description">{project.description}</p>
              <p className="sq-card-tech">{project.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSideQuests;
