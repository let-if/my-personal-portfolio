// import {motion}
// from "framer-motion";


// function GithubStats(){



// const stats=[


// {
// title:"Repositories",
// value:"15+"
// },


// {
// title:"Projects",
// value:"9+"
// },


// {
// title:"Experience",
// value:"Software Engineer"
// }


// ];



// return(


// <div

// className="
// mt-10
// grid
// gap-6
// sm:grid-cols-3
// "

// >



// {

// stats.map((item)=>(


// <motion.div


// key={item.title}


// whileHover={{

// y:-8

// }}



// className="
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-6
// text-center
// backdrop-blur-xl
// "

// >


// <h3

// className="
// text-3xl
// font-bold
// text-cyan-400
// "

// >

// {item.value}

// </h3>



// <p

// className="
// mt-2
// text-slate-400
// "

// >

// {item.title}

// </p>


// </motion.div>



// ))


// }



// </div>


// );


// }


// export default GithubStats;
import React from "react";
import { motion } from "framer-motion";

function GithubStats() {
  const stats = [
    {
      title: "Repositories",
      value: "15+",
      id: "REG_01",
    },
    {
      title: "Projects",
      value: "9+",
      id: "REG_02",
    },
    {
      title: "Experience",
      value: "Software Engineer",
      id: "REG_03",
    },
  ];

  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-3">
      {stats.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{ y: -8 }}
          className="
            group relative overflow-hidden rounded-3xl border border-cyan-500/20
            bg-[#080f1e]/85 p-6 text-center shadow-[0_0_30px_rgba(0,240,255,0.06)]
            backdrop-blur-2xl transition-all duration-500
            hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(0,240,255,0.18)]
          "
        >
          {/* 1. TACTICAL HUD CORNER BRACKETS */}
          <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />
          <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />
          <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />
          <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />

          {/* 2. SUB-TELEMETRY HEADER */}
          <div className="mb-3 flex items-center justify-between border-b border-cyan-500/10 pb-2">
            <span className="font-mono text-[9px] font-bold tracking-widest text-cyan-400/60 uppercase">
              {item.id}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse" />
          </div>

          {/* 3. METRIC VALUE */}
          <h3 className="font-['Orbitron'] text-2xl font-black tracking-tight text-white drop-shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-colors group-hover:text-cyan-200 sm:text-3xl">
            {item.value}
          </h3>

          {/* 4. METRIC TITLE */}
          <p className="mt-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-slate-400 transition-colors group-hover:text-slate-200">
            {item.title}
          </p>

          {/* 5. BOTTOM AMBIENT GLOW ACCENT */}
          <div className="pointer-events-none absolute -bottom-8 left-1/2 h-14 w-20 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </motion.div>
      ))}
    </div>
  );
}

export default GithubStats;