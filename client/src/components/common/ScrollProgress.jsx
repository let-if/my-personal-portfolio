import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
      }}
      className="
        fixed
        left-0
        top-0
        z-[9999]
        h-1
        w-full
        origin-left
        bg-gradient-to-r
        from-cyan-400
        to-blue-600
      "
    />
  );
}

export default ScrollProgress;