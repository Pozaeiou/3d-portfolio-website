// Work.tsx — Horizontal-scroll project showcase section + See All CTA below.

import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { config } from "../config";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <>
      {/* ── Side Quests horizontal scroll ─────────────────────────────────── */}
      <div className="work-section" id="work">
        <div className="work-container section-container">
          <h2>
            My <span>Side Quests</span>
          </h2>

          {/* Horizontally scrollable flex strip */}
          <div className="work-flex">
            {config.projects.slice(0, 5).map((project, index) => (
              <Link
                to={`/works/${project.id}`}
                className="work-box"
                key={project.id}
                data-cursor="disable"
              >
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>
                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  <h4>{project.highlight}</h4>
                  <p>{project.technologies}</p>
                </div>

                <WorkImage image={project.image} alt={project.title} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── See All CTA — shown below so users don't miss it ──────────────── */}
      <div className="work-see-all-section">
        <h2>Want to see more?</h2>
        <p>Explore all of my side quests...<br />Close to my heart</p>
        <Link to="/myworks" className="see-all-btn" data-cursor="disable">
          See All →
        </Link>
      </div>
    </>
  );
};

export default Work;
