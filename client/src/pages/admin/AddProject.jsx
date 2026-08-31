
// import {
// useState
// }
// from "react";

// import {
// useNavigate
// }
// from "react-router-dom";

// import {
// motion
// }
// from "framer-motion";

// import {
// FaCloudUploadAlt,
// FaStar,
// FaGithub,
// FaExternalLinkAlt,
// FaRocket
// }
// from "react-icons/fa";


// import {
// createProject
// }
// from "../../services/adminProjectService";





// function AddProject(){


// const navigate = useNavigate();



// const [loading,setLoading]=useState(false);


// const [preview,setPreview]=useState(null);



// const [form,setForm]=useState({

// title:"",
// description:"",
// github:"",
// demo:"",
// technologies:"",
// featured:false,
// image:null

// });







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








// function handleImage(e){


// const file=e.target.files[0];


// if(file){


// setForm({

// ...form,

// image:file

// });


// setPreview(
// URL.createObjectURL(file)
// );


// }



// }









// async function handleSubmit(e){


// e.preventDefault();



// try{


// setLoading(true);



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

// .map(t=>t.trim())

// )

// );





// if(form.image){

// data.append(
// "image",
// form.image
// );

// }






// await createProject(data);



// alert(
// "🚀 Project created successfully"
// );



// navigate(
// "/admin/projects"
// );



// }

// catch(error){


// console.log(error);


// alert(
// "Failed creating project"
// );



// }

// finally{


// setLoading(false);


// }



// }










// return(


// <section

// className="
// relative
// min-h-screen
// overflow-hidden
// bg-slate-950
// px-6
// py-20
// "



// >


// {/* Background Glow */}


// <div

// className="
// absolute
// left-1/2
// top-20
// h-96
// w-96
// -translate-x-1/2
// rounded-full
// bg-cyan-500/20
// blur-3xl
// "

// />



// <div

// className="
// absolute
// bottom-10
// right-20
// h-72
// w-72
// rounded-full
// bg-blue-600/20
// blur-3xl
// "

// />









// <motion.div


// initial={{

// opacity:0,
// y:40

// }}


// animate={{

// opacity:1,
// y:0

// }}


// transition={{

// duration:0.6

// }}


// className="
// relative
// mx-auto
// max-w-4xl
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-10
// shadow-2xl
// backdrop-blur-xl
// "



// >






// {/* Header */}


// <div

// className="
// mb-10
// flex
// items-center
// gap-4
// "

// >


// <div

// className="
// rounded-2xl
// bg-gradient-to-r
// from-cyan-500
// to-blue-600
// p-4
// text-white
// shadow-lg
// "

// >

// <FaRocket size={28}/>

// </div>



// <div>


// <h1

// className="
// text-4xl
// font-black
// text-white
// "

// >

// Create New Project

// </h1>



// <p

// className="
// mt-2
// text-slate-400
// "

// >

// Add a new project to your portfolio showcase

// </p>


// </div>


// </div>









// <form

// onSubmit={handleSubmit}

// className="
// space-y-7
// "

// >









// {/* Title */}


// <div>


// <label

// className="
// mb-2
// block
// font-semibold
// text-slate-300
// "

// >

// Project Title

// </label>


// <input

// name="title"

// value={form.title}

// onChange={handleChange}

// placeholder="Portfolio Website"

// required


// className="
// w-full
// rounded-2xl
// border
// border-white/10
// bg-slate-900/70
// p-4
// text-white
// outline-none
// transition
// focus:border-cyan-400
// focus:ring-2
// focus:ring-cyan-400/30
// "

// />


// </div>









// {/* Description */}


// <div>


// <label

// className="
// mb-2
// block
// font-semibold
// text-slate-300
// "

// >

// Description

// </label>


// <textarea

// name="description"

// value={form.description}

// onChange={handleChange}

// rows="5"

// placeholder="Describe your project..."

// required


// className="
// w-full
// rounded-2xl
// border
// border-white/10
// bg-slate-900/70
// p-4
// text-white
// outline-none
// transition
// focus:border-cyan-400
// focus:ring-2
// focus:ring-cyan-400/30
// "

