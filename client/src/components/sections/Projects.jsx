
import { useEffect, useState } from "react";

import {
  motion,
  AnimatePresence
} from "framer-motion";


import ProjectCard from "./projects/ProjectCard";

import FeaturedProject from "./projects/FeaturedProject";

import GithubStats from "./projects/GithubStats";


import {
  getProjects
} from "../../services/projectService";


import {
  projectCategories
} from "../../data/projectCategories";




function Projects(){



const [projects,setProjects]=useState([]);


const [loading,setLoading]=useState(true);



const [activeCategory,setActiveCategory]
=
useState("All");





useEffect(()=>{


async function loadProjects(){


try{


const data =
await getProjects();



setProjects(
data || []
);



}catch(error){


console.error(
"Failed loading projects:",
error
);


}
finally{


setLoading(false);


}


}



loadProjects();



},[]);






// Featured Project

const featuredProject =

projects.find(

(project)=>
project.featured

);







const filteredProjects =


activeCategory==="All"


?


projects


:


projects.filter(

(project)=>

project.category===activeCategory

);







return(



<section

id="projects"

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



<div

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
tracking-[0.3em]
text-cyan-400
"

>

Projects

</p>




<h2

className="
text-4xl
font-extrabold
text-white
sm:text-5xl
"

>


My Featured


<span

className="
bg-gradient-to-r
from-cyan-400
to-blue-500
bg-clip-text
text-transparent
"

>

Projects

</span>


</h2>



</div>







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

Loading projects...

</div>


)

}







{/* Featured Project */}



{

!loading && featuredProject && (


<FeaturedProject

project={featuredProject}

/>


)

}







{/* Filter Buttons */}



{

!loading && projects.length > 0 && (


<div

className="
mb-12
flex
flex-wrap
justify-center
gap-4
"

>


{

projectCategories.map((category)=>(


<button


key={category}


onClick={()=>


setActiveCategory(category)

}


className={

`

rounded-full

px-6

py-3

text-sm

font-semibold

transition

${

activeCategory===category


?


"bg-cyan-500 text-white"


:


"border border-white/10 text-slate-300 hover:border-cyan-400"

}

`

}


>


{category}


</button>



))

}



</div>


)

}









{/* Empty State */}



{

!loading && projects.length===0 && (


<div

className="
rounded-3xl
border
border-white/10
bg-white/5
p-10
text-center
text-slate-400
"

>

No projects available yet.

</div>


)

}







{/* Projects Grid */}



{

!loading && filteredProjects.length>0 && (


<motion.div

layout

className="
grid
gap-8
md:grid-cols-2
"

>



<AnimatePresence>


{

filteredProjects.map((project)=>(



<motion.div

layout

key={project.id}


initial={{

opacity:0,

scale:0.9

}}


animate={{

opacity:1,

scale:1

}}


exit={{

opacity:0,

scale:0.9

}}



>



<ProjectCard

project={project}

/>



</motion.div>



))


}



</AnimatePresence>



</motion.div>


)

}







<GithubStats />




</div>



</section>



);


}



export default Projects;