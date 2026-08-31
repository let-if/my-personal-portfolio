// import {useEffect,useState} from "react";

// import {motion} from "framer-motion";

// import {
// getGithubProfile
// }
// from "../../../services/githubService";



// function GithubProfile(){



// const [profile,setProfile]=useState(null);



// useEffect(()=>{


// getGithubProfile()

// .then(data=>{

// setProfile(data);

// })

// .catch(err=>{

// console.log(err);

// });


// },[]);




// if(!profile){

// return(

// <div

// className="
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-8
// text-center
// text-slate-400
// "

// >

// Loading Github Profile...

// </div>

// );

// }




// return(

// <motion.div


// whileHover={{
// y:-5
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
// flex
// flex-col
// items-center
// gap-6
// sm:flex-row
// "

// >


// <img

// src={profile.avatar_url}

// alt={profile.login}

// className="
// h-28
// w-28
// rounded-full
// border
// border-cyan-400
// "

// />



// <div>


// <h3

// className="
// text-2xl
// font-bold
// text-white
// "

// >

// {profile.name}

// </h3>



// <p

// className="
// mt-2
// text-slate-400
// "

// >

// {profile.bio || "Software Engineer"}

// </p>



// <a

// href={profile.html_url}

// target="_blank"

// rel="noreferrer"

// className="
// mt-4
// inline-block
// text-cyan-400
// hover:underline
// "

// >

// View Github Profile

// </a>



// </div>



// </div>





// <div

// className="
// mt-10
// grid
// gap-5
// sm:grid-cols-3
// "

// >


// <div>

// <h4

// className="
// text-3xl
// font-bold
// text-cyan-400
// "

// >

// {profile.public_repos}

// </h4>


// <p

// className="
// text-slate-400
// "

// >

// Repositories

// </p>

// </div>




// <div>

// <h4

// className="
// text-3xl
// font-bold
// text-cyan-400
// "

// >

// {profile.followers}

// </h4>


// <p

// className="
// text-slate-400
// "

// >

// Followers

// </p>

// </div>




// <div>

// <h4

// className="
// text-3xl
// font-bold
// text-cyan-400
// "

// >

// {profile.following}

// </h4>


// <p

// className="
// text-slate-400
// "

// >

// Following

// </p>

// </div>



// </div>



// </motion.div>


// );


// }


// export default GithubProfile;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCodeBranch, FaUsers, FaUserCheck } from "react-icons/fa";
import { getGithubProfile } from "../../../services/githubService";

function GithubProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGithubProfile()
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // 1. TACTICAL LOADING SKELETON
  if (loading || !profile) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#080f1e]/85 p-8 text-center backdrop-blur-2xl shadow-[0_0_30px_rgba(0,240,255,0.06)]">
        <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/60" />
        <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/60" />
        <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/60" />
        <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/60" />

        <div className="flex items-center justify-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-ping" />
          <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-cyan-300">
            CONNECTING_TO_GITHUB_API...
          </p>
        </div>
      </div>
    );
  }

  const stats = [
    {
      label: "Repositories",
      value: profile.public_repos ?? 0,
      icon: <FaCodeBranch className="text-cyan-400" />,
      tag: "PUB_REPOS",
    },
    {
      label: "Followers",
      value: profile.followers ?? 0,
      icon: <FaUsers className="text-emerald-400" />,
      tag: "NETWORK",
    },
    {
      label: "Following",
      value: profile.following ?? 0,
      icon: <FaUserCheck className="text-sky-400" />,
      tag: "FOLLOWING",
    },
  ];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="
        group relative overflow-hidden rounded-3xl border border-cyan-500/25
        bg-[#080f1e]/85 p-8 shadow-[0_0_35px_rgba(0,240,255,0.07)] backdrop-blur-2xl
        transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_45px_rgba(0,240,255,0.18)]
        md:p-10
      "
    >
      {/* 2. TACTICAL HUD CORNER BRACKETS */}
      <span className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
      <span className="pointer-events-none absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-cyan-400/80 transition-colors group-hover:border-cyan-300" />

      {/* 3. AMBIENT GLOW NODE */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />

      {/* 4. PROFILE HEADER & AVATAR */}
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        {/* Avatar with Cyber Ring */}
        <div className="relative shrink-0">
          <div className="relative h-24 w-24 overflow-hidden rounded-2xl border-2 border-cyan-400/40 bg-[#030712] p-1 shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-transform duration-300 group-hover:scale-105">
            <img
              src={profile.avatar_url}
              alt={profile.login}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border border-slate-900 bg-emerald-400 shadow-[0_0_6px_#10b981]" />
        </div>

        {/* Profile Identity Details */}
        <div className="flex-1 text-center sm:text-left">
          <div className="mb-1 flex items-center justify-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-400/80 sm:justify-start">
            <FaGithub size={12} />
            <span>GITHUB_NODE // @{profile.login}</span>
          </div>

          <h3 className="font-['Orbitron'] text-2xl font-black tracking-wide text-white transition-colors group-hover:text-cyan-200">
            {profile.name || profile.login}
          </h3>

          <p className="mt-1.5 font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-300">
            {profile.bio || "Software Engineer"}
          </p>

          <a
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
            className="
              mt-4 inline-flex items-center gap-2 rounded-xl border border-cyan-500/30
              bg-cyan-950/40 px-4 py-2 font-['Orbitron'] text-[11px] font-bold uppercase tracking-wider
              text-cyan-300 backdrop-blur-md transition-all duration-300
              hover:border-cyan-400 hover:bg-cyan-400 hover:text-black
              hover:shadow-[0_0_15px_rgba(0,240,255,0.35)] active:scale-95
            "
          >
            <span>VIEW GITHUB PROFILE</span>
            <FaExternalLinkAlt className="text-[10px]" />
          </a>
        </div>
      </div>

      {/* 5. TELEMETRY STATS GRID */}
      <div className="mt-8 grid gap-4 border-t border-cyan-500/15 pt-6 sm:grid-cols-3">
        {stats.map((item, index) => (
          <div
            key={index}
            className="
              relative overflow-hidden rounded-2xl border border-white/5 bg-slate-950/60
              p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0c162c]
            "
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] font-bold tracking-wider text-cyan-400/60">
                {item.tag}
              </span>
              <span className="text-xs">{item.icon}</span>
            </div>

            <h4 className="mt-2 font-['Orbitron'] text-3xl font-black tracking-tight text-white drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              {item.value}
            </h4>

            <p className="mt-1 font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-slate-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default GithubProfile;