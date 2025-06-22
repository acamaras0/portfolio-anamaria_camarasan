import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Projects.scss";

const Projects = () => {
	const [activeFilter, setActiveFilter] = React.useState("All");
	const [animateCard, setAnimateCard] = React.useState({ y: 0, opacity: 1 });
	const works = [
		{
			title: "Portfolio",
			description:
				"This Portfolio can be counted as my most recent Front-End Project. While building it up I focused on sharpening my Front-End skills without any other distractions. It gave me the chance to learn about HOC in React and the usage of Framer Motion.",
			imgUrl: images.logo11,
			link: "https://github.com/acamaras0/anamaria-camarasan",
			tags: ["React"],
			tag: [" #React ", " #Framer Motion ", "#Sass"],
		},
		{
			title: "Hypertube",
			description:
				"A Netflix-Like application allowing a user to authenticate by creating a new account or by using his Github account, search, watch movies and comment. The videos are downloaded through the BitTorrent protocol.",
			imgUrl: images.hypertube,
			link: "https://github.com/acamaras0/Hypertube",
			tags: ["React", "NodeJS"],
			tag: [
				" #React ",
				" #Redux ",
				" #NodeJS ",
				" #PostgreSQL ",
				" #Docker ",
			],
		},
		{
			title: "Matcha",
			description:
				"Full-stack dating website I created using React and NodeJs. At the beginning of this project I was not familiar with these technologies, so I took it as a challange to learn while doing.",
			imgUrl: images.matcha,
			link: "https://github.com/acamaras0/matcha",
			tags: ["React", "NodeJS"],
			tag: [" #React ", " #NodeJS ", " #Bootstrap ", " #MariaDB "],
		},
		{
			title: "Camagru",
			description:
				"A small Instagram-like website that enables users to make and share photo edits. For this school project, the usage of frameworks was forbidden, so everything had to be done manually.",
			imgUrl: images.camagru,
			link: "https://github.com/acamaras0/camagru",
			tags: ["PHP"],
			tag: [" #PHP ", " #CSS ", " #HTML ", " #MySQL "],
		},
	];

	const [filterWorks, setFilterWorks] = React.useState(works);

	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard({ y: 100, opacity: 0 });

		setTimeout(() => {
			setAnimateCard({ y: 0, opacity: 1 });

			if (item === "All") {
				setFilterWorks(works);
			} else {
				setFilterWorks(
					works.filter((work) => work.tags.includes(item))
				);
			}
		}, 500);
	};
	return (
		<>
			<h2 className="head-text">
				My <span>Projects</span> at <span>Hive</span>
			</h2>
			<div className="app__work-filter">
				{["React", "NodeJS", "PHP", "All"].map((item, index) => (
					<div
						key={index}
						onClick={() => handleWorkFilter(item)}
						className={`app__work-filter-item app__flex p-text ${
							activeFilter === item ? "item-active" : ""
						}`}
					>
						{item}
					</div>
				))}
			</div>
			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__work-portfolio"
			>
				{filterWorks.map((work, index) => (
					<div className="app__work-item app__flex" key={index}>
						<div className="app__work-img app__flex">
							<img src={work.imgUrl} alt={work.title} />
							<motion.div
								whileHover={{ opacity: [0, 1] }}
								transition={{
									duration: 0.25,
									ease: "easeInOut",
									staggerChildren: 0.5,
								}}
								className="app__work-hover app__flex"
							>
								<a
									href={work.link}
									target="_blank"
									rel="noreferrer"
								>
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{
											duration: 0.25,
										}}
										className="app__flex"
									>
										<AiFillGithub />
									</motion.div>
								</a>
							</motion.div>
						</div>
						<div className="app__work-content app__flex">
							<h4>{work.title}</h4>
							<p className="p-text" style={{ marginTop: 10 }}>
								{work.description}
							</p>
							<div className="app__work-tag app__flex">
								<p className="p-text">{work.tag}</p>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Projects, "app__works"),
	"projects",
	"app__primarybg"
);
