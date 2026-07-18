// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";


// function HeroContent() {

//   return (

//     <div className="max-w-2xl">

// <motion.div

// initial={{
// opacity:0,
// y:20
// }}

// animate={{
// opacity:1,
// y:0
// }}

// className="
// mb-6
// inline-flex
// items-center
// gap-2
// rounded-full
// border
// border-cyan-400/20
// bg-cyan-400/10
// px-5
// py-2
// text-sm
// text-cyan-300
// backdrop-blur-xl
// "

// >

// <span className="
// h-2
// w-2
// rounded-full
// bg-green-400
// animate-pulse
// ">
// </span>

// Available for opportunities

// </motion.div>
//       {/* Greeting */}
//       <motion.p
//         initial={{
//           opacity:0,
//           y:20
//         }}
//         animate={{
//           opacity:1,
//           y:0
//         }}
//         transition={{
//           duration:0.6
//         }}
//         className="
//         mb-5
//         text-lg
//         font-medium
//         text-cyan-400
//         "
//       >
//         👋 Hello, I'm
//       </motion.p>



//       {/* Name */}
//       <motion.h1
//         initial={{
//           opacity:0,
//           y:30
//         }}
//         animate={{
//           opacity:1,
//           y:0
//         }}
//         transition={{
//           duration:0.7
//         }}
//         className="
//         text-5xl
//         font-extrabold
//         leading-tight
//         text-white
//         sm:text-6xl
//         lg:text-7xl
//         "
//       >

//         Abdulletif
//         <br />

//         <span
//         className="
//         bg-gradient-to-r
//         from-cyan-400
//         via-blue-500
//         to-indigo-500
//         bg-clip-text
//         text-transparent
//         "
//         >
//           Ylkal Abate
//         </span>

//       </motion.h1>



//       {/* Animated Role */}
//       <motion.div
//         initial={{
//           opacity:0
//         }}
//         animate={{
//           opacity:1
//         }}
//         transition={{
//           delay:0.4
//         }}
//         className="
//         mt-6
//         text-2xl
//         font-semibold
//         text-slate-300
//         "
//       >

//         <TypeAnimation
//           sequence={[
//             "Software Engineer",
//             2000,
//             "Full Stack Developer",
//             2000,
//             "React + Node.js Developer",
//             2000,
//             "Problem Solver",
//             2000
//           ]}
//           speed={50}
//           repeat={Infinity}
//         />

//       </motion.div>




//       {/* Description */}
//       <motion.p

//         initial={{
//           opacity:0,
//           y:20
//         }}

//         animate={{
//           opacity:1,
//           y:0
//         }}

//         transition={{
//           delay:0.6
//         }}

//         className="
//         mt-6
//         max-w-xl
//         text-lg
//         leading-relaxed
//         text-slate-400
//         "

//       >

//         Software Engineer passionate about building scalable
//         full-stack applications, creating clean user experiences,
//         and solving real-world problems through modern web technologies.

//       </motion.p>





//       {/* Buttons */}
//       <motion.div

//         initial={{
//           opacity:0,
//           y:20
//         }}

//         animate={{
//           opacity:1,
//           y:0
//         }}

//         transition={{
//           delay:0.8
//         }}

//         className="
//         mt-8
//         flex
//         flex-wrap
//         gap-4
//         "

//       >


//         <a
//         href="#projects"
//         className="
//         flex
//         items-center
//         gap-2
//         rounded-xl
//         bg-gradient-to-r
//         from-cyan-500
//         to-blue-600
//         px-7
//         py-3
//         font-semibold
//         text-white
//         shadow-lg
//         shadow-cyan-500/30
//         transition
//         hover:scale-105
//         "
//         >

//           View Projects

//           <FaArrowRight/>

//         </a>



//         <a
//         href="/resume.pdf"
//         className="
//         rounded-xl
//         border
//         border-slate-700
//         px-7
//         py-3
//         font-semibold
//         text-white
//         transition
//         hover:border-cyan-400
//         hover:text-cyan-400
//         "
//         >

//           Download CV

//         </a>


//       </motion.div>





//       {/* Social Links */}
//       <div
//       className="
//       mt-10
//       flex
//       gap-5
//       "
//       >

//         <a
//         href="https://github.com/let-if"
//         target="_blank"
//         rel="noreferrer"
//         className="
//         text-slate-400
//         transition
//         hover:text-cyan-400
//         "
//         >

//           <FaGithub size={28}/>

//         </a>



//         <a
//         href="https://www.linkedin.com/in/letif-ylkal-585463411"
//         target="_blank"
//         rel="noreferrer"
//         className="
//         text-slate-400
//         transition
//         hover:text-cyan-400
//         "
//         >

