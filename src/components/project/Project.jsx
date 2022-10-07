import React from "react";
import "./Project.css";
import { Projects } from "./Projects";

export const Project = () => {
  return (
    <section className="project section" id="project">
      <h2 className="section__title"> Projects</h2>
      <span className="section__subtitle">Projects I've done</span>
      <Projects />
    </section>
  );
};
