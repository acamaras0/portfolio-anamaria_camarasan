import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/anamaria-camarasan-179615244">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/acamaras0">
        <BsGithub />
      </a>
    </div>
    {/* <div>
      <a href="">
        <BsInstagram />
      </a>
    </div> */}
  </div>
);

export default SocialMedia;