//           <FaLinkedin size={28}/>

//         </a>


//       </div>



//     </div>

//   );

// }


// // export default HeroContent;
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";

// import {
//   FaGithub,
//   FaLinkedin,
//   FaArrowRight,
//   FaDownload
// } from "react-icons/fa";
// import {
// useEffect,
// useState
// }
// from "react";


// import {
// getPublicProfile
// }
// from "../../../services/profileService";

// import { CV_URL } from "../../../constants/cv";



// function HeroContent() {


//   return (

//     <div className="max-w-2xl">



//       <motion.div

//         initial={{
//           opacity:0,
//           y:20
//         }}

//         animate={{
//           opacity:1,
//           y:0
//         }}

//         className="
//           mb-6
//           inline-flex
//           items-center
//           gap-2
//           rounded-full
//           border
//           border-cyan-400/20
//           bg-cyan-400/10
//           px-5
//           py-2
//           text-sm
//           text-cyan-300
//           backdrop-blur-xl
//         "

//       >

//         <span
//           className="
//             h-2
//             w-2
//             rounded-full
//             bg-green-400
//             animate-pulse
//           "
//         />

//         Available for opportunities


//       </motion.div>





//       <motion.p

//         initial={{
//           opacity:0,
//           y:20
//         }}

//         animate={{
//           opacity:1,
//           y:0
//         }}

//         transition={{
//           duration:0.6
//         }}

//         className="
//           mb-5
//           text-lg
//           font-medium
//           text-cyan-400
//         "

//       >

//         👋 Hello, I'm

//       </motion.p>





//       <motion.h1

//         initial={{
//           opacity:0,
//           y:30
//         }}

//         animate={{
//           opacity:1,
//           y:0
//         }}

//         transition={{
//           duration:0.7
//         }}

//         className="
//           text-5xl
//           font-extrabold
//           leading-tight
//           text-white
//           sm:text-6xl
//           lg:text-7xl
//         "

//       >

//         Abdulletif
//         <br />


//         <span

//           className="
//             bg-gradient-to-r
//             from-cyan-400
//             via-blue-500
//             to-indigo-500
//             bg-clip-text
//             text-transparent
//           "

//         >

//           Ylkal Abate

//         </span>


//       </motion.h1>







//       <motion.div

//         initial={{
//           opacity:0
//         }}

//         animate={{
//           opacity:1
//         }}

//         transition={{
//           delay:0.4
//         }}

//         className="
//           mt-6
//           text-2xl
//           font-semibold
//           text-slate-300
//         "

//       >

//         <TypeAnimation

//           sequence={[
//             "Software Engineer",
//             2000,
//             "Full Stack Developer",
//             2000,
//             "React + Node.js Developer",
//             2000,
//             "Problem Solver",
//             2000
//           ]}

//           speed={50}

//           repeat={Infinity}

//         />

//       </motion.div>







//       <motion.p

//         initial={{
//           opacity:0,
//           y:20
//         }}

//         animate={{
//           opacity:1,
//           y:0
//         }}

//         transition={{
//           delay:0.6
//         }}

//         className="
//           mt-6
//           max-w-xl
//           text-lg
//           leading-relaxed
//           text-slate-400
//         "

//       >

//         Software Engineer passionate about building scalable
//         full-stack applications, creating clean user experiences,
//         and solving real-world problems through modern web technologies.

//       </motion.p>









//       {/* Buttons */}

//       <motion.div


//         initial={{
//           opacity:0,
//           y:20
//         }}


//         animate={{
//           opacity:1,
//           y:0
//         }}


//         transition={{
//           delay:0.8
//         }}


//         className="
//           mt-8
//           flex
//           flex-wrap
//           gap-4
//         "

//       >





//         <a

//           href="#projects"

//           className="
//             flex
//             items-center
//             gap-2
//             rounded-xl
//             bg-gradient-to-r
//             from-cyan-500
//             to-blue-600
//             px-7
//             py-3
//             font-semibold
//             text-white
//             shadow-lg
//             shadow-cyan-500/30
//             transition
//             hover:scale-105
//           "

//         >

//           View Projects

//           <FaArrowRight />

//         </a>







//         {/* CV Button */}

//         <a

//           href={CV_URL}

//           download

//           className="
//             flex
//             items-center
//             gap-2
//             rounded-xl
//             border
//             border-slate-700
//             px-7
//             py-3
//             font-semibold
//             text-white
//             transition
//             hover:border-cyan-400
//             hover:text-cyan-400
//           "

