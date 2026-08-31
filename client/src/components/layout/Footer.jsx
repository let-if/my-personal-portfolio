// function Footer() {
//   return (
//     <footer className="border-t border-slate-800 py-10 text-center">
//       <p>© 2026 Letfaw. All rights reserved.</p>
//     </footer>
//   );
// }

// export default Footer;
import React from "react";
import { FaTerminal } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative border-t border-cyan-500/20 bg-[#030712] py-12 selection:bg-cyan-500 selection:text-black">
      {/* 1. TOP CIRCUIT ACCENT LINE */}
      <div className="absolute top-0 left-1/2 h-[1px] w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#00f0ff]" />

      {/* 2. AMBIENT GLOW BACKDROP */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand & System Status */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-950/60 text-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.3)]">
              <FaTerminal size={14} />
            </div>

            <div className="text-left">
              <span className="font-['Orbitron'] text-xs font-black tracking-widest text-white">
                LETFAW<span className="text-cyan-400">_HUD</span>
              </span>
              <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981] animate-pulse" />
                <span>SYS_ONLINE // V2.6</span>
              </div>
            </div>
          </div>

          {/* Copyright & Core Signature */}
          <p className="font-['JetBrains_Mono'] text-xs text-slate-400">
            © 2026{" "}
            <span className="font-semibold text-slate-200">Letfaw</span>. All
            systems operational. All rights reserved.
          </p>

          {/* Telemetry Indicator */}
          <div className="rounded-md border border-cyan-500/20 bg-slate-950/80 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-md">
            END_TRANSMISSION
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;