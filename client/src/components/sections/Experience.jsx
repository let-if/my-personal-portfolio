// import {motion} from "framer-motion";


// import ExperienceCard 
// from "./experience/ExperienceCard";


// import {experiences}
// from "../../data/experience";



// function Experience(){



// return(


// <section

// id="experience"

// className="
// relative
// py-24
// lg:py-32
// "

// >


// <div

// className="
// mx-auto
// max-w-6xl
// px-6
// lg:px-8
// "

// >


// {/* Header */}


// <motion.div


// initial={{

// opacity:0,

// y:30

// }}


// whileInView={{

// opacity:1,

// y:0

// }}


// viewport={{

// once:true

// }}


// className="
// mb-16
// text-center
// "

// >



// <p

// className="
// mb-4
// inline-flex
// rounded-full
// border
// border-cyan-400/20
// bg-cyan-400/10
// px-5
// py-2
// text-sm
// uppercase
// tracking-widest
// text-cyan-400
// "

// >

// Experience

// </p>



// <h2

// className="
// text-4xl
// font-extrabold
// text-white
// sm:text-5xl
// "

// >

// My Professional

// <span

// className="
// bg-gradient-to-r
// from-cyan-400
// to-blue-500
// bg-clip-text
// text-transparent
// "

// >

//  Journey

// </span>


// </h2>
// <p
//   className="
//     mx-auto
//     mt-6
//     max-w-3xl
//     text-lg
//     leading-8
//     text-slate-400
//   "
// >
//   My journey from learning software engineering to building full-stack
//   applications and gaining real-world development experience through academic
//   projects and industry internships.
// </p>

// </motion.div>

// <motion.div
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6 }}
//   viewport={{ once: true }}
//   className="
//     mb-20
//     grid
//     gap-6
//     sm:grid-cols-2
//     lg:grid-cols-4
//   "
// >
//   {[
//     {
//       value: "9+",
//       label: "Projects Built",
//     },
//     {
//       value: "10+",
//       label: "Technologies",
//     },
//     {
//       value: "2028",
//       label: "Expected Graduation",
//     },
//     {
//       value: "1",
//       label: "Internship",
//     },
//   ].map((stat) => (
//     <div
//       key={stat.label}
//       className="
//         rounded-3xl
//         border
//         border-white/10
//         bg-white/5
//         p-6
//         text-center
//         backdrop-blur-xl
//         transition
//         duration-300
//         hover:-translate-y-2
//         hover:border-cyan-400/40
//       "
//     >
//       <h3 className="text-4xl font-extrabold text-cyan-400">
//         {stat.value}
//       </h3>

//       <p className="mt-3 text-slate-400">
//         {stat.label}
//       </p>
//     </div>
//   ))}
// </motion.div>




// {/* Timeline */}


// <div

// className="
// relative
// "

// >


// <div
//   className="
//     absolute
//     left-4
//     top-0
//     h-full
//     w-[2px]
//     bg-gradient-to-b
//     from-cyan-400
//     via-cyan-300
//     to-transparent
//     shadow-[0_0_25px_rgba(34,211,238,0.5)]
//     md:left-1/2
//   "
// />




// <div

// className="
// space-y-12
// "

// >


// {

// experiences.map((experience,index)=>(


// <ExperienceCard

// key={experience.id}

// experience={experience}

// index={index}

// />


// ))


// }



// </div>


// </div>

// <motion.div
//   initial={{ opacity: 0 }}
//   whileInView={{ opacity: 1 }}
//   viewport={{ once: true }}
//   className="mt-20 text-center"
// >
//   <a
//     href="/resume.pdf"
//     download
//     className="
//       inline-flex
//       items-center
//       rounded-2xl
//       bg-gradient-to-r
//       from-cyan-500
//       to-blue-600
//       px-8
//       py-4
//       text-lg
//       font-semibold
//       text-white
//       transition
//       duration-300
//       hover:scale-105
//       hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
//     "
//   >
//     Download My Resume
//   </a>
// </motion.div>
// <p
//   className="
//     mx-auto
//     mt-8
//     max-w-3xl
//     text-center
//     leading-8
//     text-slate-400
//   "
// >
//   I'm always eager to take on challenging projects, learn new technologies,
//   and collaborate with teams to build software that creates real value.
// </p>
// </div>


