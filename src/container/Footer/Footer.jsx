import React, { useRef, useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import emailjs from "@emailjs/browser";
import { TfiLinkedin, TfiGithub } from "react-icons/tfi";
import "./Footer.scss";

const Footer = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        () => {
          setMessage("Message sent sucessfully!");
        },
        () => {
          setMessage("Failed to send the message. Try again!");
        }
      );
  };

  return (
    <>
      <h2 className="head-text">
        Let's <span>chat</span> over <span>a coffee</span>! ☕
      </h2>
      <p className="p-text">
        You can reach to me on Linkedin, by e-mail or phone or simply by using
        the form down below! 💌
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
            anamaria.finn0@gmail.com{" "}
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +358449419417" className="p-text">
            +358449419417{" "}
          </a>
        </div>
      </div>
      <div className="app__footer-form app__flex">
        <form ref={form} onSubmit={sendEmail} className="footer-form">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              required
            ></input>
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              required
            ></input>
          </div>
          <div>
            <textarea
              className="p-text"
              type="email"
              placeholder="Message"
              name="message"
              required
            />
          </div>
          <div className="form-button">
            <button type="submit" className="p-text">
              Send
            </button>
          </div>
        </form>
        <p className="p-text" style={{ marginTop: "3rem" }}>
          {message}
        </p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
