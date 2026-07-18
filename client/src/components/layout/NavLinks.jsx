import { Link } from "react-scroll";
import { FaGithub, FaDownload } from "react-icons/fa";

import { navigation } from "../../constants/navigation";

function NavLinks() {
  return (
    <div className="flex items-center gap-8">
      {/* Navigation Links */}
      <ul className="flex items-center gap-8">
        {navigation.map((item) => (
          <li key={item.id}>
            <Link
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              activeClass="text-cyan-400"
              className="
                relative
                cursor-pointer
                font-medium
                text-slate-300
                transition-all
                duration-300
                hover:text-white

                after:absolute
                after:-bottom-2
                after:left-0
                after:h-[2px]
                after:w-0
                after:rounded-full
                after:bg-cyan-400
                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* GitHub */}
        <a
          href="https://github.com/let-if"
          target="_blank"
          rel="noreferrer"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-slate-700
            text-slate-300
            transition-all
            duration-300
            hover:border-cyan-400
            hover:text-cyan-400
          "
        >
          <FaGithub size={20} />
        </a>

        {/* Resume */}
        <a
          href="/resume.pdf"
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-5
            py-3
            font-semibold
            text-white
            shadow-lg
            shadow-cyan-500/20
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-cyan-500/40
          "
        >
          <FaDownload />

          Resume
        </a>
      </div>
    </div>
  );
}

export default NavLinks;