import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Section/Intro/Intro";
import Experience from "./components/Section/Experience/Experience";
import Skills from "./components/Section/Skills/Skills";
import Projects from "./components/Section/Projects/Projects";
import Education from "./components/Section/Education/Education";
import Contact from "./components/Section/Contact/Contact";

function App() {
	return (
		<div className="bg-container min-w-full">
			<Navbar />
			<div className="container mx-auto">
				<Intro />
				<Experience />
				<Skills />
				<Projects />
				<Education />
				<Contact />
			</div>
		</div>
	);
}

export default App;
