import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";

const About = () => {
  const abouts = [
    {
      title: "Web Development",
      description: "I am a good web developer",
      imgUrl: "https://i.ibb.co/0hY2Z4g/1.png",
    },
    {
      title: "Full-Stack",
      description: "I am a good web designer",
      imgUrl: "https://i.ibb.co/0hY2Z4g/1.png",
    },
    {
      title: "Front-End",
      description: "I am a good web developer",
      imgUrl: "https://i.ibb.co/0hY2Z4g/1.png",
    },
    {
      title: "Back-End",
      description: "I am a good web designer",
      imgUrl: "https://i.ibb.co/0hY2Z4g/1.png",
    },
  ];
  return (
    <>
      <h2 className="head-text">
        I know that a <span>Good Design</span>
        <br /> is a <span>Good Business</span>
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

export default About;
