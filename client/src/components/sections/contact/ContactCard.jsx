
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaLinkedin,
//   FaGithub,
//   FaFileDownload,
//   FaExternalLinkAlt,
// } from "react-icons/fa";

// function ContactCard({ item }) {
//   const icons = {
//     email: <FaEnvelope />,
//     phone: <FaPhoneAlt />,
//     location: <FaMapMarkerAlt />,
//     linkedin: <FaLinkedin />,
//     github: <FaGithub />,
//     resume: <FaFileDownload />,
//     external: <FaExternalLinkAlt />,
//   };

//   const isExternal = item.link?.startsWith("http");

//   return (
//     <motion.a
//       href={item.link}
//       target={isExternal ? "_blank" : undefined}
//       rel={isExternal ? "noreferrer" : undefined}
//       whileHover={{
//         y: -8,
//       }}
//       className="
//         group
//         flex
//         items-center
//         gap-5
//         rounded-3xl
//         border
//         border-white/10
//         bg-white/5
//         p-6
//         backdrop-blur-xl
//         transition
//         hover:border-cyan-400/40
//       "
//     >
//       <div
//         className="
//           flex
//           h-14
//           w-14
//           items-center
//           justify-center
//           rounded-2xl
//           bg-cyan-500/10
//           text-2xl
//           text-cyan-400
//           transition
//           group-hover:scale-110
//         "
//       >
//         {icons[item.icon] || <FaExternalLinkAlt />}
//       </div>

//       <div>
//         <p className="text-sm uppercase tracking-wider text-cyan-400">
//           {item.title}
//         </p>

//         <h3 className="mt-1 break-all text-lg font-semibold text-white">
//           {item.value}
//         </h3>
//       </div>
//     </motion.a>
//   );
// }

// export default ContactCard;
import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";

function ContactCard({ item }) {
  const icons = {
    email: <FaEnvelope />,
    phone: <FaPhoneAlt />,
    location: <FaMapMarkerAlt />,
    linkedin: <FaLinkedin />,
    github: <FaGithub />,
    resume: <FaFileDownload />,
    external: <FaExternalLinkAlt />,
  };

  const isExternal = item.link?.startsWith("http");

  return (
    <motion.a
      href={item.link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="
        group relative flex items-center gap-5 overflow-hidden rounded-3xl
        border border-cyan-500/20 bg-[#080f1e]/85 p-6 shadow-[0_0_30px_rgba(0,240,255,0.06)]
        backdrop-blur-2xl transition-all duration-300
        hover:border-cyan-400/50 hover:bg-[#0c162c] hover:shadow-[0_0_35px_rgba(0,240,255,0.18)]
        cursor-pointer
      "
    >
      {/* 1. TACTICAL HUD CORNER BRACKETS */}
      <span className="pointer-events-none absolute top-0 left-0 h-3.5 w-3.5 border-t-2 border-l-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />
      <span className="pointer-events-none absolute top-0 right-0 h-3.5 w-3.5 border-t-2 border-r-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-3.5 w-3.5 border-b-2 border-l-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-3.5 w-3.5 border-b-2 border-r-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />

      {/* 2. AMBIENT GLOW BACKDROP */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* 3. ICON REACTOR */}
      <div className="
        flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl
        border border-cyan-400/30 bg-cyan-950/40 text-xl text-cyan-400
        shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-transform duration-300
        group-hover:scale-110 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]
      ">
        {icons[item.icon] || <FaExternalLinkAlt />}
      </div>

      {/* 4. TELEMETRY LABEL & VALUE */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-400/80">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60 shadow-[0_0_5px_#00f0ff]" />
          <span>{item.title}</span>
        </div>

        <h3 className="mt-1 break-all font-['JetBrains_Mono'] text-sm font-bold tracking-wide text-white transition-colors group-hover:text-cyan-200 sm:text-base">
          {item.value}
        </h3>
      </div>

      {/* 5. TACTICAL LINK TRAILING ARROW */}
      <div className="shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300">
        <FaExternalLinkAlt size={12} />
      </div>
    </motion.a>
  );
}

export default ContactCard;