
// import {
// useEffect,
// useState
// }
// from "react";


// import {
// motion
// }
// from "framer-motion";


// import {

// FaUser,

// FaGithub,

// FaLinkedin,

// FaFilePdf,

// FaSave,

// FaCode

// }
// from "react-icons/fa";


// import AdminLayout from "../../layouts/AdminLayout";


// import {

// getAdminProfile,

// updateAdminProfile

// }

// from "../../services/adminProfileService";







// function AdminProfile(){



// const [profile,setProfile]=useState(null);


// const [loading,setLoading]=useState(true);


// const [cv,setCv]=useState(null);




// const [form,setForm]=useState({


// name:"",

// title:"",

// bio:"",

// github:"",

// linkedin:"",

// skills:[]


// });









// useEffect(()=>{


// loadProfile();


// },[]);









// async function loadProfile(){


// try{


// const data =
// await getAdminProfile();



// if(data){


// setForm({

// name:data.name || "",

// title:data.title || "",

// bio:data.bio || "",

// github:data.github || "",

// linkedin:data.linkedin || "",

// skills:data.skills || []

// });


// }



// setProfile(data);



// }

// catch(error){

// console.log(error);

// }

// finally{

// setLoading(false);

// }


// }









// function handleChange(e){


// setForm({

// ...form,

// [e.target.name]:e.target.value


// });


// }










// function handleSkills(e){


// setForm({

// ...form,

// skills:e.target.value
// .split(",")
// .map(skill=>skill.trim())


// });


// }










// async function handleSubmit(e){


// e.preventDefault();



// const data =
// new FormData();



// data.append(
// "name",
// form.name
// );



// data.append(
// "title",
// form.title
// );



// data.append(
// "bio",
// form.bio
// );



// data.append(
// "github",
// form.github
// );



// data.append(
// "linkedin",
// form.linkedin
// );



// data.append(

// "skills",

// JSON.stringify(form.skills)

// );



// if(cv){

// data.append(
// "cv",
// cv
// );


// }




// try{


// await updateAdminProfile(data);



// alert(
// "Profile updated successfully 🚀"
// );



// loadProfile();



// }

// catch(error){

// console.log(error);


// alert(
// "Update failed"
// );


// }



// }











// if(loading){


// return(

// <AdminLayout>


// <div

// className="
// flex
// min-h-[400px]
// items-center
// justify-center
// text-cyan-400
// "

// >

// Loading Profile...

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






// {/* Background Glow */}


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
// h-64
// w-64
// rounded-full
// bg-blue-500/20
// blur-3xl
// "

// />











// {/* Header */}



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
// relative
// "

// >


// <h1

// className="
// text-5xl
// font-black
// text-white
// "

// >

// My Profile

// </h1>


// <p

// className="
// mt-3
// text-slate-400
// "

// >

// Manage your portfolio identity and public information

// </p>



// </motion.div>












// <div

// className="
// grid
// gap-8
// lg:grid-cols-3
// "

// >









// {/* Profile Preview */}



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
// p-8
// backdrop-blur-xl
// "

// >


// <div

// className="
// mx-auto
// flex
// h-28
// w-28
// items-center
// justify-center
// rounded-full
// bg-gradient-to-r
// from-cyan-500
// to-blue-600
// text-white
// shadow-xl
// "

// >


// <FaUser size={45}/>


// </div>






// <h2

// className="
// mt-6
// text-center
// text-2xl
// font-bold
// text-white
// "

// >

// {form.name || "Your Name"}

// </h2>



// <p

// className="
// mt-2
// text-center
// text-cyan-400
// "

// >

// {form.title || "Software Engineer"}

// </p>








// <div

// className="
// mt-8
// space-y-3
// "

// >


// <div

// className="
// flex
// items-center
// gap-3
// text-slate-300
// "

// >

// <FaGithub/>

// Github

// </div>



// <div

// className="
// flex
// items-center
// gap-3
// text-slate-300
// "

// >

// <FaLinkedin/>

// LinkedIn

// </div>



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





// <div

// className="
// grid
// gap-6
// md:grid-cols-2
// "

// >


// <Input

// name="name"

// value={form.name}

// onChange={handleChange}

// placeholder="Full Name"

// />


// <Input

// name="title"

// value={form.title}

