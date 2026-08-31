// import { motion } from "framer-motion";


// function DeveloperCard(){

// return(

// <motion.div

// whileHover={{
// y:-8
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


// <div
// className="
// mb-6
// flex
// h-16
// w-16
// items-center
// justify-center
// rounded-2xl
// bg-gradient-to-br
// from-cyan-400
// to-blue-600
// text-3xl
// "
// >

// 💻

// </div>



// <h3
// className="
// text-2xl
// font-bold
// text-white
// "
// >

// Software Engineer

// </h3>



// <p
// className="
// mt-4
// text-slate-400
// "
// >

// Focused on building modern full-stack
// applications with scalable backend systems
// and beautiful user interfaces.

// </p>



// <div
// className="
// mt-6
// space-y-3
// text-sm
// text-slate-300
// "
// >

// <p>
// ⚛️ React + Modern Frontend
// </p>

// <p>
// 🚀 Node.js Backend Development
// </p>

// <p>
// 🗄 Database Design & APIs
// </p>

// <p>
// 🔐 Secure Authentication Systems
// </p>


// </div>


// </motion.div>

// );

// }


// export default DeveloperCard;
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaCheckCircle } from "react-icons/fa";

function DeveloperCard() {
  const specializations = [
    { label: "React + Modern Frontend", tag: "UI/UX" },
    { label: "Node.js Backend Architecture", tag: "SERVER" },
    { label: "Database Design & REST APIs", tag: "STORAGE" },
    { label: "Secure Authentication & AuthZ", tag: "SECURITY" },
  ];

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="
        group relative overflow-hidden rounded-3xl border border-cyan-500/20
        bg-[#080f1e]/85 p-8 shadow-[0_0_30px_rgba(0,240,255,0.08)] backdrop-blur-2xl
        transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(0,240,255,0.2)]
      "
    >
      {/* 1. TACTICAL HUD CORNER BRACKETS */}
      <span className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-cyan-400/80" />
      <span className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-cyan-400/80" />
      <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400/80" />
      <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400/80" />

      {/* 2. CARD HEADER ICON WITH NEON GLOW */}
      <div className="flex items-center justify-between">
        <div
          className="
            flex h-16 w-16 items-center justify-center rounded-2xl
            border border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-blue-600/30
            text-2xl text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.3)]
            transition-transform duration-300 group-hover:scale-110
          "
        >
          <FaCode />
        </div>

        <span className="rounded border border-cyan-500/30 bg-cyan-950/60 px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest text-cyan-300">
          SPECIALIZATION
        </span>
      </div>

      {/* 3. TITLE & DESCRIPTION */}
      <h3 className="mt-6 font-['Orbitron'] text-2xl font-black tracking-wide text-white">
        Software Engineer
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        Focused on building modern full-stack applications with scalable backend systems and high-performance, responsive user interfaces.
      </p>

      {/* 4. TECHNICAL FOCUS LIST */}
      <div className="mt-6 space-y-2.5 border-t border-cyan-500/15 pt-5">
        {specializations.map((item, idx) => (
          <div
            key={idx}
            className="
              flex items-center justify-between rounded-xl border border-white/5
              bg-slate-950/60 px-3.5 py-2 transition-all duration-300
              group-hover:border-cyan-400/20 hover:!border-cyan-400/40 hover:!bg-slate-900/80
            "
          >
            <div className="flex items-center gap-2.5">
              <FaCheckCircle className="text-xs text-cyan-400" />
              <span className="font-['JetBrains_Mono'] text-xs font-semibold text-slate-200">
                {item.label}
              </span>
            </div>

            <span className="font-mono text-[9px] font-bold tracking-wider text-cyan-400/60">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default DeveloperCard;