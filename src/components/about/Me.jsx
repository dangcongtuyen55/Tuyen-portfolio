import React, { useState } from "react";
import { Link } from "react-router-dom";
import scoreboard_1 from "../../assets/scoreboard-1.jpg";
import scoreboard_2 from "../../assets/scoreboard-2.jpg";
import certificate from "../../assets/certificate.jpg";
import university_diploma from "../../assets/university_diploma.jpg";
import { dataScoreBroad } from "./Data";
import { dataCertificate } from "./Data";

export const Me = () => {
  const [modalScore, setModalScore] = useState(0);
  const openModalScore = (index) => {
    setModalScore(index);
  };
  const [modalCertificate, setModalCertificate] = useState(0);
  const openModalCertificate = (index) => {
    setModalCertificate(index);
  };

  // const testLink = (window.location.replace =
  //   "https://www.facebook.com/C.Tuyen.Coder.Cui.Bap/");
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bxs-book bx-tada"></i>
        <h3 className="about__title">GPA</h3>
        <span className="about__subtitle">3.23</span>
        <div className="about__detail">
          <Link to={""} onClick={() => openModalScore(1)}>
            More <i class="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
        <div
          className={
            modalScore === 1 ? "about__modal active-modal" : "about__modal"
          }
        >
          <div className="about__modal-content">
            <i
              class="bx bx-x about__content-close"
              onClick={() => openModalScore(0)}
            ></i>
            <h3 className="about__modal-title">this is my scoreboard</h3>
            <p className="about__modal-description">
              Here are the results of my four years of university
            </p>
            <div className="about__modal-score">
              {/* <img
                className="about__img-scoreboard"
                src={scoreboard_1}
                alt=""
              />
              <img
                className="about__img-scoreboard-back"
                src={scoreboard_2}
                alt=""
              /> */}
              {dataScoreBroad.map((item) => {
                return (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img
                      // className="about__img-scoreboard-back"
                      src={item.img}
                      alt=""
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="about__box">
        <i class="bx bx-code-alt bx-tada"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">inexperienced</span>
        {/* <div className="about__detail">
          <Link to={""}>
            More <i class="bx bx-right-arrow-alt"></i>
          </Link>
        </div> */}
      </div>
      <div className="about__box">
        <i class="bx bx-certification bx-tada"></i>
        <h3 className="about__title">Certificate </h3>
        <span className="about__subtitle">+5</span>
        <div className="about__detail">
          <Link to={""} onClick={() => openModalCertificate(1)}>
            More <i class="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
        <div
          className={
            modalCertificate === 1
              ? "about__modal active-modal"
              : "about__modal"
          }
        >
          <div className="about__modal-content">
            <i
              class="bx bx-x about__content-close"
              onClick={() => openModalCertificate(0)}
            ></i>
            <h3 className="about__modal-title">this is my scoreboard</h3>
            <p className="about__modal-description">
              Here are the results of my four years of university
            </p>
            <div className="about__modal-certificate">
              {/* <img
                className="about__img-certificate"
                src={certificate}
                alt=""
              />
              <img
                className="about__img-certificate-back"
                src={university_diploma}
                alt=""
              /> */}

              {dataCertificate.map((item) => {
                return (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img
                      className="about__img-certificate"
                      src={item.img}
                      alt=""
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
