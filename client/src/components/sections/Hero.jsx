
// import { motion } from "framer-motion";


// import HeroContent from "./hero/HeroContent";
// import HeroImage from "./hero/HeroImage";
// import FloatingCards from "./hero/FloatingCards";



// function Hero(){



// return(



// <section


// id="hero"


// className="

// relative

// min-h-screen

// overflow-hidden

// pt-28

// transition-colors

// duration-500

// bg-white

// text-slate-900

// dark:bg-slate-950

// dark:text-white

// sm:pt-32

// lg:pt-40

// "


// >





// {/* BACKGROUND GLOW */}



// <div


// className="

// absolute

// left-1/2

// top-1/3

// -z-10

// h-[500px]

// w-[500px]

// -translate-x-1/2

// rounded-full

// bg-cyan-400/20

// blur-[120px]

// transition-opacity

// duration-500

// dark:bg-cyan-500/20

// "


// />






// {/* SECOND LIGHT MODE GLOW */}



// <div


// className="

// absolute

// right-0

// top-20

// -z-10

// h-[300px]

// w-[300px]

// rounded-full

// bg-blue-400/10

// blur-[100px]

// dark:hidden

// "


// />








// <div


// className="

// mx-auto

// grid

// max-w-7xl

// items-center

// gap-16

// px-6

// lg:grid-cols-2

// lg:gap-20

// lg:px-8

// "


// >






// {/* HERO TEXT */}


// <HeroContent/>









// {/* HERO IMAGE */}



// <div


// className="

// relative

// "


// >


// <HeroImage/>


// <FloatingCards/>


// </div>





// </div>









// {/* SCROLL INDICATOR */}



// <motion.div



// animate={{

// y:[0,10,0]

// }}



// transition={{

// duration:1.5,

// repeat:Infinity

// }}




// className="

// absolute

// bottom-8

// left-1/2

// hidden

// -translate-x-1/2

// flex-col

// items-center

// gap-3

// md:flex

// "



// >







// <span


// className="

// text-xs

// uppercase

// tracking-[0.3em]

// text-slate-500

// dark:text-slate-400

// "


// >


// Scroll


// </span>








// <div


// className="

// h-10

// w-[2px]

// bg-gradient-to-b

// from-cyan-400

// to-transparent

// "


// />





// </motion.div>







// </section>



// );


// }



// export default Hero;
import React from "react";
import { motion } from "framer-motion";

import HeroContent from "./hero/HeroContent";
import HeroImage from "./hero/HeroImage";
import FloatingCards from "./hero/FloatingCards";

function Hero() {
  return (
    <section
      id="hero"
      className="
        relative min-h-screen overflow-hidden bg-[#030712] pt-28
        text-white selection:bg-cyan-500 selection:text-black
        sm:pt-32 lg:pt-40
      "
    >
      {/* 1. ATMOSPHERIC OBSIDIAN LIGHTING GLOWS */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[160px]" />
      <div className="pointer-events-none absolute right-0 top-20 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute left-10 bottom-20 -z-10 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[140px]" />

      {/* 2. SUBTLE HUD BACKGROUND MATRIX GRID */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#00f0ff08_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* HERO TEXT & ACTIONS */}
        <HeroContent />

        {/* HERO IMAGE & FLOATING TELEMETRY WIDGETS */}
        <div className="relative">
          <HeroImage />
          <FloatingCards />
        </div>
      </div>

      {/* 3. TACTICAL HUD SCROLL BEACON */}
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute bottom-8 left-1/2 hidden -translate-x-1/2
          flex-col items-center gap-2 md:flex
        "
      >
        <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-[#080f1e]/80 px-3 py-1 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse" />
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-300">
            SYS_SCROLL
          </span>
        </div>

        <div className="relative h-10 w-[1.5px] overflow-hidden bg-slate-800">
          <motion.div
            animate={{
              y: [-40, 40],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-6 w-full bg-gradient-to-b from-transparent via-cyan-400 to-white shadow-[0_0_8px_#00f0ff]"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;