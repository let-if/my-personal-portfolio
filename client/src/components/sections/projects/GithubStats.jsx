// function GithubStats(){

// return(

// <div

// className="
// mt-20
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-8
// text-center
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

// More Projects Available On GitHub

// </h3>



// <p

// className="
// mt-4
// text-slate-400
// "

// >

// Explore my repositories, experiments,
// and open-source contributions.

// </p>


// <a

// href="https://github.com/let-if"

// target="_blank"

// className="
// mt-6
// inline-block
// rounded-xl
// bg-cyan-500
// px-6
// py-3
// font-semibold
// text-white
// "

// >

// Visit GitHub

// </a>


// </div>


// );

// }


// export default GithubStats;
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function GithubStats() {
  return (
    <div
      className="
        group relative mt-20 overflow-hidden rounded-3xl border border-cyan-500/25
        bg-[#080f1e]/85 p-8 text-center shadow-[0_0_35px_rgba(0,240,255,0.07)]
        backdrop-blur-2xl transition-all duration-500
        hover:border-cyan-400/50 hover:shadow-[0_0_45px_rgba(0,240,255,0.18)]
        md:p-12
      "
    >
      {/* 1. TACTICAL HUD CORNER BRACKETS */}
      <span className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-cyan-400/80" />
      <span className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-cyan-400/80" />
      <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400/80" />
      <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400/80" />

      {/* 2. AMBIENT BACKGROUND GLOW NODE */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

      {/* 3. ICON REACTOR & TELEMETRY BADGE */}
      <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/40 bg-gradient-to-br from-cyan-950/80 via-slate-900 to-blue-950/80 text-3xl text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-transform duration-300 group-hover:scale-110">
        <FaGithub />
      </div>

      <div className="mb-2 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-400/80">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981] animate-pulse" />
        <span>REPOSITORIES // ACTIVE STREAM</span>
      </div>

      {/* 4. TITLE */}
      <h3 className="relative font-['Orbitron'] text-2xl font-black tracking-wide text-white sm:text-3xl">
        More Projects Available On{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,240,255,0.3)]">
          GitHub
        </span>
      </h3>

      {/* 5. DESCRIPTION */}
      <p className="relative mx-auto mt-4 max-w-xl font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-300 sm:text-sm">
        Explore my open-source repositories, system architecture experiments,
        and continuous code contributions.
      </p>

      {/* 6. TACTICAL CTA TRIGGER */}
      <a
        href="https://github.com/let-if"
        target="_blank"
        rel="noreferrer"
        className="
          group/btn relative mt-8 inline-flex items-center gap-2.5 overflow-hidden rounded-xl
          border border-cyan-400/60 bg-gradient-to-r from-cyan-500 to-blue-600
          px-8 py-3.5 font-['Orbitron'] text-xs font-bold uppercase tracking-wider text-white
          shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300
          hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.55)] active:scale-95
        "
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
        <FaGithub size={16} />
        <span>VISIT GITHUB</span>
        <FaExternalLinkAlt className="text-[10px]" />
      </a>
    </div>
  );
}

export default GithubStats;