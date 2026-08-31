
// import { useEffect, useState } from "react";

// import {
//   motion,
//   AnimatePresence
// } from "framer-motion";


// import ProjectCard from "./projects/ProjectCard";

// import FeaturedProject from "./projects/FeaturedProject";

// import GithubStats from "./projects/GithubStats";


// import {
//   getProjects
// } from "../../services/projectService";


// import { projectCategories } from "../../data/ProjectCategories";



// function Projects(){



// const [projects,setProjects]=useState([]);


// const [loading,setLoading]=useState(true);



// const [activeCategory,setActiveCategory]
// =
// useState("All");





// useEffect(()=>{


// async function loadProjects(){


// try{


// const data =
// await getProjects();



// setProjects(
// data || []
// );



// }catch(error){


// console.error(
// "Failed loading projects:",
// error
// );


// }
// finally{


// setLoading(false);


// }


// }



// loadProjects();



// },[]);






// // Featured Project

// const featuredProject =

// projects.find(

// (project)=>
// project.featured

// );







// const filteredProjects =


// activeCategory==="All"


// ?


// projects


// :


// projects.filter(

// (project)=>

// project.category===activeCategory

// );







// return(



// <section

// id="projects"

// className="
// relative
// py-24
// lg:py-32
// "

// >



// <div

// className="
// mx-auto
// max-w-7xl
// px-6
// lg:px-8
// "

// >





// {/* Header */}



// <div

// className="
// mb-16
// text-center
// "

// >


// <p

// className="
// mb-4
// inline-flex
// rounded-full
// border
// border-cyan-400/20
// bg-cyan-400/10
// px-5
// py-2
// text-sm
// uppercase
// tracking-[0.3em]
// text-cyan-400
// "

// >

// Projects

// </p>




// <h2

// className="
// text-4xl
// font-extrabold
// text-white
// sm:text-5xl
// "

// >


// My Featured


// <span

// className="
// bg-gradient-to-r
// from-cyan-400
// to-blue-500
// bg-clip-text
// text-transparent
// "

// >

// Projects

// </span>


// </h2>



// </div>







// {/* Loading */}



// {

// loading && (


// <div

// className="
// py-20
// text-center
// text-slate-400
// "

// >

// Loading projects...

// </div>


// )

// }







// {/* Featured Project */}



// {

// !loading && featuredProject && (


// <FeaturedProject

// project={featuredProject}

// />


// )

// }







// {/* Filter Buttons */}



// {

// !loading && projects.length > 0 && (


// <div

// className="
// mb-12
// flex
// flex-wrap
// justify-center
// gap-4
// "

// >


// {

// projectCategories.map((category)=>(


// <button


// key={category}


// onClick={()=>


// setActiveCategory(category)

// }


// className={

// `

// rounded-full

// px-6

// py-3

// text-sm

// font-semibold

// transition

// ${

// activeCategory===category


// ?


// "bg-cyan-500 text-white"


// :


// "border border-white/10 text-slate-300 hover:border-cyan-400"

// }

// `

// }


// >


// {category}


// </button>



// ))

// }



// </div>


// )

// }









// {/* Empty State */}



// {

// !loading && projects.length===0 && (


// <div

// className="
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-10
// text-center
// text-slate-400
// "

// >

// No projects available yet.

// </div>


// )

// }







// {/* Projects Grid */}



// {

// !loading && filteredProjects.length>0 && (


// <motion.div

// layout

// className="
// grid
// gap-8
// md:grid-cols-2
// "

// >



// <AnimatePresence>


// {

// filteredProjects.map((project)=>(



// <motion.div

// layout

// key={project.id}


// initial={{

// opacity:0,

// scale:0.9

// }}


// animate={{

// opacity:1,

// scale:1

// }}


// exit={{

// opacity:0,

// scale:0.9

// }}



// >



// <ProjectCard

// project={project}

// />



// </motion.div>



// ))


// }



// </AnimatePresence>



// </motion.div>


// )

// }







// <GithubStats />




// </div>



// </section>



// );


// }



// export default Projects;
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ProjectCard from "./projects/ProjectCard";
import FeaturedProject from "./projects/FeaturedProject";
import GithubStats from "./projects/GithubStats";

import { getProjects } from "../../services/projectService";
import { projectCategories } from "../../data/ProjectCategories";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        setProjects(data || []);
      } catch (error) {
        console.error("Failed loading projects:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  // Featured Project
  const featuredProject = projects.find((project) => project.featured);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#030712] py-24 lg:py-32 selection:bg-cyan-500 selection:text-black"
    >
      {/* 1. ATMOSPHERIC OBSIDIAN LIGHTING GLOWS */}
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute left-1/3 bottom-10 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* 2. SECTION TELEMETRY HEADER */}
        <div className="mb-16 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              SYS_INDEX // DEPLOYED_WORK
            </span>
          </div>

          <h2 className="font-['Orbitron'] text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            My Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.35)]">
              Projects
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#00f0ff]" />
        </div>

        {/* 3. TACTICAL LOADING STATE */}
        {loading && (
          <div className="relative mx-auto max-w-xl overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#080f1e]/85 p-12 text-center shadow-[0_0_30px_rgba(0,240,255,0.06)] backdrop-blur-2xl">
            <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/60" />

            <div className="flex flex-col items-center justify-center gap-3">
              <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] animate-ping" />
              <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-cyan-300">
                FETCHING_DEPLOYMENTS...
              </p>
            </div>
          </div>
        )}

        {/* 4. FEATURED HERO PROJECT */}
        {!loading && featuredProject && (
          <FeaturedProject project={featuredProject} />
        )}

        {/* 5. TACTICAL FILTER BAR */}
        {!loading && projects.length > 0 && (
          <div className="mb-14 flex flex-wrap justify-center gap-2.5 sm:gap-3.5">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    relative overflow-hidden rounded-xl px-5 py-2.5 font-['Orbitron'] text-xs font-bold uppercase tracking-wider
                    transition-all duration-300 cursor-pointer
                    ${
                      isActive
                        ? "border border-cyan-400/80 bg-cyan-500/20 text-cyan-200 shadow-[0_0_20px_rgba(0,240,255,0.35)]"
                        : "border border-cyan-500/20 bg-[#080f1e]/80 text-slate-400 hover:border-cyan-400/50 hover:bg-cyan-950/40 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                    }
                  `}
                >
                  {/* Active Indicator Pin */}
                  {isActive && (
                    <span className="absolute top-1 right-1 h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_4px_#00f0ff]" />
                  )}
                  <span>{category}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* 6. EMPTY STATE */}
        {!loading && projects.length === 0 && (
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#080f1e]/85 p-10 text-center shadow-[0_0_30px_rgba(0,240,255,0.06)] backdrop-blur-2xl">
            <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/60" />

            <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-slate-400">
              NO_DEPLOYMENTS_FOUND // INDEX_EMPTY
            </p>
          </div>
        )}

        {/* 7. PROJECTS MESH GRID */}
        {!loading && filteredProjects.length > 0 && (
          <motion.div layout className="grid gap-8 md:grid-cols-2">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* 8. GITHUB STATS METRIC CONSOLE */}
        <GithubStats />
      </div>
    </section>
  );
}

export default Projects;