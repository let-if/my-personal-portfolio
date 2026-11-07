
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
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { navigation } from "../../constants/navigation";

function NavLinks() {
  return (
    <div className="flex items-center gap-8">
      {/* Navigation Links */}
      <ul className="flex items-center gap-2">
        {navigation.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              activeClass="!bg-cyan-500 !text-slate-950 !font-extrabold shadow-[0_0_20px_rgba(0,240,255,0.6)]"
              className="
                relative
                cursor-pointer
                rounded-xl
                border
                border-cyan-500/30
                bg-slate-950/80
                px-3.5
                py-2
                font-['Orbitron',sans-serif]
                !text-xs
                !font-bold
                tracking-wider
                !text-white
                transition-all
                duration-300
                hover:border-cyan-400
                hover:bg-cyan-950/60
                hover:!text-cyan-200
                hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]
              "
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Side Action Links */}
      <div className="flex items-center gap-4">
        {/* GitHub */}
        <a
          href="https://github.com/let-if"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-cyan-500/30
            bg-slate-950/80
            !text-white
            transition-all
            duration-300
            hover:border-cyan-400
            hover:bg-cyan-950/60
            hover:!text-cyan-300
            hover:shadow-[0_0_12px_rgba(0,240,255,0.3)]
          "
        >
          <FaGithub size={18} />
        </a>

        {/* Live Resume Link */}
        <a
          href="https://letif-s-cv.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-4
            py-2.5
            font-['Orbitron',sans-serif]
            !text-xs
            !font-bold
            uppercase
            tracking-wider
            !text-white
            shadow-lg
            shadow-cyan-500/20
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-cyan-500/40
          "
        >
          <FaExternalLinkAlt className="text-xs !text-white" />
          <span>Resume</span>
        </a>
      </div>
    </div>
  );
}

export default NavLinks;