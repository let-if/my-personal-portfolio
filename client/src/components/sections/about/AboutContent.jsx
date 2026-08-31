// import { motion } from "framer-motion";


// function AboutContent(){


// return(

// <motion.div

// initial={{
// opacity:0,
// x:-50
// }}

// whileInView={{
// opacity:1,
// x:0
// }}

// viewport={{
// once:true
// }}

// transition={{
// duration:0.7
// }}

// >


// <h3
// className="
// text-3xl
// font-bold
// text-white
// "
// >

// Building Digital Solutions With Code

// </h3>



// <p
// className="
// mt-6
// leading-relaxed
// text-slate-400
// "
// >

// I am Abdulletif Ylkal Abate, a Software Engineer
// passionate about designing and developing modern
// full-stack applications.

// I enjoy transforming ideas into scalable,
// efficient, and user-friendly software solutions
// using modern technologies.

// </p>



// <p
// className="
// mt-5
// leading-relaxed
// text-slate-400
// "
// >

// My experience includes building applications with
// React, Node.js, Express, PostgreSQL, and modern
// web development tools.

// I focus on writing clean code, creating great
// user experiences, and continuously improving
// my engineering skills.

// </p>



// </motion.div>

// );


// }


// export default AboutContent;
import React from "react";
import { motion } from "framer-motion";

function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10"
    >
      {/* 1. TELEMETRY HEADER CALLOUT */}
      <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400">
        <span className="text-cyan-500">//</span>
        <span>ENGINEERING_PROFILE &amp; PHILOSOPHY</span>
      </div>

      {/* 2. SECTION TITLE */}
      <h3 className="font-['Orbitron'] text-3xl font-black tracking-tight text-white sm:text-4xl">
        Building Digital Solutions{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
          With Code
        </span>
      </h3>

      {/* 3. BODY PARAGRAPH 1 */}
      <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
        I am{" "}
        <strong className="font-semibold text-white">
          Abdulletif Ylkal Abate
        </strong>
        , a Software Engineer passionate about designing and developing modern
        full-stack applications. I enjoy transforming complex architectural
        ideas into scalable, efficient, and user-friendly software solutions
        using modern technologies.
      </p>

      {/* 4. BODY PARAGRAPH 2 WITH INLINE HUD BADGES */}
      <div className="mt-5 rounded-2xl border border-cyan-500/15 bg-slate-950/50 p-5 backdrop-blur-md">
        <p className="font-['JetBrains_Mono'] text-sm leading-relaxed text-slate-400 sm:text-base">
          My experience includes engineering applications with{" "}
          <span className="rounded border border-cyan-400/30 bg-cyan-950/50 px-1.5 py-0.5 text-xs font-semibold text-cyan-300">
            React
          </span>
          ,{" "}
          <span className="rounded border border-emerald-400/30 bg-emerald-950/50 px-1.5 py-0.5 text-xs font-semibold text-emerald-300">
            Node.js
          </span>
          ,{" "}
          <span className="rounded border border-blue-400/30 bg-blue-950/50 px-1.5 py-0.5 text-xs font-semibold text-blue-300">
            Express
          </span>
          , and{" "}
          <span className="rounded border border-sky-400/30 bg-sky-950/50 px-1.5 py-0.5 text-xs font-semibold text-sky-300">
            PostgreSQL
          </span>
          . I focus on writing clean, maintainable code, creating responsive
          user experiences, and continuously expanding my systems engineering
          capabilities.
        </p>
      </div>

      {/* 5. TACTICAL HIGHLIGHT METRICS BAR */}
      <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-slate-800/80 pt-4">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff]" />
          <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
            CLEAN ARCHITECTURE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
          <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
            SCALABLE APIS
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
          <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
            PERFORMANCE OPTIMIZED
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutContent;