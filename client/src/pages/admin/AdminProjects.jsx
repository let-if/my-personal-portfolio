
// import {
//   useEffect,
//   useState
// } from "react";


// import {
//   useNavigate
// } from "react-router-dom";


// import {
//   motion
// } from "framer-motion";


// import {
//   FaPlus,
//   FaEdit,
//   FaTrash,
//   FaGithub,
//   FaExternalLinkAlt,
//   FaStar,
//   FaFolderOpen
// } from "react-icons/fa";


// import AdminLayout from "../../layouts/AdminLayout";


// import {

// getAdminProjects,

// deleteProject

// }

// from "../../services/adminProjectService";





// function AdminProjects(){


// const navigate = useNavigate();



// const [projects,setProjects] = useState([]);

// const [loading,setLoading] = useState(true);






// useEffect(()=>{

// loadProjects();

// },[]);








// async function loadProjects(){


// try{


// const data = await getAdminProjects();


// setProjects(data || []);


// }

// catch(error){

// console.log(error);

// }

// finally{

// setLoading(false);

// }


// }









// async function remove(id){


// const confirmDelete = window.confirm(

// "Are you sure you want to delete this project?"

// );



// if(!confirmDelete)
// return;



// try{


// await deleteProject(id);


// loadProjects();


// }

// catch(error){

// console.log(error);

// }


// }










// return(


// <AdminLayout>


// <div className="relative">



// {/* Background Glow */}

// <div className="
// absolute
// top-0
// right-0
// h-72
// w-72
// rounded-full
// bg-cyan-500/10
// blur-3xl
// pointer-events-none
// "/>



// <div className="
// absolute
// bottom-0
// left-0
// h-72
// w-72
// rounded-full
// bg-blue-500/10
// blur-3xl
// pointer-events-none
// "/>









// {/* HEADER */}


// <motion.div

// initial={{
// opacity:0,
// y:-30
// }}

// animate={{
// opacity:1,
// y:0
// }}

// className="
// mb-12
// flex
// flex-col
// gap-6
// md:flex-row
// md:items-center
// md:justify-between
// "

// >


// <div>


// <h1 className="
// text-4xl
// font-black
// text-white
// ">

// Projects CMS 🚀

// </h1>


// <p className="
// mt-3
// text-slate-400
// ">

// Manage your portfolio projects professionally

// </p>


// </div>







// <button


// onClick={()=>navigate("/admin/projects/add")}


// className="
// group
// flex
// items-center
// gap-3
// rounded-2xl
// bg-gradient-to-r
// from-cyan-500
// to-blue-600
// px-7
// py-4
// font-bold
// text-white
// shadow-xl
// shadow-cyan-500/30
// transition
// duration-300
// hover:scale-105
// hover:shadow-cyan-400/50
// "

// >


// <FaPlus

// className="
// transition
// group-hover:rotate-90
// "

// />


// Add Project


// </button>



// </motion.div>









// {/* LOADING */}


// {

// loading ?



// <div className="
// flex
// justify-center
// py-20
// ">


// <div className="
// h-14
// w-14
// animate-spin
// rounded-full
// border-4
// border-cyan-400
// border-t-transparent
// "/>


// </div>



// :





// projects.length===0 ?



// <div className="
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-12
// text-center
// backdrop-blur-xl
// ">


// <FaFolderOpen

// className="
// mx-auto
// mb-5
// text-5xl
// text-cyan-400
// "

// />


// <h2 className="
// text-2xl
// font-bold
// text-white
// ">

// No Projects Found

// </h2>


// <p className="
// mt-3
// text-slate-400
// ">

// Start adding your portfolio projects

// </p>



// </div>






// :



// <div className="
// grid
// gap-8
// md:grid-cols-2
// xl:grid-cols-3
// ">






// {

// projects.map((project,index)=>(



// <motion.div


// key={project.id}


// initial={{

// opacity:0,

// y:40

// }}


// animate={{

// opacity:1,

// y:0

// }}


// transition={{

// delay:index*0.1

// }}



// whileHover={{

// y:-8

// }}



// className="
// group
// relative
// overflow-hidden
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-6
// backdrop-blur-xl
// transition
// duration-500
// hover:border-cyan-400/50
// hover:shadow-2xl
// hover:shadow-cyan-500/20
// "

// >





// {/* Glow */}

// <div className="
// absolute
// inset-0
// opacity-0
// bg-gradient-to-br
// from-cyan-500/10
// to-blue-500/10
// transition
// group-hover:opacity-100
// "/>








// <div className="relative">



// {

// project.image &&


// <div className="
// relative
// overflow-hidden
// rounded-2xl
// mb-5
// ">


// <img


// src={`http://localhost:5000${project.image}`}


// alt={project.title}


