// import Hero from "../components/sections/Hero";
// import About from "../components/sections/About";
// import Skills from "../components/sections/Skills";
// import Experience from "../components/sections/Experience";
// import Projects from "../components/sections/Projects";
// import Github from "../components/sections/Github";
// import Contact from "../components/sections/Contact";
// import FooterCTA from "../components/sections/FooterCTA";


// function Home() {
//   return (
//     <>
//       <Hero />

//       <About />

//       <Skills />


//       <Projects />

//       <Github />


//       <Experience />
//       <Contact />

//       <FooterCTA />
     
//     </>
//   );
// }

// export default Home;
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Github from "../components/sections/Github";
import Contact from "../components/sections/Contact";
import FooterCTA from "../components/sections/FooterCTA";

function Home() {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="github">
        <Github />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <FooterCTA />
    </>
  );
}

export default Home;