import { useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";

import { navigation } from "../../constants/navigation";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
        aria-label="Open menu"
      >
        <HiBars3 size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.aside
              className="fixed top-0 right-0 z-50 flex h-screen w-80 max-w-[85%] flex-col border-l border-white/10 bg-slate-950/95 backdrop-blur-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 p-6">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Letfaw
                  </h2>

                  <p className="text-sm text-slate-400">
                    Full Stack Developer
                  </p>
                </div>

                <button
                  onClick={closeMenu}
                  className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
                  aria-label="Close menu"
                >
                  <HiXMark size={24} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex flex-1 flex-col p-6">
                {navigation.map((item) => (
                  <Link
                    key={item.id}
                    to={item.to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    spy={true}
                    onClick={closeMenu}
                    className="cursor-pointer rounded-xl px-4 py-4 text-lg font-medium text-slate-300 transition-all duration-300 hover:bg-slate-800 hover:text-cyan-400"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>

              {/* Footer */}
              <div className="border-t border-white/10 p-6">
                <a
                  href="/resume.pdf"
                  className="block rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:scale-[1.02]"
                >
                  Download Resume
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