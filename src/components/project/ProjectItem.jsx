import React from "react";
import { Link } from "react-router-dom";

export const ProjectItem = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img src={item.image} alt={item.title} className="project__img" />
      <h3 className="project__title">{item.title}</h3>
      <a href={item.source} className="project__button">
        Source
        <i class="bx bxs-download bx-fade-down project__buttton-icon"></i>
      </a>
    </div>
  );
};
