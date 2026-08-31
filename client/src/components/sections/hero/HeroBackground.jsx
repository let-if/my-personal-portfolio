// import { motion } from "framer-motion";
// import { particles } from "../../../data/particles";

// function HeroBackground() {

//   return (

//     <div className="
// pointer-events-none
// absolute
// inset-0
// -z-10
// overflow-hidden
// will-change-transform
// ">


//       {/* Grid */}
//       <div
//         className="
//         absolute
//         inset-0
//         bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
//         bg-[size:70px_70px]
//         "
//       />



//       {/* Cyan Light */}
//       <motion.div

//         animate={{
//           x:[0,100,0],
//           y:[0,-80,0]
//         }}

//         transition={{
//           duration:12,
//           repeat:Infinity,
//           ease:"easeInOut"
//         }}

//         className="
//         absolute
//         left-1/4
//         top-1/4
//         h-[350px]
//         w-[350px]
//         rounded-full
//         bg-cyan-500/20
//         blur-[120px]
//         "

//       />





//       {/* Blue Light */}
//       <motion.div

//         animate={{
//           x:[0,-120,0],
//           y:[0,100,0]
//         }}

//         transition={{
//           duration:14,
//           repeat:Infinity,
//           ease:"easeInOut"
//         }}

//         className="
//         absolute
//         right-1/4
//         top-1/3
//         h-[400px]
//         w-[400px]
//         rounded-full
//         bg-blue-500/20
//         blur-[140px]
//         "

//       />





//       {/* Floating Dots */}

//       {/* {
//         Array.from({length:20}).map((_,index)=>(

//           <motion.span

//           key={index}

//           animate={{
//             y:[0,-30,0],
//             opacity:[0.3,1,0.3]
//           }}

//           transition={{
//             duration:3+index%5,
//             repeat:Infinity,
//             delay:index*0.2
//           }}

//           className="
//           absolute
//           h-1
//           w-1
//           rounded-full
//           bg-cyan-400
//           "

//           style={{

//             left:`${Math.random()*100}%`,

//             top:`${Math.random()*100}%`

//           }}

//           />

//         ))
//       } */}
// {
// particles.map((particle,index)=>(

// <motion.span

// key={index}

// animate={{
//  y:[0,-30,0],
//  opacity:[0.3,1,0.3]
// }}

// transition={{
//  duration:3 + (index % 4),
//  repeat:Infinity,
//  delay:index * 0.2
// }}

// className="
// absolute
// h-1
// w-1
// rounded-full
// bg-cyan-400
// "

// style={{
//  left:particle.left,
//  top:particle.top
// }}

// />

// ))
// }

//     </div>

//   );

// }


// export default HeroBackground;
import React from "react";
import { motion } from "framer-motion";
import { particles } from "../../../data/particles";

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#030712] select-none will-change-transform">
      {/* 1. RADIAL OBSIDIAN VIGNETTE */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030712_85%)]" />

      {/* 2. DUAL-AXIS HUD MATRIX GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,240,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* 3. MICRO-SCANLINE CRT OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.4)_51%)] bg-[size:100%_4px] opacity-25" />

      {/* 4. PRIMARY ORBITING ELECTRIC CYAN PLASMA */}
      <motion.div
        animate={{
          x: [0, 90, -40, 0],
          y: [0, -70, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/4 top-1/4 h-[380px] w-[380px] rounded-full bg-cyan-500/20 blur-[130px]"
      />

      {/* 5. SECONDARY ORBITING DEEP SAPPHIRE PLASMA */}
      <motion.div
        animate={{
          x: [0, -110, 50, 0],
          y: [0, 90, -50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-1/4 top-1/3 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[150px]"
      />

      {/* 6. TERTIARY EMERALD ACCENT NODE */}
      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, 50, -30, 0],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 bottom-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[120px]"
      />

      {/* 7. QUANTUM MATRIX PARTICLES */}
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          animate={{
            y: [0, -35, 0],
            opacity: [0.2, 0.9, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + (index % 4),
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
          className={`
            absolute rounded-full
            ${
              index % 3 === 0
                ? "h-1.5 w-1.5 bg-cyan-400 shadow-[0_0_8px_#00f0ff]"
                : index % 3 === 1
                ? "h-1 w-1 bg-emerald-400 shadow-[0_0_6px_#10b981]"
                : "h-1 w-1 bg-sky-300 shadow-[0_0_5px_#38bdf8]"
            }
          `}
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </div>
  );
}

export default HeroBackground;