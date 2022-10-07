import React from "react";
import { useState } from "react";
import "./Qualification.css";

export const Qualification = () => {
  const [tab, setTab] = useState(1);

  const clickTab = (index) => {
    setTab(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              tab === 1
                ? " qualification__button qualification__active button--flex"
                : " qualification__button button--flex"
            }
            onClick={() => clickTab(1)}
          >
            <i class="bx bxs-graduation qualification__icon"></i>
            Education
          </div>

          <div
            className={
              tab === 2
                ? " qualification__button qualification__active button--flex"
                : " qualification__button button--flex"
            }
            onClick={() => clickTab(2)}
          >
            <i class="bx bx-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              tab === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">F8</span>
                <div className="qualification__calender">
                  <i class="bx bx-calendar"></i> 2021-present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">React JS</h3>
                <span className="qualification__subtitle">Evondev</span>
                <div className="qualification__calender">
                  <i class="bx bx-calendar"></i> 2021-present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">UI/UX</h3>
                <span className="qualification__subtitle">F8</span>
                <div className="qualification__calender">
                  <i class="bx bx-calendar"></i> 2021-present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Node JS</h3>
                <span className="qualification__subtitle">Evondev</span>
                <div className="qualification__calender">
                  <i class="bx bx-calendar"></i> 2021-present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              tab === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Product Design</h3>
                <span className="qualification__subtitle">F8</span>
                <div className="qualification__calender">
                  <i class="bx bx-calendar"></i> 2021-present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">ABC</h3>
                <span className="qualification__subtitle">Evondev</span>
                <div className="qualification__calender">
                  <i class="bx bx-calendar"></i> 2021-present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">DCF</h3>
                <span className="qualification__subtitle">F8</span>
                <div className="qualification__calender">
                  <i class="bx bx-calendar"></i> 2021-present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">KJG</h3>
                <span className="qualification__subtitle">Evondev</span>
                <div className="qualification__calender">
                  <i class="bx bx-calendar"></i> 2021-present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
