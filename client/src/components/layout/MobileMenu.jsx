// import { useState } from "react";
// import { Link } from "react-scroll";
// import { AnimatePresence, motion } from "framer-motion";
// import { HiBars3, HiXMark } from "react-icons/hi2";

// import { navigation } from "../../constants/navigation";

// function MobileMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   const closeMenu = () => setIsOpen(false);

//   return (
//     <>
//       {/* Menu Button */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
//         aria-label="Open menu"
//       >
//         <HiBars3 size={24} />
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={closeMenu}
//             />

//             {/* Drawer */}
//             <motion.aside
//               className="fixed top-0 right-0 z-50 flex h-screen w-80 max-w-[85%] flex-col border-l border-white/10 bg-slate-950/95 backdrop-blur-xl"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ duration: 0.35 }}
//             >
//               {/* Header */}
//               <div className="flex items-center justify-between border-b border-white/10 p-6">
//                 <div>
//                   <h2 className="text-xl font-bold text-white">
//                     Letfaw
//                   </h2>

//                   <p className="text-sm text-slate-400">
//                     Full Stack Developer
//                   </p>
//                 </div>

//                 <button
//                   onClick={closeMenu}
//                   className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
//                   aria-label="Close menu"
//                 >
//                   <HiXMark size={24} />
//                 </button>
//               </div>

//               {/* Navigation */}
//               <nav className="flex flex-1 flex-col p-6">
//                 {navigation.map((item) => (
//                   <Link
//                     key={item.id}
//                     to={item.to}
//                     smooth={true}
//                     duration={600}
//                     offset={-80}
//                     spy={true}
//                     onClick={closeMenu}
//                     className="cursor-pointer rounded-xl px-4 py-4 text-lg font-medium text-slate-300 transition-all duration-300 hover:bg-slate-800 hover:text-cyan-400"
//                   >
//                     {item.title}
//                   </Link>
//                 ))}
//               </nav>

//               {/* Footer */}
//               <div className="border-t border-white/10 p-6">
//                 <a
//                   href="/resume.pdf"
//                   className="block rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:scale-[1.02]"
//                 >
//                   Download Resume
//                 </a>
//               </div>
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// export default MobileMenu;
import { useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { FaFileDownload } from "react-icons/fa";

import { navigation } from "../../constants/navigation";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* 1. TACTICAL HUD MENU TRIGGER BUTTON */}
      <button
        onClick={() => setIsOpen(true)}
        className="
          group relative flex h-11 w-11 items-center justify-center overflow-hidden
          rounded-xl border border-cyan-500/30 bg-[#080f1e]/80 text-cyan-300
          shadow-[0_0_15px_rgba(0,240,255,0.12)] backdrop-blur-md transition-all duration-300
          hover:border-cyan-400 hover:bg-cyan-950/40 hover:text-white
          hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] active:scale-95 cursor-pointer
        "
        aria-label="Open navigation menu"
      >
        {/* Micro Corner Brackets */}
        <span className="pointer-events-none absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-cyan-400/80" />
        <span className="pointer-events-none absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-cyan-400/80" />
        <span className="pointer-events-none absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-cyan-400/80" />
        <span className="pointer-events-none absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-cyan-400/80" />

        <HiBars3 size={22} className="transition-transform duration-300 group-hover:scale-110" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* 2. BACKDROP OVERLAY */}
            <motion.div
              className="fixed inset-0 z-40 bg-[#030712]/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
            />

            {/* 3. HUD MOBILE DRAWER */}
            <motion.aside
              className="
                fixed top-0 right-0 z-50 flex h-screen w-80 max-w-[85%] flex-col
                border-l border-cyan-500/30 bg-[#080f1e]/95 shadow-[0_0_50px_rgba(0,240,255,0.15)]
                backdrop-blur-2xl selection:bg-cyan-500 selection:text-black
              "
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Tactical HUD Corner Brackets */}
              <span className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-cyan-400/80" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400/80" />

              {/* Ambient Glow */}
              <div className="pointer-events-none absolute -right-12 top-1/4 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

              {/* Header */}
              <div className="flex items-center justify-between border-b border-cyan-500/15 p-6">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h2 className="font-['Orbitron'] text-lg font-black tracking-wider text-white">
                      LETFAW<span className="text-cyan-400">.</span>
                    </h2>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981] animate-pulse" />
                  </div>

                  <p className="font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-widest text-cyan-400/80">
                    SYS_NAV // MENU
                  </p>
                </div>

                <button
                  onClick={closeMenu}
                  className="
                    flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800
                    bg-slate-950/80 text-slate-400 transition-all duration-200
                    hover:border-cyan-400/50 hover:bg-cyan-950/40 hover:text-cyan-300
                    hover:shadow-[0_0_12px_rgba(0,240,255,0.2)] active:scale-95 cursor-pointer
                  "
                  aria-label="Close menu"
                >
                  <HiXMark size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-1 flex-col space-y-1.5 overflow-y-auto p-6">
                {navigation.map((item, index) => (
                  <Link
                    key={item.id}
                    to={item.to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    spy={true}
                    onClick={closeMenu}
                    className="
                      group flex cursor-pointer items-center justify-between rounded-xl
                      border border-transparent px-4 py-3.5 transition-all duration-200
                      hover:border-cyan-500/30 hover:bg-cyan-950/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)]
                    "
                  >
                    <span className="font-['JetBrains_Mono'] text-sm font-semibold tracking-wide text-slate-300 transition-colors group-hover:text-cyan-200">
                      {item.title}
                    </span>

                    <span className="font-mono text-[10px] font-bold tracking-widest text-cyan-500/40 transition-colors group-hover:text-cyan-400">
                      0{index + 1} //
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Footer / Resume Action */}
              <div className="border-t border-cyan-500/15 p-6">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group/btn relative flex items-center justify-center gap-2 overflow-hidden rounded-xl
                    border border-cyan-400/60 bg-gradient-to-r from-cyan-500 to-blue-600
                    px-5 py-3.5 font-['Orbitron'] text-xs font-bold uppercase tracking-wider text-white
                    shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all duration-300
                    hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,240,255,0.45)] active:scale-98
                  "
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                  <FaFileDownload className="text-xs" />
                  <span>DOWNLOAD RESUME</span>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileMenu;