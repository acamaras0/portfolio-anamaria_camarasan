import React from "react";
import { Footer, Header, Skills, Projects, Hobbies } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Header />
			<Skills />
			<Projects/>
			<Hobbies />
			<Footer />
		</div>
	);
};

export default App;
