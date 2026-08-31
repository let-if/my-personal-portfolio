
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";

// import {
//   FaGithub,
//   FaLinkedin,
//   FaArrowRight,
//   FaDownload
// } from "react-icons/fa";

// import {
//   useEffect,
//   useState
// } from "react";


// import {
//   getPublicProfile
// } from "../../../services/profileService";




// function HeroContent() {



// const [profile,setProfile]=useState(null);





// useEffect(()=>{


// getPublicProfile()

// .then(data=>{

// setProfile(data);

// })

// .catch(error=>{

// console.log(
// "Profile loading failed:",
// error
// );

// });


// },[]);





// const cvUrl =

// profile?.cv

// ?

// `http://localhost:5000${profile.cv}`

// :

// "#";






// return (

// <div className="max-w-2xl">



// <motion.div

// initial={{
// opacity:0,
// y:20
// }}

// animate={{
// opacity:1,
// y:0
// }}

// className="
// mb-6
// inline-flex
// items-center
// gap-2
// rounded-full
// border
// border-cyan-400/20
// bg-cyan-400/10
// px-5
// py-2
// text-sm
// text-cyan-300
// backdrop-blur-xl
// "

// >

// <span
// className="
// h-2
// w-2
// rounded-full
// bg-green-400
// animate-pulse
// "
// />

// Available for opportunities


// </motion.div>







// <motion.p

// initial={{
// opacity:0,
// y:20
// }}

// animate={{
// opacity:1,
// y:0
// }}

// transition={{
// duration:0.6
// }}

// className="
// mb-5
// text-lg
// font-medium
// text-cyan-400
// "

// >

// 👋 Hello, I'm

// </motion.p>








// <motion.h1

// initial={{
// opacity:0,
// y:30
// }}

// animate={{
// opacity:1,
// y:0
// }}

// transition={{
// duration:0.7
// }}

// className="
// text-5xl
// font-extrabold
// leading-tight
// text-white
// sm:text-6xl
// lg:text-7xl
// "

// >


// {

// profile?.name

// ?

// profile.name.split(" ")[0]

// :

// "Abdulletif"

// }


// <br/>


// <span

// className="
// bg-gradient-to-r
// from-cyan-400
// via-blue-500
// to-indigo-500
// bg-clip-text
// text-transparent
// "

// >

// {

// profile?.name

// ?

// profile.name
// .split(" ")
// .slice(1)
// .join(" ")

// :

// "Ylkal Abate"

// }


// </span>


// </motion.h1>










// <motion.div

// initial={{
// opacity:0
// }}

// animate={{
// opacity:1
// }}

// transition={{
// delay:0.4
// }}

// className="
// mt-6
// text-2xl
// font-semibold
// text-slate-300
// "

// >


// <TypeAnimation

// sequence={[

// profile?.title || "Software Engineer",

// 2000,

// "Full Stack Developer",

// 2000,

// "React + Node.js Developer",

// 2000,

// "Problem Solver",

// 2000

// ]}

// speed={50}

// repeat={Infinity}

// />


// </motion.div>









// <motion.p

// initial={{
// opacity:0,
// y:20
// }}

// animate={{
// opacity:1,
// y:0
// }}

// transition={{
// delay:0.6
// }}

// className="
// mt-6
// max-w-xl
// text-lg
// leading-relaxed
// text-slate-400
// "

// >


// {

// profile?.bio

// ||

// "Software Engineer passionate about building scalable full-stack applications, creating clean user experiences, and solving real-world problems through modern web technologies."

// }



// </motion.p>











// <motion.div


// initial={{
// opacity:0,
// y:20
// }}


// animate={{
// opacity:1,
// y:0
// }}


// transition={{
// delay:0.8
// }}


// className="
// mt-8
// flex
// flex-wrap
// gap-4
// "

// >






// <a

// href="#projects"

// className="
// flex
// items-center
// gap-2
// rounded-xl
// bg-gradient-to-r
// from-cyan-500
// to-blue-600
// px-7
// py-3
// font-semibold
// text-white
// shadow-lg
// shadow-cyan-500/30
// transition
// hover:scale-105
// "

// >

// View Projects

// <FaArrowRight/>


// </a>








// <a

// href={cvUrl}

// download

// className="
// flex
// items-center
// gap-2
// rounded-xl
// border
// border-slate-700
// px-7
// py-3
// font-semibold
// text-white
// transition
// hover:border-cyan-400
// hover:text-cyan-400
// "

// >


// Download CV


// <FaDownload/>


// </a>








// </motion.div>










// <div

// className="
// mt-10
// flex
// gap-5
// "

// >



// <a

// href={
// profile?.github ||
// "https://github.com/let-if"
// }

// target="_blank"

// rel="noreferrer"

