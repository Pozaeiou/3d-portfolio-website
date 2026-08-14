// SideQuestDetail.tsx — Individual side quest detail page (/side-quests/:slug).
// All content is sourced from src/data/sideQuests.ts

import { useParams, Link } from "react-router-dom";
import { sideQuests } from "../data/sideQuests/index";
import "./SideQuestDetail.css";

const SideQuestDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = sideQuests.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="sq-detail-notfound">
        <p>Project not found.</p>
        <Link to="/side-quests" className="sq-detail-back">← Back to Home</Link>
      </div>
    );
  }

  const techList = project.technologies.split(",").map((t) => t.trim());
  const index = sideQuests.findIndex((p) => p.slug === slug) + 1;

  return (
    <div className="sq-detail-page">

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <div className="sq-detail-nav">
        <Link to="/side-quests" className="sq-detail-back" data-cursor="disable">← Back to Home</Link>
      </div>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="sq-detail-hero">
        <span className="sq-detail-number">0{index}</span>
        <div className="sq-detail-meta">
          <p className="sq-detail-category">{project.category}</p>
          {project.period && <p className="sq-detail-period">{project.period}</p>}
          {project.status && <p className="sq-detail-status">{project.status}</p>}
        </div>
        <h1 className="sq-detail-title">{project.title}</h1>
        <p className="sq-detail-highlight">{project.highlight}</p>
      </div>

      <div className="sq-detail-divider" />

      {/* ── Image ───────────────────────────────────────────────────────── */}
      <div className="sq-detail-image">
        <img src={project.image} alt={project.title} />
      </div>

      {/* ── Description ─────────────────────────────────────────────────── */}
      <div className="sq-detail-body">
        <h2>About this project</h2>
        <p>{project.description}</p>
        {project.longDesc && (
          <div className="sq-detail-longdesc">
            {project.longDesc.split('\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}
      </div>

      {/* ── Awards ──────────────────────────────────────────────────────── */}
      {project.awards && project.awards.length > 0 && (
        <div className="sq-detail-awards">
          <h2>Awards & Recognition</h2>
          <ul>
            {project.awards.map((award) => (
              <li key={award}>{award}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ── Team ────────────────────────────────────────────────────────── */}
      {project.team && project.team.length > 0 && (
        <div className="sq-detail-team">
          <h2>Team</h2>
          <div className="sq-detail-tech-pills">
            {project.team.map((member) => (
              <span className="sq-detail-pill" key={member}>{member}</span>
            ))}
          </div>
        </div>
      )}

      {/* ── Tech stack ──────────────────────────────────────────────────── */}
      <div className="sq-detail-tech">
        <h2>Built with</h2>
        <div className="sq-detail-tech-pills">
          {techList.map((tech) => (
            <span className="sq-detail-pill" key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      {/* ── Links ───────────────────────────────────────────────────────── */}
      {project.links && project.links.length > 0 && (
        <div className="sq-detail-links">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sq-detail-link-btn"
              data-cursor="disable"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}

    </div>
  );
};

export default SideQuestDetail;
