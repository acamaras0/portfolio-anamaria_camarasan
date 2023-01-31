import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
  const abouts = [
    {
      title: "Web Development",
      description: "I've been passionately developing my Web Development skills in the last year, while working with technologies such as React, Typescript, NodeJs and PHP.",
      imgUrl: images.about01,
    },
    {
      title: "Full-Stack",
      description: "In my studies I focused on building Full-Stack applications with the latest available techologies.",
      imgUrl: images.about02,
    },
    {
      title: "Front-End",
      description: "As a creative individual, I enjoy developing Front-End solutions without losing my patience on the smallest of details.",
      imgUrl: images.about03,
    },
    {
      title: "Back-End",
      description: "I strongly believe that a secure and well-done Back-End is the base of a good application.",
      imgUrl: images.about04,
    },
  ];

  return (
    <>
      <h2 className="head-text">
        I know that a <span>Good App</span> <br /> is a{" "}
        <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
	MotionWrap(About, 'app__about'),
	'about',
	'app__whitebg',
  );
