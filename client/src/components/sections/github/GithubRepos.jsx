// import {
// useEffect,
// useState
// }
// from "react";


// import {motion}
// from "framer-motion";


// import {

// getGithubRepositories

// }

// from "../../../services/githubService";



// function GithubRepos(){



// const [repos,setRepos]=useState([]);




// useEffect(()=>{


// loadRepos();


// },[]);





// async function loadRepos(){


// try{


// const data =
// await getGithubRepositories();


// setRepos(data);


// }

// catch(error){

// console.log(error);

// }


// }







// return(


// <div

// className="
// mt-12
// grid
// gap-6
// md:grid-cols-2
// "

// >



// {

// repos.map((repo)=>(


// <motion.div


// key={repo.id}


// initial={{

// opacity:0,

// y:30

// }}


// whileInView={{

// opacity:1,

// y:0

// }}


// viewport={{

// once:true

// }}


// whileHover={{

// y:-8

// }}



// className="
// group
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-6
// backdrop-blur-xl
// transition
// hover:border-cyan-400/40
// "

// >



// <div

// className="
// flex
// items-start
// justify-between
// "

// >


// <h3

// className="
// text-xl
// font-bold
// text-white
// "

// >

// {repo.name}

// </h3>



// <span

// className="
// rounded-full
// bg-cyan-400/10
// px-3
// py-1
// text-xs
// text-cyan-400
// "

// >

// {repo.language || "Code"}

// </span>


// </div>






// <p

// className="
// mt-4
// text-sm
// leading-relaxed
// text-slate-400
// "

// >

// {

// repo.description ||

// "No description available"

// }

// </p>





// <div

// className="
// mt-6
// flex
// gap-6
// text-sm
// text-slate-300
// "

// >


// <span>

// ⭐ {repo.stargazers_count}

// </span>


// <span>

// 🍴 {repo.forks_count}

// </span>



// </div>







// <a

// href={repo.html_url}

// target="_blank"

// rel="noreferrer"


// className="
// mt-6
// inline-flex
// text-sm
// font-semibold
// text-cyan-400
// hover:text-cyan-300
// "

// >

// View Source Code →

// </a>




// </motion.div>



// ))


// }



// </div>


// );


// }


// export default GithubRepos;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCodeBranch, FaStar, FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import { getGithubRepositories } from "../../../services/githubService";

function GithubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRepos();
  }, []);

  async function loadRepos() {
    try {
      const data = await getGithubRepositories();
      setRepos(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // Tactical Loading Skeleton Grid
  if (loading) {
    return (
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#080f1e]/85 p-6 backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-cyan-500/10 pb-4">
              <div className="h-5 w-32 animate-pulse rounded bg-cyan-950/60" />
              <div className="h-5 w-16 animate-pulse rounded bg-cyan-950/60" />
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-slate-900" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-slate-900" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {repos.map((repo, index) => (
        <motion.div
          key={repo.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          transition={{
            duration: 0.4,
            delay: index * 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            group relative flex flex-col justify-between overflow-hidden
            rounded-3xl border border-cyan-500/20 bg-[#080f1e]/85 p-6
            shadow-[0_0_30px_rgba(0,240,255,0.06)] backdrop-blur-2xl
            transition-all duration-500 hover:border-cyan-400/50
            hover:shadow-[0_0_40px_rgba(0,240,255,0.18)]
          "
        >
          {/* 1. TACTICAL HUD CORNER BRACKETS */}
          <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />
          <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />
          <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />
          <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/70 transition-colors group-hover:border-cyan-300" />

          {/* 2. AMBIENT GLOW BACKDROP */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div>
            {/* Header / Language Badge */}
            <div className="flex items-start justify-between gap-4 border-b border-cyan-500/15 pb-4">
              <div className="flex items-center gap-2.5 min-w-0">
                <FaFolder className="shrink-0 text-sm text-cyan-400/80 transition-colors group-hover:text-cyan-300" />
                <h3 className="font-['Orbitron'] text-lg font-bold tracking-wide text-white transition-colors group-hover:text-cyan-200 truncate">
                  {repo.name}
                </h3>
              </div>

              <span className="shrink-0 rounded-md border border-cyan-400/30 bg-cyan-950/60 px-2.5 py-0.5 font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-wider text-cyan-300 shadow-inner">
                {repo.language || "Code"}
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 line-clamp-2 font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-300">
              {repo.description || "No description available"}
            </p>
          </div>

          {/* 3. FOOTER: TELEMETRY METRICS & SOURCE LINK */}
          <div className="mt-6 flex items-center justify-between border-t border-cyan-500/15 pt-4">
            <div className="flex items-center gap-4 font-['JetBrains_Mono'] text-xs text-slate-400">
              <span className="flex items-center gap-1.5 transition-colors group-hover:text-amber-300">
                <FaStar className="text-amber-400" size={12} />
                <span>{repo.stargazers_count}</span>
              </span>

              <span className="flex items-center gap-1.5 transition-colors group-hover:text-cyan-300">
                <FaCodeBranch className="text-cyan-400" size={12} />
                <span>{repo.forks_count}</span>
              </span>
            </div>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="
                group/link inline-flex items-center gap-1.5 font-['Orbitron'] text-[11px]
                font-bold uppercase tracking-wider text-cyan-400 transition-colors
                hover:text-cyan-200
              "
            >
              <span>SOURCE</span>
              <FaExternalLinkAlt className="text-[9px] transition-transform duration-200 group-hover/link:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default GithubRepos;