import React, { useEffect, useState } from "react";
import { projectData } from "./Data";

import { catagoryProject } from "./Data";
import { ProjectItem } from "./ProjectItem";

export const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProject] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProject(projectData);
    } else {
      const newProject = projectData.filter((project) => {
        return project.catagory.toLowerCase() === item.name;
      });
      setProject(newProject);
    }
  }, [item]);

  const handleClickTab = (e, index) => {
    e.preventDefault();
    setItem({ name: e.target.textContent });
    setActive(index);
  };
  return (
    <>
      <div className="project__filters">
        {catagoryProject.map((item, index) => {
          return (
            <span
              onClick={(e) => handleClickTab(e, index)}
              className={`${
                active === index ? "project__active" : ""
              } project__item`}
              key={item.name}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="project__container container grid">
        {projects.map((item) => {
          return <ProjectItem item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};
