// import AboutContent from "./about/AboutContent";
// import AboutCard from "./about/AboutCard";
// import JourneyTimeline from "./about/JourneyTimeline";
// import StatsCards from "./about/StatsCards";
// import TechnologyStack from "./about/TechnologyStack";
// import Philosophy from "./about/Philosophy";
// import DeveloperCard from "./about/DeveloperCard";
// function About(){

// return(

// <section
// id="about"
// className="
// relative
// overflow-hidden
// py-24
// lg:py-32
// "
// >
//     <div
// className="
// absolute
// left-0
// top-1/3
// -z-10
// h-96
// w-96
// rounded-full
// bg-blue-500/10
// blur-3xl
// "
// />


// <div
// className="
// mx-auto
// max-w-7xl
// px-6
// lg:px-8
// "
// >


// {/* Section Header */}

// <div
// className="
// mb-16
// text-center
// "
// >

// <p
// className="
// mb-4
// text-sm
// font-semibold
// uppercase
// tracking-[0.3em]
// text-cyan-400
// "
// >
// About Me
// </p>


// <h2
// className="
// text-4xl
// font-extrabold
// text-white
// sm:text-5xl
// "
// >

// My Journey as a
// <br/>

// <span
// className="
// bg-gradient-to-r
// from-cyan-400
// to-blue-500
// bg-clip-text
// text-transparent
// "
// >
// Software Engineer
// </span>

// </h2>


// </div>




// <div
// className="
// grid
// items-center
// gap-12
// lg:grid-cols-2
// "
// >


// <div className="lg:col-span-1">

// <AboutContent />

// </div>


// <div className="lg:col-span-1">

// <DeveloperCard />

// </div>


// </div>

// <JourneyTimeline />
// <StatsCards />

// <TechnologyStack />
// <Philosophy />
// </div>


// </section>

// );

// }


// export default About;
import React from "react";
import AboutContent from "./about/AboutContent";
import AboutCard from "./about/AboutCard";
import JourneyTimeline from "./about/JourneyTimeline";
import StatsCards from "./about/StatsCards";
import TechnologyStack from "./about/TechnologyStack";
import Philosophy from "./about/Philosophy";
import DeveloperCard from "./about/DeveloperCard";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#030712] py-24 lg:py-32 selection:bg-cyan-500 selection:text-black"
    >
      {/* 1. AMBIENT ATMOSPHERIC LIGHTING GLOWS */}
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[160px]" />
      <div className="pointer-events-none absolute left-1/3 bottom-10 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* 2. SECTION TELEMETRY HEADER */}
        <div className="mb-20 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              SYS_INDEX // ABOUT_ME
            </span>
          </div>

          <h2 className="font-['Orbitron'] text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            My Journey as a
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.35)]">
              Software Engineer
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#00f0ff]" />
        </div>

        {/* 3. CORE PROFILE & DEVELOPER CARDS GRID */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="lg:col-span-1">
            <AboutContent />
          </div>

          <div className="lg:col-span-1">
            <DeveloperCard />
          </div>
        </div>

        {/* 4. CHRONOLOGY & METRICS */}
        <JourneyTimeline />
        <StatsCards />

        {/* 5. TECH INVENTORY & ENGINEERING PHILOSOPHY */}
        <TechnologyStack />
        <Philosophy />
      </div>
    </section>
  );
}

export default About;