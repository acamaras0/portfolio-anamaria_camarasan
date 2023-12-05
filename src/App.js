import React from "react";
import { About, Footer, Header, Skills, Projects } from "./container";
// import {Testimonial} from "./container"
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Header />
			<About />
			<Skills />
			<Projects/>
			{/* <Testimonial /> */}
			<Footer />
		</div>
	);
};

export default App;
