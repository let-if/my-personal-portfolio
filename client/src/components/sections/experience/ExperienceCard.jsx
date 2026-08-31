// import { motion } from "framer-motion";
// import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

// function ExperienceCard({ experience, index }) {
//   const isLeft = index % 2 === 0;

//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         x: isLeft ? -50 : 50,
//       }}
//       whileInView={{
//         opacity: 1,
//         x: 0,
//       }}
//       transition={{
//         duration: 0.6,
//       }}
//       viewport={{ once: true }}
//       className="relative flex justify-center"
//     >
//       {/* Timeline Dot */}
//       <div
//         className="
//           absolute
//           left-4
//           top-10
//           h-5
//           w-5
//           rounded-full
//           bg-cyan-400
//           shadow-[0_0_20px_rgba(34,211,238,0.8)]
//           md:left-1/2
//           md:-translate-x-1/2
//           z-10
//         "
//       />

//       <div
//         className={`
//           w-full
//           md:w-[45%]
//           ml-12
//           md:ml-0
//           ${
//             isLeft
//               ? "md:mr-auto md:pr-12"
//               : "md:ml-auto md:pl-12"
//           }
//         `}
//       >
//         <div
//           className="
//             rounded-3xl
//             border
//             border-white/10
//             bg-white/5
//             backdrop-blur-xl
//             p-8
//             transition
//             duration-300
//             hover:border-cyan-400/40
//             hover:-translate-y-2
//           "
//         >
//           {/* Badge */}
//           <span
//             className="
//               inline-flex
//               rounded-full
//               bg-cyan-500/10
//               px-4
//               py-1
//               text-xs
//               font-semibold
//               uppercase
//               tracking-wider
//               text-cyan-400
//             "
//           >
//             {experience.type}
//           </span>

//           {/* Role */}
//           <h3 className="mt-5 text-2xl font-bold text-white">
//             {experience.role}
//           </h3>

//           {/* Company */}
//           <p className="mt-2 text-lg text-slate-300">
//             {experience.company}
//           </p>

//           {/* Meta */}
//           <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-400">
//             <div className="flex items-center gap-2">
//               <FaCalendarAlt />
//               <span>{experience.period}</span>
//             </div>

//             <div className="flex items-center gap-2">
//               <FaMapMarkerAlt />
//               <span>{experience.location}</span>
//             </div>
//           </div>

//           {/* Description */}
//           <p className="mt-6 leading-7 text-slate-400">
//             {experience.description}
//           </p>
//            <div className="mt-6">
//   <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
//     Key Achievements
//   </h4>

//   <ul className="space-y-3">
//     {experience.achievements.map((item) => (
//       <li
//         key={item}
//         className="flex items-start gap-3 text-slate-300"
//       >
//         <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400"></span>

//         <span>{item}</span>
//       </li>
//     ))}
//   </ul>
// </div>
//           {/* Technologies */}
//           <div className="mt-6 flex flex-wrap gap-2">
//             {experience.technologies.map((tech) => (
//               <span
//                 key={tech}
//                 className="
//                   rounded-full
//                   border
//                   border-cyan-400/20
//                   bg-cyan-400/10
//                   px-3
//                   py-1
//                   text-xs
//                   font-medium
//                   text-cyan-300
//                 "
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div
//   className="
//     mt-8
//     border-t
//     border-white/10
//     pt-5
//     flex
//     items-center
//     justify-between
//   "
// >
//   <span className="text-sm text-slate-500">
//     {experience.type}
//   </span>

//   <span className="text-sm font-medium text-cyan-400">
//     {experience.period}
//   </span>
// </div>
//     </motion.div>
//   );
// }

// export default ExperienceCard;
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaCheck } from "react-icons/fa";

function ExperienceCard({ experience, index }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -50 : 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative mb-12 flex justify-center"
    >
      {/* 1. CENTRAL REACTOR PULSE NODE */}
      <div
        className="
          absolute left-4 top-8 z-20 flex h-6 w-6 -translate-x-1/2 items-center justify-center
          md:left-1/2
        "
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
        <span className="relative flex h-3.5 w-3.5 rounded-full border-2 border-[#030712] bg-cyan-400 shadow-[0_0_10px_#00f0ff]" />
      </div>

      {/* 2. CARD WRAPPER */}
      <div
        className={`
          ml-12 w-full md:ml-0 md:w-[45%]
          ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}
        `}
      >
        <div
          className="
            group relative overflow-hidden rounded-3xl border border-cyan-500/20
            bg-[#080f1e]/85 p-8 shadow-[0_0_30px_rgba(0,240,255,0.06)] backdrop-blur-2xl
            transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(0,240,255,0.18)]
          "
        >
          {/* Tactical HUD Corner Marks */}
          <span className="pointer-events-none absolute top-0 left-0 h-3.5 w-3.5 border-t-2 border-l-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
          <span className="pointer-events-none absolute top-0 right-0 h-3.5 w-3.5 border-t-2 border-r-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
          <span className="pointer-events-none absolute bottom-0 left-0 h-3.5 w-3.5 border-b-2 border-l-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
          <span className="pointer-events-none absolute bottom-0 right-0 h-3.5 w-3.5 border-b-2 border-r-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />

          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Header Telemetry Badge */}
          <div className="flex items-center justify-between border-b border-cyan-500/15 pb-4">
            <span className="rounded-md border border-cyan-400/30 bg-cyan-950/60 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-300 shadow-inner">
              {experience.type}
            </span>
            <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-cyan-400/50">
              EXP_0{index + 1}
            </span>
          </div>

          {/* Role & Company */}
          <h3 className="mt-5 font-['Orbitron'] text-xl font-bold tracking-wide text-white transition-colors group-hover:text-cyan-200 sm:text-2xl">
            {experience.role}
          </h3>

          <p className="mt-1 font-['JetBrains_Mono'] text-sm font-semibold text-cyan-400">
            {experience.company}
          </p>

          {/* Metadata */}
          <div className="mt-3 flex flex-wrap gap-4 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <FaCalendarAlt className="text-cyan-400/80" />
              <span>{experience.period}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-emerald-400/80" />
              <span>{experience.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-5 font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-300 sm:text-sm">
            {experience.description}
          </p>

          {/* Key Achievements */}
          {Array.isArray(experience.achievements) &&
            experience.achievements.length > 0 && (
              <div className="mt-6 rounded-2xl border border-cyan-500/15 bg-slate-950/60 p-4">
                <h4 className="mb-3 flex items-center gap-2 font-['Orbitron'] text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                  <span>//</span>
                  <span>KEY ACHIEVEMENTS</span>
                </h4>

                <ul className="space-y-2.5">
                  {experience.achievements.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-300"
                    >
                      <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border border-emerald-400/40 bg-emerald-950/50 text-[9px] text-emerald-300 shadow-[0_0_6px_#10b981]">
                        <FaCheck size={7} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {/* Technologies */}
          {Array.isArray(experience.technologies) &&
            experience.technologies.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-cyan-500/15 pt-5">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-md border border-cyan-400/20 bg-cyan-950/30
                      px-2.5 py-1 font-['JetBrains_Mono'] text-[11px] font-semibold text-cyan-300
                      shadow-inner transition-colors hover:border-cyan-400/50 hover:bg-cyan-900/40
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
        </div>
      </div>
    </motion.div>
  );
}

export default ExperienceCard;