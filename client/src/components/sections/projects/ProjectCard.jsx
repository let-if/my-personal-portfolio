// import { motion } from "framer-motion";
// import {useState} from "react";

// import ProjectModal from "./ProjectModal";
// import {
// FaGithub,
// FaExternalLinkAlt
// } from "react-icons/fa";



// function ProjectCard({project}){

// const [open,setOpen]=useState(false);
// return(

// <motion.div

// initial={{
// opacity:0,
// y:40
// }}

// whileInView={{
// opacity:1,
// y:0
// }}

// viewport={{
// once:true
// }}

// whileHover={{
// y:-10
// }}

// className="
// group
// relative
// overflow-hidden
// rounded-3xl
// border
// border-white/10
// bg-white/5
// transition
// duration-500
// hover:border-cyan-400/40
// "


// >


// {/* Image */}

// <div
// className="
// h-56
// overflow-hidden
// bg-slate-900
// "
// >

// <img

// src={project.image}

// alt={project.title}

// className="
// h-full
// w-full
// object-cover
// transition
// duration-500
// group-hover:scale-110
// "

// />

// </div>




// <div
// className="
// p-6
// "
// >


// <h3
// className="
// text-2xl
// font-bold
// text-white
// "
// >

// {project.title}

// </h3>



// <p
// className="
// mt-4
// text-sm
// leading-relaxed
// text-slate-400
// "
// >

// {project.description}

// </p>



// {/* Technologies */}

// <div
// className="
// mt-5
// flex
// flex-wrap
// gap-2
// "
// >

// {
// project.technologies.map((tech,index)=>(


// <span

// key={index}

// className="
// rounded-full
// bg-cyan-400/10
// px-3
// py-1
// text-xs
// text-cyan-300
// "

// >

// {tech}

// </span>


// ))
// }


// </div>

// <button

// onClick={()=>setOpen(true)}

// className="
// rounded-xl
// border
// border-cyan-400
// px-4
// py-2
// text-sm
// text-cyan-400
// hover:bg-cyan-400
// hover:text-white
// "

// >

// View Details

// </button>

// {/* Buttons */}

// <div
// className="
// mt-6
// flex
// gap-4
// "
// >


// <a

// href={project.github}

// target="_blank"

// rel="noreferrer"

// className="
// flex
// items-center
// gap-2
// rounded-xl
// border
// border-white/10
// px-4
// py-2
// text-sm
// text-white
// transition
// hover:border-cyan-400
// hover:text-cyan-400
// "

// >

// <FaGithub/>

// Github

// </a>



// <a

// href={project.demo}

// className="
// flex
// items-center
// gap-2
// rounded-xl
// bg-cyan-500
// px-4
// py-2
// text-sm
// font-semibold
// text-white
// "

// >

// <FaExternalLinkAlt/>

// Demo

// </a>


// </div>


// </div>

// {
// open &&

// <ProjectModal

// project={project}

// onClose={()=>setOpen(false)}

// />

// }
// <div
// className="
// absolute
// inset-0
// bg-gradient-to-br
// from-cyan-500/10
// to-blue-500/10
// opacity-0
// transition
// group-hover:opacity-100
// "
// />
// </motion.div>


// );

// }


// export default ProjectCard;
import { motion } from "framer-motion";
import { useState } from "react";

import ProjectModal from "./ProjectModal";

import {
FaGithub,
FaExternalLinkAlt
} from "react-icons/fa";



function ProjectCard({project}){


const [open,setOpen]=useState(false);



const imageUrl =

project.image?.startsWith("http")

?

project.image

:

`http://localhost:5000${project.image}`;




return(


<motion.div


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


whileHover={{
y:-12
}}


transition={{
duration:.4
}}


className="

group

relative

overflow-hidden

rounded-3xl

border

border-white/10

bg-slate-900/60

backdrop-blur-xl

shadow-xl

transition-all

duration-500

hover:border-cyan-400/50

hover:shadow-cyan-500/20

"


>



{/* IMAGE */}


<div

className="

relative

h-60

overflow-hidden

bg-slate-950

"

>
<img

src={
project.image?.startsWith("http")
?
project.image
:
`http://localhost:5000${project.image}`
}

alt={project.title}

loading="lazy"

className="
h-full
w-full
object-cover
transition
duration-700
group-hover:scale-110
"

/>

{/* <img


src={imageUrl}


alt={project.title}


onError={(e)=>{

e.currentTarget.src=
"/placeholder.png";

}}


className="

h-full

w-full

object-cover

transition

duration-700

group-hover:scale-110

"


/> */}



{/* image glow */}


<div

className="

absolute

inset-0

bg-gradient-to-t

from-slate-950

via-transparent

to-transparent

"

/>


</div>








<div

className="

relative

p-6

"

>


<h3

className="

text-2xl

font-black

text-white

"

>

{project.title}

</h3>




<p

className="

mt-4

leading-relaxed

text-slate-400

"

>

{project.description}

</p>








{/* Technologies */}


<div

className="

mt-6

flex

flex-wrap

gap-2

"

>


{

project.technologies?.map((tech,index)=>(


<span

key={index}

className="

rounded-full

border

border-cyan-400/20

bg-cyan-400/10

px-3

py-1

text-xs

font-semibold

text-cyan-300

"

>

{tech}

</span>


))


}



</div>








{/* ACTIONS */}


<div

className="

mt-7

flex

flex-wrap

gap-4

"

>



<button


onClick={()=>setOpen(true)}


className="

rounded-xl

border

border-cyan-400/40

px-5

py-2

text-sm

font-semibold

text-cyan-300

transition

hover:bg-cyan-400

hover:text-white

"

>


View Details


</button>






{

project.github &&


<a


href={project.github}


target="_blank"


rel="noreferrer"


className="

flex

items-center

gap-2

rounded-xl

border

border-white/10

px-5

py-2

text-sm

text-white

transition

hover:border-cyan-400

hover:text-cyan-400

"

>


<FaGithub/>


Github


</a>


}








{

project.demo &&


<a


href={project.demo}


target="_blank"


rel="noreferrer"


className="

flex

items-center

gap-2

rounded-xl

bg-gradient-to-r

from-cyan-500

to-blue-600

px-5

py-2

text-sm

font-semibold

text-white

transition

hover:scale-105

"

>


<FaExternalLinkAlt/>


Demo


</a>


}



</div>






</div>









{/* MODAL */}


{

open &&

<ProjectModal

project={project}

onClose={()=>setOpen(false)}

/>


}









{/* Hover glow */}


<div

className="

pointer-events-none

absolute

inset-0

rounded-3xl

bg-gradient-to-br

from-cyan-500/20

to-blue-500/20

opacity-0

transition

duration-500

group-hover:opacity-100

"


/>



</motion.div>


);



}



export default ProjectCard;