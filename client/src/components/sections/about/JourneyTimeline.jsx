// import { motion } from "framer-motion";

// import { journey } from "../../../data/journey";


// function JourneyTimeline(){


// return(

// <div className="mt-20">


// <h3
// className="
// mb-12
// text-center
// text-3xl
// font-bold
// text-white
// "
// >

// My Journey

// </h3>



// <div
// className="
// relative
// mx-auto
// max-w-4xl
// "
// >


// {/* Line */}

// <div
// className="
// absolute
// left-5
// top-0
// h-full
// w-[2px]
// bg-gradient-to-b
// from-cyan-400
// to-blue-600
// md:left-1/2
// "
// />



// {
// journey.map((item,index)=>(


// <motion.div

// key={index}

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
// duration:0.6,
// delay:index*0.1
// }}

// className="
// relative
// mb-12
// pl-14
// md:flex
// md:justify-between
// md:pl-0
// "

// >


// {/* Dot */}

// <div
// className="
// absolute
// left-[10px]
// top-2
// h-4
// w-4
// rounded-full
// bg-cyan-400
// shadow-lg
// shadow-cyan-400/50
// md:left-1/2
// md:-translate-x-1/2
// "
// />




// <div
// className="
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-6
// backdrop-blur-xl
// md:w-[45%]
// "
// >


// <span
// className="
// text-sm
// font-semibold
// text-cyan-400
// "
// >

// {item.year}

// </span>


// <h4
// className="
// mt-2
// text-xl
// font-bold
// text-white
// "
// >

// {item.title}

// </h4>


// <p
// className="
// mt-3
// text-sm
// leading-relaxed
// text-slate-400
// "
// >

// {item.description}

// </p>


// </div>



// </motion.div>


// ))
// }


// </div>


// </div>

// );

// }


// export default JourneyTimeline;
import React from "react";
import { motion } from "framer-motion";
import { journey } from "../../../data/journey";

function JourneyTimeline() {
  return (
    <div className="relative mt-24">
      {/* 1. SECTION TELEMETRY HEADER */}
      <div className="mb-16 text-center">
        <div className="mb-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400">
          <span className="text-cyan-500">//</span>
          <span>CHRONOLOGICAL_MILESTONES</span>
        </div>

        <h3 className="font-['Orbitron'] text-3xl font-black tracking-tight text-white sm:text-4xl">
          Career &amp; Engineering{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,240,255,0.3)]">
            Journey
          </span>
        </h3>
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* 2. CENTRAL NEON CIRCUIT BUS LINE */}
        <div className="
          absolute left-6 top-0 h-full w-[2px]
          bg-gradient-to-b from-cyan-400 via-blue-500 to-emerald-400
          shadow-[0_0_12px_rgba(0,240,255,0.6)]
          md:left-1/2 md:-translate-x-1/2
        " />

        {/* 3. TIMELINE EVENTS */}
        {journey.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`
                relative mb-12 pl-16 md:flex md:items-center md:pl-0
                ${isEven ? "md:flex-row-reverse" : "md:flex-row"}
                md:justify-between
              `}
            >
              {/* CENTRAL REACTOR PULSE NODE */}
              <div className="
                absolute left-[15px] top-6 z-20 flex h-6 w-6 -translate-x-1/2 items-center justify-center
                md:left-1/2
              ">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative flex h-3.5 w-3.5 rounded-full border-2 border-[#030712] bg-cyan-400 shadow-[0_0_10px_#00f0ff]" />
              </div>

              {/* HUD CARD */}
              <div
                className={`
                  group relative overflow-hidden rounded-3xl border border-cyan-500/20
                  bg-[#080f1e]/85 p-7 shadow-[0_0_30px_rgba(0,240,255,0.06)] backdrop-blur-2xl
                  transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(0,240,255,0.18)]
                  md:w-[45%]
                `}
              >
                {/* Tactical HUD Corner Marks */}
                <span className="absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/70" />
                <span className="absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/70" />
                <span className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/70" />
                <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/70" />

                {/* Top Badge Matrix */}
                <div className="flex items-center justify-between border-b border-cyan-500/15 pb-3">
                  <span className="rounded-md border border-cyan-400/30 bg-cyan-950/60 px-2.5 py-1 font-mono text-xs font-bold tracking-wider text-cyan-300 shadow-inner">
                    {item.year}
                  </span>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-cyan-400/50">
                    LOG_0{index + 1}
                  </span>
                </div>

                {/* Event Title */}
                <h4 className="mt-4 font-['Orbitron'] text-xl font-bold tracking-wide text-white transition-colors group-hover:text-cyan-300">
                  {item.title}
                </h4>

                {/* Event Description */}
                <p className="mt-3 font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-400 sm:text-sm">
                  {item.description}
                </p>
              </div>

              {/* SPACER FOR TWO-COLUMN SYMMETRY ON DESKTOP */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default JourneyTimeline;