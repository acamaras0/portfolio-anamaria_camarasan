import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
  const abouts = [
    {
      title: "Web Development",
      description: "Some text here",
      imgUrl: images.about01,
    },
    {
      title: "Full-Stack",
      description: "Some text here",
      imgUrl: images.about02,
    },
    {
      title: "Front-End",
      description: "Some text here",
      imgUrl: images.about03,
    },
    {
      title: "Back-End",
      description: "Some text here",
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
            <h3 className="bold-text" style={{ marginTop: 10 }}>
              {about.description}
            </h3>
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