// />


// </div>









// <div

// className="
// grid
// gap-6
// md:grid-cols-2
// "

// >



// <div>


// <label

// className="
// mb-2
// block
// text-slate-300
// "

// >

// Github URL

// </label>



// <div

// className="
// relative
// "

// >

// <FaGithub

// className="
// absolute
// left-4
// top-5
// text-cyan-400
// "

// />


// <input

// name="github"

// value={form.github}

// onChange={handleChange}

// placeholder="https://github.com/..."

// className="
// w-full
// rounded-2xl
// border
// border-white/10
// bg-slate-900/70
// py-4
// pl-12
// text-white
// "

// />


// </div>



// </div>








// <div>


// <label

// className="
// mb-2
// block
// text-slate-300
// "

// >

// Live Demo

// </label>



// <div

// className="
// relative
// "

// >

// <FaExternalLinkAlt

// className="
// absolute
// left-4
// top-5
// text-cyan-400
// "

// />


// <input

// name="demo"

// value={form.demo}

// onChange={handleChange}

// placeholder="https://website.com"

// className="
// w-full
// rounded-2xl
// border
// border-white/10
// bg-slate-900/70
// py-4
// pl-12
// text-white
// "

// />


// </div>



// </div>



// </div>









// {/* Technologies */}


// <div>


// <label

// className="
// mb-2
// block
// text-slate-300
// "

// >

// Technologies

// </label>


// <input


// name="technologies"

// value={form.technologies}

// onChange={handleChange}

// placeholder="React, Node.js, PostgreSQL"

// className="
// w-full
// rounded-2xl
// border
// border-white/10
// bg-slate-900/70
// p-4
// text-white
// "

// />


// </div>









// {/* Image Upload */}



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


// <label

// className="
// flex
// cursor-pointer
// flex-col
// items-center
// justify-center
// text-center
// "

// >


// <FaCloudUploadAlt

// size={45}

// className="
// mb-3
// text-cyan-400
// "

// />


// <p

// className="
// font-semibold
// text-white
// "

// >

// Upload Project Image

// </p>


// <p

// className="
// text-sm
// text-slate-400
// "

// >

// PNG, JPG, WEBP

// </p>



// <input

// type="file"

// accept="image/*"

// hidden

// onChange={handleImage}

// />



// </label>





// {
// preview &&


// <img

// src={preview}

// alt="preview"

// className="
// mt-6
// h-60
// w-full
// rounded-2xl
// object-cover
// "

// />

// }



// </div>









// {/* Featured */}



// <label

// className="
// flex
// items-center
// gap-3
// rounded-2xl
// border
// border-white/10
// bg-white/5
// p-4
// text-white
// transition
// hover:border-yellow-400
// "

// >


// <input

// type="checkbox"

// name="featured"

// checked={form.featured}

// onChange={handleChange}

// className="
// h-5
// w-5
// accent-yellow-400
// "

// />



// <div

// className="
// flex
// items-center
// gap-2
// "

// >

// <FaStar className="text-yellow-400"/>

// Featured Project

// </div>


// </label>









// <button


// disabled={loading}


// className="
// group
// flex
// w-full
// items-center
// justify-center
// gap-3
// rounded-2xl
// bg-gradient-to-r
// from-cyan-500
// via-blue-500
// to-indigo-600
// py-4
// font-black
// text-white
// shadow-xl
// shadow-cyan-500/20
// transition
// hover:scale-[1.02]
// disabled:opacity-50
// "

// >


// {

// loading
// ?

// "Creating Project..."

// :

// <>

// Create Project

// <FaRocket/>

// </>

// }



// </button>







// </form>





// </motion.div>





// </section>



// );


// }



// export default AddProject;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCloudUploadAlt,
  FaStar,
  FaGithub,
  FaExternalLinkAlt,
  FaRocket,
  FaSpinner,
  FaTerminal,
  FaImage,
} from "react-icons/fa";

import AdminLayout from "../../layouts/AdminLayout";
import { createProject } from "../../services/adminProjectService";

