import Navbar from './navbar/Navbar';
import Intro from './sections/intro/Intro';
import Experience from './sections/experience/Experience';
import Skills from './sections/skills/Skills';
import Projects from './sections/projects/Projects';
import Education from './sections/education/Education';
import Contact from './sections/contact/Contact';
import Footer from './footer/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <div id="sectionList" className="container mx-auto grid">
        <Intro />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;