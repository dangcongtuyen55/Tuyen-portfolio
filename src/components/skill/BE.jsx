import React from "react";

export const BE = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Back-End Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-check-circle skill-icon"></i>
            <div>
              <h3 className="skills__name">NodeJS</h3>
              <span className="skill__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-check-circle skill-icon"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skill__level">Basic</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-check-circle skill-icon"></i>
            <div>
              <h3 className="skills__name">SQL</h3>
              <span className="skill__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-check-circle skill-icon"></i>
            <div>
              <h3 className="skills__name">ExpressJS</h3>
              <span className="skill__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
