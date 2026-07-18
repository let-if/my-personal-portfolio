import { motion } from "framer-motion";

import profile from "../../../assets/images/profile.png";


function HeroImage() {

  return (

    <div className="relative flex justify-center">


      {/* Background Glow */}
      <div
        className="
        absolute
        -inset-10
        rounded-full
        bg-cyan-500/20
        blur-3xl
        "
      />



      {/* Image Container */}
      <motion.div

        initial={{
          opacity:0,
          scale:0.8
        }}

        animate={{
          opacity:1,
          scale:1
        }}

        transition={{
          duration:0.8
        }}

        className="
        relative
        h-[320px]
        w-[320px]
        sm:h-[380px]
        sm:w-[380px]
        lg:h-[430px]
        lg:w-[430px]
        "

      >



        {/* Animated Border */}
        <div
          className="
          absolute
          inset-0
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-indigo-600
          animate-spin-slow
          "
        />



        {/* Inner Frame */}
        <div
          className="
          absolute
          inset-[6px]
          overflow-hidden
          rounded-full
          bg-slate-950
          "
        >


          <img

            src={profile}

            alt="Abdulletif Ylkal Abate"

            className="
            h-full
            w-full
            object-cover
            "
          />


        </div>


      </motion.div>





      {/* React Card */}
      <motion.div

        animate={{
          y:[0,-15,0]
        }}

        transition={{
          duration:3,
          repeat:Infinity
        }}

        className="
        absolute
        left-0
        top-20
        rounded-2xl
        border
        border-white/10
        bg-slate-900/80
        px-5
        py-3
        text-sm
        font-semibold
        text-cyan-400
        backdrop-blur-xl
        "

      >

        React.js

      </motion.div>






      {/* Node Card */}
      <motion.div

        animate={{
          y:[0,15,0]
        }}

        transition={{
          duration:3,
          repeat:Infinity
        }}

        className="
        absolute
        bottom-20
        right-0
        rounded-2xl
        border
        border-white/10
        bg-slate-900/80
        px-5
        py-3
        text-sm
        font-semibold
        text-green-400
        backdrop-blur-xl
        "

      >

        Node.js

      </motion.div>




      {/* PostgreSQL Card */}
      <motion.div

        animate={{
          y:[0,-10,0]
        }}

        transition={{
          duration:2.5,
          repeat:Infinity
        }}

        className="
        absolute
        right-10
        top-0
        rounded-2xl
        border
        border-white/10
        bg-slate-900/80
        px-5
        py-3
        text-sm
        font-semibold
        text-blue-400
        backdrop-blur-xl
        "

      >

        PostgreSQL

      </motion.div>



    </div>

  );

}


export default HeroImage;