
// import { motion } from "framer-motion";
// import {
// FaGithub,
// FaLinkedin,
// FaArrowUp,
// FaDownload,
// FaEnvelope,
// } from "react-icons/fa";


// import {
// useEffect,
// useState
// }
// from "react";


// import {
// getPublicProfile
// }
// from "../../services/profileService";


// import { CV_URL } from "../../constants/cv";


// function FooterCTA() {

// const [profile,setProfile]=useState(null);



// useEffect(()=>{


// loadProfile();


// },[]);





// async function loadProfile(){


// try{


// const data =
// await getPublicProfile();


// setProfile(data);


// }
// catch(error){

// console.log(error);

// }


// }

//   const scrollToTop = () => {

//     window.scrollTo({

//       top:0,

//       behavior:"smooth",

//     });

//   };



//   return (

//     <footer

//       className="
//         relative
//         overflow-hidden
//         border-t
//         border-white/10
//         bg-gradient-to-b
//         from-slate-950
//         via-slate-950
//         to-black
//         py-28
//       "

//     >



//       {/* Background Glow */}

//       <div className="absolute inset-0 overflow-hidden">

//         <div className="
//           absolute
//           left-1/2
//           top-20
//           h-80
//           w-80
//           -translate-x-1/2
//           rounded-full
//           bg-cyan-500/10
//           blur-3xl
//         "/>


//         <div className="
//           absolute
//           bottom-10
//           right-10
//           h-56
//           w-56
//           rounded-full
//           bg-blue-500/10
//           blur-3xl
//         "/>

//       </div>





//       <div className="relative mx-auto max-w-7xl px-6">



//         {/* Floating particles */}

//         <div className="
//           absolute
//           inset-0
//           overflow-hidden
//           pointer-events-none
//         ">

//           {[...Array(18)].map((_,index)=>(

//             <motion.div

//               key={index}

//               className="
//                 absolute
//                 h-2
//                 w-2
//                 rounded-full
//                 bg-cyan-400/30
//               "

//               initial={{

//                 opacity:0.2,

//                 y:0

//               }}

//               animate={{

//                 y:[-20,20,-20],

//                 opacity:[0.2,0.7,0.2]

//               }}

//               transition={{

//                 duration:4+(index%4),

//                 repeat:Infinity,

//                 delay:index*0.3

//               }}

//               style={{

//                 left:`${(index*7)%100}%`,

//                 top:`${(index*11)%100}%`

//               }}

//             />

//           ))}

//         </div>







//         {/* CTA */}

//         <motion.div

//           initial={{
//             opacity:0,
//             y:40
//           }}

//           whileInView={{
//             opacity:1,
//             y:0
//           }}

//           viewport={{
//             once:true
//           }}

//           className="text-center"

//         >


//           <p className="
//             mb-4
//             text-sm
//             uppercase
//             tracking-[0.4em]
//             text-cyan-400
//           ">

//             Let's Connect

//           </p>




//           <h2 className="
//             text-5xl
//             font-black
//             text-white
//             md:text-6xl
//           ">

//             Ready to Build Something


//             <span className="
//               block
//               bg-gradient-to-r
//               from-cyan-400
//               to-blue-500
//               bg-clip-text
//               text-transparent
//             ">

//               Extraordinary?

//             </span>


//           </h2>




//           <p className="
//             mx-auto
//             mt-8
//             max-w-3xl
//             text-lg
//             leading-8
//             text-slate-400
//           ">

//             Whether it's a software engineering internship,
//             a freelance project, or an exciting opportunity
//             to collaborate, I'd love to hear from you.

//             Let's build software that makes a real impact.

//           </p>






//           <div className="
//             mt-12
//             flex
//             flex-wrap
//             justify-center
//             gap-5
//           ">



//             <a

//               href="#contact"

//               className="
//                 rounded-2xl
//                 bg-gradient-to-r
//                 from-cyan-500
//                 to-blue-600
//                 px-8
//                 py-4
//                 font-semibold
//                 text-white
//                 transition
//                 duration-300
//                 hover:scale-105
//               "

//             >

//               <span className="
//                 flex
//                 items-center
//                 gap-3
//               ">

//                 <FaEnvelope />

//                 Contact Me

//               </span>


//             </a>








//             {/* CV */}

//             <a

//               href={CV_URL}

//               download

