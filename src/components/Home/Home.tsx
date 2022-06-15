import { useEffect } from 'react';

import Navbar from './navbar/Navbar';
import Intro from './sections/intro/Intro';
import Experience from './sections/experience/Experience';
import Skills from './sections/skills/Skills';
import Projects from './sections/projects/Projects';
import Education from './sections/education/Education';
import Contact from './sections/contact/Contact';
import Footer from './footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid px-4">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once={true}
          data-aos-anchor-placement="top-center">
          <Intro />
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-once={true}
          data-aos-anchor-placement="top-bottom">
          <Skills />
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="800"
          data-aos-once={true}
          data-aos-anchor-placement="top-bottom">
          <Experience />
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="800"
          data-aos-once={true}
          data-aos-anchor-placement="top-bottom">
          <Projects />
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="800"
          data-aos-once={true}
          data-aos-anchor-placement="top-bottom">
          <Education />
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="800"
          data-aos-once={true}
          data-aos-anchor-placement="top-bottom">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