function AddProject() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    github: "",
    demo: "",
    technologies: "",
    featured: false,
    image: null,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (file) {
      setForm({
        ...form,
        image: file,
      });
      setPreview(URL.createObjectURL(file));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();
      data.append("title", form.title);
      data.append("description", form.description);
      data.append("github", form.github);
      data.append("demo", form.demo);
      data.append("featured", form.featured);
      data.append(
        "technologies",
        JSON.stringify(
          form.technologies.split(",").map((t) => t.trim())
        )
      );

      if (form.image) {
        data.append("image", form.image);
      }

      await createProject(data);
      navigate("/admin/projects");
    } catch (error) {
      console.error(error);
      alert("Failed creating project deployment.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-10 selection:bg-cyan-500 selection:text-black">
        {/* 1. HEADER & TELEMETRY IDENTITY */}
        <div className="flex flex-col justify-between gap-4 border-b border-cyan-500/15 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3.5 py-1 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse" />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                SYS_DEPLOY // CREATE_RECORD
              </span>
            </div>

            <h1 className="font-['Orbitron'] text-3xl font-black tracking-wide text-white sm:text-4xl">
              Create New{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                Project
              </span>
            </h1>

            <p className="mt-2 font-['JetBrains_Mono'] text-xs text-slate-400 sm:text-sm">
              Register and deploy a new project telemetry entry to your showcase.
            </p>
          </div>
        </div>

        {/* 2. TACTICAL HUD FORM CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="
            group relative overflow-hidden rounded-3xl border border-cyan-500/25
            bg-[#080f1e]/90 p-8 shadow-[0_0_40px_rgba(0,240,255,0.08)]
            backdrop-blur-3xl sm:p-10
          "
        >
          {/* Tactical HUD Corner Marks */}
          <span className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-cyan-400/90" />
          <span className="pointer-events-none absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-cyan-400/90" />
          <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400/90" />
          <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400/90" />

          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl opacity-50" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            {/* Title */}
            <div>
              <label className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400/70">
                // PROJECT_TITLE
              </label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Cyber Dashboard HUD"
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
                rows="4"
                placeholder="Describe architecture, features, and deployment targets..."
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
                placeholder="React, TailwindCSS, Node.js, PostgreSQL"
                className="
                  w-full rounded-xl border border-cyan-500/20 bg-slate-950/80 p-4
                  font-['JetBrains_Mono'] text-xs text-white placeholder-slate-500
                  outline-none transition-all duration-300
                  focus:border-cyan-400 focus:bg-slate-900/90 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)]
                "
              />
            </div>

            {/* Image Upload Zone */}
            <div>
              <label className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400/70">
                // ASSET_PAYLOAD (IMAGE)
              </label>
              <div className="relative overflow-hidden rounded-2xl border border-dashed border-cyan-500/30 bg-slate-950/60 p-6 transition-all hover:border-cyan-400/60 hover:bg-cyan-950/20">
                <label className="flex cursor-pointer flex-col items-center justify-center text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-950/50 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                    <FaCloudUploadAlt size={22} />
                  </div>

                  <p className="font-['Orbitron'] text-xs font-bold tracking-wide text-white">
                    SELECT PROJECT ASSET
                  </p>
                  <p className="mt-1 font-mono text-[10px] text-slate-400">
                    PNG, JPG, WEBP &bull; RECOMMENDED 16:9
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImage}
                  />
                </label>

                {preview && (
                  <div className="relative mt-5 overflow-hidden rounded-xl border border-cyan-500/30">
                    <img
                      src={preview}
                      alt="Telemetry Preview"
                      className="h-56 w-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-md border border-cyan-400/40 bg-slate-950/80 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                      <FaImage size={10} />
                      <span>IMAGE_READY</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Featured Checkbox Switch */}
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
                    Highlight this project at the top of the portfolio showcase
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
              disabled={loading}
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

              {loading ? (
                <>
                  <FaSpinner className="animate-spin text-sm" />
                  <span>INITIALIZING_DEPLOYMENT...</span>
                </>
              ) : (
                <>
                  <FaRocket className="text-xs" />
                  <span>COMMIT &amp; DEPLOY PROJECT</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </AdminLayout>
  );
}

export default AddProject;