
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

import ThemeToggle from "../ThemeToggle";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { CV_URL } from "../../constants/cv";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      {/* Top Ambient Glow Line (Active on Scroll) */}
      <div
        className={`h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* LOGO AREA WITH SUB-LABEL */}
        <div className="flex items-center gap-3">
          <Logo />
          <span className="hidden rounded border border-cyan-500/30 bg-cyan-950/40 px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-widest text-cyan-400/80 sm:inline-block">
            SYS_ONLINE
          </span>
        </div>

        {/* DESKTOP HUD CONTROLS */}
        <div className="hidden items-center gap-6 lg:flex">
          {/* Navigation Pill Deck */}
          <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-1.5 backdrop-blur-md shadow-inner">
            <NavLinks />
          </div>

          <div className="h-5 w-[1px] bg-slate-800" />

          {/* THEME BUTTON */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-1 transition-colors hover:border-cyan-500/40">
            <ThemeToggle />
          </div>

          {/* EXTREME HUD CV / RESUME BUTTON */}
          <a
            href={CV_URL}
            download
            className="
              group relative flex items-center gap-2.5 overflow-hidden rounded-xl
              border border-cyan-400/50 bg-gradient-to-r from-cyan-950/80 via-slate-900 to-blue-950/80
              px-5 py-2.5 font-['Orbitron'] text-xs font-bold uppercase tracking-wider text-cyan-300
              shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300
              hover:border-cyan-400 hover:text-white hover:shadow-[0_0_25px_rgba(0,240,255,0.45)]
              hover:scale-105 active:scale-95
            "
          >
            {/* Animated Laser Sweep */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <FaDownload className="text-cyan-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-white" />
            <span>DOWNLOAD CV</span>
          </a>
        </div>

        {/* MOBILE HUD CONTROLS */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="rounded-lg border border-white/10 bg-white/5 p-1">
            <ThemeToggle />
          </div>

          <a
            href={CV_URL}
            download
            className="
              flex items-center gap-1.5 rounded-lg border border-cyan-400/40
              bg-cyan-950/60 px-3 py-1.5 font-['Orbitron'] text-xs font-bold tracking-wider
              text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.2)] active:scale-95
            "
          >
            <FaDownload className="text-[10px]" />
            <span>CV</span>
          </a>

          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;