
// import {
//   Link,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";

// import {
//   FaHome,
//   FaProjectDiagram,
//   FaEnvelope,
//   FaFilePdf,
//   FaUser,
//   FaSignOutAlt,
//   FaCode,
// } from "react-icons/fa";

// function AdminSidebar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   function logout() {
//     localStorage.removeItem("adminToken");
//     localStorage.removeItem("admin");

//     navigate("/admin/login");
//   }

//   const links = [
//     {
//       name: "Dashboard",
//       path: "/admin/dashboard",
//       icon: <FaHome />,
//     },
//     {
//       name: "Projects",
//       path: "/admin/projects",
//       icon: <FaProjectDiagram />,
//     },
//     {
//       name: "Messages",
//       path: "/admin/messages",
//       icon: <FaEnvelope />,
//     },
//     {
//       name: "Resume",
//       path: "/admin/resume",
//       icon: <FaFilePdf />,
//     },
//     {
//       name: "Profile",
//       path: "/admin/profile",
//       icon: <FaUser />,
//     },
//   ];

//   return (
   
//     <aside
// className="
// flex
// w-80
// flex-col
// justify-between
// border-r
// border-cyan-400/10
// bg-gradient-to-b
// from-slate-950/95
// via-slate-900/95
// to-black/95
// backdrop-blur-3xl
// shadow-[0_0_60px_rgba(6,182,212,0.08)]
// overflow-hidden
// h-screen
// "
// >
//       {/* Decorative Glow */}
//       <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
//       <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

//       <div className="relative z-10 p-8">
//         {/* Logo */}
//         <div className="mb-14 flex items-center gap-4">
//           <div
//             className="
//             flex
//             h-16
//             w-16
//             items-center
//             justify-center
//             rounded-2xl
//             bg-gradient-to-br
//             from-cyan-500
//             to-blue-600
//             text-2xl
//             text-white
//             shadow-lg
//             shadow-cyan-500/40
//             transition
//             duration-500
//             hover:rotate-6
//             hover:scale-110
//           "
//           >
//             <FaCode />
//           </div>

//           <div>
//             <h2 className="text-3xl font-extrabold text-white">
//               Portfolio
//             </h2>

//             <p className="text-sm text-cyan-400">
//               Admin CMS
//             </p>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="space-y-3">
//           {links.map((item) => {
//             const active = location.pathname === item.path;

//             return (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`
//                   group
//                   relative
//                   flex
//                   items-center
//                   gap-4
//                   overflow-hidden
//                   rounded-2xl
//                   px-5
//                   py-4
//                   transition-all
//                   duration-300
//                   ${
//                     active
//                       ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
//                       : "text-slate-300 hover:bg-white/5 hover:text-cyan-400 hover:translate-x-2"
//                   }
//                 `}
//               >
//                 {!active && (
//                   <span
//                     className="
//                     absolute
//                     left-0
//                     top-0
//                     h-full
//                     w-1
//                     origin-center
//                     scale-y-0
//                     rounded-r-full
//                     bg-cyan-400
//                     transition-transform
//                     duration-300
//                     group-hover:scale-y-100
//                   "
//                   />
//                 )}

//                 <span className="text-xl">
//                   {item.icon}
//                 </span>

//                 <span className="font-semibold tracking-wide">
//                   {item.name}
//                 </span>
//               </Link>
//             );
//           })}
//         </nav>
//       </div>

//       {/* Bottom */}
//       <div className="relative z-10 border-t border-white/10 p-8">
//         <div
//           className="
//           mb-6
//           rounded-2xl
//           border
//           border-cyan-400/20
//           bg-cyan-500/5
//           p-5
//         "
//         >
//           <h3 className="text-lg font-bold text-white">
//             Portfolio CMS
//           </h3>

//           <p className="mt-2 text-sm leading-6 text-slate-400">
//             Manage projects, messages, resume,
//             and your public portfolio from one
//             modern dashboard.
//           </p>
//         </div>

