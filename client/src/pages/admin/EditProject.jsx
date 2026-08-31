
// import {
// useEffect,
// useState
// }
// from "react";


// import {
// useNavigate,
// useParams
// }
// from "react-router-dom";


// import {
// motion
// }
// from "framer-motion";


// import {

// FaGithub,

// FaExternalLinkAlt,

// FaImage,

// FaStar,

// FaSave

// }
// from "react-icons/fa";


// import AdminLayout from "../../layouts/AdminLayout";


// import {

// getAdminProjects,

// updateProject

// }

// from "../../services/adminProjectService";








// function EditProject(){



// const {
// id
// }=useParams();



// const navigate =
// useNavigate();





// const [loading,setLoading]=useState(true);


// const [image,setImage]=useState(null);


// const [oldImage,setOldImage]=useState("");





// const [form,setForm]=useState({


// title:"",

// description:"",

// github:"",

// demo:"",

// technologies:"",

// featured:false


// });











// useEffect(()=>{


// loadProject();


// },[]);









// async function loadProject(){


// try{


// const projects =
// await getAdminProjects();



// const project =
// projects.find(
// item=>item.id===id
// );





// if(!project){

// navigate("/admin/projects");

// return;

// }






// setForm({

// title:project.title,

// description:project.description,

// github:project.github || "",

// demo:project.demo || "",

// technologies:
// project.technologies
// ?
// project.technologies.join(",")
// :
// "",

// featured:
// project.featured


// });





// setOldImage(
// project.image
// );



// }

// catch(error){

// console.log(error);

// }

// finally{

// setLoading(false);

// }


// }











// function handleChange(e){


// const {

// name,

// value,

// type,

// checked

// }=e.target;




// setForm({

// ...form,


// [name]:

// type==="checkbox"

// ?

// checked

// :

// value



// });


// }











// function handleSubmit(e){


// e.preventDefault();



// const data =
// new FormData();




// data.append(
// "title",
// form.title
// );



// data.append(
// "description",
// form.description
// );



// data.append(
// "github",
// form.github
// );



// data.append(
// "demo",
// form.demo
// );



// data.append(
// "featured",
// form.featured
// );




// data.append(

// "technologies",

// JSON.stringify(

// form.technologies

// .split(",")

// .map(item=>item.trim())

// .filter(Boolean)

// )

// );





// if(image){

// data.append(
// "image",
// image
// );

// }








// updateProject(
// id,
// data
// )

// .then(()=>{


// alert(
// "Project updated successfully 🚀"
// );


// navigate(
// "/admin/projects"
// );


// })

// .catch(error=>{


// console.log(error);


// alert(
// "Update failed"
// );


// });



// }









// if(loading){


// return(

// <AdminLayout>


// <div

// className="
// flex
// h-96
// items-center
// justify-center
// text-cyan-400
// text-xl
// "

// >

// Loading Project...

// </div>


// </AdminLayout>


// );


// }









// return(


// <AdminLayout>



// <div

// className="
// relative
// mx-auto
// max-w-6xl
// "

// >




// {/* Glow */}


// <div

// className="
// absolute
// right-20
// top-10
// h-72
// w-72
// rounded-full
// bg-cyan-500/20
// blur-3xl
// "

// />



// <div

// className="
// absolute
// bottom-10
// left-20
// h-60
// w-60
// rounded-full
// bg-blue-500/20
// blur-3xl
// "

// />












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
// mb-10
// "

// >


// <h1

// className="
// text-5xl
// font-black
// text-white
// "

// >

// Edit Project 🚀

// </h1>



// <p

// className="
// mt-3
// text-slate-400
// "

// >

// Update your project details and keep your portfolio fresh

// </p>


// </motion.div>













// <div

// className="
// grid
// gap-8
// lg:grid-cols-3
// "

// >









// {/* Preview */}



// <motion.div


// initial={{

// opacity:0,

// x:-30

// }}


// animate={{

// opacity:1,

// x:0

// }}


// className="
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-6
// backdrop-blur-xl
// "

// >


// <h2

// className="
// mb-5
// text-xl
// font-bold
// text-white
// "

// >

// Preview

// </h2>






// {

// oldImage &&


// <img


// src={
// `http://localhost:5000${oldImage}`
// }


// className="
// mb-5
// h-48
// w-full
// rounded-2xl
// object-cover
// "

//  />

// }




// <h3

// className="
// text-2xl
// font-bold
// text-white
// "

// >

// {form.title || "Project Name"}

// </h3>





// <p

// className="
// mt-3
// text-slate-400
// "

// >

// {form.description || "Project description"}

// </p>






// <div

// className="
// mt-5
// flex
// gap-4
// text-cyan-400
// "

// >


// <FaGithub/>


