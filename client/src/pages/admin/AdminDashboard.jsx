
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// import {
//   FaFolderOpen,
//   FaEnvelope,
//   FaUserShield,
//   FaEye,
// } from "react-icons/fa";

// import AdminLayout from "../../layouts/AdminLayout";

// import {
//   getDashboardStats,
// } from "../../services/dashboardService";

// function AdminDashboard() {

//   const [stats, setStats] = useState({

//     totalProjects: 0,

//     totalMessages: 0,

//     unreadMessages: 0,

//     totalVisitors: 0,

//   });

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {

//     loadDashboard();

//   }, []);

//   async function loadDashboard() {

//     try {

//       const data = await getDashboardStats();

//       setStats(data);

//     } catch (error) {

//       console.log(error);

//     } finally {

//       setLoading(false);

//     }

//   }

//   const cards = [

//     {
//       title: "Projects",
//       value: stats.totalProjects,
//       icon: <FaFolderOpen />,
//       color: "from-cyan-500 to-blue-600",
//     },

//     {
//       title: "Messages",
//       value: stats.totalMessages,
//       icon: <FaEnvelope />,
//       color: "from-pink-500 to-red-500",
//     },

//     {
//       title: "Unread",
//       value: stats.unreadMessages,
//       icon: <FaEnvelope />,
//       color: "from-yellow-400 to-orange-500",
//     },

//     {
//       title: "Visitors",
//       value: stats.totalVisitors,
//       icon: <FaEye />,
//       color: "from-green-500 to-emerald-600",
//     },

//     {
//       title: "Admin",
//       value: 1,
//       icon: <FaUserShield />,
//       color: "from-purple-500 to-indigo-600",
//     },

//   ];

//   return (

//     <AdminLayout>

//       <div className="space-y-12">

//         <div>

//           <h1 className="text-5xl font-black text-white">

//             Admin Dashboard

//           </h1>

//           <p className="mt-3 text-slate-400 text-lg">

//             Welcome back. Here's what's happening in your portfolio.

//           </p>

//         </div>

//         {loading ? (

//           <div className="text-slate-400 text-lg">

//             Loading dashboard...

//           </div>

//         ) : (

//           <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

//             {cards.map((card) => (

//               <motion.div

//                 key={card.title}

//                 whileHover={{

//                   y: -10,

//                   scale: 1.03,

//                 }}

//                 transition={{

//                   type: "spring",

//                   stiffness: 250,

//                 }}

//                 className="

//                   relative

//                   overflow-hidden

//                   rounded-3xl

//                   border

//                   border-white/10

//                   bg-white/5

//                   p-8

//                   backdrop-blur-2xl

//                   shadow-[0_10px_40px_rgba(0,0,0,0.25)]

//                   hover:border-cyan-400/40

//                   hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]

//                   transition-all

//                   duration-500

//                 "

//               >

//                 <div

//                   className={`

//                     absolute

//                     inset-0

//                     opacity-0

//                     hover:opacity-20

//                     transition

//                     bg-gradient-to-br

//                     ${card.color}

//                   `}

//                 />

//                 <div className="relative flex items-center justify-between">

//                   <div>

//                     <p className="text-slate-400 text-sm uppercase tracking-wider">

//                       {card.title}

//                     </p>

//                     <h2 className="mt-5 text-5xl font-black text-white">

//                       {card.value}

//                     </h2>

//                   </div>

//                   <div

//                     className={`

//                       flex

//                       h-20

//                       w-20

//                       items-center

//                       justify-center

//                       rounded-3xl

//                       bg-gradient-to-br

//                       ${card.color}

//                       text-3xl

//                       text-white

//                       shadow-xl

//                     `}

//                   >

//                     {card.icon}

//                   </div>

//                 </div>

//               </motion.div>

//             ))}

//           </div>

//         )}

//       </div>

//     </AdminLayout>

//   );

// }

// export default AdminDashboard;
// // admin@portfolio.com

// // Admin@123
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaFolderOpen,
  FaEnvelope,
  FaEnvelopeOpenText,
  FaUserShield,
  FaEye,
  FaArrowUp,
  FaChartLine,
} from "react-icons/fa";

