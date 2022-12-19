import React, { useRef } from "react";
import { images } from "../../constants";
// import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import emailjs from "@emailjs/browser";
import "./Footer.scss";

const Footer = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"default_service",
				"template_ne68867",
				form.current,
				"ZkIxe3enY39PvQ_uF"
			)
			.then(
				() => {
					alert("Message sent sucessfully!");
					window.location.reload(false);
				},
				() => {
					alert("Failed to send the message. Try again!");
				}
			);
	};

	return (
		<>
			<h2 className="head-text">
				Let's <span>chat</span> over <span>a coffee</span>!
			</h2>
			<div className="app__footer-cards">
				<div className="app__footer-card">
					<img src={images.email} alt="email" />
					<a
						href="mailto:anamaria.finn0@gmail.com"
						className="p-text"
					>
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
				<form ref={form} onSubmit={sendEmail}>
					<div className="app__flex">
						<input
							className="p-text"
							type="text"
							placeholder="Your Name"
							name="name"
						></input>
					</div>
					<div className="app__flex">
						<input
							className="p-text"
							type="email"
							placeholder="Your Email"
							name="email"
						></input>
					</div>
					<div>
						<textarea
							className="p-text"
							type="email"
							placeholder="Message"
							name="message"
						/>
						<button type="submit" className="p-text">
							Send
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, "app__footer"),
	"contact",
	"app__primarybg"
);
