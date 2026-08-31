
// import { motion } from "framer-motion";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// function FeaturedProject({ project }) {
//   if (!project) {
//     return null;
//   }

//   // Safely handle both Cloudinary full URLs and local paths
//   const imageUrl = project.image
//     ? project.image.startsWith("http")
//       ? project.image
//       : `http://localhost:5000${project.image}`
//     : "/default-project.png";

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="mb-20 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl"
//     >
//       <div className="grid lg:grid-cols-2">
//         {/* Project Image */}
//         <div className="h-72 overflow-hidden lg:h-auto min-h-[300px] relative bg-slate-900/50">
//           <img
//             src={imageUrl}
//             alt={project.title}
//             className="h-full w-full object-cover transition duration-500 hover:scale-105"
//           />
//         </div>

//         {/* Content */}
//         <div className="p-8 lg:p-12 flex flex-col justify-between">
//           <div>
//             <span className="inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
//               Featured Project
//             </span>

//             <h2 className="mt-6 text-3xl font-bold text-white">
//               {project.title}
//             </h2>

//             <p className="mt-5 leading-relaxed text-slate-400">
//               {project.description}
//             </p>

//             {/* Technologies */}
//             <div className="mt-6 flex flex-wrap gap-3">
//               {Array.isArray(project.technologies) &&
//                 project.technologies.map((tech, index) => (
//                   <span
//                     key={index}
//                     className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="mt-8 flex flex-wrap gap-4">
//             {project.github && (
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-white transition hover:border-cyan-400 hover:text-cyan-400"
//               >
//                 <FaGithub />
//                 Github
//               </a>
//             )}

//             {project.demo && (
//               <a
//                 href={project.demo}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-400"
//               >
//                 <FaExternalLinkAlt />
//                 Live Demo
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default FeaturedProject;
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function FeaturedProject({ project }) {
  if (!project) {
    return null;
  }

  // Safely handle both Cloudinary full URLs and local paths
  const imageUrl = project.image
    ? project.image.startsWith("http")
      ? project.image
      : `http://localhost:5000${project.image}`
    : "/default-project.png";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="
        group relative mb-20 overflow-hidden rounded-3xl border border-cyan-500/25
        bg-[#080f1e]/90 shadow-[0_0_40px_rgba(0,240,255,0.08)] backdrop-blur-2xl
        transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_50px_rgba(0,240,255,0.18)]
      "
    >
      {/* 1. TACTICAL HUD CORNER BRACKETS */}
      <span className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-cyan-400/80 z-20" />
      <span className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-cyan-400/80 z-20" />
      <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400/80 z-20" />
      <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400/80 z-20" />

      <div className="grid lg:grid-cols-2">
        {/* 2. PROJECT IMAGE VIEWPORT - 100% CLEAN & CRISP */}
        <div className="relative min-h-[320px] h-72 lg:h-auto overflow-hidden bg-[#030712] border-b lg:border-b-0 lg:border-r border-cyan-500/15">
          <img
            src={imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* System Badge */}
          <div className="absolute top-4 left-4 z-10 rounded border border-cyan-500/40 bg-slate-950/80 px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-md">
            SYS_VIEW // PREVIEW
          </div>
        </div>

        {/* 3. PROJECT CONTENT */}
        <div className="flex flex-col justify-between p-8 lg:p-12">
          <div>
            {/* Telemetry Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/50 px-3.5 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-300">
                FEATURED_DEPLOYMENT
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-5 font-['Orbitron'] text-2xl font-black tracking-wide text-white sm:text-3xl transition-colors group-hover:text-cyan-200">
              {project.title}
            </h2>

            {/* Description */}
            <p className="mt-4 font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-300 sm:text-sm">
              {project.description}
            </p>

            {/* Tech Stack Chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {Array.isArray(project.technologies) &&
                project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="
                      rounded-lg border border-cyan-500/20 bg-cyan-950/30
                      px-3 py-1 font-['JetBrains_Mono'] text-xs font-semibold text-cyan-300
                      shadow-inner transition-colors hover:border-cyan-400/50 hover:bg-cyan-900/40
                    "
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>

          {/* Action Triggers */}
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-cyan-500/15 pt-6">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="
                  group/btn relative flex items-center gap-2.5 overflow-hidden rounded-xl
                  border border-cyan-400/60 bg-gradient-to-r from-cyan-500 to-blue-600
                  px-6 py-3 font-['Orbitron'] text-xs font-bold uppercase tracking-wider text-white
                  shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300
                  hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.55)] active:scale-95
                "
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                <FaExternalLinkAlt className="text-xs" />
                <span>LIVE DEMO</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center gap-2.5 rounded-xl border border-slate-700
                  bg-slate-950/70 px-6 py-3 font-['Orbitron'] text-xs font-bold uppercase tracking-wider
                  text-slate-300 backdrop-blur-md transition-all duration-300
                  hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]
                  hover:scale-105 active:scale-95
                "
              >
                <FaGithub size={15} />
                <span>REPOSITORY</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedProject;