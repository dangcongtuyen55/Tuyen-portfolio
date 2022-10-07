import React from "react";
import { BE } from "./BE";
import { FE } from "./FE";
import "./Skill.css";

export const Skill = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Skills</span>
      <div className="skills__container container grid">
        <FE />
        <BE />
      </div>
    </section>
  );
};