// </section>


// );


// }


// export default Experience;
import React from "react";
import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";

import ExperienceCard from "./experience/ExperienceCard";
import { experiences } from "../../data/experience";

function Experience() {
  const telemetryStats = [
    {
      value: "9+",
      label: "Projects Built",
      tag: "DEPLOYMENTS",
    },
    {
      value: "10+",
      label: "Technologies",
      tag: "TECH_STACK",
    },
    {
      value: "2028",
      label: "Expected Graduation",
      tag: "MILESTONE",
    },
    {
      value: "1",
      label: "Internship",
      tag: "INDUSTRY_EXP",
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#030712] py-24 lg:py-32 selection:bg-cyan-500 selection:text-black"
    >
      {/* 1. ATMOSPHERIC OBSIDIAN LIGHTING GLOWS */}
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute left-1/3 bottom-10 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* 2. SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              SYS_RECORD // CAREER_TRACK
            </span>
          </div>

          <h2 className="font-['Orbitron'] text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            My Professional{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.35)]">
              Journey
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#00f0ff]" />

          <p className="mx-auto mt-6 max-w-2xl font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-300 sm:text-sm">
            My journey from learning software engineering to building full-stack
            applications and gaining real-world development experience through
            academic projects and industry internships.
          </p>
        </motion.div>

        {/* 3. TELEMETRY METRIC NODES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {telemetryStats.map((stat, idx) => (
            <div
              key={stat.label}
              className="
                group relative overflow-hidden rounded-3xl border border-cyan-500/20
                bg-[#080f1e]/85 p-6 text-center shadow-[0_0_30px_rgba(0,240,255,0.06)]
                backdrop-blur-2xl transition-all duration-500
                hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(0,240,255,0.18)]
                hover:-translate-y-2
              "
            >
              {/* Tactical Corner Brackets */}
              <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />
              <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />
              <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />

              <div className="mb-2 flex items-center justify-between border-b border-cyan-500/10 pb-2 font-mono text-[9px] font-bold text-cyan-400/60 uppercase">
                <span>{stat.tag}</span>
                <span>0{idx + 1}</span>
              </div>

              <h3 className="font-['Orbitron'] text-3xl font-black text-white drop-shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-colors group-hover:text-cyan-200 sm:text-4xl">
                {stat.value}
              </h3>

              <p className="mt-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-slate-400 transition-colors group-hover:text-slate-200">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* 4. CHRONOLOGY TIMELINE */}
        <div className="relative">
          {/* Laser Track Conduit */}
          <div
            className="
              pointer-events-none absolute left-4 top-0 h-full w-[2px]
              bg-gradient-to-b from-cyan-400 via-sky-300 to-transparent
              shadow-[0_0_15px_#00f0ff]
              md:left-1/2 md:-translate-x-1/2
            "
          />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* 5. RESUME DISPATCH TRIGGER & SIGN-OFF */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <a
            href="/resume.pdf"
            download
            className="
              group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-2xl
              border border-cyan-400/60 bg-gradient-to-r from-cyan-500 to-blue-600
              px-8 py-4 font-['Orbitron'] text-xs font-bold uppercase tracking-wider text-white
              shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all duration-300
              hover:scale-105 hover:shadow-[0_0_35px_rgba(0,240,255,0.55)] active:scale-95
            "
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
            <FaFileDownload className="text-sm" />
            <span>DOWNLOAD RESUME</span>
          </a>

          <p className="mx-auto mt-8 max-w-2xl font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-400">
            I'm always eager to take on challenging projects, learn new
            technologies, and collaborate with teams to build software that
            creates real value.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;