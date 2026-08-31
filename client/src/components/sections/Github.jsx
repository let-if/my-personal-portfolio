
// import { useEffect, useState } from "react";

// import { motion } from "framer-motion";


// import GithubProfile from "./github/GithubProfile";

// import GithubRepos from "./github/GithubRepos";

// import GithubLanguages from "./github/GithubLanguages";

// import GithubStats from "./github/GithubStats";


// import {
//   getGithubProfile,
//   getGithubRepos
// } from "../../services/githubService";




// function Github(){



// const [profile,setProfile]=useState(null);


// const [repos,setRepos]=useState([]);


// const [loading,setLoading]=useState(true);


// const [error,setError]=useState(null);





// useEffect(()=>{


// async function loadGithub(){


// try{


// const profileData =
// await getGithubProfile();



// const reposData =
// await getGithubRepos();




// setProfile(profileData);


// setRepos(reposData || []);




// }catch(err){


// console.error(
// "Github loading error:",
// err
// );


// setError(
// "Unable to load Github data"
// );



// }
// finally{


// setLoading(false);


// }



// }



// loadGithub();



// },[]);








// return(



// <section

// id="github"

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



// <motion.div


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
// tracking-widest
// text-cyan-400
// "

// >

// Github

// </p>







// <h2

// className="
// text-4xl
// font-extrabold
// text-white
// sm:text-5xl
// "

// >


// My Code


// <span

// className="
// bg-gradient-to-r
// from-cyan-400
// to-blue-500
// bg-clip-text
// text-transparent
// "

// >

//  Activity

// </span>



// </h2>



// <p

// className="
// mx-auto
// mt-5
// max-w-2xl
// text-slate-400
// "

// >

// Real-time GitHub activity,
// repositories, and development statistics.

// </p>



// </motion.div>









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

// Loading GitHub data...

// </div>


// )

// }








// {/* Error */}



// {

// error && (


// <div

// className="
// rounded-2xl
// border
// border-red-400/20
// bg-red-400/10
// p-6
// text-center
// text-red-300
// "

// >

// {error}

// </div>


// )

// }









// {

// !loading && !error && (



// <>



// {/* Profile */}



// <GithubProfile

// profile={profile}

// />






// {/* Statistics */}



// <GithubStats

// profile={profile}

// repos={repos}

// />








// {/* Repositories */}



// <GithubRepos

// repos={repos}

// />








// {/* Languages */}



// <GithubLanguages

// repos={repos}

// />





// </>



// )

// }








// </div>



// </section>



// );



// }



// export default Github;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaExclamationTriangle, FaCodeBranch } from "react-icons/fa";

import GithubProfile from "./github/GithubProfile";
import GithubRepos from "./github/GithubRepos";
import GithubLanguages from "./github/GithubLanguages";
import GithubStats from "./github/GithubStats";

import {
  getGithubProfile,
  getGithubRepos,
} from "../../services/githubService";

function Github() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadGithub() {
      try {
        const profileData = await getGithubProfile();
        const reposData = await getGithubRepos();

        setProfile(profileData);
        setRepos(reposData || []);
      } catch (err) {
        console.error("Github loading error:", err);
        setError("Unable to load GitHub telemetry data");
      } finally {
        setLoading(false);
      }
    }

    loadGithub();
  }, []);

  return (
    <section
      id="github"
      className="relative overflow-hidden bg-[#030712] py-24 lg:py-32 selection:bg-cyan-500 selection:text-black"
    >
      {/* 1. ATMOSPHERIC OBSIDIAN LIGHTING GLOWS */}
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute left-1/3 bottom-10 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* 2. TELEMETRY SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              SYS_TELEMETRY // CODEBASE_FEED
            </span>
          </div>

          <h2 className="font-['Orbitron'] text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            My Code{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.35)]">
              Activity
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#00f0ff]" />

          <p className="mx-auto mt-6 max-w-2xl font-['JetBrains_Mono'] text-xs leading-relaxed text-slate-300 sm:text-sm">
            Real-time GitHub activity, repositories, and automated codebase distribution statistics.
          </p>
        </motion.div>

        {/* 3. TACTICAL LOADING STATE */}
        {loading && (
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#080f1e]/85 p-12 text-center shadow-[0_0_30px_rgba(0,240,255,0.06)] backdrop-blur-2xl">
            <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/60" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/60" />

            <div className="flex flex-col items-center justify-center gap-3">
              <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] animate-ping" />
              <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-cyan-300">
                INITIALIZING_GITHUB_TELEMETRY...
              </p>
            </div>
          </div>
        )}

        {/* 4. ERROR STATE */}
        {error && (
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-red-500/30 bg-red-950/20 p-8 text-center shadow-[0_0_30px_rgba(239,68,68,0.15)] backdrop-blur-2xl">
            <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-red-400/80" />
            <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-red-400/80" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-red-400/80" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-red-400/80" />

            <div className="flex items-center justify-center gap-3 text-red-400">
              <FaExclamationTriangle size={18} />
              <span className="font-['Orbitron'] text-sm font-bold uppercase tracking-wider text-red-200">
                {error}
              </span>
            </div>
          </div>
        )}

        {/* 5. GITHUB CONTENT FEED */}
        {!loading && !error && (
          <div className="space-y-10">
            {/* Profile Node */}
            <GithubProfile profile={profile} />

            {/* Statistics Matrix */}
            <GithubStats profile={profile} repos={repos} />

            {/* Repositories Grid */}
            <GithubRepos repos={repos} />

            {/* Languages Distribution */}
            <GithubLanguages repos={repos} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Github;