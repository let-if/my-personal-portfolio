
import { useEffect, useState } from "react";

import { motion } from "framer-motion";


import GithubProfile from "./github/GithubProfile";

import GithubRepos from "./github/GithubRepos";

import GithubLanguages from "./github/GithubLanguages";

import GithubStats from "./github/GithubStats";


import {
  getGithubProfile,
  getGithubRepos
} from "../../services/githubService";




function Github(){



const [profile,setProfile]=useState(null);


const [repos,setRepos]=useState([]);


const [loading,setLoading]=useState(true);


const [error,setError]=useState(null);





useEffect(()=>{


async function loadGithub(){


try{


const profileData =
await getGithubProfile();



const reposData =
await getGithubRepos();




setProfile(profileData);


setRepos(reposData || []);




}catch(err){


console.error(
"Github loading error:",
err
);


setError(
"Unable to load Github data"
);



}
finally{


setLoading(false);


}



}



loadGithub();



},[]);








return(



<section

id="github"

className="
relative
py-24
lg:py-32
"

>



<div

className="
mx-auto
max-w-7xl
px-6
lg:px-8
"

>







{/* Header */}



<motion.div


initial={{
opacity:0,
y:30
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}



className="
mb-16
text-center
"

>



<p

className="
mb-4
inline-flex
rounded-full
border
border-cyan-400/20
bg-cyan-400/10
px-5
py-2
text-sm
uppercase
tracking-widest
text-cyan-400
"

>

Github

</p>







<h2

className="
text-4xl
font-extrabold
text-white
sm:text-5xl
"

>


My Code


<span

className="
bg-gradient-to-r
from-cyan-400
to-blue-500
bg-clip-text
text-transparent
"

>

 Activity

</span>



</h2>



<p

className="
mx-auto
mt-5
max-w-2xl
text-slate-400
"

>

Real-time GitHub activity,
repositories, and development statistics.

</p>



</motion.div>









{/* Loading */}



{

loading && (


<div

className="
py-20
text-center
text-slate-400
"

>

Loading GitHub data...

</div>


)

}








{/* Error */}



{

error && (


<div

className="
rounded-2xl
border
border-red-400/20
bg-red-400/10
p-6
text-center
text-red-300
"

>

{error}

</div>


)

}









{

!loading && !error && (



<>



{/* Profile */}



<GithubProfile

profile={profile}

/>






{/* Statistics */}



<GithubStats

profile={profile}

repos={repos}

/>








{/* Repositories */}



<GithubRepos

repos={repos}

/>








{/* Languages */}



<GithubLanguages

repos={repos}

/>





</>



)

}








</div>



</section>



);



}



export default Github;