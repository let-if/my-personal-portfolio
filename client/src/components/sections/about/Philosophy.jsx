// import { motion } from "framer-motion";


// function Philosophy(){

// return(

// <motion.div

// initial={{
// opacity:0,
// scale:0.95
// }}

// whileInView={{
// opacity:1,
// scale:1
// }}

// viewport={{
// once:true
// }}

// transition={{
// duration:0.7
// }}

// className="
// relative
// mt-24
// overflow-hidden
// rounded-3xl
// border
// border-white/10
// bg-gradient-to-br
// from-cyan-500/10
// via-blue-500/10
// to-indigo-500/10
// p-8
// backdrop-blur-xl
// lg:p-12
// "

// >


// {/* Glow */}

// <div
// className="
// absolute
// right-0
// top-0
// h-40
// w-40
// rounded-full
// bg-cyan-400/20
// blur-3xl
// "
// />



// <h3
// className="
// relative
// text-3xl
// font-bold
// text-white
// "
// >

// My Engineering Philosophy

// </h3>



// <p
// className="
// relative
// mt-6
// max-w-3xl
// leading-relaxed
// text-slate-300
// "
// >

// I believe great software is built by combining
// clean architecture, thoughtful design, and
// continuous learning.

// My goal is not only to write code, but to create
// solutions that are reliable, scalable, and valuable
// for real users.

// </p>



// <div
// className="
// relative
// mt-8
// flex
// flex-wrap
// gap-4
// "
// >


// <span
// className="
// rounded-full
// border
// border-cyan-400/20
// bg-cyan-400/10
// px-5
// py-2
// text-sm
// text-cyan-300
// "
// >
// Clean Code
// </span>


// <span
// className="
// rounded-full
// border
// border-blue-400/20
// bg-blue-400/10
// px-5
// py-2
// text-sm
// text-blue-300
// "
// >
// Problem Solving
// </span>


// <span
// className="
// rounded-full
// border
// border-indigo-400/20
// bg-indigo-400/10
// px-5
// py-2
// text-sm
// text-indigo-300
// "
// >
// Continuous Learning
// </span>


// </div>



// </motion.div>

// );

// }


// export default Philosophy;
import React from "react";
import { motion } from "framer-motion";

function Philosophy() {
  const principles = [
    { label: "Clean Code", id: "P_01", color: "cyan" },
    { label: "Problem Solving", id: "P_02", color: "emerald" },
    { label: "Continuous Learning", id: "P_03", color: "sky" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="
        group relative mt-24 overflow-hidden rounded-3xl border border-cyan-500/30
        bg-gradient-to-br from-[#080f1e]/90 via-[#030712]/95 to-slate-950/90
        p-8 shadow-[0_0_40px_rgba(0,240,255,0.08)] backdrop-blur-2xl
        transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_50px_rgba(0,240,255,0.18)]
        lg:p-12
      "
    >
      {/* 1. TACTICAL HUD CORNER BRACKETS */}
      <span className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-cyan-400/80" />
      <span className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-cyan-400/80" />
      <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400/80" />
      <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400/80" />

      {/* 2. DUAL-PLASMA AMBIENT LIGHTING NODES */}
      <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-full bg-cyan-400/15 blur-3xl transition-opacity group-hover:opacity-100" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* 3. SYSTEM TELEMETRY DECAL */}
      <div className="relative mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400">
        <span className="text-cyan-500">//</span>
        <span>CORE_DIRECTIVE &amp; VALUE_SYSTEM</span>
      </div>

      {/* 4. TITLE */}
      <h3 className="relative font-['Orbitron'] text-3xl font-black tracking-tight text-white sm:text-4xl">
        My Engineering{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,240,255,0.3)]">
          Philosophy
        </span>
      </h3>

      {/* 5. PHILOSOPHY MANIFESTO BODY */}
      <p className="relative mt-6 max-w-3xl font-['JetBrains_Mono'] text-sm leading-relaxed text-slate-300 sm:text-base">
        I believe great software is built by combining clean architecture,
        thoughtful design, and continuous learning.
        <br className="hidden sm:block" />
        <br className="hidden sm:block" />
        My goal is not only to write code, but to create solutions that are
        reliable, scalable, and genuinely valuable for real users.
      </p>

      {/* 6. TACTICAL HUD VALUE CHIPS */}
      <div className="relative mt-8 flex flex-wrap items-center gap-3.5">
        {principles.map((item) => (
          <div
            key={item.id}
            className="
              flex items-center gap-2.5 rounded-xl border border-cyan-400/30
              bg-cyan-950/40 px-4 py-2 backdrop-blur-md shadow-inner
              transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-900/40 hover:scale-105
            "
          >
            <span className="font-mono text-[9px] font-bold tracking-wider text-cyan-400/60">
              {item.id}
            </span>
            <span className="font-['Orbitron'] text-xs font-bold uppercase tracking-wider text-cyan-200">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Philosophy;