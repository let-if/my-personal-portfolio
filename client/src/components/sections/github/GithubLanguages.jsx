// import {
// useEffect,
// useState
// }
// from "react";


// import {motion}
// from "framer-motion";


// import {

// getGithubLanguages

// }

// from "../../../services/githubService";




// function GithubLanguages(){


// const [languages,setLanguages]=useState([]);


// const [loading,setLoading]=useState(true);



// useEffect(()=>{


// loadLanguages();


// },[]);





// async function loadLanguages(){


// try{


// const data =
// await getGithubLanguages();


// setLanguages(data);


// }

// catch(error){

// console.log(error);

// }

// finally{

// setLoading(false);

// }


// }







// if(loading){


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

// Loading languages...

// </div>

// );


// }







// return(


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
// mt-10
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-8
// backdrop-blur-xl
// "

// >



// <h3

// className="
// text-2xl
// font-bold
// text-white
// "

// >

// Technology Usage

// </h3>




// <div

// className="
// mt-8
// space-y-6
// "

// >



// {

// languages.map((language)=>(


// <div

// key={language.name}

// >


// <div

// className="
// mb-2
// flex
// justify-between
// text-sm
// "

// >


// <span className="text-slate-300">

// {language.name}

// </span>



// <span className="text-cyan-400">

// {language.percentage}%

// </span>


// </div>




// <div

// className="
// h-3
// overflow-hidden
// rounded-full
// bg-white/10
// "

// >


// <motion.div

// initial={{

// width:0

// }}

// whileInView={{

// width:`${language.percentage}%`

// }}

// transition={{

// duration:1

// }}


// className="
// h-full
// rounded-full
// bg-gradient-to-r
// from-cyan-400
// to-blue-500
// "

// />


// </div>



// </div>


// ))


// }



// </div>



// </motion.div>



// );


// }


// export default GithubLanguages;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getGithubLanguages } from "../../../services/githubService";

function GithubLanguages() {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLanguages();
  }, []);

  async function loadLanguages() {
    try {
      const data = await getGithubLanguages();
      setLanguages(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // 1. TACTICAL LOADING STATE
  if (loading) {
    return (
      <div className="relative mt-10 overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#080f1e]/85 p-8 text-center backdrop-blur-2xl shadow-[0_0_30px_rgba(0,240,255,0.06)]">
        <span className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-cyan-400/60" />
        <span className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-cyan-400/60" />
        <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-cyan-400/60" />
        <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-cyan-400/60" />

        <div className="flex items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-ping" />
          <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-cyan-300">
            COMPUTING_CODEBASE_METRICS...
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="
        group relative mt-10 overflow-hidden rounded-3xl border border-cyan-500/25
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

      {/* 3. AMBIENT GLOW BACKDROP */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />

      {/* 4. CARD TELEMETRY HEADER */}
      <div className="flex items-center justify-between border-b border-cyan-500/15 pb-5">
        <div>
          <div className="mb-1 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-400/80">
            <span>//</span>
            <span>CODEBASE_DISTRIBUTION &amp; USAGE</span>
          </div>

          <h3 className="font-['Orbitron'] text-2xl font-black tracking-wide text-white transition-colors group-hover:text-cyan-200">
            Technology Usage
          </h3>
        </div>

        <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-pulse" />
      </div>

      {/* 5. LANGUAGE TELEMETRY METRIC GAUGES */}
      <div className="mt-8 space-y-6">
        {languages.map((language, index) => (
          <div key={language.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60 shadow-[0_0_5px_#00f0ff]" />
                <span className="font-['JetBrains_Mono'] text-xs font-semibold tracking-wide text-slate-200">
                  {language.name}
                </span>
              </div>

              <span className="font-['Orbitron'] text-xs font-bold tracking-wider text-cyan-300 drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]">
                {language.percentage}%
              </span>
            </div>

            {/* Tactical Track */}
            <div className="relative h-2.5 w-full overflow-hidden rounded-full border border-cyan-500/20 bg-slate-950/80 p-[1px]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${language.percentage}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400 shadow-[0_0_12px_rgba(0,240,255,0.6)]"
              >
                {/* Laser Tracking Lead Edge */}
                <span className="absolute right-0 top-0 h-full w-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default GithubLanguages;