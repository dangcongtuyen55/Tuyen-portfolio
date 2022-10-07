import React from "react";
import "./Home.css";
import { Info } from "./Info";
import { Social } from "./Social";

export const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img" />
          <Info />
        </div>
      </div>
    </section>
  );
};