import AdminLayout from "../../layouts/AdminLayout";
import { getDashboardStats } from "../../services/dashboardService";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalMessages: 0,
    unreadMessages: 0,
    totalVisitors: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const data = await getDashboardStats();
      setStats(data || {});
    } catch (error) {
      console.error("Dashboard statistics loading error:", error);
    } finally {
      setLoading(false);
    }
  }

  const cards = [
    {
      title: "Total Projects",
      value: stats.totalProjects,
      icon: <FaFolderOpen size={20} />,
      id: "METRIC_01",
      accent: "cyan",
      badge: "ACTIVE",
    },
    {
      title: "Total Messages",
      value: stats.totalMessages,
      icon: <FaEnvelope size={20} />,
      id: "METRIC_02",
      accent: "blue",
      badge: "LOGGED",
    },
    {
      title: "Unread Inquiries",
      value: stats.unreadMessages,
      icon: <FaEnvelopeOpenText size={20} />,
      id: "METRIC_03",
      accent: stats.unreadMessages > 0 ? "emerald" : "cyan",
      badge: stats.unreadMessages > 0 ? "ATTN_REQ" : "RESOLVED",
    },
    {
      title: "Portfolio Views",
      value: stats.totalVisitors,
      icon: <FaEye size={20} />,
      id: "METRIC_04",
      accent: "sky",
      badge: "LIVE",
    },
    {
      title: "Active Admins",
      value: 1,
      icon: <FaUserShield size={20} />,
      id: "METRIC_05",
      accent: "indigo",
      badge: "ROOT",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-10 selection:bg-cyan-500 selection:text-black">
        {/* 1. DASHBOARD HEADER & CONSOLE IDENTITY */}
        <div className="flex flex-col justify-between gap-4 border-b border-cyan-500/15 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3.5 py-1 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse" />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                SYS_CONSOLE // OVERVIEW
              </span>
            </div>

            <h1 className="font-['Orbitron'] text-3xl font-black tracking-wide text-white sm:text-4xl">
              System{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                Telemetry
              </span>
            </h1>

            <p className="mt-2 font-['JetBrains_Mono'] text-xs text-slate-400 sm:text-sm">
              Real-time portfolio metrics, inbound communication channels, and active deployments.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
            <span>METRICS_SYNC: LIVE</span>
          </div>
        </div>

        {/* 2. LOADING STATE */}
        {loading ? (
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#080f1e]/85 p-12 text-center shadow-[0_0_30px_rgba(0,240,255,0.06)] backdrop-blur-2xl">
            <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/60" />

            <div className="flex flex-col items-center justify-center gap-3">
              <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] animate-ping" />
              <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-cyan-300">
                GATHERING_SYSTEM_TELEMETRY...
              </p>
            </div>
          </div>
        ) : (
          /* 3. TACTICAL HUD METRICS GRID */
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {cards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="
                  group relative overflow-hidden rounded-3xl border border-cyan-500/20
                  bg-[#080f1e]/85 p-7 shadow-[0_0_30px_rgba(0,240,255,0.06)] backdrop-blur-2xl
                  transition-all duration-300 hover:border-cyan-400/50 hover:bg-[#0c162c]
                  hover:shadow-[0_0_35px_rgba(0,240,255,0.18)]
                "
              >
                {/* Tactical HUD Corner Marks */}
                <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
                <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
                <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
                <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />

                {/* Ambient Radial Hover Backing */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Sub-Telemetry Header */}
                <div className="flex items-center justify-between border-b border-cyan-500/10 pb-3">
                  <span className="font-mono text-[9px] font-bold tracking-widest text-cyan-400/70 uppercase">
                    {card.id}
                  </span>
                  <span className="rounded border border-cyan-400/30 bg-cyan-950/60 px-2 py-0.5 font-mono text-[9px] font-bold text-cyan-300 shadow-inner">
                    {card.badge}
                  </span>
                </div>

                {/* Metric Value & Icon Reactor */}
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <h2 className="font-['Orbitron'] text-4xl font-black tracking-tight text-white drop-shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-colors group-hover:text-cyan-200">
                      {card.value}
                    </h2>
                    <p className="mt-1 font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-wider text-slate-400 transition-colors group-hover:text-slate-200">
                      {card.title}
                    </p>
                  </div>

                  {/* Icon Reactor Core */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-950/40 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-transform duration-300 group-hover:scale-110 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                    {card.icon}
                  </div>
                </div>

                {/* Bottom Laser Bar Accent */}
                <div className="mt-5 h-[2px] w-full rounded-full bg-slate-900 overflow-hidden">
                  <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-[0_0_6px_#00f0ff] transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;