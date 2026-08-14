// Work.tsx — Horizontal-scroll project showcase section.
//
// Cards sit in a horizontally scrollable flex strip.
// The user scrolls right naturally (trackpad swipe / shift+mousewheel).
// Mobile: cards stack vertically as before.

import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { config } from "../config";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    // id="work" is the scroll target for the navbar "WORK" link
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

          {/* CTA card at the end */}
          <div className="work-box work-box-cta">
            <div className="see-all-works">
              <h3>Want to see more?</h3>
              <p>Explore all of my side quests... Close to my heart</p>
              <Link to="/myworks" className="see-all-btn" data-cursor="disable">
                See All →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
