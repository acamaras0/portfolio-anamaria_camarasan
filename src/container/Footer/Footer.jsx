import React from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { TfiLinkedin, TfiGithub } from "react-icons/tfi";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">
        Let's <span>chat</span> over <span>a coffee</span>! ☕
      </h2>
      <p className="p-text">
        You can reach to me on Linkedin, by e-mail or by phone 💌
      </p>
      <div className="app__socials">
        <div>
          <a href="https://www.linkedin.com/in/anamaria-camarasan-179615244">
            <TfiLinkedin />
          </a>
        </div>
        <div>
          <a href="https://github.com/acamaras0">
            <TfiGithub />
          </a>
        </div>
      </div>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:anamaria.finn0@gmail.com" className="p-text">
            anamaria.cmrs@gmail.com{" "}
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +358449419417" className="p-text">
            +358449419417{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
