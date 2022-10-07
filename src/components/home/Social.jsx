import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.facebook.com/C.Tuyen.Coder.Cui.Bap/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="bx bxl-facebook bx-md"></i>
      </a>
      <a
        href="https://github.com/dangcongtuyen55/"
        className="home__social-icon bx-md"
        target="_blank"
        rel="noreferrer"
      >
        <i class="bx bxl-github"></i>
      </a>
      <a
        href="https://www.instagram.com/tuyen_dev/"
        className="home__social-icon bx-md"
        target="_blank"
        rel="noreferrer"
      >
        <i class="bx bxl-instagram"></i>
      </a>
    </div>
  );
};
