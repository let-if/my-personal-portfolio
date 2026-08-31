// import { motion } from "framer-motion";

// import {
// FaGithub
// } from "react-icons/fa";


// function ProjectModal({project,onClose}){


// return(

// <div

// className="
// fixed
// inset-0
// z-50
// flex
// items-center
// justify-center
// bg-black/70
// px-6
// "

// >


// <motion.div

// initial={{
// scale:0.8,
// opacity:0
// }}

// animate={{
// scale:1,
// opacity:1
// }}

// className="
// max-w-2xl
// rounded-3xl
// border
// border-white/10
// bg-slate-900
// p-8
// "

// >


// <button

// onClick={onClose}

// className="
// float-right
// text-slate-400
// hover:text-white
// "

// >

// ✕


// </button>



// <h2

// className="
// text-3xl
// font-bold
// text-white
// "

// >

// {project.title}

// </h2>



// <p

// className="
// mt-5
// text-slate-400
// "

// >

// {project.description}

// </p>




// <h3

// className="
// mt-8
// font-bold
// text-white
// "

// >

// Main Features

// </h3>



// <ul

// className="
// mt-4
// space-y-3
// text-slate-300
// "

// >


// {
// project.details.map((item,index)=>(


// <li

// key={index}

// >

// ✓ {item}

// </li>


// ))
// }


// </ul>




// <div

// className="
// mt-8
// flex
// gap-4
// "

// >


// <a

// href={project.github}

// target="_blank"

// className="
// flex
// items-center
// gap-2
// rounded-xl
// bg-cyan-500
// px-5
// py-3
// text-white
// "

// >

// <FaGithub/>

// View Github

// </a>


// </div>



// </motion.div>


// </div>

// );

// }


// export default ProjectModal;
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheck } from "react-icons/fa";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Handle ESC key press to dismiss modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* 1. BACKDROP WITH SMOOTH FADE & BLUR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#030712]/80 backdrop-blur-md cursor-pointer"
        aria-hidden="true"
      />

      {/* 2. MAIN HUD MODAL DIALOG */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="
          group relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl
          border border-cyan-500/30 bg-[#080f1e]/95 p-6 shadow-[0_0_50px_rgba(0,240,255,0.15)]
          backdrop-blur-2xl sm:p-8
        "
      >
        {/* TACTICAL HUD CORNER BRACKETS */}
        <span className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-cyan-400/80" />
        <span className="pointer-events-none absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-cyan-400/80" />
        <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400/80" />
        <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400/80" />

        {/* TOP HUD HEADER & CLOSE TRIGGER */}
        <div className="flex items-center justify-between border-b border-cyan-500/15 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-pulse" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-400">
              SYS_SPEC // SYSTEM_OVERVIEW
            </span>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="
              flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800
              bg-slate-950/80 text-slate-400 transition-all duration-200
              hover:border-cyan-400/50 hover:bg-cyan-950/40 hover:text-cyan-300
              hover:shadow-[0_0_12px_rgba(0,240,255,0.2)] active:scale-95 cursor-pointer
            "
            aria-label="Close modal"
          >
            <FaTimes size={13} />
          </button>
        </div>

        {/* TITLE & DESCRIPTION */}
        <div className="mt-5">
          <h2 className="font-['Orbitron'] text-2xl font-black tracking-wide text-white sm:text-3xl">
            {project.title}
          </h2>

          <p className="mt-3 font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-300 sm:text-sm">
            {project.description}
          </p>
        </div>

        {/* MAIN FEATURES SPEC LIST */}
        {Array.isArray(project.details) && project.details.length > 0 && (
          <div className="mt-6 rounded-2xl border border-cyan-500/15 bg-slate-950/60 p-5">
            <h3 className="flex items-center gap-2 font-['Orbitron'] text-xs font-bold uppercase tracking-wider text-cyan-300">
              <span>//</span>
              <span>CORE SPECIFICATIONS &amp; FEATURES</span>
            </h3>

            <ul className="mt-3.5 space-y-2.5">
              {project.details.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-300 sm:text-sm"
                >
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-emerald-400/40 bg-emerald-950/50 text-[10px] text-emerald-300 shadow-[0_0_6px_#10b981]">
                    <FaCheck size={8} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* TACTICAL ACTION TRIGGERS */}
        <div className="mt-7 flex flex-wrap items-center gap-3.5 border-t border-cyan-500/15 pt-5">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="
                group/btn relative flex items-center gap-2 overflow-hidden rounded-xl
                border border-cyan-400/60 bg-gradient-to-r from-cyan-500 to-blue-600
                px-6 py-2.5 font-['Orbitron'] text-xs font-bold uppercase tracking-wider text-white
                shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300
                hover:scale-105 hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] active:scale-95
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
              <FaExternalLinkAlt className="text-[11px]" />
              <span>LIVE DEMO</span>
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-2 rounded-xl border border-cyan-500/30
                bg-slate-950/80 px-6 py-2.5 font-['Orbitron'] text-xs font-bold uppercase tracking-wider
                text-cyan-300 backdrop-blur-md transition-all duration-300
                hover:border-cyan-400 hover:bg-cyan-950/40 hover:text-white
                hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:scale-105 active:scale-95
              "
            >
              <FaGithub size={15} />
              <span>REPOSITORY</span>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectModal;