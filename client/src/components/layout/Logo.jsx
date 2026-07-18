import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.a
      href="/"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-lg font-extrabold text-white shadow-lg shadow-cyan-500/30">
        L
      </div>

      <div>
        <h2 className="text-lg font-bold tracking-wide text-white">
          Letfaw
        </h2>

        <p className="text-xs text-slate-400">
          Full Stack Developer
        </p>
      </div>
    </motion.a>
  );
}

export default Logo;