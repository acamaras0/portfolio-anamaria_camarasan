import React from "react";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Skills.scss";

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      image: images.javascript,
      bgColor: "#fbf8cc",
    },
    {
      name: "React",
      image: images.react,
      bgColor: "#fde4cf",
    },
    {
      name: "TypeScript",
      image: images.typescript,
      bgColor: "#b9fbc0",
    },
    {
      name: "Redux",
      image: images.redux,
      bgColor: "#ffcfd2",
    },
    {
      name: "Node",
      image: images.node,
      bgColor: "#f1c0e8",
    },
    {
      name: "PHP",
      image: images.php,
      bgColor: "#cfbaf0",
    },
    {
      name: "HTML",
      image: images.html,
      bgColor: "#a3c4f3",
    },
    {
      name: "CSS",
      image: images.css,
      bgColor: "#90dbf4",
    },
    {
      name: "MUI",
      image: images.mu5,
      bgColor: "#8eecf5",
    },
    {
      name: "Bootstrap",
      image: images.bootstrap,
      bgColor: "#98f5e1",
    },
    {
      name: "PostgreSQL",
      image: images.postgresql,
      bgColor: "#f1c0e8",
    },
    {
      name: "MySQL",
      image: images.mysql,
      bgColor: "#b9fbc0",
    },
    {
      name: "Git",
      image: images.git,
      bgColor: "#fbf8cc",
    },
    {
      name: "API",
      image: images.api,
      bgColor: "#ffcfd2",
    },
    {
      name: "Jira",
      image: images.jira,
      bgColor: "#fde4cf",
    },
    {
      name: "Jest",
      image: images.jest,
      bgColor: "#cfbaf0",
    },
  ];

  const experiences = [
    {
      id: 0,
      name: "Hive Helsinki",
      duration: "2021 - Present",
      role: "Web Development Graduate",
      description:
        "At Hive Helsinki I had the opportunity to develop my coding skills while building Full-Stack solutions using the latest technologies. Learning by doing and working together with other students is the base of Hive's pedagogy. This naturally improved my team player mindset alongside some important professional soft skills, such as communication and cooperation.",
    },
  ];
  return (
    <>
      <h2 className="head-text">
        Relevant Skills & <span>Experience</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
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
        <div className="app__skills-exp">
          {experiences?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.id}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.duration}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experiences?.map((work) => (
                  <div key={work.role}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.id}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.role}</p>
                    </motion.div>
                    <Tooltip
                      id={work.description}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                      key={work.description}
                    >
                      {work.description}
                    </Tooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
