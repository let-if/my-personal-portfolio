import {
useEffect,
useState
}
from "react";


import {motion}
from "framer-motion";


import {

getGithubRepositories

}

from "../../../services/githubService";



function GithubRepos(){



const [repos,setRepos]=useState([]);




useEffect(()=>{


loadRepos();


},[]);





async function loadRepos(){


try{


const data =
await getGithubRepositories();


setRepos(data);


}

catch(error){

console.log(error);

}


}







return(


<div

className="
mt-12
grid
gap-6
md:grid-cols-2
"

>



{

repos.map((repo)=>(


<motion.div


key={repo.id}


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


whileHover={{

y:-8

}}



className="
group
rounded-3xl
border
border-white/10
bg-white/5
p-6
backdrop-blur-xl
transition
hover:border-cyan-400/40
"

>



<div

className="
flex
items-start
justify-between
"

>


<h3

className="
text-xl
font-bold
text-white
"

>

{repo.name}

</h3>



<span

className="
rounded-full
bg-cyan-400/10
px-3
py-1
text-xs
text-cyan-400
"

>

{repo.language || "Code"}

</span>


</div>






<p

className="
mt-4
text-sm
leading-relaxed
text-slate-400
"

>

{

repo.description ||

"No description available"

}

</p>





<div

className="
mt-6
flex
gap-6
text-sm
text-slate-300
"

>


<span>

⭐ {repo.stargazers_count}

</span>


<span>

🍴 {repo.forks_count}

</span>



</div>







<a

href={repo.html_url}

target="_blank"

rel="noreferrer"


className="
mt-6
inline-flex
text-sm
font-semibold
text-cyan-400
hover:text-cyan-300
"

>

View Source Code →

</a>




</motion.div>



))


}



</div>


);


}


export default GithubRepos;