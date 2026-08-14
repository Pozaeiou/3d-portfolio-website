// WorkDetail.tsx — Individual side quest / project detail page (/works/:id).
//
// Reads the project id from the URL param, finds the matching project
// in config.projects, and renders a full-page breakdown of that project.
// If no project is found, shows a not-found message.

import { useParams, Link } from "react-router-dom";
import { config } from "../config";
import "./WorkDetail.css";

const WorkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = config.projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="workdetail-notfound">
        <p>Project not found.</p>
        <Link to="/" className="workdetail-back">← Back to Home</Link>
      </div>
    );
  }

  // Split comma-separated technologies into individual pill tags
  const techList = project.technologies.split(",").map((t) => t.trim());

  return (
    <div className="workdetail-page">

      {/* ── Top nav ───────────────────────────────────────────────────────── */}
      <div className="workdetail-nav">
        <Link to="/" className="workdetail-back" data-cursor="disable">
          ← Back to Home
        </Link>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="workdetail-hero">
        <span className="workdetail-number">
          0{config.projects.findIndex((p) => p.id === project.id) + 1}
        </span>
        <p className="workdetail-category">{project.category}</p>
        <h1 className="workdetail-title">{project.title}</h1>
        <p className="workdetail-highlight">{project.highlight}</p>
      </div>

      {/* ── Divider ──────────────────────────────────────────────────────── */}
      <div className="workdetail-divider" />

      {/* ── Image ────────────────────────────────────────────────────────── */}
      <div className="workdetail-image">
        <img src={project.image} alt={project.title} />
      </div>

      {/* ── Description ──────────────────────────────────────────────────── */}
      <div className="workdetail-body">
        <h2>About this project</h2>
        <p>{project.description}</p>
      </div>

      {/* ── Tech stack ───────────────────────────────────────────────────── */}
      <div className="workdetail-tech">
        <h2>Built with</h2>
        <div className="workdetail-tech-pills">
          {techList.map((tech) => (
            <span className="workdetail-pill" key={tech}>{tech}</span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default WorkDetail;