// <FaExternalLinkAlt/>


// </div>





// </motion.div>














// {/* Form */}



// <motion.form


// onSubmit={handleSubmit}


// initial={{

// opacity:0,

// x:30

// }}


// animate={{

// opacity:1,

// x:0

// }}


// className="
// space-y-6
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-8
// backdrop-blur-xl
// lg:col-span-2
// "

// >







// <input


// name="title"


// value={form.title}


// onChange={handleChange}


// placeholder="Project title"


// className="
// input-style
// "


// />









// <textarea


// name="description"


// value={form.description}


// onChange={handleChange}


// rows="6"


// placeholder="Project description"


// className="
// input-style
// "

// />









// <input


// name="github"


// value={form.github}


// onChange={handleChange}


// placeholder="Github URL"


// className="
// input-style
// "

// />









// <input


// name="demo"


// value={form.demo}


// onChange={handleChange}


// placeholder="Live Demo URL"


// className="
// input-style
// "

// />








// <input


// name="technologies"


// value={form.technologies}


// onChange={handleChange}


// placeholder="React, Node.js, PostgreSQL"


// className="
// input-style
// "

// />









// <div

// className="
// rounded-2xl
// border
// border-white/10
// bg-slate-900/40
// p-5
// "

// >


// <label

// className="
// flex
// items-center
// gap-3
// text-white
// cursor-pointer
// "

// >


// <input


// type="checkbox"


// name="featured"


// checked={form.featured}


// onChange={handleChange}


// />


// <FaStar

// className="
// text-yellow-400
// "

// />


// Featured Project


// </label>


// </div>









// <div

// className="
// rounded-2xl
// border
// border-dashed
// border-cyan-400/40
// bg-cyan-400/5
// p-6
// "

// >


// <div

// className="
// mb-3
// flex
// items-center
// gap-3
// text-white
// "

// >


// <FaImage/>

// Replace Project Image


// </div>




// <input


// type="file"


// accept="image/*"


// onChange={(e)=>

// setImage(
// e.target.files[0]
// )

// }


// />


// </div>









// <button


// className="
// flex
// w-full
// items-center
// justify-center
// gap-3
// rounded-2xl
// bg-gradient-to-r
// from-cyan-500
// to-blue-600
// py-4
// font-black
// text-white
// shadow-lg
// shadow-cyan-500/30
// transition
// hover:scale-[1.02]
// "

// >


// <FaSave/>


// Update Project


// </button>









// </motion.form>








// </div>





// </div>



// </AdminLayout>



// );


// }




// export default EditProject;
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaSave,
  FaCloudUploadAlt,
  FaSpinner,
  FaArrowLeft,
  FaTerminal,
  FaImage,
} from "react-icons/fa";

import AdminLayout from "../../layouts/AdminLayout";
import {
  getAdminProjects,
  updateProject,
} from "../../services/adminProjectService";

