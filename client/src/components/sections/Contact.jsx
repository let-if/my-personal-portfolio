
// import { motion } from "framer-motion";

// import ContactCard from "./contact/ContactCard";
// import ContactForm from "./contact/ContactForm";

// import { contactInfo } from "../../data/contact";


// function Contact() {


//   return (


//     <section

//       id="contact"

//       className="
//         relative
//         py-24
//         lg:py-32
//       "

//     >



//       <div

//         className="
//           mx-auto
//           max-w-7xl
//           px-6
//           lg:px-8
//         "

//       >





//         {/* Header */}

//         <motion.div


//           initial={{
//             opacity:0,
//             y:30
//           }}


//           whileInView={{
//             opacity:1,
//             y:0
//           }}


//           viewport={{
//             once:true
//           }}


//           className="
//             mb-16
//             text-center
//           "


//         >



//           <p

//             className="
//               mb-4
//               inline-flex
//               rounded-full
//               border
//               border-cyan-400/20
//               bg-cyan-400/10
//               px-5
//               py-2
//               text-sm
//               uppercase
//               tracking-widest
//               text-cyan-400
//             "

//           >

//             Contact

//           </p>






//           <h2

//             className="
//               text-4xl
//               font-extrabold
//               text-white
//               sm:text-5xl
//             "

//           >

//             Let's Build Something{" "}


//             <span

//               className="
//                 bg-gradient-to-r
//                 from-cyan-400
//                 to-blue-500
//                 bg-clip-text
//                 text-transparent
//               "

//             >

//               Amazing

//             </span>



//           </h2>







//           <p

//             className="
//               mx-auto
//               mt-6
//               max-w-3xl
//               text-lg
//               leading-8
//               text-slate-400
//             "

//           >

//             I'm always open to internships,
//             full-time opportunities,
//             freelance work, and collaborations
//             on exciting software projects.

//           </p>




//         </motion.div>









//         <div

//           className="
//             grid
//             gap-10
//             lg:grid-cols-2
//           "

//         >





//           {/* LEFT */}

//           <div>



//             <div

//               className="
//                 space-y-5
//               "

//             >

//               {
//                 contactInfo.map((item)=>(


//                   <ContactCard

//                     key={item.id}

//                     item={item}

//                   />


//                 ))
//               }


//             </div>








//             {/* Availability */}

//             <motion.div


//               initial={{
//                 opacity:0,
//                 y:20
//               }}


//               whileInView={{
//                 opacity:1,
//                 y:0
//               }}


//               viewport={{
//                 once:true
//               }}



//               className="
//                 mt-8
//                 rounded-3xl
//                 border
//                 border-cyan-400/20
//                 bg-gradient-to-r
//                 from-cyan-500/10
//                 to-blue-500/10
//                 p-8
//                 backdrop-blur-xl
//               "

//             >



//               <h3

//                 className="
//                   text-2xl
//                   font-bold
//                   text-white
//                 "

//               >

//                 Current Availability

//               </h3>





//               <div

//                 className="
//                   mt-6
//                   space-y-3
//                 "

//               >


//                 <p className="text-slate-300">

//                   ✅ Open for Software Engineering Internships

//                 </p>



//                 <p className="text-slate-300">

//                   ✅ Available for Freelance Projects

//                 </p>




//                 <p className="text-slate-300">

//                   ✅ Interested in Full-Stack Development Roles

//                 </p>



//               </div>



//             </motion.div>










//             {/* Response Time */}

//             <motion.div


//               initial={{
//                 opacity:0
//               }}


//               whileInView={{
//                 opacity:1
//               }}


//               viewport={{
//                 once:true
//               }}


//               className="
//                 mt-6
//                 rounded-3xl
//                 border
//                 border-white/10
//                 bg-white/5
//                 p-6
//                 backdrop-blur-xl
//               "


//             >



//               <h3

//                 className="
//                   text-xl
//                   font-bold
//                   text-white
//                 "

//               >

//                 Response Time

//               </h3>



//               <p

//                 className="
//                   mt-3
//                   text-slate-400
//                 "

//               >

//                 I usually respond within 24 hours.
//                 Looking forward to discussing your project
//                 or opportunity.

//               </p>



//             </motion.div>



//           </div>










//           {/* RIGHT */}

//           <ContactForm />





//         </div>






//       </div>




//     </section>


//   );

// }


// export default Contact;
import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaClock, FaSignal } from "react-icons/fa";

import ContactCard from "./contact/ContactCard";
import ContactForm from "./contact/ContactForm";