// className="
// h-52
// w-full
// object-cover
// transition
// duration-500
// group-hover:scale-110
// "


// />




// {

// project.featured &&


// <div className="
// absolute
// top-3
// right-3
// flex
// items-center
// gap-2
// rounded-full
// bg-yellow-400
// px-4
// py-2
// text-sm
// font-bold
// text-black
// ">


// <FaStar/>

// Featured


// </div>


// }



// </div>


// }








// <h2 className="
// text-2xl
// font-black
// text-white
// ">

// {project.title}

// </h2>






// <p className="
// mt-3
// line-clamp-3
// text-sm
// leading-relaxed
// text-slate-400
// ">

// {project.description}

// </p>







// {/* TECHNOLOGIES */}

// {

// project.technologies?.length > 0 &&


// <div className="
// mt-5
// flex
// flex-wrap
// gap-2
// ">


// {

// project.technologies.map((tech)=>(


// <span

// key={tech}

// className="
// rounded-full
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


// }








// {/* LINKS */}

// <div className="
// mt-6
// flex
// gap-3
// ">


// {

// project.github &&


// <a

// href={project.github}

// target="_blank"

// rel="noreferrer"

// className="
// rounded-xl
// border
// border-white/10
// p-3
// text-slate-300
// transition
// hover:bg-white/10
// hover:text-white
// "

// >

// <FaGithub/>

// </a>


// }






// {

// project.demo &&


// <a

// href={project.demo}

// target="_blank"

// rel="noreferrer"

// className="
// rounded-xl
// border
// border-white/10
// p-3
// text-slate-300
// transition
// hover:bg-white/10
// hover:text-white
// "

// >

// <FaExternalLinkAlt/>

// </a>


// }




// </div>








// {/* ACTIONS */}


// <div className="
// mt-7
// flex
// gap-3
// ">


// <button


// onClick={()=>navigate(
// `/admin/projects/edit/${project.id}`
// )}



// className="
// group/edit
// flex
// flex-1
// items-center
// justify-center
// gap-2
// rounded-xl
// bg-blue-500
// py-3
// font-bold
// text-white
// transition
// hover:bg-blue-600
// hover:scale-105
// "

// >


// <FaEdit/>

// Edit


// </button>







// <button


// onClick={()=>remove(project.id)}



// className="
// group/delete
// flex
// flex-1
// items-center
// justify-center
// gap-2
// rounded-xl
// bg-red-500
// py-3
// font-bold
// text-white
// transition
// hover:bg-red-600
// hover:scale-105
// "

// >


// <FaTrash/>

// Delete


// </button>





// </div>





// </div>



// </motion.div>



// ))



// }



// </div>



// }







// </div>


// </AdminLayout>


// );


// }



// export default AdminProjects;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaPlus,
  FaEdit,
  FaTrashAlt,
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaFolderOpen,
} from "react-icons/fa";

import AdminLayout from "../../layouts/AdminLayout";
import {
  getAdminProjects,
  deleteProject,
} from "../../services/adminProjectService";

