// import { motion } from "framer-motion";

// import SkillCard from "./skills/SkillCard";

// import { skillCategories } from "../../data/skills";

// import ToolsCard from "./skills/ToolsCard";
// import WorkflowCard from "./skills/WorkflowCard";

// import { tools } from "../../data/tools";
// function Skills(){


// return(

// <section
// id="skills"
// className="
// relative
// py-24
// lg:py-32
// "
// >
//     <div
// className="
// absolute
// left-0
// top-1/2
// h-96
// w-96
// rounded-full
// bg-cyan-500/10
// blur-3xl
// "
// />


// <div
// className="
// absolute
// right-0
// bottom-0
// h-96
// w-96
// rounded-full
// bg-blue-500/10
// blur-3xl
// "
// />
// <div
// className="
// absolute
// right-0
// top-1/3
// h-96
// w-96
// rounded-full
// bg-cyan-500/10
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
// text-center
// mb-16
// "

// >

// {/* 
// <p
// className="
// mb-4
// text-sm
// uppercase
// tracking-[0.3em]
// text-cyan-400
// "
// >
// Skills
// </p> */}
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
// font-semibold
// uppercase
// tracking-[0.3em]
// text-cyan-400
// "
// >
// Technical Skills
// </p>


// <h2
// className="
// text-4xl
// font-extrabold
// text-white
// sm:text-5xl
// "
// >

// My Technical
// <span
// className="
// bg-gradient-to-r
// from-cyan-400
// to-blue-500
// bg-clip-text
// text-transparent
// "
// >
//  Skills
// </span>

// </h2>


// <p
// className="
// mx-auto
// mt-5
// max-w-2xl
// text-slate-400
// "
// >

// Technologies and tools I use to build
// modern, scalable software solutions.

// </p>


// </motion.div>




// {/* Cards */}

// <div
// className="
// grid
// gap-8
// md:grid-cols-2
// "
// >


// {
// skillCategories.map((category,index)=>(

// <SkillCard

// key={index}

// category={category}

// />

// ))
// }


// </div>

// {/* Tools Section */}

// <div
// className="
// mt-24
// "
// >

// <h3
// className="
// mb-10
// text-center
// text-3xl
// font-bold
// text-white
// "
// >

// Tools & Technologies

// </h3>



// <div
// className="
// grid
// gap-6
// sm:grid-cols-2
// lg:grid-cols-4
// "
// >


// {
// tools.map((tool,index)=>(

// <ToolsCard

// key={index}

// tool={tool}

// />

// ))
// }


// </div>


// </div>




// <WorkflowCard />

// </div>


// </section>

// );

// }


// export default Skills;
import React from "react";
import { motion } from "framer-motion";

import SkillCard from "./skills/SkillCard";
import ToolsCard from "./skills/ToolsCard";
import WorkflowCard from "./skills/WorkflowCard";

import { skillCategories } from "../../data/skills";
import { tools } from "../../data/tools";

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#030712] py-24 lg:py-32 selection:bg-cyan-500 selection:text-black"
    >
      {/* 1. ATMOSPHERIC OBSIDIAN LIGHTING GLOWS */}
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* 2. TELEMETRY SECTION HEADER */}
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
              SYS_INVENTORY // TECHNICAL_SKILLS
            </span>
          </div>

          <h2 className="font-['Orbitron'] text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            My Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.35)]">
              Skills
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#00f0ff]" />

          <p className="mx-auto mt-6 max-w-2xl font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-300 sm:text-sm">
            Technologies and tools I use to build modern, scalable software solutions.
          </p>
        </motion.div>

        {/* 3. CORE SKILL CARDS GRID */}
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>

        {/* 4. TOOLS & ECOSYSTEM TELEMETRY SECTION */}
        <div className="mt-24">
          <div className="mb-10 text-center">
            <div className="mb-2 inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-400/80">
              <span>//</span>
              <span>DEV_ENVIRONMENT &amp; UTILITIES</span>
            </div>
            <h3 className="font-['Orbitron'] text-3xl font-black tracking-wide text-white sm:text-4xl">
              Tools &amp; Technologies
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool, index) => (
              <ToolsCard key={index} tool={tool} />
            ))}
          </div>
        </div>

        {/* 5. WORKFLOW PIPELINE COMPONENT */}
        <WorkflowCard />
      </div>
    </section>
  );
}

export default Skills;