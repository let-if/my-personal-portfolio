
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FaDownload } from "react-icons/fa";

// import ThemeToggle from "../ThemeToggle";
// import Logo from "./Logo";
// import NavLinks from "./NavLinks";
// import MobileMenu from "./MobileMenu";
// import { CV_URL } from "../../constants/cv";

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//       className={`
//         fixed inset-x-0 top-0 z-50 transition-all duration-500
//         ${
//           scrolled
//             ? "border-b border-cyan-500/20 bg-[#030712]/85 shadow-[0_4px_30px_rgba(0,240,255,0.08)] backdrop-blur-2xl"
//             : "border-b border-transparent bg-transparent"
//         }
//       `}
//     >
//       {/* Top Ambient Glow Line (Active on Scroll) */}
//       <div
//         className={`h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-500 ${
//           scrolled ? "opacity-100" : "opacity-0"
//         }`}
//       />

//       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
//         {/* LOGO AREA WITH SUB-LABEL */}
//         <div className="flex items-center gap-3">
//           <Logo />
//           <span className="hidden rounded border border-cyan-500/30 bg-cyan-950/40 px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-widest text-cyan-400/80 sm:inline-block">
//             SYS_ONLINE
//           </span>
//         </div>

//         {/* DESKTOP HUD CONTROLS */}
//         <div className="hidden items-center gap-6 lg:flex">
//           {/* Navigation Pill Deck */}
//           <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-1.5 backdrop-blur-md shadow-inner">
//             <NavLinks />
//           </div>

//           <div className="h-5 w-[1px] bg-slate-800" />

//           {/* THEME BUTTON */}
//           <div className="rounded-xl border border-white/10 bg-white/5 p-1 transition-colors hover:border-cyan-500/40">
//             <ThemeToggle />
//           </div>

//           {/* EXTREME HUD CV / RESUME BUTTON */}
//           <a
//             href={CV_URL}
//             download
//             className="
//               group relative flex items-center gap-2.5 overflow-hidden rounded-xl
//               border border-cyan-400/50 bg-gradient-to-r from-cyan-950/80 via-slate-900 to-blue-950/80
//               px-5 py-2.5 font-['Orbitron'] text-xs font-bold uppercase tracking-wider text-cyan-300
//               shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300
//               hover:border-cyan-400 hover:text-white hover:shadow-[0_0_25px_rgba(0,240,255,0.45)]
//               hover:scale-105 active:scale-95
//             "
//           >
//             {/* Animated Laser Sweep */}
//             <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

//             <FaDownload className="text-cyan-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-white" />
//             <span>DOWNLOAD CV</span>
//           </a>
//         </div>

//         {/* MOBILE HUD CONTROLS */}
//         <div className="flex items-center gap-3 lg:hidden">
//           <div className="rounded-lg border border-white/10 bg-white/5 p-1">
//             <ThemeToggle />
//           </div>

//           <a
//             href={CV_URL}
//             download
//             className="
//               flex items-center gap-1.5 rounded-lg border border-cyan-400/40
//               bg-cyan-950/60 px-3 py-1.5 font-['Orbitron'] text-xs font-bold tracking-wider
//               text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.2)] active:scale-95
//             "
//           >
//             <FaDownload className="text-[10px]" />
//             <span>CV</span>
//           </a>

//           <MobileMenu />
//         </div>
//       </div>
//     </motion.header>
//   );
// }

// export default Navbar;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaGithub } from "react-icons/fa";

import ThemeToggle from "../ThemeToggle";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { CV_URL } from "../../constants/cv";

const GITHUB_URL = "https://github.com/let-if";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`
        fixed inset-x-0 top-0 z-50 transition-all duration-500
        ${
          scrolled
            ? "border-b border-cyan-500/20 bg-[#030712]/85 shadow-[0_4px_30px_rgba(0,240,255,0.08)] backdrop-blur-2xl"
            : "border-b border-transparent bg-transparent"
        }
      `}
    >
      {/* Top ambient glow line (active on scroll) */}
      <div
        className={`h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 xl:px-8">
        {/* LOGO */}
        <div className="flex shrink-0 items-center gap-3">
          <Logo />
          <span className="hidden rounded border border-cyan-500/30 bg-cyan-950/40 px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-widest text-cyan-400/80 2xl:inline-block">
            SYS_ONLINE
          </span>
        </div>

        {/* DESKTOP (xl and up) */}
        <div className="hidden items-center gap-4 xl:flex">
          <NavLinks />

          <div className="h-6 w-px bg-white/10" />

          {/* GitHub */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="
              group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10
              bg-white/[0.05] text-slate-300
              shadow-[0_3px_0_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)]
              transition-all duration-200
              hover:-translate-y-0.5 hover:border-cyan-400/70 hover:text-cyan-300
              active:translate-y-0.5 active:shadow-[0_1px_0_rgba(0,0,0,0.45)]
            "
          >
            <FaGithub
              size={20}
              className="transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
            />
          </a>

          {/* Theme toggle */}
          <div className="flex h-11 min-w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] px-1 transition-colors hover:border-cyan-500/40">
            <ThemeToggle />
          </div>

          {/* DOWNLOAD CV */}
          <a
            href={CV_URL}
            download
            className="
              group relative flex h-11 shrink-0 items-center gap-2.5 overflow-hidden rounded-xl
              bg-gradient-to-b from-cyan-400 to-blue-600 px-5
              font-['Orbitron'] text-xs font-bold uppercase tracking-wider text-white
              shadow-[0_4px_0_#0e7490,0_14px_24px_-8px_rgba(34,211,238,0.55),inset_0_1px_0_rgba(255,255,255,0.35)]
              transition-all duration-200
              hover:-translate-y-0.5
              hover:shadow-[0_6px_0_#0e7490,0_18px_28px_-8px_rgba(34,211,238,0.7),inset_0_1px_0_rgba(255,255,255,0.35)]
              active:translate-y-[3px]
              active:shadow-[0_1px_0_#0e7490,0_6px_12px_-6px_rgba(34,211,238,0.5)]
            "
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/30 blur-sm transition-transform duration-700 group-hover:translate-x-[300%]"
            />
            <FaDownload className="relative text-sm transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span className="relative whitespace-nowrap">Download CV</span>
          </a>
        </div>

        {/* MOBILE / TABLET (below xl) */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3 xl:hidden">
          <div className="flex h-11 min-w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] px-1">
            <ThemeToggle />
          </div>

          <a
            href={CV_URL}
            download
            aria-label="Download CV"
            className="
              flex h-11 items-center gap-1.5 rounded-xl
              bg-gradient-to-b from-cyan-400 to-blue-600 px-3.5
              font-['Orbitron'] text-xs font-bold tracking-wider text-white
              shadow-[0_3px_0_#0e7490,0_10px_18px_-8px_rgba(34,211,238,0.55),inset_0_1px_0_rgba(255,255,255,0.35)]
              transition-all duration-150
              active:translate-y-[2px] active:shadow-[0_1px_0_#0e7490]
            "
          >
            <FaDownload className="text-[11px]" />
            <span>CV</span>
          </a>

          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;