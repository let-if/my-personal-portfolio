// import { motion } from "framer-motion";


// const workflow=[

// "Analyze requirements",

// "Design system architecture",

// "Build frontend interface",

// "Develop backend APIs",

// "Design database structure",

// "Test and debug",

// "Deploy and improve"

// ];


// function WorkflowCard(){


// return(

// <motion.div

// initial={{
// opacity:0
// }}

// whileInView={{
// opacity:1
// }}

// viewport={{
// once:true
// }}

// className="
// mt-16
// rounded-3xl
// border
// border-white/10
// bg-gradient-to-br
// from-white/10
// to-white/5
// p-8
// backdrop-blur-xl
// "

// >


// <h3
// className="
// text-2xl
// font-bold
// text-white
// "
// >

// My Development Workflow

// </h3>


// <div
// className="
// mt-8
// grid
// gap-4
// sm:grid-cols-2
// "
// >


// {
// workflow.map((item,index)=>(


// <div

// key={index}

// className="
// flex
// items-center
// gap-3
// rounded-xl
// bg-black/20
// p-4
// text-slate-300
// "

// >

// <span
// className="
// flex
// h-7
// w-7
// items-center
// justify-center
// rounded-full
// bg-cyan-400/20
// text-sm
// text-cyan-400
// "
// >

// {index+1}

// </span>


// {item}


// </div>


// ))
// }


// </div>


// </motion.div>

// );

// }


// export default WorkflowCard;
import React from "react";
import { motion } from "framer-motion";

const workflow = [
  "Analyze requirements",
  "Design system architecture",
  "Build frontend interface",
  "Develop backend APIs",
  "Design database structure",
  "Test and debug",
  "Deploy and improve",
];

function WorkflowCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="
        group relative mt-16 overflow-hidden rounded-3xl border border-cyan-500/25
        bg-gradient-to-br from-[#080f1e]/90 via-[#030712]/95 to-slate-950/90
        p-8 shadow-[0_0_40px_rgba(0,240,255,0.08)] backdrop-blur-2xl
        transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_50px_rgba(0,240,255,0.18)]
        lg:p-10
      "
    >
      {/* 1. TACTICAL HUD CORNER BRACKETS */}
      <span className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-cyan-400/80" />
      <span className="pointer-events-none absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-cyan-400/80" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400/80" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400/80" />

      {/* 2. AMBIENT GLOW BACKDROP */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl opacity-40" />

      {/* 3. CARD HEADER */}
      <div className="relative mb-8 border-b border-cyan-500/15 pb-4">
        <div className="mb-2 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-400">
          <span className="text-cyan-500">//</span>
          <span>PIPELINE_EXECUTION &amp; METHODOLOGY</span>
        </div>

        <h3 className="font-['Orbitron'] text-2xl font-black tracking-tight text-white sm:text-3xl">
          My Development{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,240,255,0.3)]">
            Workflow
          </span>
        </h3>
      </div>

      {/* 4. WORKFLOW PIPELINE GRID */}
      <div className="relative grid gap-3.5 sm:grid-cols-2">
        {workflow.map((item, index) => (
          <div
            key={index}
            className="
              group/item relative flex items-center justify-between overflow-hidden rounded-2xl
              border border-white/5 bg-slate-950/70 p-4 backdrop-blur-md
              transition-all duration-300 hover:border-cyan-400/40 hover:bg-[#0c162c]
              hover:translate-x-1 hover:shadow-[0_0_20px_rgba(0,240,255,0.12)]
            "
          >
            <div className="flex items-center gap-3.5">
              {/* Sequential Phase Orb */}
              <span className="
                flex h-8 w-8 shrink-0 items-center justify-center rounded-xl
                border border-cyan-400/30 bg-cyan-950/60 font-['Orbitron'] text-xs font-bold
                text-cyan-300 shadow-inner transition-all duration-300
                group-hover/item:border-cyan-400 group-hover/item:bg-cyan-400 group-hover/item:text-black
                group-hover/item:shadow-[0_0_12px_#00f0ff]
              ">
                0{index + 1}
              </span>

              {/* Step Title */}
              <span className="font-['JetBrains_Mono'] text-xs font-semibold text-slate-200 transition-colors group-hover/item:text-white sm:text-sm">
                {item}
              </span>
            </div>

            {/* Micro Telemetry Tag */}
            <span className="font-mono text-[9px] font-bold tracking-wider text-cyan-400/40 transition-colors group-hover/item:text-cyan-400/80">
              PHASE_0{index + 1}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default WorkflowCard;