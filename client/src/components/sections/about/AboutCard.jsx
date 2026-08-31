// import { motion } from "framer-motion";


// function AboutCard(){

// return(

// <motion.div

// initial={{
// opacity:0,
// x:50
// }}

// whileInView={{
// opacity:1,
// x:0
// }}

// viewport={{
// once:true
// }}

// transition={{
// duration:0.7
// }}

// className="
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-8
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

// What I Do

// </h3>



// <div
// className="
// mt-6
// space-y-5
// "
// >


// <div>

// <h4
// className="
// font-semibold
// text-cyan-400
// "
// >
// Full Stack Development
// </h4>

// <p
// className="
// text-sm
// text-slate-400
// "
// >
// Building complete web applications from frontend
// interfaces to backend APIs.
// </p>

// </div>




// <div>

// <h4
// className="
// font-semibold
// text-cyan-400
// "
// >
// Backend Engineering
// </h4>

// <p
// className="
// text-sm
// text-slate-400
// "
// >
// Creating secure APIs, databases, authentication,
// and scalable server systems.
// </p>

// </div>




// <div>

// <h4
// className="
// font-semibold
// text-cyan-400
// "
// >
// Problem Solving
// </h4>

// <p
// className="
// text-sm
// text-slate-400
// "
// >
// Turning real-world problems into reliable
// software solutions.
// </p>

// </div>


// </div>


// </motion.div>

// );

// }


// export default AboutCard;
import React from "react";
import { motion } from "framer-motion";

function AboutCard() {
  const capabilities = [
    {
      id: "SYS_01",
      title: "Full Stack Development",
      description:
        "Building complete web applications from frontend interfaces to backend APIs.",
      accent: "cyan",
    },
    {
      id: "SYS_02",
      title: "Backend Engineering",
      description:
        "Creating secure APIs, databases, authentication, and scalable server systems.",
      accent: "emerald",
    },
    {
      id: "SYS_03",
      title: "Problem Solving",
      description:
        "Turning real-world problems into reliable software solutions.",
      accent: "blue",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="
        group relative overflow-hidden rounded-3xl border border-cyan-500/20
        bg-[#080f1e]/85 p-8 shadow-[0_0_30px_rgba(0,240,255,0.08)] backdrop-blur-2xl
        transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(0,240,255,0.18)]
      "
    >
      {/* 1. TACTICAL HUD CORNER BRACKETS */}
      <span className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-cyan-400/70" />
      <span className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-cyan-400/70" />
      <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400/70" />
      <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400/70" />

      {/* 2. CARD HEADER */}
      <div className="flex items-center justify-between border-b border-cyan-500/15 pb-4">
        <div>
          <span className="font-mono text-[10px] font-bold tracking-widest text-cyan-400/70 uppercase">
            // CAPABILITIES_MATRIX
          </span>
          <h3 className="mt-1 font-['Orbitron'] text-2xl font-black tracking-wide text-white">
            What I Do
          </h3>
        </div>
        <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] animate-pulse" />
      </div>

      {/* 3. CAPABILITIES LIST WITH HUD CALLOUTS */}
      <div className="mt-6 space-y-4">
        {capabilities.map((item) => (
          <div
            key={item.id}
            className="
              relative rounded-2xl border border-white/5 bg-slate-950/60 p-4
              transition-all duration-300 hover:border-cyan-400/30 hover:bg-slate-900/80
              hover:translate-x-1.5
            "
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] font-bold tracking-wider text-cyan-400/50">
                {item.id}
              </span>
              <h4 className="font-['Orbitron'] text-sm font-bold tracking-wide text-cyan-300">
                {item.title}
              </h4>
            </div>

            <p className="mt-1.5 font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default AboutCard;