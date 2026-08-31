
// import { motion } from "framer-motion";
// import { useState } from "react";

// import ProjectModal from "./ProjectModal";

// import {
// FaGithub,
// FaExternalLinkAlt
// } from "react-icons/fa";



// function ProjectCard({project}){


// const [open,setOpen]=useState(false);



// const imageUrl =

// project.image?.startsWith("http")

// ?

// project.image

// :

// `http://localhost:5000${project.image}`;




// return(


// <motion.div


// initial={{
// opacity:0,
// y:40
// }}


// whileInView={{
// opacity:1,
// y:0
// }}


// viewport={{
// once:true
// }}


// whileHover={{
// y:-12
// }}


// transition={{
// duration:.4
// }}


// className="

// group

// relative

// overflow-hidden

// rounded-3xl

// border

// border-white/10

// bg-slate-900/60

// backdrop-blur-xl

// shadow-xl

// transition-all

// duration-500

// hover:border-cyan-400/50

// hover:shadow-cyan-500/20

// "


// >



// {/* IMAGE */}


// <div

// className="

// relative

// h-60

// overflow-hidden

// bg-slate-950

// "

// >
// <img

// src={
// project.image?.startsWith("http")
// ?
// project.image
// :
// `http://localhost:5000${project.image}`
// }

// alt={project.title}

// loading="lazy"

// className="
// h-full
// w-full
// object-cover
// transition
// duration-700
// group-hover:scale-110
// "

// />

// {/* <img


// src={imageUrl}


// alt={project.title}


// onError={(e)=>{

// e.currentTarget.src=
// "/placeholder.png";

// }}


// className="

// h-full

// w-full

// object-cover

// transition

// duration-700

// group-hover:scale-110

// "


// /> */}



// {/* image glow */}


// <div

// className="

// absolute

// inset-0

// bg-gradient-to-t

// from-slate-950

// via-transparent

// to-transparent

// "

// />


// </div>








// <div

// className="

// relative

// p-6

// "

// >


// <h3

// className="

// text-2xl

// font-black

// text-white

// "

// >

// {project.title}

// </h3>




// <p

// className="

// mt-4

// leading-relaxed

// text-slate-400

// "

// >

// {project.description}

// </p>








// {/* Technologies */}


// <div

// className="

// mt-6

// flex

// flex-wrap

// gap-2

// "

// >


// {

// project.technologies?.map((tech,index)=>(


// <span

// key={index}

// className="

// rounded-full

// border

// border-cyan-400/20

// bg-cyan-400/10

// px-3

// py-1

// text-xs

// font-semibold

// text-cyan-300

// "

// >

// {tech}

// </span>


// ))


// }



// </div>








// {/* ACTIONS */}


// <div

// className="

// mt-7

// flex

// flex-wrap

// gap-4

// "

// >



// <button


// onClick={()=>setOpen(true)}


// className="

// rounded-xl

// border

// border-cyan-400/40

// px-5

// py-2

// text-sm

// font-semibold

// text-cyan-300

// transition

// hover:bg-cyan-400

// hover:text-white

// "

// >


// View Details


// </button>






// {

// project.github &&


// <a


// href={project.github}


// target="_blank"


// rel="noreferrer"


// className="

// flex

// items-center

// gap-2

// rounded-xl

// border

// border-white/10

// px-5

// py-2

// text-sm

// text-white

// transition

// hover:border-cyan-400

// hover:text-cyan-400

// "

// >


// <FaGithub/>


// Github


// </a>


// }








// {

// project.demo &&


// <a


// href={project.demo}


// target="_blank"


// rel="noreferrer"


// className="

// flex

// items-center

// gap-2

// rounded-xl

// bg-gradient-to-r

// from-cyan-500

// to-blue-600

// px-5

// py-2

// text-sm

// font-semibold

// text-white

// transition

// hover:scale-105

// "

// >


// <FaExternalLinkAlt/>


// Demo


// </a>


// }



// </div>






// </div>









// {/* MODAL */}


// {

// open &&

// <ProjectModal

// project={project}

// onClose={()=>setOpen(false)}

// />


// }









// {/* Hover glow */}


// <div

// className="

// pointer-events-none

// absolute

// inset-0

// rounded-3xl

// bg-gradient-to-br

// from-cyan-500/20

// to-blue-500/20

// opacity-0

// transition