//         <button
//           onClick={logout}
//           className="
//           group
//           flex
//           w-full
//           items-center
//           justify-center
//           gap-3
//           rounded-2xl
//           border
//           border-red-500/20
//           bg-red-500/10
//           px-5
//           py-4
//           font-semibold
//           text-red-400
//           transition-all
//           duration-300
//           hover:scale-[1.03]
//           hover:border-red-400
//           hover:bg-red-500
//           hover:text-white
//           hover:shadow-lg
//           hover:shadow-red-500/30
//         "
//         >
//           <FaSignOutAlt className="transition group-hover:rotate-12" />

//           Logout
//         </button>

//         <p className="mt-8 text-center text-xs text-slate-500">
//           Portfolio CMS • v1.0
//         </p>
//       </div>
//     </aside>
//   );
// }

// export default AdminSidebar;
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaProjectDiagram,
  FaEnvelope,
  FaFilePdf,
  FaUser,
  FaSignOutAlt,
  FaTerminal,
} from "react-icons/fa";

function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  function logout() {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");
    navigate("/admin/login");
  }

  const links = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <FaHome size={15} />,
    },
    {
      name: "Projects",
      path: "/admin/projects",
      icon: <FaProjectDiagram size={15} />,
    },
    {
      name: "Messages",
      path: "/admin/messages",
      icon: <FaEnvelope size={15} />,
    },
    {
      name: "Resume",
      path: "/admin/resume",
      icon: <FaFilePdf size={15} />,
    },
    {
      name: "Profile",
      path: "/admin/profile",
      icon: <FaUser size={15} />,
    },
  ];

  return (
    <aside
      className="
        sticky top-0 z-40 flex h-screen w-72 shrink-0 flex-col justify-between
        border-r border-cyan-500/20 bg-[#080f1e]/95 backdrop-blur-2xl
        selection:bg-cyan-500 selection:text-black
      "
    >
      {/* Background Lighting Accents */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]" />

      {/* TOP: Identity & Navigation Routes */}
      <div className="relative z-10 flex flex-col p-6">
        {/* Brand */}
        <div className="mb-8 flex items-center gap-3.5 border-b border-cyan-500/15 pb-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/40 bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.25)]">
            <FaTerminal size={15} />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h2 className="font-['Orbitron'] text-base font-bold tracking-wider text-white">
                LETFAW<span className="text-cyan-400">.</span>
              </h2>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
            </div>
            <p className="text-[11px] font-medium tracking-wide text-slate-400">
              Admin Console
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5">
          {links.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  group relative flex items-center gap-3 rounded-xl px-4 py-3
                  text-xs font-semibold tracking-wide transition-all duration-200
                  ${
                    active
                      ? "border border-cyan-400/60 bg-cyan-950/40 text-cyan-200 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                      : "border border-transparent text-slate-400 hover:border-cyan-500/20 hover:bg-slate-900/60 hover:text-cyan-300"
                  }
                `}
              >
                {active && (
                  <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
                )}

                <span
                  className={`transition-colors ${
                    active
                      ? "text-cyan-400"
                      : "text-slate-400 group-hover:text-cyan-300"
                  }`}
                >
                  {item.icon}
                </span>

                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* BOTTOM: Info Card & Logout */}
      <div className="relative z-10 border-t border-cyan-500/15 p-6">
        <div className="mb-4 rounded-xl border border-cyan-500/15 bg-slate-950/60 p-3.5">
          <p className="text-xs font-semibold text-white">
            Portfolio Management
          </p>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
            Control live projects, view inquiries, and manage your public profile.
          </p>
        </div>

        <button
          onClick={logout}
          className="
            flex w-full items-center justify-center gap-2 rounded-xl
            border border-red-500/30 bg-red-950/20 py-3
            text-xs font-semibold text-red-300 transition-all duration-200
            hover:border-red-400 hover:bg-red-900/40 hover:text-white
            hover:shadow-[0_0_15px_rgba(239,68,68,0.25)] active:scale-98 cursor-pointer
          "
        >
          <FaSignOutAlt size={12} />
          <span>Sign Out</span>
        </button>

        <p className="mt-4 text-center text-[10px] text-slate-500">
          Portfolio CMS &bull; v2.0
        </p>
      </div>
    </aside>
  );
}

export default AdminSidebar;