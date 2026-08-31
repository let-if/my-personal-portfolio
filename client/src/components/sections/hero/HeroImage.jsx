// import { motion } from "framer-motion";

// import profile from "../../../assets/images/profile.png";


// function HeroImage() {

//   return (

//     <div className="relative flex justify-center">


//       {/* Background Glow */}
//       <div
//         className="
//         absolute
//         -inset-10
//         rounded-full
//         bg-cyan-500/20
//         blur-3xl
//         "
//       />



//       {/* Image Container */}
//       <motion.div

//         initial={{
//           opacity:0,
//           scale:0.8
//         }}

//         animate={{
//           opacity:1,
//           scale:1
//         }}

//         transition={{
//           duration:0.8
//         }}

//         className="
//         relative
//         h-[320px]
//         w-[320px]
//         sm:h-[380px]
//         sm:w-[380px]
//         lg:h-[430px]
//         lg:w-[430px]
//         "

//       >



//         {/* Animated Border */}
//         <div
//           className="
//           absolute
//           inset-0
//           rounded-full
//           bg-gradient-to-r
//           from-cyan-400
//           via-blue-500
//           to-indigo-600
//           animate-spin-slow
//           "
//         />



//         {/* Inner Frame */}
//         <div
//           className="
//           absolute
//           inset-[6px]
//           overflow-hidden
//           rounded-full
//           bg-slate-950
//           "
//         >


//           <img

//             src={profile}

//             alt="Abdulletif Ylkal Abate"

//             className="
//             h-full
//             w-full
//             object-cover
//             "
//           />


//         </div>


//       </motion.div>





//       {/* React Card */}
//       <motion.div

//         animate={{
//           y:[0,-15,0]
//         }}

//         transition={{
//           duration:3,
//           repeat:Infinity
//         }}

//         className="
//         absolute
//         left-0
//         top-20
//         rounded-2xl
//         border
//         border-white/10
//         bg-slate-900/80
//         px-5
//         py-3
//         text-sm
//         font-semibold
//         text-cyan-400
//         backdrop-blur-xl
//         "

//       >

//         React.js

//       </motion.div>






//       {/* Node Card */}
//       <motion.div

//         animate={{
//           y:[0,15,0]
//         }}

//         transition={{
//           duration:3,
//           repeat:Infinity
//         }}

//         className="
//         absolute
//         bottom-20
//         right-0
//         rounded-2xl
//         border
//         border-white/10
//         bg-slate-900/80
//         px-5
//         py-3
//         text-sm
//         font-semibold
//         text-green-400
//         backdrop-blur-xl
//         "

//       >

//         Node.js

//       </motion.div>




//       {/* PostgreSQL Card */}
//       <motion.div

//         animate={{
//           y:[0,-10,0]
//         }}

//         transition={{
//           duration:2.5,
//           repeat:Infinity
//         }}

//         className="
//         absolute
//         right-10
//         top-0
//         rounded-2xl
//         border
//         border-white/10
//         bg-slate-900/80
//         px-5
//         py-3
//         text-sm
//         font-semibold
//         text-blue-400
//         backdrop-blur-xl
//         "

//       >

//         PostgreSQL

//       </motion.div>



//     </div>

//   );

// }


// export default HeroImage;
import React from "react";
import { motion } from "framer-motion";
import profile from "../../../assets/images/profile.png";

function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">
      {/* 1. DUAL-LAYER ATMOSPHERIC CYBER GLOW */}
      <div className="absolute -inset-14 rounded-full bg-cyan-500/20 blur-[90px] pointer-events-none" />
      <div className="absolute -inset-6 rounded-full bg-emerald-500/15 blur-[60px] pointer-events-none" />

      {/* 2. OUTER ROTATING TACTICAL HUD RETICLE */}
      <div className="absolute h-[360px] w-[360px] sm:h-[430px] sm:w-[430px] lg:h-[490px] lg:w-[490px] pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          className="h-full w-full animate-spin-slow opacity-40"
        >
          <circle
            cx="100"
            cy="100"
            r="96"
            fill="none"
            stroke="#00f0ff"
            strokeWidth="0.8"
            strokeDasharray="4 6"
          />
          <circle
            cx="100"
            cy="100"
            r="88"
            fill="none"
            stroke="#10b981"
            strokeWidth="0.5"
            strokeDasharray="12 18"
          />
          {/* Tactical Crosshair Marks */}
          <line x1="100" y1="0" x2="100" y2="8" stroke="#00f0ff" strokeWidth="1.5" />
          <line x1="100" y1="192" x2="100" y2="200" stroke="#00f0ff" strokeWidth="1.5" />
          <line x1="0" y1="100" x2="8" y2="100" stroke="#00f0ff" strokeWidth="1.5" />
          <line x1="192" y1="100" x2="200" y2="100" stroke="#00f0ff" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 3. MAIN AVATAR CONTAINER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="
          relative h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]
          rounded-full p-1.5 shadow-[0_0_50px_rgba(0,240,255,0.25)]
        "
      >
        {/* Animated Neon Gradient Border Ring */}
        <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-tr from-cyan-400 via-emerald-400 to-blue-600 p-[2px]" />

        {/* Inner Obsidian Frame & Image Container */}
        <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-cyan-500/30 bg-[#030712]">
          <img
            src={profile}
            alt="Abdulletif Ylkal Abate"
            className="h-full w-full object-cover grayscale-[15%] transition-all duration-500 hover:grayscale-0 hover:scale-105"
          />

          {/* Holographic Gradient Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030712]/70 via-transparent to-cyan-500/10" />
        </div>
      </motion.div>

      {/* 4. FLOATING TECH NODE 1: REACT.JS */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute -left-3 top-16 sm:-left-8 sm:top-24 rounded-2xl border border-cyan-400/40
          bg-[#080f1e]/90 px-4 py-2.5 shadow-[0_0_20px_rgba(0,240,255,0.2)] backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-pulse" />
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-cyan-400/70">FRONTEND_CORE</p>
            <p className="font-['Orbitron'] text-xs font-bold text-white">React.js</p>
          </div>
        </div>
      </motion.div>

      {/* 5. FLOATING TECH NODE 2: NODE.JS */}
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute -right-3 bottom-16 sm:-right-8 sm:bottom-20 rounded-2xl border border-emerald-400/40
          bg-[#080f1e]/90 px-4 py-2.5 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981] animate-pulse" />
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-emerald-400/70">BACKEND_RUNTIME</p>
            <p className="font-['Orbitron'] text-xs font-bold text-white">Node.js</p>
          </div>
        </div>
      </motion.div>

      {/* 6. FLOATING TECH NODE 3: POSTGRESQL / DATABASE */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute right-4 -top-2 sm:right-10 sm:-top-4 rounded-2xl border border-sky-400/40
          bg-[#080f1e]/90 px-4 py-2.5 shadow-[0_0_20px_rgba(56,189,248,0.2)] backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-pulse" />
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-sky-400/70">DB_ENGINE</p>
            <p className="font-['Orbitron'] text-xs font-bold text-white">PostgreSQL</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default HeroImage;