// onChange={handleChange}

// placeholder="Professional Title"

// />



// </div>









// <textarea


// name="bio"


// value={form.bio}


// onChange={handleChange}


// rows="6"


// placeholder="Professional Bio"


// className="
// w-full
// rounded-2xl
// border
// border-white/10
// bg-slate-900/70
// p-5
// text-white
// outline-none
// transition
// focus:border-cyan-400
// "

// />









// <Input

// name="github"

// value={form.github}

// onChange={handleChange}

// placeholder="Github URL"

// />







// <Input

// name="linkedin"

// value={form.linkedin}

// onChange={handleChange}

// placeholder="LinkedIn URL"

// />









// <div

// className="
// relative
// "

// >


// <FaCode

// className="
// absolute
// left-4
// top-5
// text-cyan-400
// "

// />


// <input


// value={form.skills.join(",")}


// onChange={handleSkills}


// placeholder="React, Node.js, PostgreSQL"


// className="
// w-full
// rounded-2xl
// border
// border-white/10
// bg-slate-900/70
// py-4
// pl-12
// text-white
// outline-none
// focus:border-cyan-400
// "


// />


// </div>









// {/* Skills Preview */}


// <div

// className="
// flex
// flex-wrap
// gap-3
// "

// >


// {

// form.skills.map(skill=>(


// <span

// key={skill}

// className="
// rounded-full
// bg-cyan-400/10
// px-4
// py-2
// text-sm
// text-cyan-300
// "

// >

// {skill}

// </span>


// ))


// }


// </div>









// {/* CV Upload */}


// <div

// className="
// rounded-2xl
// border
// border-dashed
// border-cyan-400/30
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


// <FaFilePdf/>

// Upload Resume PDF


// </div>



// <input


// type="file"


// accept="application/pdf"


// onChange={(e)=>

// setCv(
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

// Save Changes


// </button>








// </motion.form>









// </div>






// </div>


// </AdminLayout>


// );


// }









// function Input({

// name,

// value,

// onChange,

// placeholder

// }){


// return(

// <input


// name={name}


// value={value}


// onChange={onChange}


// placeholder={placeholder}


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
// focus:ring
// focus:ring-cyan-400/20
// "

// />


// );


// }




// export default AdminProfile;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUser,
  FaGithub,
  FaLinkedin,
  FaFilePdf,
  FaSave,
  FaCode,
  FaArrowLeft,
  FaSpinner,
  FaExternalLinkAlt,
  FaUpload,
} from "react-icons/fa";

import AdminLayout from "../../layouts/AdminLayout";
import {
  getAdminProfile,
  updateAdminProfile,
} from "../../services/adminProfileService";