// duration-500

// group-hover:opacity-100

// "


// />



// </motion.div>


// );



// }



// export default ProjectCard;
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  const imageUrl = project.image?.startsWith("http")
    ? project.image
    : project.image
    ? `http://localhost:5000${project.image}`
    : "/default-project.png";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="
          group relative flex flex-col justify-between overflow-hidden
          rounded-3xl border border-cyan-500/20 bg-[#080f1e]/85
          shadow-[0_0_30px_rgba(0,240,255,0.06)] backdrop-blur-2xl
          transition-all duration-500 hover:border-cyan-400/50
          hover:shadow-[0_0_40px_rgba(0,240,255,0.2)]
        "
      >
        {/* 1. TACTICAL HUD CORNER BRACKETS */}
        <span className="absolute top-0 left-0 z-20 h-3.5 w-3.5 border-t-2 border-l-2 border-cyan-400/80" />
        <span className="absolute top-0 right-0 z-20 h-3.5 w-3.5 border-t-2 border-r-2 border-cyan-400/80" />
        <span className="absolute bottom-0 left-0 z-20 h-3.5 w-3.5 border-b-2 border-l-2 border-cyan-400/80" />
        <span className="absolute bottom-0 right-0 z-20 h-3.5 w-3.5 border-b-2 border-r-2 border-cyan-400/80" />

        <div>
          {/* 2. IMAGE VIEWPORT (CLEAN & SHARP) */}
          <div className="relative h-56 overflow-hidden border-b border-cyan-500/15 bg-[#030712]">
            <img
              src={imageUrl}
              alt={project.title}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/default-project.png";
              }}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* System Status Pill on Image */}
            <div className="absolute top-3 right-3 z-10 rounded border border-cyan-400/30 bg-slate-950/80 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-md">
              SYS_NODE
            </div>
          </div>

          {/* 3. CARD CONTENT */}
          <div className="relative p-6">
            <div className="mb-2 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-cyan-400/70">
              <span>//</span>
              <span>DEPLOYED_APPLICATION</span>
            </div>

            <h3 className="font-['Orbitron'] text-xl font-black tracking-wide text-white transition-colors group-hover:text-cyan-200 sm:text-2xl">
              {project.title}
            </h3>

            <p className="mt-3 line-clamp-3 font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-300">
              {project.description}
            </p>

            {/* Tech Badges */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="
                    rounded-md border border-cyan-400/20 bg-cyan-950/30
                    px-2.5 py-1 font-['JetBrains_Mono'] text-[11px] font-semibold text-cyan-300
                    shadow-inner transition-colors hover:border-cyan-400/50 hover:bg-cyan-900/40
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 4. ACTIONS BAR */}
        <div className="relative flex flex-wrap items-center gap-2.5 border-t border-cyan-500/15 p-6 pt-4">
          {/* Details Modal Trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="
              flex-1 rounded-xl border border-cyan-400/40 bg-cyan-950/40
              px-3.5 py-2 font-['Orbitron'] text-[11px] font-bold uppercase tracking-wider
              text-cyan-300 backdrop-blur-md transition-all duration-300
              hover:border-cyan-400 hover:bg-cyan-400 hover:text-black
              hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] active:scale-95 cursor-pointer
            "
          >
            DETAILS
          </button>

          {/* Demo Button */}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="
                group/btn relative flex items-center gap-1.5 overflow-hidden rounded-xl
                border border-cyan-400/60 bg-gradient-to-r from-cyan-500 to-blue-600
                px-3.5 py-2 font-['Orbitron'] text-[11px] font-bold uppercase tracking-wider text-white
                shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all duration-300
                hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.45)] active:scale-95
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
              <FaExternalLinkAlt className="text-[10px]" />
              <span>DEMO</span>
            </a>
          )}

          {/* GitHub Button */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repository"
              className="
                flex h-8.5 w-8.5 items-center justify-center rounded-xl border border-slate-700
                bg-slate-950/80 text-slate-300 transition-all duration-300
                hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(0,240,255,0.2)]
                hover:scale-105 active:scale-95
              "
            >
              <FaGithub size={14} />
            </a>
          )}
        </div>
      </motion.div>

      {/* PROJECT MODAL */}
      {open && (
        <ProjectModal project={project} onClose={() => setOpen(false)} />
      )}
    </>
  );
}

export default ProjectCard;