//         >

//           Download CV

//           <FaDownload />

//         </a>





//       </motion.div>







//       {/* Social Links */}

//       <div

//         className="
//           mt-10
//           flex
//           gap-5
//         "

//       >


//         <a

//           href="https://github.com/let-if"

//           target="_blank"

//           rel="noreferrer"

//           className="
//             text-slate-400
//             transition
//             hover:text-cyan-400
//           "

//         >

//           <FaGithub size={28}/>

//         </a>





//         <a

//           href="https://www.linkedin.com/in/letif-ylkal-585463411"

//           target="_blank"

//           rel="noreferrer"

//           className="
//             text-slate-400
//             transition
//             hover:text-cyan-400
//           "

//         >

//           <FaLinkedin size={28}/>

//         </a>



//       </div>




//     </div>

//   );

// }


// export default HeroContent;
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaDownload
} from "react-icons/fa";

import {
  useEffect,
  useState
} from "react";


import {
  getPublicProfile
} from "../../../services/profileService";




function HeroContent() {



const [profile,setProfile]=useState(null);





useEffect(()=>{


getPublicProfile()

.then(data=>{

setProfile(data);

})

.catch(error=>{

console.log(
"Profile loading failed:",
error
);

});


},[]);





const cvUrl =

profile?.cv

?

`http://localhost:5000${profile.cv}`

:

"#";






return (

<div className="max-w-2xl">



<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

className="
mb-6
inline-flex
items-center
gap-2
rounded-full
border
border-cyan-400/20
bg-cyan-400/10
px-5
py-2
text-sm
text-cyan-300
backdrop-blur-xl
"

>

<span
className="
h-2
w-2
rounded-full
bg-green-400
animate-pulse
"
/>

Available for opportunities


</motion.div>







<motion.p

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.6
}}

className="
mb-5
text-lg
font-medium
text-cyan-400
"

>

👋 Hello, I'm

</motion.p>








<motion.h1

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.7
}}

className="
text-5xl
font-extrabold
leading-tight
text-white
sm:text-6xl
lg:text-7xl
"

>


{

profile?.name

?

profile.name.split(" ")[0]

:

"Abdulletif"

}


<br/>


<span

className="
bg-gradient-to-r
from-cyan-400
via-blue-500
to-indigo-500
bg-clip-text
text-transparent
"

>

{

profile?.name

?

profile.name
.split(" ")
.slice(1)
.join(" ")

:

"Ylkal Abate"

}


</span>


</motion.h1>










<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:0.4
}}

className="
mt-6
text-2xl
font-semibold
text-slate-300
"

>


<TypeAnimation

sequence={[

profile?.title || "Software Engineer",

2000,

"Full Stack Developer",

2000,

"React + Node.js Developer",

2000,

"Problem Solver",

2000

]}

speed={50}

repeat={Infinity}

/>


</motion.div>









<motion.p

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:0.6
}}

className="
mt-6
max-w-xl
text-lg
leading-relaxed
text-slate-400
"

>


{

profile?.bio

||

"Software Engineer passionate about building scalable full-stack applications, creating clean user experiences, and solving real-world problems through modern web technologies."

}



</motion.p>











<motion.div


initial={{
opacity:0,
y:20
}}


animate={{
opacity:1,
y:0
}}


transition={{
delay:0.8
}}


className="
mt-8
flex
flex-wrap
gap-4
"

>






<a

href="#projects"

className="
flex
items-center
gap-2
rounded-xl
bg-gradient-to-r
from-cyan-500
to-blue-600
px-7
py-3
font-semibold
text-white
shadow-lg
shadow-cyan-500/30
transition
hover:scale-105
"

>

View Projects

<FaArrowRight/>


</a>








<a

href={cvUrl}

download

className="
flex
items-center
gap-2
rounded-xl
border
border-slate-700
px-7
py-3
font-semibold
text-white
transition
hover:border-cyan-400
hover:text-cyan-400
"

>


Download CV


<FaDownload/>


</a>








</motion.div>










<div

className="
mt-10
flex
gap-5
"

>



<a

href={
profile?.github ||
"https://github.com/let-if"
}

target="_blank"

rel="noreferrer"

className="
text-slate-400
transition
hover:text-cyan-400
"

>

<FaGithub size={28}/>


</a>







<a

href={
profile?.linkedin ||
"https://www.linkedin.com/in/letif-ylkal-585463411"
}

target="_blank"

rel="noreferrer"

className="
text-slate-400
transition
hover:text-cyan-400
"

>


<FaLinkedin size={28}/>


</a>



</div>





</div>


);


}


export default HeroContent;