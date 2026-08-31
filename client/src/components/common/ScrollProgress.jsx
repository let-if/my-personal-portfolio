// import { motion, useScroll } from "framer-motion";

// function ScrollProgress() {
//   const { scrollYProgress } = useScroll();

//   return (
//     <motion.div
//       style={{
//         scaleX: scrollYProgress,
//       }}
//       className="
//         fixed
//         left-0
//         top-0
//         z-[9999]
//         h-1
//         w-full
//         origin-left
//         bg-gradient-to-r
//         from-cyan-400
//         to-blue-600
//       "
//     />
//   );
// }

// export default ScrollProgress;
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Smooth physics spring to eliminate hitching/stutter during scrolling
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed left-0 top-0 z-[9999] h-[2.5px] w-full pointer-events-none bg-slate-950/40 backdrop-blur-[1px]">
      {/* 1. MAIN HUD LASER TRACK */}
      <motion.div
        style={{ scaleX }}
        className="
          relative h-full w-full origin-left
          bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400
          shadow-[0_0_12px_rgba(0,240,255,0.8),0_0_24px_rgba(0,240,255,0.4)]
        "
      >
        {/* 2. LEADING LASER BEAM HEAD */}
        <div className="absolute right-0 top-1/2 h-2.5 w-8 -translate-y-1/2 translate-x-1 rounded-full bg-cyan-300 blur-[2px] opacity-90" />
        <div className="absolute right-0 top-1/2 h-1.5 w-3 -translate-y-1/2 translate-x-0.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
      </motion.div>
    </div>
  );
}

export default ScrollProgress;