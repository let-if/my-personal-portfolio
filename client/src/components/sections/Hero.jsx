
// import { motion } from "framer-motion";

// import HeroContent from "./hero/HeroContent";
// import HeroImage from "./hero/HeroImage";
// import FloatingCards from "./hero/FloatingCards";


// function Hero() {


//   return (

//     <section

//       id="hero"

//       className="
//         relative
//         min-h-screen
//         overflow-hidden
//         pt-28
//         sm:pt-32
//         lg:pt-40
//       "

//     >



//       {/* Background Glow */}

//       <div

//         className="
//           absolute
//           left-1/2
//           top-1/3
//           -z-10
//           h-[500px]
//           w-[500px]
//           -translate-x-1/2
//           rounded-full
//           bg-cyan-500/20
//           blur-[120px]
//         "

//       />





//       <div

//         className="
//           mx-auto
//           grid
//           max-w-7xl
//           items-center
//           gap-16
//           px-6
//           lg:grid-cols-2
//           lg:gap-20
//           lg:px-8
//         "

//       >



//         {/* Hero Text Content */}

//         <HeroContent />





//         {/* Hero Image */}

//         <div

//           className="
//             relative
//           "

//         >


//           <HeroImage />


//           <FloatingCards />


//         </div>



//       </div>







//       {/* Scroll Indicator */}

//       <motion.div


//         animate={{
//           y:[0,10,0]
//         }}


//         transition={{
//           duration:1.5,
//           repeat:Infinity
//         }}


//         className="
//           absolute
//           bottom-8
//           left-1/2
//           hidden
//           -translate-x-1/2
//           flex-col
//           items-center
//           gap-3
//           md:flex
//         "

//       >



//         <span

//           className="
//             text-xs
//             uppercase
//             tracking-[0.3em]
//             text-slate-500
//           "

//         >

//           Scroll

//         </span>




//         <div

//           className="
//             h-10
//             w-[2px]
//             bg-gradient-to-b
//             from-cyan-400
//             to-transparent
//           "

//         />



//       </motion.div>



//     </section>


//   );

// }


// export default Hero;
import { motion } from "framer-motion";


import HeroContent from "./hero/HeroContent";
import HeroImage from "./hero/HeroImage";
import FloatingCards from "./hero/FloatingCards";



function Hero(){



return(



<section


id="hero"


className="

relative

min-h-screen

overflow-hidden

pt-28

transition-colors

duration-500

bg-white

text-slate-900

dark:bg-slate-950

dark:text-white

sm:pt-32

lg:pt-40

"


>





{/* BACKGROUND GLOW */}



<div


className="

absolute

left-1/2

top-1/3

-z-10

h-[500px]

w-[500px]

-translate-x-1/2

rounded-full

bg-cyan-400/20

blur-[120px]

transition-opacity

duration-500

dark:bg-cyan-500/20

"


/>






{/* SECOND LIGHT MODE GLOW */}



<div


className="

absolute

right-0

top-20

-z-10

h-[300px]

w-[300px]

rounded-full

bg-blue-400/10

blur-[100px]

dark:hidden

"


/>








<div


className="

mx-auto

grid

max-w-7xl

items-center

gap-16

px-6

lg:grid-cols-2

lg:gap-20

lg:px-8

"


>






{/* HERO TEXT */}


<HeroContent/>









{/* HERO IMAGE */}



<div


className="

relative

"


>


<HeroImage/>


<FloatingCards/>


</div>





</div>









{/* SCROLL INDICATOR */}



<motion.div



animate={{

y:[0,10,0]

}}



transition={{

duration:1.5,

repeat:Infinity

}}




className="

absolute

bottom-8

left-1/2

hidden

-translate-x-1/2

flex-col

items-center

gap-3

md:flex

"



>







<span


className="

text-xs

uppercase

tracking-[0.3em]

text-slate-500

dark:text-slate-400

"


>


Scroll


</span>








<div


className="

h-10

w-[2px]

bg-gradient-to-b

from-cyan-400

to-transparent

"


/>





</motion.div>







</section>



);


}



export default Hero;