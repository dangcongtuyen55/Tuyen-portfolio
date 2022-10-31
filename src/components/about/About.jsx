import React from "react";
import "./About.css";
import aboutMe from "../../assets/about-me.jpg";
import CV_Vn from "../../assets/Dang-Cong-Tuyen-TopCV-CV-VN.pdf";
import CV_Eng from "../../assets/Dang-Cong-Tuyen-TopCV-CV-ENG.pdf";
import { Me } from "./Me";

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
            My fullname is Dang Cong Tuyen. Graduated with BA in Information
            Technology from Dong Nai University of Technology.
          </p>
          <div className="about__cv grid">
            <a href={CV_Vn} download className="button button__download">
              Download VN CV{" "}
              <i class="bx bxs-download bx-fade-down button__download-icon"></i>
            </a>
            <a href={CV_Eng} download className="button button__download">
              Download ENG CV{" "}
              <i class="bx bxs-download bx-fade-down button__download-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
