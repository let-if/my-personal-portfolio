
// import { FaBell, FaCircle } from "react-icons/fa";

// function AdminNavbar() {
//   const admin = JSON.parse(localStorage.getItem("admin"));

//   return (
//     <header
//       className="
//         sticky
//         top-0
//         z-40
//         overflow-hidden
//         border-b
//         border-cyan-500/10
//         bg-slate-950/70
//         backdrop-blur-2xl
//       "
//     >
//       {/* Background Glow */}
//       <div
//         className="
//           absolute
//           -left-20
//           top-0
//           h-40
//           w-40
//           rounded-full
//           bg-cyan-500/10
//           blur-3xl
//         "
//       />

//       <div
//         className="
//           absolute
//           right-0
//           top-0
//           h-32
//           w-32
//           rounded-full
//           bg-blue-500/10
//           blur-3xl
//         "
//       />

//       <div
//         className="
//           relative
//           flex
//           items-center
//           justify-between
//           px-8
//           py-5
//         "
//       >
//         {/* Left */}
//         <div>
//           <p
//             className="
//               text-xs
//               uppercase
//               tracking-[0.35em]
//               text-cyan-400
//             "
//           >
//             Portfolio CMS
//           </p>

//           <h1
//             className="
//               mt-2
//               text-3xl
//               font-black
//               text-white
//             "
//           >
//             Admin Dashboard
//           </h1>

//           <div
//             className="
//               mt-3
//               flex
//               items-center
//               gap-2
//               text-slate-400
//             "
//           >
//             <FaCircle
//               className="
//                 text-[10px]
//                 text-green-400
//                 animate-pulse
//               "
//             />

//             <span>
//               Welcome back,
//             </span>

//             <span
//               className="
//                 font-semibold
//                 text-cyan-300
//               "
//             >
//               {admin?.name}
//             </span>
//           </div>
//         </div>

//         {/* Right */}
//         <div className="flex items-center gap-5">
//           {/* Notification */}
//           <button
//             className="
//               group
//               relative
//               flex
//               h-14
//               w-14
//               items-center
//               justify-center
//               rounded-2xl
//               border
//               border-cyan-500/20
//               bg-white/5
//               text-cyan-400
//               backdrop-blur-xl
//               transition-all
//               duration-300
//               hover:scale-110
//               hover:border-cyan-400
//               hover:bg-cyan-500/10
//               hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]
//             "
//           >
//             <FaBell
//               className="
//                 text-xl
//                 transition-transform
//                 duration-300
//                 group-hover:rotate-12
//               "
//             />

//             {/* Notification Dot */}
//             <span
//               className="
//                 absolute
//                 right-3
//                 top-3
//                 flex
//                 h-3
//                 w-3
//               "
//             >
//               <span
//                 className="
//                   absolute
//                   inline-flex
//                   h-full
//                   w-full
//                   animate-ping
//                   rounded-full
//                   bg-red-400
//                   opacity-70
//                 "
//               />

//               <span
//                 className="
//                   relative
//                   inline-flex
//                   h-3
//                   w-3
//                   rounded-full
//                   bg-red-500
//                 "
//               />
//             </span>
//           </button>

//           {/* Admin Avatar */}
//           <div
//             className="
//               flex
//               items-center
//               gap-4
//               rounded-2xl
//               border
//               border-white/10
//               bg-white/5
//               px-5
//               py-3
//               backdrop-blur-xl
//               transition
//               duration-300
//               hover:border-cyan-400/40
//               hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]
//             "
//           >
//             <div
//               className="
//                 flex
//                 h-12
//                 w-12
//                 items-center
//                 justify-center
//                 rounded-full
//                 bg-gradient-to-r
//                 from-cyan-500
//                 via-blue-500
//                 to-indigo-600
//                 text-lg
//                 font-bold
//                 text-white
//                 shadow-lg
//                 shadow-cyan-500/40
//               "
//             >
//               {admin?.name?.charAt(0).toUpperCase()}
//             </div>

//             <div className="hidden md:block">
//               <h3
//                 className="
//                   font-semibold
//                   text-white
//                 "
//               >
//                 {admin?.name}
//               </h3>

//               <p
//                 className="
//                   text-sm
//                   text-slate-400
//                 "
//               >
//                 Administrator
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default AdminNavbar;
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaSignOutAlt,
  FaShieldAlt,
  FaTerminal,
  FaCircle,
} from "react-icons/fa";