//               className="
//                 rounded-2xl
//                 border
//                 border-cyan-400/20
//                 bg-white/5
//                 px-8
//                 py-4
//                 font-semibold
//                 text-white
//                 backdrop-blur-xl
//                 transition
//                 duration-300
//                 hover:border-cyan-400
//               "

//             >

//               <span className="
//                 flex
//                 items-center
//                 gap-3
//               ">


//                 <FaDownload />


//                 Download Resume


//               </span>


//             </a>




//           </div>



//         </motion.div>









//         {/* Developer Signature */}

//         <motion.div

//           initial={{
//             opacity:0
//           }}

//           whileInView={{
//             opacity:1
//           }}

//           transition={{
//             delay:0.2
//           }}

//           viewport={{
//             once:true
//           }}

//           className="
//             mx-auto
//             mt-24
//             max-w-4xl
//             text-center
//           "

//         >



//           <blockquote className="
//             text-2xl
//             font-light
//             italic
//             leading-10
//             text-slate-300
//             md:text-3xl
//           ">

//             "I don't just write code—I build solutions that solve
//             real-world problems, create meaningful user experiences,
//             and continuously push me to become a better software engineer."

//           </blockquote>




//           <div className="mt-12">

//             {/* <h3 className="
//               text-3xl
//               font-bold
//               text-white
//             ">

//               Abdulletif Ylkal Abate

//             </h3> */}
// <h3  className="
//               text-3xl
//               font-bold
//               text-white
//             ">
// {profile?.name || "Abdulletif Ylkal Abate"}
// </h3>

//             <p className="
//               mt-3
//               text-lg
//               text-cyan-400
//             ">

//               {profile?.role || "Software Engineer"}

//             </p>


//           </div>





//           <div className="
//             mt-10
//             flex
//             justify-center
//             gap-8
//             text-3xl
//           ">


//             <a

//               href="https://github.com/let-if"

//               target="_blank"

//               rel="noreferrer"

//               className="
//                 text-slate-400
//                 transition
//                 hover:text-cyan-400
//               "

//             >

//               <FaGithub />

//             </a>





//             <a

//               href="https://www.linkedin.com/in/letif-ylkal-585463411"

//               target="_blank"

//               rel="noreferrer"

//               className="
//                 text-slate-400
//                 transition
//                 hover:text-cyan-400
//               "

//             >

//               <FaLinkedin />

//             </a>



//           </div>


//         </motion.div>







//         {/* Bottom */}

//         <div className="
//           mt-24
//           flex
//           flex-col
//           items-center
//           justify-between
//           gap-6
//           border-t
//           border-white/10
//           pt-8
//           md:flex-row
//         ">


//           <p className="
//             text-center
//             text-sm
//             text-slate-500
//           ">

//             © 2026 Abdulletif Ylkal Abate.
//             Built with React, Node.js,
//             PostgreSQL, and passion for software engineering.

//           </p>





//           <button

//             onClick={scrollToTop}

//             className="
//               rounded-full
//               bg-gradient-to-r
//               from-cyan-500
//               to-blue-600
//               p-4
//               text-white
//               transition
//               duration-300
//               hover:scale-110
//             "

//           >

//             <FaArrowUp />

//           </button>



//         </div>



//       </div>



//     </footer>


//   );

// }


// export default FooterCTA;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaDownload,
  FaEnvelope,
  FaTerminal,
} from "react-icons/fa";

import { getPublicProfile } from "../../services/profileService";
import { CV_URL } from "../../constants/cv";