function AdminProjects() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    try {
      const data = await getAdminProjects();
      setProjects(data || []);
    } catch (error) {
      console.error("Failed to load admin projects:", error);
    } finally {
      setLoading(false);
    }
  }

  async function remove(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProject(id);
      loadProjects();
    } catch (error) {
      console.error("Failed to delete project:", error);
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-10 selection:bg-cyan-500 selection:text-black">
        {/* 1. HEADER & CONTROL CONSOLE */}
        <div className="flex flex-col justify-between gap-4 border-b border-cyan-500/15 pb-8 md:flex-row md:items-end">
          <div>
            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3.5 py-1 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse" />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                SYS_INDEX // PROJECT_DIRECTIVES
              </span>
            </div>

            <h1 className="font-['Orbitron'] text-3xl font-black tracking-wide text-white sm:text-4xl">
              Project{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                Management
              </span>
            </h1>

            <p className="mt-2 font-['JetBrains_Mono'] text-xs text-slate-400 sm:text-sm">
              Manage, modify, and monitor your deployed showcase projects.
            </p>
          </div>

          <button
            onClick={() => navigate("/admin/projects/add")}
            className="
              group/btn relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl
              border border-cyan-400/60 bg-gradient-to-r from-cyan-500 to-blue-600
              px-6 py-3.5 font-['Orbitron'] text-xs font-bold uppercase tracking-wider text-white
              shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300
              hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,240,255,0.55)] active:scale-95 cursor-pointer
            "
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
            <FaPlus className="text-xs transition-transform duration-300 group-hover/btn:rotate-90" />
            <span>Add New Project</span>
          </button>
        </div>

        {/* 2. LOADING STATE */}
        {loading && (
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#080f1e]/85 p-12 text-center shadow-[0_0_30px_rgba(0,240,255,0.06)] backdrop-blur-2xl">
            <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/60" />

            <div className="flex flex-col items-center justify-center gap-3">
              <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] animate-ping" />
              <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-cyan-300">
                FETCHING_PROJECT_DATABASE...
              </p>
            </div>
          </div>
        )}

        {/* 3. EMPTY STATE */}
        {!loading && projects.length === 0 && (
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#080f1e]/85 p-12 text-center shadow-[0_0_30px_rgba(0,240,255,0.06)] backdrop-blur-2xl">
            <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/60" />

            <FaFolderOpen className="mx-auto mb-4 text-4xl text-cyan-400/60" />
            <h2 className="font-['Orbitron'] text-lg font-bold text-white">
              No Projects Found
            </h2>
            <p className="mt-1 font-['JetBrains_Mono'] text-xs text-slate-400">
              No deployment records in registry. Initialize your first project.
            </p>
          </div>
        )}

        {/* 4. PROJECTS MESH GRID */}
        {!loading && projects.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  group relative flex flex-col justify-between overflow-hidden rounded-3xl
                  border border-cyan-500/20 bg-[#080f1e]/85 p-6 shadow-[0_0_30px_rgba(0,240,255,0.06)]
                  backdrop-blur-2xl transition-all duration-300
                  hover:border-cyan-400/50 hover:bg-[#0c162c] hover:shadow-[0_0_35px_rgba(0,240,255,0.18)]
                "
              >
                {/* Tactical HUD Corner Marks */}
                <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
                <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
                <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
                <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />

                <div>
                  {/* Image Container */}
                  {project.image && (
                    <div className="relative mb-5 overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-950">
                      <img
                        src={`http://localhost:5000${project.image}`}
                        alt={project.title}
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {project.featured && (
                        <div className="absolute right-2.5 top-2.5 flex items-center gap-1.5 rounded-md border border-yellow-400/50 bg-slate-950/80 px-2.5 py-1 font-['Orbitron'] text-[9px] font-bold text-yellow-300 shadow-[0_0_10px_rgba(250,204,21,0.3)] backdrop-blur-md">
                          <FaStar size={10} className="text-yellow-400" />
                          <span>FEATURED</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Title & Description */}
                  <h2 className="font-['Orbitron'] text-lg font-bold tracking-wide text-white transition-colors group-hover:text-cyan-200">
                    {project.title}
                  </h2>

                  <p className="mt-2 line-clamp-3 font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  {/* Technologies Stack */}
                  {project.technologies?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-md border border-cyan-400/20 bg-cyan-950/40
                            px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] font-semibold text-cyan-300
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Links & Action Controls */}
                <div className="mt-6 border-t border-cyan-500/15 pt-4">
                  {/* External Links */}
                  {(project.github || project.demo) && (
                    <div className="mb-4 flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          title="View Repository"
                          className="
                            flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/25
                            bg-slate-950/80 text-xs text-slate-400 transition-all duration-200
                            hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(0,240,255,0.2)]
                          "
                        >
                          <FaGithub />
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          title="View Live App"
                          className="
                            flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/25
                            bg-slate-950/80 text-xs text-slate-400 transition-all duration-200
                            hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(0,240,255,0.2)]
                          "
                        >
                          <FaExternalLinkAlt size={10} />
                        </a>
                      )}
                    </div>
                  )}

                  {/* Operational Action Buttons */}
                  <div className="flex gap-2.5">
                    <button
                      onClick={() =>
                        navigate(`/admin/projects/edit/${project.id}`)
                      }
                      className="
                        flex flex-1 items-center justify-center gap-2 rounded-xl border
                        border-cyan-500/30 bg-cyan-950/40 py-2.5 font-['Orbitron'] text-[11px]
                        font-bold tracking-wider text-cyan-300 transition-all duration-200
                        hover:border-cyan-400 hover:bg-cyan-900/50 hover:text-white
                        hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] active:scale-95 cursor-pointer
                      "
                    >
                      <FaEdit size={11} />
                      <span>EDIT</span>
                    </button>

                    <button
                      onClick={() => remove(project.id)}
                      className="
                        flex flex-1 items-center justify-center gap-2 rounded-xl border
                        border-red-500/30 bg-red-950/30 py-2.5 font-['Orbitron'] text-[11px]
                        font-bold tracking-wider text-red-300 transition-all duration-200
                        hover:border-red-400 hover:bg-red-900/40 hover:text-white
                        hover:shadow-[0_0_15px_rgba(239,68,68,0.25)] active:scale-95 cursor-pointer
                      "
                    >
                      <FaTrashAlt size={11} />
                      <span>DELETE</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default AdminProjects;