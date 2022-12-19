import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Work.scss";

const Work = () => {
	const [activeFilter, setActiveFilter] = React.useState("All");
	const [animateCard, setAnimateCard] = React.useState({ y: 0, opacity: 1 });
	const works = [
		{
			title: "Hypertube",
			description: "A Netflix-like movie streaming website",
			imgUrl: images.hypertube,
			link: "https://github.com/acamaras0/Hypertube",
			tags: ["React", "NodeJS"],
			tag: [" React ", " NodeJS "],

		},
		{
			title: "Matcha",
			description: "Full-Stack dating website",
			imgUrl: images.matcha,
			link: "https://github.com/acamaras0/matcha",
			tags: ["React", "NodeJS"],
			tag: [" React ", " NodeJS "],
		},
		{
			title: "Camagru",
			description: "Instagram-like website",
			imgUrl: images.camagru,
			link: "https://github.com/acamaras0/camagru",
			tags: ["PHP"],
			tag: [" PHP "],

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
				My <span>Projects</span>
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
	MotionWrap(Work, "app__works"),
	"work",
	"app__primarybg"
);
