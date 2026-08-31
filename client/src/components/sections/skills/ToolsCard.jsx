// import { motion } from "framer-motion";


// function ToolsCard({tool}){


// return(

// <motion.div

// whileHover={{
// y:-8,
// scale:1.03
// }}

// className="
// rounded-2xl
// border
// border-white/10
// bg-white/5
// p-5
// backdrop-blur-xl
// transition
// "

// >


// <div
// className="
// flex
// items-center
// gap-4
// "
// >


// <div
// className="
// flex
// h-12
// w-12
// items-center
// justify-center
// rounded-xl
// bg-cyan-400/10
// text-2xl
// "
// >

// <div
// className="
// text-2xl
// text-cyan-400
// "
// >

// {tool.icon}

// </div>

// </div>



// <div>

// <h4
// className="
// font-semibold
// text-white
// "
// >

// {tool.name}

// </h4>


// <p
// className="
// mt-1
// text-xs
// text-slate-400
// "
// >

// {tool.description}

// </p>


// </div>


// </div>


// </motion.div>

// );

// }


// export default ToolsCard;
import React from "react";
import { motion } from "framer-motion";

function ToolsCard({ tool }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="
        group relative overflow-hidden rounded-2xl border border-cyan-500/20
        bg-[#080f1e]/85 p-5 shadow-[0_0_20px_rgba(0,240,255,0.05)]
        backdrop-blur-xl transition-all duration-300
        hover:border-cyan-400/50 hover:bg-[#0c162c] hover:shadow-[0_0_25px_rgba(0,240,255,0.18)]
        cursor-pointer
      "
    >
      {/* 1. TACTICAL HUD CORNER MARKS */}
      <span className="pointer-events-none absolute top-0 left-0 h-2.5 w-2.5 border-t border-l border-cyan-400/60 transition-colors group-hover:border-cyan-300" />
      <span className="pointer-events-none absolute top-0 right-0 h-2.5 w-2.5 border-t border-r border-cyan-400/60 transition-colors group-hover:border-cyan-300" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-cyan-400/60 transition-colors group-hover:border-cyan-300" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-cyan-400/60 transition-colors group-hover:border-cyan-300" />

      {/* 2. CARD CONTENT */}
      <div className="flex items-center gap-4">
        {/* Tool Icon Reactor */}
        <div className="
          flex h-12 w-12 shrink-0 items-center justify-center rounded-xl
          border border-cyan-400/30 bg-cyan-950/40 text-xl text-cyan-400
          shadow-[0_0_12px_rgba(0,240,255,0.2)] transition-transform duration-300
          group-hover:scale-110 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_18px_rgba(0,240,255,0.4)]
        ">
          {tool.icon}
        </div>

        {/* Tool Metadata */}
        <div className="min-w-0">
          <h4 className="font-['Orbitron'] text-sm font-bold tracking-wide text-white transition-colors group-hover:text-cyan-200 truncate">
            {tool.name}
          </h4>

          <p className="mt-1 font-['JetBrains_Mono'] text-[11px] leading-relaxed text-slate-400 group-hover:text-slate-300 line-clamp-2">
            {tool.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ToolsCard;