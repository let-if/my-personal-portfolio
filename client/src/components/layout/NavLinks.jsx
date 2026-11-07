

// import React from "react";
// import { Link } from "react-scroll";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // <-- Imported here
// import { navigation } from "../../constants/navigation";

// function NavLinks() {
//   return (
//     <div className="flex items-center gap-8">
//       {/* Navigation Links */}
//       <ul className="flex items-center gap-8">
//         {navigation.map((item) => (
//           <li key={item.id}>
//             <Link
//               to={item.to}
//               spy={true}
//               smooth={true}
//               offset={-80}
//               duration={600}
//               activeClass="text-cyan-400"
//               className="
//                 relative
//                 cursor-pointer
//                 font-medium
//                 text-slate-300
//                 transition-all
//                 duration-300
//                 hover:text-white

//                 after:absolute
//                 after:-bottom-2
//                 after:left-0
//                 after:h-[2px]
//                 after:w-0
//                 after:rounded-full
//                 after:bg-cyan-400
//                 after:transition-all
//                 after:duration-300

//                 hover:after:w-full
//               "
//             >
//               {item.title}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* Right Side Action Links */}
//       <div className="flex items-center gap-4">
//         {/* GitHub */}
//         <a
//           href="https://github.com/let-if"
//           target="_blank"
//           rel="noreferrer"
//           className="
//             flex
//             h-11
//             w-11
//             items-center
//             justify-center
//             rounded-xl
//             border
//             border-slate-700
//             text-slate-300
//             transition-all
//             duration-300
//             hover:border-cyan-400
//             hover:text-cyan-400
//           "
//         >
//           <FaGithub size={20} />
//         </a>

//         {/* Live Resume Link */}
//         <a
//           href="https://letif-s-cv.vercel.app/"
//           target="_blank"
//           rel="noreferrer"
//           className="
//             flex
//             items-center
//             gap-2
//             rounded-xl
//             bg-gradient-to-r
//             from-cyan-500
//             to-blue-600
//             px-5
//             py-3
//             font-semibold
//             text-white
//             shadow-lg
//             shadow-cyan-500/20
//             transition-all
//             duration-300
//             hover:scale-105
//             hover:shadow-cyan-500/40
//           "
//         >
//           <FaExternalLinkAlt className="text-sm" />
//           <span>Resume</span>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default NavLinks;
import React from "react";
import { Link } from "react-scroll";
import { navigation } from "../../constants/navigation";

// Links only. The CV button, theme toggle and mobile menu live in Navbar.jsx.
function NavLinks() {
  return (
    <ul
      className="
        flex
        items-center
        gap-0.5
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        p-1
        shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_-12px_rgba(0,0,0,0.6)]
        backdrop-blur-xl
      "
    >
      {(navigation || []).map((item) => (
        <li key={item.to}>
          <Link
            to={item.to}
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            activeClass="!text-white bg-gradient-to-b from-cyan-400/25 to-blue-600/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_0_0_1px_rgba(34,211,238,0.35),0_6px_16px_-8px_rgba(34,211,238,0.7)] after:!opacity-100"
            className="
              relative
              block
              cursor-pointer
              select-none
              whitespace-nowrap
              rounded-xl
              px-3
              py-1.5
              text-[13px]
              font-medium
              text-slate-300
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-white/10
              hover:text-white
              after:absolute
              after:-bottom-0.5
              after:left-1/2
              after:h-1
              after:w-1
              after:-translate-x-1/2
              after:rounded-full
              after:bg-cyan-300
              after:opacity-0
              after:shadow-[0_0_10px_2px_rgba(34,211,238,0.9)]
              after:transition-opacity
              after:duration-300
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-cyan-400
            "
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;