import { contactInfo } from "../../data/contact";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#030712] py-24 lg:py-32 selection:bg-cyan-500 selection:text-black"
    >
      {/* 1. ATMOSPHERIC OBSIDIAN LIGHTING GLOWS */}
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* 2. TELEMETRY SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              SYS_COMMS // INITIATE_CONTACT
            </span>
          </div>

          <h2 className="font-['Orbitron'] text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's Build Something{" "}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.35)]">
              Amazing
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#00f0ff]" />

          <p className="mx-auto mt-6 max-w-2xl font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-300 sm:text-sm">
            I'm always open to software engineering internships, full-time
            opportunities, freelance contracts, and system architecture
            collaborations.
          </p>
        </motion.div>

        {/* 3. CORE CONTACT GRID */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* LEFT TELEMETRY & AVAILABILITY STACK */}
          <div className="space-y-6">
            {/* Contact Channels */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <ContactCard key={item.id} item={item} />
              ))}
            </div>

            {/* Current Availability HUD Node */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="
                group relative overflow-hidden rounded-3xl border border-cyan-500/25
                bg-[#080f1e]/85 p-7 shadow-[0_0_35px_rgba(0,240,255,0.06)] backdrop-blur-2xl
                transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_45px_rgba(0,240,255,0.18)]
              "
            >
              {/* Tactical Corner Brackets */}
              <span className="pointer-events-none absolute top-0 left-0 h-3.5 w-3.5 border-t-2 border-l-2 border-cyan-400/80" />
              <span className="pointer-events-none absolute top-0 right-0 h-3.5 w-3.5 border-t-2 border-r-2 border-cyan-400/80" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-3.5 w-3.5 border-b-2 border-l-2 border-cyan-400/80" />
              <span className="pointer-events-none absolute bottom-0 right-0 h-3.5 w-3.5 border-b-2 border-r-2 border-cyan-400/80" />

              <div className="flex items-center justify-between border-b border-cyan-500/15 pb-4">
                <div className="flex items-center gap-2">
                  <FaSignal className="text-emerald-400" size={13} />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                    STATUS // ENGAGEMENT_MATRIX
                  </span>
                </div>
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981] animate-pulse" />
              </div>

              <h3 className="mt-4 font-['Orbitron'] text-lg font-bold tracking-wide text-white">
                Current Availability
              </h3>

              <ul className="mt-4 space-y-2.5 font-['JetBrains_Mono'] text-xs text-slate-300">
                <li className="flex items-center gap-2.5">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded border border-emerald-400/40 bg-emerald-950/60 text-[9px] text-emerald-300 shadow-[0_0_6px_#10b981]">
                    <FaCheck size={7} />
                  </span>
                  <span>Open for Software Engineering Internships</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded border border-emerald-400/40 bg-emerald-950/60 text-[9px] text-emerald-300 shadow-[0_0_6px_#10b981]">
                    <FaCheck size={7} />
                  </span>
                  <span>Available for Full-Stack &amp; Freelance Projects</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded border border-emerald-400/40 bg-emerald-950/60 text-[9px] text-emerald-300 shadow-[0_0_6px_#10b981]">
                    <FaCheck size={7} />
                  </span>
                  <span>Interested in Full-Stack Developer Roles</span>
                </li>
              </ul>
            </motion.div>

            {/* Response Telemetry Node */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="
                group relative overflow-hidden rounded-3xl border border-cyan-500/20
                bg-[#080f1e]/85 p-6 shadow-[0_0_25px_rgba(0,240,255,0.05)] backdrop-blur-2xl
                transition-all duration-300 hover:border-cyan-400/40 hover:bg-[#0c162c]
              "
            >
              {/* Tactical Corner Marks */}
              <span className="pointer-events-none absolute top-0 left-0 h-2.5 w-2.5 border-t border-l border-cyan-400/70" />
              <span className="pointer-events-none absolute top-0 right-0 h-2.5 w-2.5 border-t border-r border-cyan-400/70" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-cyan-400/70" />
              <span className="pointer-events-none absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-cyan-400/70" />

              <div className="flex items-center gap-2.5 text-cyan-400">
                <FaClock size={14} />
                <h3 className="font-['Orbitron'] text-sm font-bold tracking-wider text-white">
                  Response Window
                </h3>
              </div>

              <p className="mt-2.5 font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-300">
                Standard transmission latency: &lt; 24 hours. Looking forward to
                evaluating your opportunity or system proposal.
              </p>
            </motion.div>
          </div>

          {/* RIGHT DISPATCH PORTAL (ContactForm) */}
          <div className="lg:sticky lg:top-24">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;