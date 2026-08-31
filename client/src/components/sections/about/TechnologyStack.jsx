// import { motion } from "framer-motion";

// import { technologies } from "../../../data/technologies";


// function TechnologyStack(){


// return(

// <div className="mt-20">


// <h3
// className="
// mb-10
// text-center
// text-3xl
// font-bold
// text-white
// "
// >

// Technologies I Work With

// </h3>



// <div
// className="
// flex
// flex-wrap
// justify-center
// gap-4
// "
// >


// {
// technologies.map((tech,index)=>(


// <motion.div

// key={index}

// whileHover={{
// scale:1.08
// }}

// className="
// rounded-2xl
// border
// border-white/10
// bg-white/5
// px-6
// py-4
// backdrop-blur-xl
// "

// >


// <h4
// className="
// font-semibold
// text-white
// "
// >

// {tech.name}

// </h4>


// <p
// className="
// mt-1
// text-xs
// text-cyan-400
// "
// >

// {tech.category}

// </p>


// </motion.div>


// ))
// }


// </div>


// </div>

// );

// }


// export default TechnologyStack;
import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../../../data/technologies";

function TechnologyStack() {
  return (
    <div className="relative mt-24">
      {/* 1. SECTION TELEMETRY HEADER */}
      <div className="mb-12 text-center">
        <div className="mb-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400">
          <span className="text-cyan-500">//</span>
          <span>TECH_INVENTORY &amp; TOOLING</span>
        </div>

        <h3 className="font-['Orbitron'] text-3xl font-black tracking-tight text-white sm:text-4xl">
          Technologies I{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,240,255,0.3)]">
            Work With
          </span>
        </h3>
      </div>

      {/* 2. HUD TECH CHIP MATRIX */}
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.06, y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
              group relative overflow-hidden rounded-2xl border border-cyan-500/20
              bg-[#080f1e]/85 px-6 py-4 shadow-[0_0_20px_rgba(0,240,255,0.05)]
              backdrop-blur-xl transition-all duration-300
              hover:border-cyan-400/60 hover:bg-[#0c162c] hover:shadow-[0_0_25px_rgba(0,240,255,0.2)]
              cursor-pointer
            "
          >
            {/* Tactical HUD Corner Marks */}
            <span className="absolute top-0 left-0 h-2.5 w-2.5 border-t border-l border-cyan-400/60 transition-colors group-hover:border-cyan-300" />
            <span className="absolute top-0 right-0 h-2.5 w-2.5 border-t border-r border-cyan-400/60 transition-colors group-hover:border-cyan-300" />
            <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-cyan-400/60 transition-colors group-hover:border-cyan-300" />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-cyan-400/60 transition-colors group-hover:border-cyan-300" />

            <div className="flex items-center gap-3">
              {/* Pulsing Status Dot */}
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60 shadow-[0_0_5px_#00f0ff] transition-colors group-hover:bg-cyan-300 group-hover:shadow-[0_0_8px_#00f0ff]" />

              <div>
                <h4 className="font-['Orbitron'] text-sm font-bold tracking-wide text-white transition-colors group-hover:text-cyan-200">
                  {tech.name}
                </h4>

                <p className="mt-0.5 font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-wider text-cyan-400/70 group-hover:text-cyan-300">
                  {tech.category}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TechnologyStack;