function FooterCTA() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const data = await getPublicProfile();
      setProfile(data);
    } catch (error) {
      console.log(error);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative overflow-hidden border-t border-cyan-500/20
        bg-[#030712] py-28 selection:bg-cyan-500 selection:text-black
      "
    >
      {/* 1. ATMOSPHERIC PLASMA GLOWS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-[140px]" />
        <div className="absolute left-10 bottom-20 h-64 w-64 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      {/* Circuit accent line */}
      <div className="absolute top-0 left-1/2 h-[1px] w-64 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* 2. FLOATING HUD DATA PARTICLES */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(18)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff]"
              initial={{
                opacity: 0.2,
                y: 0,
              }}
              animate={{
                y: [-25, 25, -25],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4 + (index % 4),
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
              style={{
                left: `${(index * 7) % 100}%`,
                top: `${(index * 11) % 100}%`,
              }}
            />
          ))}
        </div>

        {/* 3. MAIN CALL TO ACTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              SYS_FINAL // INITIATE_COLLABORATION
            </span>
          </div>

          <h2 className="font-['Orbitron'] text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Ready to Build Something
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.35)]">
              Extraordinary?
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#00f0ff]" />

          <p className="mx-auto mt-8 max-w-3xl font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-300 sm:text-sm md:text-base">
            Whether it's a software engineering internship, a freelance contract,
            or an exciting opportunity to collaborate on complex systems, I'd love
            to connect. Let's engineer software that makes a real impact.
          </p>

          {/* Action Triggers */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <a
              href="#contact"
              className="
                group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-2xl
                border border-cyan-400/60 bg-gradient-to-r from-cyan-500 to-blue-600
                px-8 py-4 font-['Orbitron'] text-xs font-bold uppercase tracking-wider text-white
                shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all duration-300
                hover:scale-105 hover:shadow-[0_0_35px_rgba(0,240,255,0.55)] active:scale-95
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
              <FaEnvelope className="text-sm" />
              <span>TRANSMIT MESSAGE</span>
            </a>

            <a
              href={CV_URL}
              download
              className="
                flex items-center gap-3 rounded-2xl border border-cyan-500/30
                bg-[#080f1e]/85 px-8 py-4 font-['Orbitron'] text-xs font-bold uppercase tracking-wider
                text-cyan-300 backdrop-blur-xl shadow-[0_0_20px_rgba(0,240,255,0.06)]
                transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-950/40
                hover:text-white hover:shadow-[0_0_25px_rgba(0,240,255,0.25)] hover:scale-105 active:scale-95
              "
            >
              <FaDownload className="text-sm text-cyan-400" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>
        </motion.div>

        {/* 4. DEVELOPER HUD SIGNATURE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="
            group relative mx-auto mt-24 max-w-4xl overflow-hidden rounded-3xl
            border border-cyan-500/20 bg-[#080f1e]/85 p-8 text-center
            shadow-[0_0_40px_rgba(0,240,255,0.06)] backdrop-blur-2xl
            transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_50px_rgba(0,240,255,0.18)]
            md:p-12
          "
        >
          {/* Tactical HUD Corner Brackets */}
          <span className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
          <span className="pointer-events-none absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
          <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
          <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />

          {/* Terminal telemetry pill */}
          <div className="mb-6 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-400/70">
            <FaTerminal size={10} />
            <span>DEV_MANIFESTO // SIGNATURE</span>
          </div>

          <blockquote className="font-['JetBrains_Mono'] text-base font-normal italic leading-relaxed text-slate-200 sm:text-lg md:text-xl">
            "I don't just write code—I build solutions that solve
            real-world problems, create meaningful user experiences,
            and continuously push me to become a better software engineer."
          </blockquote>

          <div className="mt-8 border-t border-cyan-500/15 pt-6">
            <h3 className="font-['Orbitron'] text-2xl font-black tracking-wide text-white transition-colors group-hover:text-cyan-200 sm:text-3xl">
              {profile?.name || "Abdulletif Ylkal Abate"}
            </h3>

            <p className="mt-1.5 font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-widest text-cyan-400">
              {profile?.role || "Software Engineer"}
            </p>
          </div>

          {/* Social Links Nodes */}
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://github.com/let-if"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="
                flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30
                bg-slate-950/80 text-slate-300 shadow-inner transition-all duration-300
                hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]
                hover:scale-110 active:scale-95
              "
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/letif-ylkal-585463411"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="
                flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30
                bg-slate-950/80 text-slate-300 shadow-inner transition-all duration-300
                hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]
                hover:scale-110 active:scale-95
              "
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </motion.div>

        {/* 5. BOTTOM TERMINATION BAR */}
        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-cyan-500/15 pt-8 md:flex-row">
          <p className="font-['JetBrains_Mono'] text-center text-xs text-slate-400 md:text-left">
            © 2026 <span className="text-slate-200">Abdulletif Ylkal Abate</span>.
            Built with React, Node.js, PostgreSQL &amp; Cyber-HUD Architecture.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="
              group flex h-12 w-12 items-center justify-center rounded-2xl
              border border-cyan-400/50 bg-cyan-950/60 text-cyan-300
              shadow-[0_0_15px_rgba(0,240,255,0.2)] backdrop-blur-md transition-all duration-300
              hover:border-cyan-400 hover:bg-cyan-400 hover:text-black
              hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:scale-110 active:scale-95 cursor-pointer
            "
          >
            <FaArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default FooterCTA;