function AdminNavbar() {
  const navigate = useNavigate();

  let admin = null;
  try {
    admin = JSON.parse(localStorage.getItem("admin"));
  } catch (err) {
    console.error("Failed to parse admin data:", err);
  }

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  const adminInitial = admin?.name ? admin.name.charAt(0).toUpperCase() : "A";

  return (
    <header className="sticky top-0 z-40 overflow-hidden border-b border-cyan-500/20 bg-[#030712]/90 backdrop-blur-2xl selection:bg-cyan-500 selection:text-black">
      {/* 1. ATMOSPHERIC OBSIDIAN LIGHTING GLOWS */}
      <div className="pointer-events-none absolute -left-20 top-0 h-44 w-44 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-0 h-32 w-32 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Top Circuit Laser Line */}
      <div className="absolute top-0 left-1/2 h-[1px] w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_10px_#00f0ff]" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* 2. LEFT TELEMETRY CONSOLE IDENTITY */}
        <div className="flex items-center gap-4">
          <div className="relative hidden h-11 w-11 items-center justify-center sm:flex">
            {/* Tactical Micro Corner Brackets */}
            <span className="pointer-events-none absolute -top-0.5 -left-0.5 h-2 w-2 border-t border-l border-cyan-400" />
            <span className="pointer-events-none absolute -top-0.5 -right-0.5 h-2 w-2 border-t border-r border-cyan-400" />
            <span className="pointer-events-none absolute -bottom-0.5 -left-0.5 h-2 w-2 border-b border-l border-cyan-400" />
            <span className="pointer-events-none absolute -bottom-0.5 -right-0.5 h-2 w-2 border-b border-r border-cyan-400" />

            <div className="flex h-full w-full items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-950/60 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.25)]">
              <FaShieldAlt size={16} />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-400">
                SYS_CONTROL // CMS_PORTAL
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981] animate-pulse" />
            </div>

            <h1 className="font-['Orbitron'] text-xl font-black tracking-wide text-white sm:text-2xl">
              Admin{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h1>

            <div className="mt-1 flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-slate-400">
              <span>ACTIVE_OPERATOR:</span>
              <span className="font-bold text-cyan-300">
                {admin?.name || "Root Admin"}
              </span>
            </div>
          </div>
        </div>

        {/* 3. RIGHT CONTROLS & TELEMETRY POD */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Notification Radar Node */}
          <button
            title="System Telemetry Alerts"
            className="
              group relative flex h-11 w-11 items-center justify-center overflow-hidden
              rounded-xl border border-cyan-500/25 bg-[#080f1e]/85 text-cyan-400
              shadow-[0_0_15px_rgba(0,240,255,0.08)] backdrop-blur-xl transition-all duration-300
              hover:border-cyan-400 hover:bg-cyan-950/40 hover:text-white
              hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] active:scale-95 cursor-pointer
            "
          >
            {/* Micro Corners */}
            <span className="pointer-events-none absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-cyan-400/80" />
            <span className="pointer-events-none absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-cyan-400/80" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-cyan-400/80" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-cyan-400/80" />

            <FaBell className="transition-transform duration-300 group-hover:rotate-12" size={15} />

            {/* Radar Pulse Beacon */}
            <span className="absolute right-2.5 top-2.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full border border-[#080f1e] bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
            </span>
          </button>

          {/* Operator Status Pod */}
          <div
            className="
              relative flex items-center gap-3 rounded-2xl border border-cyan-500/25
              bg-[#080f1e]/85 px-3.5 py-2 shadow-[0_0_20px_rgba(0,240,255,0.06)]
              backdrop-blur-xl transition-all duration-300
              hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)]
            "
          >
            {/* HUD Corner Accents */}
            <span className="pointer-events-none absolute top-0 left-0 h-2 w-2 border-t border-l border-cyan-400/70" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-2 w-2 border-b border-r border-cyan-400/70" />

            {/* Reactor Avatar Emblem */}
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/40 bg-gradient-to-br from-cyan-950/90 to-blue-950/90 font-['Orbitron'] text-xs font-black text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.3)]">
              {adminInitial}
            </div>

            <div className="hidden sm:block text-left">
              <h3 className="font-['Orbitron'] text-xs font-bold tracking-wide text-white">
                {admin?.name || "Administrator"}
              </h3>
              <p className="font-mono text-[9px] uppercase tracking-widest text-cyan-400/80">
                CLEARANCE: LVL_04
              </p>
            </div>
          </div>

          {/* 4. DISCONNECT / LOGOUT COMMAND TRIGGER */}
          <button
            onClick={handleLogout}
            title="Terminate Shell Session"
            className="
              group/logout relative flex h-11 items-center gap-2 overflow-hidden rounded-xl
              border border-red-500/40 bg-red-950/20 px-3.5 font-['Orbitron'] text-[11px]
              font-bold tracking-wider text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.12)]
              backdrop-blur-xl transition-all duration-300
              hover:border-red-400 hover:bg-red-950/50 hover:text-white
              hover:shadow-[0_0_25px_rgba(239,68,68,0.35)] active:scale-95 cursor-pointer
            "
          >
            {/* Tactical Corner Brackets */}
            <span className="pointer-events-none absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-red-400/80" />
            <span className="pointer-events-none absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-red-400/80" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-red-400/80" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-red-400/80" />

            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-red-500/20 to-transparent transition-transform duration-500 group-hover/logout:translate-x-full" />

            <FaSignOutAlt className="transition-transform duration-300 group-hover/logout:-translate-x-0.5" size={13} />
            <span className="hidden md:inline">TERMINATE_SESSION</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default AdminNavbar;