function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [oldImage, setOldImage] = useState("");

  const [form, setForm] = useState({
    title: "",
    description: "",
    github: "",
    demo: "",
    technologies: "",
    featured: false,
  });

  useEffect(() => {
    loadProject();
  }, [id]);

  async function loadProject() {
    try {
      const projects = await getAdminProjects();
      const project = projects.find((item) => String(item.id) === String(id));

      if (!project) {
        navigate("/admin/projects");
        return;
      }

      setForm({
        title: project.title || "",
        description: project.description || "",
        github: project.github || "",
        demo: project.demo || "",
        technologies: project.technologies ? project.technologies.join(", ") : "",
        featured: Boolean(project.featured),
      });

      setOldImage(project.image || "");
    } catch (error) {
      console.error("Error loading project record:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setSubmitting(true);
      const data = new FormData();
      data.append("title", form.title);
      data.append("description", form.description);
      data.append("github", form.github);
      data.append("demo", form.demo);
      data.append("featured", form.featured);
      data.append(
        "technologies",
        JSON.stringify(
          form.technologies
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        )
      );

      if (image) {
        data.append("image", image);
      }

      await updateProject(id, data);
      navigate("/admin/projects");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed updating project deployment record.");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="relative mx-auto flex h-96 max-w-2xl flex-col items-center justify-center overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#080f1e]/85 p-12 text-center shadow-[0_0_30px_rgba(0,240,255,0.06)] backdrop-blur-2xl">
          <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/60" />
          <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/60" />
          <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/60" />
          <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/60" />

          <div className="flex flex-col items-center justify-center gap-3">
            <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] animate-ping" />
            <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-cyan-300">
              RETRIEVING_PROJECT_TELEMETRY...
            </p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  const techArray = form.technologies
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <AdminLayout>
      <div className="space-y-10 selection:bg-cyan-500 selection:text-black">
        {/* 1. HEADER & NAVIGATION CONTROL */}
        <div className="flex flex-col justify-between gap-4 border-b border-cyan-500/15 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3.5 py-1 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse" />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                SYS_MUTATION // PROJECT_EDIT
              </span>
            </div>

            <h1 className="font-['Orbitron'] text-3xl font-black tracking-wide text-white sm:text-4xl">
              Edit{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                Project
              </span>
            </h1>

            <p className="mt-2 font-['JetBrains_Mono'] text-xs text-slate-400 sm:text-sm">
              Mutate specifications, update repository links, and commit changes.
            </p>
          </div>

          <button
            onClick={() => navigate("/admin/projects")}
            className="
              inline-flex items-center gap-2 rounded-xl border border-cyan-500/30
              bg-[#080f1e]/85 px-5 py-3 font-['Orbitron'] text-xs font-bold uppercase tracking-wider
              text-cyan-300 backdrop-blur-xl transition-all duration-300
              hover:border-cyan-400 hover:bg-cyan-950/40 hover:text-white
              hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] active:scale-95 cursor-pointer
            "
          >
            <FaArrowLeft size={11} />
            <span>Return to Projects</span>
          </button>
        </div>

        {/* 2. DUAL-PANE HUD EDITOR & LIVE PREVIEW */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* LEFT: LIVE HUD PREVIEW CARD */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="
              group relative flex flex-col justify-between overflow-hidden rounded-3xl
              border border-cyan-500/25 bg-[#080f1e]/90 p-6 shadow-[0_0_35px_rgba(0,240,255,0.06)]
              backdrop-blur-3xl lg:sticky lg:top-24 h-fit
            "
          >
            <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/80" />
            <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/80" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/80" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/80" />

            <div>
              <div className="mb-4 flex items-center justify-between border-b border-cyan-500/15 pb-3">
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-cyan-400">
                  LIVE_TELEMETRY // PREVIEW
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981] animate-pulse" />
              </div>

              {/* Preview Image */}
              {(previewImage || oldImage) && (
                <div className="relative mb-5 overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-950">
                  <img
                    src={previewImage || `http://localhost:5000${oldImage}`}
                    alt="Preview"
                    className="h-48 w-full object-cover"
                  />
                  {form.featured && (
                    <div className="absolute right-2.5 top-2.5 flex items-center gap-1.5 rounded-md border border-yellow-400/50 bg-slate-950/80 px-2.5 py-1 font-['Orbitron'] text-[9px] font-bold text-yellow-300 shadow-[0_0_10px_rgba(250,204,21,0.3)] backdrop-blur-md">
                      <FaStar size={10} className="text-yellow-400" />
                      <span>FEATURED</span>
                    </div>
                  )}
                </div>
              )}

              <h3 className="font-['Orbitron'] text-xl font-bold tracking-wide text-white">
                {form.title || "Untitled Project"}
              </h3>

              <p className="mt-2 line-clamp-4 font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-400">
                {form.description || "No project specification provided."}
              </p>

              {/* Live Stack Badges */}
              {techArray.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {techArray.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-md border border-cyan-400/20 bg-cyan-950/40 px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] font-semibold text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Live External Links */}
            {(form.github || form.demo) && (
              <div className="mt-6 flex items-center gap-2 border-t border-cyan-500/15 pt-4">
                {form.github && (
                  <a
                    href={form.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/25 bg-slate-950/80 text-xs text-slate-400 transition-all hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                  >
                    <FaGithub />
                  </a>
                )}
                {form.demo && (
                  <a
                    href={form.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/25 bg-slate-950/80 text-xs text-slate-400 transition-all hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                  >
                    <FaExternalLinkAlt size={10} />
                  </a>
                )}
              </div>
            )}
          </motion.div>

          {/* RIGHT: TACTICAL HUD MUTATION FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="
              relative space-y-6 rounded-3xl border border-cyan-500/25
              bg-[#080f1e]/90 p-8 shadow-[0_0_40px_rgba(0,240,255,0.08)]
              backdrop-blur-3xl sm:p-10 lg:col-span-2
            "
          >
            <span className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-cyan-400/90" />
            <span className="pointer-events-none absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-cyan-400/90" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400/90" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400/90" />

            {/* Title */}
            <div>
              <label className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400/70">
                // PROJECT_TITLE
              </label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Project title"
                required
                className="
                  w-full rounded-xl border border-cyan-500/20 bg-slate-950/80 p-4
                  font-['JetBrains_Mono'] text-xs text-white placeholder-slate-500
                  outline-none transition-all duration-300
                  focus:border-cyan-400 focus:bg-slate-900/90 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)]
                "
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400/70">
                // SYSTEM_SPECIFICATION (DESCRIPTION)
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows="5"
                placeholder="Project description..."
                required
                className="
                  w-full resize-none rounded-xl border border-cyan-500/20 bg-slate-950/80 p-4
                  font-['JetBrains_Mono'] text-xs leading-relaxed text-white placeholder-slate-500
                  outline-none transition-all duration-300
                  focus:border-cyan-400 focus:bg-slate-900/90 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)]
                "
              />
            </div>

            {/* GitHub & Live Demo Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400/70">
                  // REPOSITORY_ENDPOINT
                </label>
                <div className="relative">
                  <FaGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400/70" />
                  <input
                    name="github"
                    value={form.github}
                    onChange={handleChange}
                    placeholder="https://github.com/..."
                    className="
                      w-full rounded-xl border border-cyan-500/20 bg-slate-950/80 py-3.5 pl-11 pr-4
                      font-['JetBrains_Mono'] text-xs text-white placeholder-slate-500
                      outline-none transition-all duration-300
                      focus:border-cyan-400 focus:bg-slate-900/90 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)]
                    "
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400/70">
                  // LIVE_DEPLOYMENT_URL
                </label>
                <div className="relative">
                  <FaExternalLinkAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400/70" size={12} />
                  <input
                    name="demo"
                    value={form.demo}
                    onChange={handleChange}
                    placeholder="https://project.app"
                    className="
                      w-full rounded-xl border border-cyan-500/20 bg-slate-950/80 py-3.5 pl-11 pr-4
                      font-['JetBrains_Mono'] text-xs text-white placeholder-slate-500
                      outline-none transition-all duration-300
                      focus:border-cyan-400 focus:bg-slate-900/90 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)]
                    "
                  />
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <label className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400/70">
                // STACK_COMPONENTS (COMMA_SEPARATED)
              </label>
              <input
                name="technologies"
                value={form.technologies}
                onChange={handleChange}
                placeholder="React, Node.js, PostgreSQL, TailwindCSS"
                className="
                  w-full rounded-xl border border-cyan-500/20 bg-slate-950/80 p-4
                  font-['JetBrains_Mono'] text-xs text-white placeholder-slate-500
                  outline-none transition-all duration-300
                  focus:border-cyan-400 focus:bg-slate-900/90 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)]
                "
              />
            </div>

            {/* Image Replace Zone */}
            <div>
              <label className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400/70">
                // REPLACE_ASSET_PAYLOAD
              </label>
              <div className="relative overflow-hidden rounded-2xl border border-dashed border-cyan-500/30 bg-slate-950/60 p-6 transition-all hover:border-cyan-400/60 hover:bg-cyan-950/20">
                <label className="flex cursor-pointer flex-col items-center justify-center text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-950/50 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                    <FaCloudUploadAlt size={22} />
                  </div>

                  <p className="font-['Orbitron'] text-xs font-bold tracking-wide text-white">
                    SELECT NEW ASSET TO REPLACE CURRENT
                  </p>
                  <p className="mt-1 font-mono text-[10px] text-slate-400">
                    PNG, JPG, WEBP &bull; LEAVE EMPTY TO PRESERVE CURRENT IMAGE
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>

            {/* Featured Switch */}
            <label className="flex cursor-pointer items-center justify-between rounded-xl border border-cyan-500/20 bg-slate-950/80 p-4 transition-all hover:border-cyan-400/40">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-yellow-400/40 bg-yellow-950/30 text-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.2)]">
                  <FaStar size={13} />
                </div>
                <div>
                  <p className="font-['Orbitron'] text-xs font-bold tracking-wide text-white">
                    Featured Project
                  </p>
                  <p className="font-['JetBrains_Mono'] text-[10px] text-slate-400">
                    Highlight this project at the top of your portfolio showcase
                  </p>
                </div>
              </div>

              <input
                type="checkbox"
                name="featured"
                checked={form.featured}
                onChange={handleChange}
                className="h-5 w-5 accent-cyan-400 cursor-pointer"
              />
            </label>

            {/* Submit Action Trigger */}
            <button
              disabled={submitting}
              type="submit"
              className="
                group/btn relative mt-6 flex w-full items-center justify-center gap-2.5 overflow-hidden
                rounded-xl border border-cyan-400/60 bg-gradient-to-r from-cyan-500 to-blue-600
                py-4 font-['Orbitron'] text-xs font-bold uppercase tracking-wider text-white
                shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all duration-300
                hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(0,240,255,0.55)] active:scale-98
                disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />

              {submitting ? (
                <>
                  <FaSpinner className="animate-spin text-sm" />
                  <span>COMMITTING_CHANGES...</span>
                </>
              ) : (
                <>
                  <FaSave className="text-xs" />
                  <span>SAVE &amp; COMMIT CHANGES</span>
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </AdminLayout>
  );
}

export default EditProject;