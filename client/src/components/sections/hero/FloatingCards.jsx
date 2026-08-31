// function FloatingCards(){

// return(

// <div>

// <div
// className="
// absolute
// right-0
// top-10
// rounded-xl
// border
// border-white/10
// bg-slate-900/80
// px-5
// py-3
// text-sm
// text-cyan-400
// backdrop-blur
// "
// >
// React.js
// </div>


// <div
// className="
// absolute
// bottom-10
// left-0
// rounded-xl
// border
// border-white/10
// bg-slate-900/80
// px-5
// py-3
// text-sm
// text-blue-400
// backdrop-blur
// "
// >
// Node.js
// </div>


// </div>

// );

// }


// export default FloatingCards;
import React from "react";
import { motion } from "framer-motion";

function FloatingCards() {
  return (
    <div className="pointer-events-none absolute inset-0 select-none">
      {/* 1. TOP-RIGHT FLOATING HUD NODE (REACT.JS) */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute right-0 top-10 flex items-center gap-3 rounded-2xl
          border border-cyan-400/40 bg-[#080f1e]/85 px-5 py-3
          shadow-[0_0_20px_rgba(0,240,255,0.18)] backdrop-blur-xl
        "
      >
        {/* Pulsing Cyan Micro-Orb */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
        </span>

        <div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-cyan-400/70">
            UI_ENGINE
          </p>
          <p className="font-['Orbitron'] text-xs font-bold tracking-wider text-white">
            React.js
          </p>
        </div>
      </motion.div>

      {/* 2. BOTTOM-LEFT FLOATING HUD NODE (NODE.JS) */}
      <motion.div
        animate={{
          y: [0, 12, 0],
          rotate: [0, -1, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="
          absolute bottom-10 left-0 flex items-center gap-3 rounded-2xl
          border border-emerald-400/40 bg-[#080f1e]/85 px-5 py-3
          shadow-[0_0_20px_rgba(16,185,129,0.18)] backdrop-blur-xl
        "
      >
        {/* Pulsing Emerald Micro-Orb */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
        </span>

        <div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-emerald-400/70">
            SRV_RUNTIME
          </p>
          <p className="font-['Orbitron'] text-xs font-bold tracking-wider text-white">
            Node.js
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default FloatingCards;