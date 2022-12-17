import React from "react";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Skills.scss";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      image: images.html,
      bgColor: "HTML5",
    },
    {
      name: "CSS",
      image: images.css,
      bgColor: "CSS3",
    },
    {
      name: "JavaScript",
      image: images.javascript,
      bgColor: "JavaScript",
    },
    {
      name: "React",
      image: images.react,
      bgColor: "React",
    },
    {
      name: "Redux",
      image: images.redux,
      bgColor: "Redux",
    },
    {
      name: "Node",
      image: images.node,
      bgColor: "Node",
    },
    {
      name: "PHP",
      image: images.php,
      bgColor: "PHP",
    },
    {
      name: "Mui",
      image: images.mu5,
      bgColor: "Material UI",
    },
    {
      name: "Bootstrap",
      image: images.bootstrap,
      bgColor: "Bootstrap",
    },
    {
      name: "PostgreSQL",
      image: images.postgresql,
      bgColor: "PostgreSQL",
    },
    {
      name: "MySQL",
      image: images.mysql,
      bgColor: "MySQL",
    },
  ];
  return (
    <>
      <h2 className="head-text">
        Skills & <span>Experience</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.image} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, "Skills");
