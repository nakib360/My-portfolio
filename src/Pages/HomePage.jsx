import Education from "../Components/Education";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Services from "../Components/Services";
import Skills from "../Components/Skills";
import Contact from "../Components/Contact";

const HomePage = () => {
  return (
    <div>
      <About/>
      <Skills/>
      <Projects/>
      <Services/>
      <Education/>
      <Contact/>
    </div>
  );
};

export default HomePage;