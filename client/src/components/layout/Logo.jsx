// import { motion } from "framer-motion";

// function Logo() {
//   return (
//     <motion.a
//       href="/"
//       whileHover={{ scale: 1.08 }}
//       whileTap={{ scale: 0.95 }}
//       className="flex items-center gap-3"
//     >
//       <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-lg font-extrabold text-white shadow-lg shadow-cyan-500/30">
//         L
//       </div>

//       <div>
//         <h2 className="text-lg font-bold tracking-wide text-white">
//           Letfaw
//         </h2>

//         <p className="text-xs text-slate-400">
//           Full Stack Developer
//         </p>
//       </div>
//     </motion.a>
//   );
// }

// export default Logo;
import React from "react";
import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.a
      href="/"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="group flex items-center gap-3.5 cursor-pointer selection:bg-cyan-500 selection:text-black"
    >
      {/* 1. HUD EMBLEM REACTOR */}
      <div className="relative flex h-11 w-11 items-center justify-center">
        {/* Tactical Corner Brackets */}
        <span className="pointer-events-none absolute -top-0.5 -left-0.5 h-2 w-2 border-t border-l border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
        <span className="pointer-events-none absolute -top-0.5 -right-0.5 h-2 w-2 border-t border-r border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
        <span className="pointer-events-none absolute -bottom-0.5 -left-0.5 h-2 w-2 border-b border-l border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
        <span className="pointer-events-none absolute -bottom-0.5 -right-0.5 h-2 w-2 border-b border-r border-cyan-400/80 transition-colors group-hover:border-cyan-300" />

        {/* Reactor Core Badge */}
        <div className="
          relative flex h-full w-full items-center justify-center overflow-hidden
          rounded-xl border border-cyan-400/40 bg-gradient-to-br from-cyan-950/90 via-slate-900 to-blue-950/90
          font-['Orbitron'] text-base font-black text-cyan-300
          shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all duration-300
          group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]
        ">
          {/* Laser Sweep Shimmer */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          
          <span className="drop-shadow-[0_0_8px_#00f0ff]">L</span>
        </div>
      </div>

      {/* 2. IDENTITY & TELEMETRY LABELS */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <h2 className="font-['Orbitron'] text-base font-black tracking-wider text-white transition-colors group-hover:text-cyan-200 sm:text-lg">
            LETFAW<span className="text-cyan-400">.</span>
          </h2>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981] animate-pulse" />
        </div>

        <p className="font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-widest text-slate-400 transition-colors group-hover:text-cyan-400/80">
          FULL_STACK // DEV
        </p>
      </div>
    </motion.a>
  );
}

export default Logo;