function AdminProfile() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [cv, setCv] = useState(null);

  const [form, setForm] = useState({
    name: "",
    title: "",
    bio: "",
    github: "",
    linkedin: "",
    skills: [],
  });

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const data = await getAdminProfile();
      if (data) {
        setForm({
          name: data.name || "",
          title: data.title || "",
          bio: data.bio || "",
          github: data.github || "",
          linkedin: data.linkedin || "",
          skills: Array.isArray(data.skills) ? data.skills : [],
        });
      }
    } catch (error) {
      console.error("Failed loading admin profile:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSkills(e) {
    const raw = e.target.value;
    setForm({
      ...form,
      skills: raw.split(",").map((s) => s.trim()),
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setSubmitting(true);
      const data = new FormData();
      data.append("name", form.name);
      data.append("title", form.title);
      data.append("bio", form.bio);
      data.append("github", form.github);
      data.append("linkedin", form.linkedin);
      data.append(
        "skills",
        JSON.stringify(form.skills.filter(Boolean))
      );

      if (cv) {
        data.append("cv", cv);
      }

      await updateAdminProfile(data);
      alert("Profile updated successfully");
      loadProfile();
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update profile settings.");
    } finally {
      setSubmitting(false);
    }
  }

  const cleanSkills = form.skills.filter(Boolean);

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
              Loading Profile Data...
            </p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-10 selection:bg-cyan-500 selection:text-black">
        {/* 1. HEADER & BACK NAVIGATION */}
        <div className="flex flex-col justify-between gap-4 border-b border-cyan-500/15 pb-8 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3.5 py-1 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse" />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                Admin Console &bull; Profile Settings
              </span>
            </div>

            <h1 className="font-['Orbitron'] text-3xl font-black tracking-wide text-white sm:text-4xl">
              Profile{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                Configuration
              </span>
            </h1>

            <p className="mt-2 font-['JetBrains_Mono'] text-xs text-slate-400 sm:text-sm">
              Manage your personal identity, bio, links, and public resume assets.
            </p>
          </div>

          <button
            onClick={() => navigate("/admin/dashboard")}
            className="
              inline-flex items-center gap-2 rounded-xl border border-cyan-500/30
              bg-[#080f1e]/85 px-5 py-3 font-['Orbitron'] text-xs font-bold uppercase tracking-wider
              text-cyan-300 backdrop-blur-xl transition-all duration-300
              hover:border-cyan-400 hover:bg-cyan-950/40 hover:text-white
              hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] active:scale-95 cursor-pointer
            "
          >
            <FaArrowLeft size={11} />
            <span>Back to Dashboard</span>
          </button>
        </div>

        {/* 2. DUAL-PANE PROFILE EDITOR & PREVIEW */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* LEFT: LIVE PROFILE CARD PREVIEW */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="
              group relative flex flex-col justify-between overflow-hidden rounded-3xl
              border border-cyan-500/25 bg-[#080f1e]/90 p-7 shadow-[0_0_35px_rgba(0,240,255,0.06)]
              backdrop-blur-3xl lg:sticky lg:top-24 h-fit
            "
          >
            {/* Tactical HUD Corner Marks */}
            <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/80" />
            <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/80" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/80" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/80" />

            <div>
              <div className="mb-6 flex items-center justify-between border-b border-cyan-500/15 pb-3">
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-cyan-400">
                  Public Preview
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981] animate-pulse" />
              </div>

              {/* Avatar Emblem */}
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-cyan-400/40 bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950 text-3xl text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                <FaUser />
              </div>

              <h2 className="mt-5 text-center font-['Orbitron'] text-xl font-bold tracking-wide text-white">
                {form.name || "Your Full Name"}
              </h2>

              <p className="mt-1 text-center font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {form.title || "Software Engineer"}
              </p>

              <div className="mt-5 rounded-2xl border border-cyan-500/10 bg-slate-950/60 p-4">
                <p className="font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-300">
                  {form.bio || "No professional biography configured yet."}
                </p>
              </div>

              {/* Verified Links */}
              <div className="mt-5 space-y-2.5">
                {form.github && (
                  <a
                    href={form.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-cyan-500/20 bg-slate-950/70 px-3.5 py-2.5 text-xs text-slate-300 transition-all hover:border-cyan-400 hover:text-cyan-300"
                  >
                    <div className="flex items-center gap-2.5">
                      <FaGithub className="text-cyan-400" />
                      <span className="font-['JetBrains_Mono']">GitHub Profile</span>
                    </div>
                    <FaExternalLinkAlt size={10} className="text-slate-500" />
                  </a>
                )}

                {form.linkedin && (
                  <a
                    href={form.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-cyan-500/20 bg-slate-950/70 px-3.5 py-2.5 text-xs text-slate-300 transition-all hover:border-cyan-400 hover:text-cyan-300"
                  >
                    <div className="flex items-center gap-2.5">
                      <FaLinkedin className="text-cyan-400" />
                      <span className="font-['JetBrains_Mono']">LinkedIn Profile</span>
                    </div>
                    <FaExternalLinkAlt size={10} className="text-slate-500" />
                  </a>
                )}
              </div>

              {/* Skills Tags Preview */}
              {cleanSkills.length > 0 && (
                <div className="mt-6 border-t border-cyan-500/15 pt-4">
                  <p className="mb-2.5 font-mono text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Active Skills
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cleanSkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="rounded-md border border-cyan-400/25 bg-cyan-950/40 px-2 py-0.5 font-['JetBrains_Mono'] text-[10px] font-semibold text-cyan-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* RIGHT: PROFILE CONFIGURATION FORM */}
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
            {/* Tactical HUD Corner Marks */}
            <span className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-cyan-400/90" />
            <span className="pointer-events-none absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-cyan-400/90" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400/90" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400/90" />

            {/* Name and Professional Title */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-['JetBrains_Mono'] text-xs font-semibold text-slate-300">
                  Full Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Vance"
                  required
                  className="
                    w-full rounded-xl border border-cyan-500/20 bg-slate-950/80 p-3.5
                    font-['JetBrains_Mono'] text-xs text-white placeholder-slate-500
                    outline-none transition-all duration-300
                    focus:border-cyan-400 focus:bg-slate-900/90 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)]
                  "
                />
              </div>

              <div>
                <label className="mb-2 block font-['JetBrains_Mono'] text-xs font-semibold text-slate-300">
                  Professional Title
                </label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="e.g. Full-Stack Software Engineer"
                  required
                  className="
                    w-full rounded-xl border border-cyan-500/20 bg-slate-950/80 p-3.5
                    font-['JetBrains_Mono'] text-xs text-white placeholder-slate-500
                    outline-none transition-all duration-300
                    focus:border-cyan-400 focus:bg-slate-900/90 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)]
                  "
                />
              </div>
            </div>

            {/* Professional Bio */}
            <div>
              <label className="mb-2 block font-['JetBrains_Mono'] text-xs font-semibold text-slate-300">
                Professional Bio
              </label>
              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                rows="5"
                placeholder="Share your engineering background, expertise, and goals..."
                required
                className="
                  w-full resize-none rounded-xl border border-cyan-500/20 bg-slate-950/80 p-4
                  font-['JetBrains_Mono'] text-xs leading-relaxed text-white placeholder-slate-500
                  outline-none transition-all duration-300
                  focus:border-cyan-400 focus:bg-slate-900/90 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)]
                "
              />
            </div>

            {/* Social Links */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-['JetBrains_Mono'] text-xs font-semibold text-slate-300">
                  GitHub Profile URL
                </label>
                <div className="relative">
                  <FaGithub className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400/70" />
                  <input
                    name="github"
                    value={form.github}
                    onChange={handleChange}
                    placeholder="https://github.com/username"
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
                <label className="mb-2 block font-['JetBrains_Mono'] text-xs font-semibold text-slate-300">
                  LinkedIn Profile URL
                </label>
                <div className="relative">
                  <FaLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400/70" />
                  <input
                    name="linkedin"
                    value={form.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/username"
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

            {/* Skills Input */}
            <div>
              <label className="mb-2 block font-['JetBrains_Mono'] text-xs font-semibold text-slate-300">
                Skills (Comma Separated)
              </label>
              <div className="relative">
                <FaCode className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400/70" />
                <input
                  value={form.skills.join(", ")}
                  onChange={handleSkills}
                  placeholder="React, Node.js, Express, PostgreSQL, TailwindCSS"
                  className="
                    w-full rounded-xl border border-cyan-500/20 bg-slate-950/80 py-3.5 pl-11 pr-4
                    font-['JetBrains_Mono'] text-xs text-white placeholder-slate-500
                    outline-none transition-all duration-300
                    focus:border-cyan-400 focus:bg-slate-900/90 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)]
                  "
                />
              </div>
            </div>

            {/* Resume Upload Zone */}
            <div>
              <label className="mb-2 block font-['JetBrains_Mono'] text-xs font-semibold text-slate-300">
                Resume Document (PDF)
              </label>
              <div className="relative overflow-hidden rounded-2xl border border-dashed border-cyan-500/30 bg-slate-950/60 p-6 transition-all hover:border-cyan-400/60 hover:bg-cyan-950/20">
                <label className="flex cursor-pointer flex-col items-center justify-center text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-950/50 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                    <FaUpload size={18} />
                  </div>

                  <p className="font-['Orbitron'] text-xs font-bold tracking-wide text-white">
                    {cv ? cv.name : "Select Resume PDF File"}
                  </p>
                  <p className="mt-1 font-mono text-[10px] text-slate-400">
                    PDF format only &bull; Max recommended size 5MB
                  </p>

                  <input
                    type="file"
                    accept="application/pdf"
                    hidden
                    onChange={(e) => setCv(e.target.files[0])}
                  />
                </label>
              </div>
            </div>

            {/* Submit Action */}
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
                  <span>Saving Profile...</span>
                </>
              ) : (
                <>
                  <FaSave className="text-xs" />
                  <span>Save Profile Changes</span>
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminProfile;