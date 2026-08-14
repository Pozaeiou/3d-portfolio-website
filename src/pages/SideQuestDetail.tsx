// SideQuestDetail.tsx — Individual side quest / project detail page (/works/:id).
//
// Reads the project id from the URL param, finds the matching project
// in config.projects, and renders a full-page breakdown of that project.
// If no project is found, shows a not-found message.

import { useParams, Link } from "react-router-dom";
import { config } from "../config";
import "./SideQuestDetail.css";

const SideQuestDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = config.projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="sq-detail-notfound">
        <p>Project not found.</p>
        <Link to="/" className="sq-detail-back">← Back to Home</Link>
      </div>
    );
  }

  // Split comma-separated technologies into individual pill tags
  const techList = project.technologies.split(",").map((t) => t.trim());

  return (
    <div className="sq-detail-page">

      {/* ── Top nav ───────────────────────────────────────────────────────── */}
      <div className="sq-detail-nav">
        <Link to="/" className="sq-detail-back" data-cursor="disable">
          ← Back to Home
        </Link>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="sq-detail-hero">
        <span className="sq-detail-number">
          0{config.projects.findIndex((p) => p.id === project.id) + 1}
        </span>
        <p className="sq-detail-category">{project.category}</p>
        <h1 className="sq-detail-title">{project.title}</h1>
        <p className="sq-detail-highlight">{project.highlight}</p>
      </div>

      {/* ── Divider ──────────────────────────────────────────────────────── */}
      <div className="sq-detail-divider" />

      {/* ── Image ────────────────────────────────────────────────────────── */}
      <div className="sq-detail-image">
        <img src={project.image} alt={project.title} />
      </div>

      {/* ── Description ──────────────────────────────────────────────────── */}
      <div className="sq-detail-body">
        <h2>About this project</h2>
        <p>{project.description}</p>
      </div>

      {/* ── Tech stack ───────────────────────────────────────────────────── */}
      <div className="sq-detail-tech">
        <h2>Built with</h2>
        <div className="sq-detail-tech-pills">
          {techList.map((tech) => (
            <span className="sq-detail-pill" key={tech}>{tech}</span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SideQuestDetail;
