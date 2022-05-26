import "./Home.scss";
import Navbar from "./navbar/Navbar";
import Navbar2 from "./navbar/Navbar2";
import Intro from "./sections/intro/Intro";
import Experience from "./sections/experience/Experience";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Education from "./sections/education/Education";
import Contact from "./sections/contact/Contact";
import Footer from "./footer/Footer";

function Home() {
	return (
		<div className="bg-container min-w-full">
			<Navbar />
			<Navbar2 />
			<div className="container mx-auto">
				<Intro />
				<Experience />
				<Skills />
				<Projects />
				<Education />
				<Contact />
			</div>
			<Footer />
		</div>
	);
}

export default Home;
