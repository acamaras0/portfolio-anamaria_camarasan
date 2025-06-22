import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Hobbies.scss";

const Hobbies = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const timerRef = useRef(null);

	const slides = [
		{
			title: "Film Photography",
			imgUrls: images.filmPhotographyImages,
			description: "35mm and medium format cameras"
		},
		{
			title: "Digital Photography", 
			imgUrls: images.digitalPhotographyImages,
			description: "DSLR and mirrorless cameras"
		},
		{
			title: "Portrait Photography",
			imgUrls: images.portraitPhotographyImages, 
			description: "Environmental portraits"
		}
	];

	const descriptions = [
		{
			title: "Film Photography",
			description: "I'm passionate about film photography with my Canon EOS 7S SLR and Yashica T3. There's something magical about the analog process - from carefully composing each shot to the anticipation of developing film. I love experimenting with different film stocks, from classic black and white to vibrant color films.",
			tags: [" #Film Photography ", " #Analog ", " #35mm "]
		},
		{
			title: "Digital Photography",
			description: "I love exploring the creative possibilities of digital photography with my Canon DSLR and Fujifilm X100F. Digital photography allows me to experiment with different settings, post-processing techniques, and creative compositions. I enjoy capturing everything from landscapes to portraits, always pushing the boundaries of what's possible with modern camera technology.",
			tags: [" #Digital Photography ", " #Fujifilm ", " #Creative "]
		},
		{
			title: "Portrait Photography", 
			description: "I love working with people and capturing their personalities through portraits. I enjoy environmental portraits that tell a story and the collaborative process of creating meaningful images.",
			tags: [" #Portraits ", " #People ", " #35mm ", " #Film ", " #Digital "]
		}
	];

	const startTimer = useCallback(() => {
		timerRef.current = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 4000); // Change slide every 4 seconds
	}, [slides.length]);

	const resetTimer = () => {
		if (timerRef.current) {
			clearInterval(timerRef.current);
		}
		startTimer();
	};

	useEffect(() => {
		startTimer();
		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current);
			}
		};
	}, [slides.length, startTimer]);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
		resetTimer();
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
		resetTimer();
	};

	const goToSlide = (index) => {
		setCurrentSlide(index);
		resetTimer();
	};

	return (
		<>
			<h2 className="head-text">
				My <span>Photography</span> Hobby
			</h2>
			<p className="p-text" style={{ marginTop: 20, marginBottom: 40, textAlign: 'center' }}>
				When I'm not coding, you'll find me exploring the world through my camera lens. 
				Photography has been a passion of mine for years, and it's taught me valuable skills 
				like attention to detail, composition, and creative problem-solving.
			</p>

			<div className="app__hobbies-carousel">
				<div className="app__carousel-container">
					<button className="app__carousel-btn app__carousel-btn--prev" onClick={prevSlide}>
						<FaArrowLeft />
					</button>

					<div className="app__carousel-slides">
						{slides.map((slide, index) => (
							<motion.div
								key={index}
								className={`app__carousel-slide ${index === currentSlide ? 'active' : ''}`}
								initial={{ opacity: 0, x: 100 }}
								animate={{ 
									opacity: index === currentSlide ? 1 : 0,
									x: index === currentSlide ? 0 : (index < currentSlide ? -100 : 100)
								}}
								transition={{ duration: 0.5 }}
							>
								<div className="app__carousel-images-grid">
									{slide.imgUrls.map((imgUrl, imgIndex) => (
										<motion.div
											key={imgIndex}
											className="app__carousel-image-item"
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.5, delay: imgIndex * 0.1 }}
										>
											<img src={imgUrl} alt={`${slide.title} ${imgIndex + 1}`} />
										</motion.div>
									))}
								</div>
								
								<div className="app__carousel-slide-overlay">
									<h3>{slide.title}</h3>
									<p>{slide.description}</p>
								</div>
							</motion.div>
						))}
					</div>

					<button className="app__carousel-btn app__carousel-btn--next" onClick={nextSlide}>
						<FaArrowRight />
					</button>
				</div>

				<div className="app__carousel-dots">
					{slides.map((_, index) => (
						<button
							key={index}
							className={`app__carousel-dot ${index === currentSlide ? 'active' : ''}`}
							onClick={() => goToSlide(index)}
						/>
					))}
				</div>
			</div>

			<motion.div 
				className="app__hobbies-description"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				{descriptions.map((desc, index) => (
					<motion.div
						key={index}
						className={`app__description-item ${index === currentSlide ? 'active' : ''}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: index === currentSlide ? 1 : 0 }}
						transition={{ duration: 0.5 }}
					>
						<h4>{desc.title}</h4>
						<p className="p-text">{desc.description}</p>
						<div className="app__description-tags">
							{desc.tags.map((tag, tagIndex) => (
								<span key={tagIndex} className="app__description-tag">
									{tag}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</motion.div>

			<motion.div 
				className="app__foto-app-section"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.4 }}
			>
				<div className="app__foto-app-content">
					<div className="app__foto-app-text">
						<p className="p-text">
							You can find me on the <span>Foto App</span>
						</p>
					</div>
					<div className="app__foto-app-image">
                        <a href="https://the.fotoapp.co/anamaria.cmrs" target="_blank" rel="noopener noreferrer">
						<img src={images.fotoApp} alt="Foto App" />
                        </a>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Hobbies, "app__hobbies"),
	"hobbies",
	"app__whitebg"
); 