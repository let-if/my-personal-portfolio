import { motion } from "framer-motion";
import { particles } from "../../../data/particles";

function HeroBackground() {

  return (

    <div className="
pointer-events-none
absolute
inset-0
-z-10
overflow-hidden
will-change-transform
">


      {/* Grid */}
      <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
        bg-[size:70px_70px]
        "
      />



      {/* Cyan Light */}
      <motion.div

        animate={{
          x:[0,100,0],
          y:[0,-80,0]
        }}

        transition={{
          duration:12,
          repeat:Infinity,
          ease:"easeInOut"
        }}

        className="
        absolute
        left-1/4
        top-1/4
        h-[350px]
        w-[350px]
        rounded-full
        bg-cyan-500/20
        blur-[120px]
        "

      />





      {/* Blue Light */}
      <motion.div

        animate={{
          x:[0,-120,0],
          y:[0,100,0]
        }}

        transition={{
          duration:14,
          repeat:Infinity,
          ease:"easeInOut"
        }}

        className="
        absolute
        right-1/4
        top-1/3
        h-[400px]
        w-[400px]
        rounded-full
        bg-blue-500/20
        blur-[140px]
        "

      />





      {/* Floating Dots */}

      {/* {
        Array.from({length:20}).map((_,index)=>(

          <motion.span

          key={index}

          animate={{
            y:[0,-30,0],
            opacity:[0.3,1,0.3]
          }}

          transition={{
            duration:3+index%5,
            repeat:Infinity,
            delay:index*0.2
          }}

          className="
          absolute
          h-1
          w-1
          rounded-full
          bg-cyan-400
          "

          style={{

            left:`${Math.random()*100}%`,

            top:`${Math.random()*100}%`

          }}

          />

        ))
      } */}
{
particles.map((particle,index)=>(

<motion.span

key={index}

animate={{
 y:[0,-30,0],
 opacity:[0.3,1,0.3]
}}

transition={{
 duration:3 + (index % 4),
 repeat:Infinity,
 delay:index * 0.2
}}

className="
absolute
h-1
w-1
rounded-full
bg-cyan-400
"

style={{
 left:particle.left,
 top:particle.top
}}

/>

))
}

    </div>

  );

}


export default HeroBackground;