// className="
// text-slate-400
// transition
// hover:text-cyan-400
// "

// >

// <FaGithub size={28}/>


// </a>







// <a

// href={
// profile?.linkedin ||
// "https://www.linkedin.com/in/letif-ylkal-585463411"
// }

// target="_blank"

// rel="noreferrer"

// className="
// text-slate-400
// transition
// hover:text-cyan-400
// "

// >


// <FaLinkedin size={28}/>


// </a>



// </div>





// </div>


// );


// }


// export default HeroContent;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { getPublicProfile } from "../../../services/profileService";

function HeroContent() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getPublicProfile()
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => {
        console.log("Profile loading failed:", error);
      });
  }, []);

  const resumeUrl = "https://letif-s-cv.vercel.app/";

  return (
    <div className="relative z-10 max-w-2xl">
      {/* 1. TELEMETRY STATUS PILL */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/30
          bg-cyan-950/40 px-4 py-1.5 backdrop-blur-xl shadow-[0_0_15px_rgba(0,240,255,0.15)]
        "
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
        </span>
        <span className="font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-widest text-cyan-300">
          SYS_READY // OPEN TO OPPORTUNITIES
        </span>
      </motion.div>

      {/* 2. SUB-CALLOUT */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-2 flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-cyan-400/90"
      >
        <span className="text-cyan-500">//</span>
        <span>INITIALIZING PROFILE DATA</span>
      </motion.div>

      {/* 3. MAIN GLITCH-GRADIENT H1 */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-['Orbitron'] text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
      >
        {profile?.name ? profile.name.split(" ")[0] : "Abdulletif"}
        <br />
        <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.35)]">
          {profile?.name
            ? profile.name.split(" ").slice(1).join(" ")
            : "Ylkal Abate"}
        </span>
      </motion.h1>

      {/* 4. TYPEWRITER TERMINAL ROLE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 flex items-center gap-2 font-['JetBrains_Mono'] text-xl font-bold text-slate-200 sm:text-2xl"
      >
        <span className="text-cyan-400">&gt;</span>
        <TypeAnimation
          sequence={[
            profile?.title || "Full-Stack Software Engineer",
            2200,
            "React • Node.js • PostgreSQL Architect",
            2200,
            "Cross-Platform Mobile Dev (Expo)",
            2200,
            "Scalable Systems & Problem Solver",
            2200,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-slate-100"
        />
      </motion.div>

      {/* 5. BIO DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
      >
        {profile?.bio ||
          "Software Engineer passionate about building scalable full-stack applications, robust backend distributed architectures, and high-performance user interfaces."}
      </motion.p>

      {/* 6. TACTICAL HUD BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 flex flex-wrap items-center gap-4"
      >
        {/* Primary Projects Trigger */}
        <a
          href="#projects"
          className="
            group relative flex items-center gap-3 overflow-hidden rounded-xl
            border border-cyan-400/60 bg-gradient-to-r from-cyan-500 to-blue-600
            px-7 py-3.5 font-['Orbitron'] text-xs font-extrabold uppercase tracking-wider text-white
            shadow-[0_0_20px_rgba(0,240,255,0.35)] transition-all duration-300
            hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] active:scale-95
          "
        >
          {/* Laser Sweep */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <span>VIEW PROJECTS</span>
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        {/* Secondary Interactive Resume Trigger */}
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="
            group relative flex items-center gap-3 rounded-xl border border-cyan-500/30
            bg-slate-950/70 px-7 py-3.5 font-['Orbitron'] text-xs font-bold uppercase tracking-wider
            text-cyan-300 backdrop-blur-md transition-all duration-300
            hover:border-cyan-400 hover:bg-cyan-950/40 hover:text-white
            hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:scale-105 active:scale-95
          "
        >
          <span>INTERACTIVE CV</span>
          <FaExternalLinkAlt className="text-xs text-cyan-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
        </a>
      </motion.div>

      {/* 7. SOCIAL NODES */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-10 flex items-center gap-4"
      >
        <span className="font-mono text-xs text-slate-500">// CHANNELS:</span>

        {/* GitHub Node */}
        <a
          href={profile?.github || "https://github.com/let-if"}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="
            flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800
            bg-slate-950/80 text-slate-400 transition-all duration-300
            hover:border-cyan-400/60 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:scale-110
          "
        >
          <FaGithub size={20} />
        </a>

        {/* LinkedIn Node */}
        <a
          href={
            profile?.linkedin ||
            "https://www.linkedin.com/in/letif-ylkal-585463411"
          }
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="
            flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800
            bg-slate-950/80 text-slate-400 transition-all duration-300
            hover:border-cyan-400/60 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:scale-110
          "
        >
          <FaLinkedin size={20} />
        </a>
      </motion.div>
    </div>
  );
}

export default HeroContent;