import React from "react";

export const ProjectItem = ({ item }) => {
  return (
    <>
      <div className="project__card" key={item.id}>
        <img src={item.image} alt={item.title} className="project__img" />
        <h3 className="project__title">{item.title}</h3>
        <div className="project__use">
          <p>{item.description}</p>
        </div>
        <a href={item.source} className="project__button">
          Source
          <i class="bx bxs-download bx-fade-down project__buttton-icon"></i>
        </a>
        <a href={item.link} className="project__button">
          Link
          {/* <i class="bx bxs-download bx-fade-down project__buttton-icon"></i> */}
        </a>
        {item.status === "done" ? (
          <span className="project__status" style={{ color: "#00B4AA" }}>
            Status: Done
          </span>
        ) : (
          <span className="project__status" style={{ color: "#FB1A1A" }}>
            Status: Working
          </span>
        )}
      </div>
    </>
  );
};
