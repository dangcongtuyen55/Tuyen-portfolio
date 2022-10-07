import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import aboutMe from "../../assets/about-me.jpg";
import CV from "../../assets/CV.pdf";
import { Me } from "./Me";
import DownloadIcon from "@mui/icons-material/Download";

export const About = () => {
  return (
    <section className="about section" id="section">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img src={aboutMe} alt="" className="about__img" />
        <div className="about__data">
          <Me />
          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            nemo officiis dolorum quidem quae rem a at molestiae laborum magni
            quisquam, mollitia cumque eaque sit culpa sunt non autem ullam?
          </p>
          <Link download to={CV} className="button button__download">
            Download CV{" "}
            <i class="bx bxs-download bx-fade-down button__download-icon"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};
