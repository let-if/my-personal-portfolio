// import { motion } from "framer-motion";

// import { stats } from "../../../data/stats";


// function StatsCards(){


// return(

// <div
// className="
// mt-20
// grid
// gap-6
// sm:grid-cols-2
// lg:grid-cols-4
// "
// >


// {
// stats.map((item,index)=>(


// <motion.div

// key={index}

// initial={{
// opacity:0,
// y:30
// }}

// whileInView={{
// opacity:1,
// y:0
// }}

// viewport={{
// once:true
// }}

// transition={{
// duration:0.5,
// delay:index*0.1
// }}

// className="
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-8
// text-center
// backdrop-blur-xl
// transition
// hover:-translate-y-2
// hover:border-cyan-400/40
// "

// >


// <h3
// className="
// text-4xl
// font-extrabold
// text-cyan-400
// "
// >

// {item.number}

// </h3>


// <p
// className="
// mt-3
// text-sm
// text-slate-400
// "
// >

// {item.label}

// </p>


// </motion.div>


// ))
// }


// </div>

// );

// }


// export default StatsCards;
import React from "react";
import { motion } from "framer-motion";
import { stats } from "../../../data/stats";

function StatsCards() {
  return (
    <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            group relative overflow-hidden rounded-3xl border border-cyan-500/20
            bg-[#080f1e]/85 p-8 text-center shadow-[0_0_30px_rgba(0,240,255,0.06)]
            backdrop-blur-2xl transition-all duration-500
            hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(0,240,255,0.2)]
          "
        >
          {/* 1. TACTICAL HUD CORNER MARKS */}
          <span className="absolute top-0 left-0 h-3.5 w-3.5 border-t-2 border-l-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />
          <span className="absolute top-0 right-0 h-3.5 w-3.5 border-t-2 border-r-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />
          <span className="absolute bottom-0 left-0 h-3.5 w-3.5 border-b-2 border-l-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />
          <span className="absolute bottom-0 right-0 h-3.5 w-3.5 border-b-2 border-r-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />

          {/* 2. SUB-TELEMETRY LOG INDEX */}
          <div className="mb-4 flex items-center justify-between border-b border-cyan-500/10 pb-2">
            <span className="font-mono text-[9px] font-bold tracking-widest text-cyan-400/60 uppercase">
              METRIC_0{index + 1}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse" />
          </div>

          {/* 3. GLOWING METRIC VALUE */}
          <h3 className="font-['Orbitron'] text-4xl font-black tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,240,255,0.35)] group-hover:text-cyan-300 transition-colors lg:text-5xl">
            {item.number}
          </h3>

          {/* 4. LABEL */}
          <p className="mt-3 font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-slate-400 group-hover:text-slate-200 transition-colors">
            {item.label}
          </p>

          {/* 5. BOTTOM AMBIENT GLOW ACCENT */}
          <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-24 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </motion.div>
      ))}
    </div>
  );
}

export default StatsCards;