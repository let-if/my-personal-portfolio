// import { motion } from "framer-motion";
// import { skillIcons } from "../../../data/skillIcons";

// function SkillCard({category}){


// return(

// <motion.div


// initial={{
// opacity:0,
// y:40
// }}

// whileInView={{
// opacity:1,
// y:0
// }}

// viewport={{
// once:true
// }}

// transition={{
// duration:0.6
// }}

// whileHover={{
// y:-10
// }}

// className="
// group
// relative
// overflow-hidden
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-8
// backdrop-blur-xl
// transition
// duration-300
// hover:border-cyan-400/40
// "

// >
//     <div
// className="
// absolute
// inset-0
// -z-10
// bg-gradient-to-br
// from-cyan-500/10
// to-blue-500/10
// opacity-0
// transition
// group-hover:opacity-100
// "
// />


// {/* Category Header */}

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
// h-14
// w-14
// items-center
// justify-center
// rounded-2xl
// bg-cyan-400/10
// text-3xl
// "
// >

// {category.icon}

// </div>



// <h3
// className="
// text-xl
// font-bold
// text-white
// "
// >

// {category.title}

// </h3>


// </div>





// {/* Skills */}

// <div
// className="
// mt-8
// space-y-6
// "
// >


// {

// category.skills.map((skill,index)=>(


// <div
// key={index}
// >


// <div
// className="
// mb-2
// flex
// justify-between
// "
// >


// <div
// className="
// flex
// items-center
// gap-3
// "
// >

// <span
// className="
// text-xl
// text-cyan-400
// "
// >

// {
// skillIcons[skill.name]
// }

// </span>


// <span
// className="
// font-medium
// text-slate-300
// "
// >

// {skill.name}

// </span>


// </div>



// <span
// className="
// text-sm
// text-cyan-400
// "
// >

// {skill.level}%

// </span>


// </div>




// {/* Progress Bar */}

// <div
// className="
// h-2
// overflow-hidden
// rounded-full
// bg-slate-800
// "
// >


// <motion.div

// initial={{
// width:0
// }}

// whileInView={{
// width:`${skill.level}%`
// }}

// viewport={{
// once:true
// }}

// transition={{
// duration:1,
// delay:index*0.1
// }}

// className="
// h-full
// rounded-full
// bg-gradient-to-r
// from-cyan-400
// to-blue-500
// "

// />


// </div>



// </div>


// ))

// }


// </div>


// </motion.div>

// );

// }


// export default SkillCard;
import React from "react";
import { motion } from "framer-motion";
import { skillIcons } from "../../../data/skillIcons";

function SkillCard({ category }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="
        group relative overflow-hidden rounded-3xl border border-cyan-500/20
        bg-[#080f1e]/85 p-8 shadow-[0_0_30px_rgba(0,240,255,0.06)] backdrop-blur-2xl
        transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(0,240,255,0.18)]
      "
    >
      {/* 1. TACTICAL HUD CORNER BRACKETS */}
      <span className="pointer-events-none absolute top-0 left-0 h-3.5 w-3.5 border-t-2 border-l-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
      <span className="pointer-events-none absolute top-0 right-0 h-3.5 w-3.5 border-t-2 border-r-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-3.5 w-3.5 border-b-2 border-l-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-3.5 w-3.5 border-b-2 border-r-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />

      {/* 2. AMBIENT GLOW BACKDROP */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* 3. CATEGORY HEADER */}
      <div className="flex items-center justify-between border-b border-cyan-500/15 pb-5">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-950/50 text-2xl text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-transform duration-300 group-hover:scale-110">
            {category.icon}
          </div>

          <div>
            <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-cyan-400/70">
              MODULE // COMPETENCY
            </span>
            <h3 className="font-['Orbitron'] text-xl font-bold tracking-wide text-white transition-colors group-hover:text-cyan-200">
              {category.title}
            </h3>
          </div>
        </div>

        <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-pulse" />
      </div>

      {/* 4. SKILL METRICS & TELEMETRY PROGRESS BARS */}
      <div className="mt-7 space-y-5">
        {category.skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-lg text-cyan-400 transition-transform duration-200 group-hover:scale-110">
                  {skillIcons[skill.name]}
                </span>

                <span className="font-['JetBrains_Mono'] text-xs font-semibold tracking-wide text-slate-200">
                  {skill.name}
                </span>
              </div>

              <span className="font-['Orbitron'] text-xs font-bold tracking-wider text-cyan-300 drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]">
                {skill.level}%
              </span>
            </div>

            {/* Tactical HUD Track */}
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-950/80 p-[1px] border border-cyan-500/20">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400 shadow-[0_0_12px_rgba(0,240,255,0.6)]"
              >
                {/* Micro laser lead dot */}
                <span className="absolute right-0 top-0 h-full w-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCard;