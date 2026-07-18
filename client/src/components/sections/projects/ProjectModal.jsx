import { motion } from "framer-motion";

import {
FaGithub
} from "react-icons/fa";


function ProjectModal({project,onClose}){


return(

<div

className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/70
px-6
"

>


<motion.div

initial={{
scale:0.8,
opacity:0
}}

animate={{
scale:1,
opacity:1
}}

className="
max-w-2xl
rounded-3xl
border
border-white/10
bg-slate-900
p-8
"

>


<button

onClick={onClose}

className="
float-right
text-slate-400
hover:text-white
"

>

✕


</button>



<h2

className="
text-3xl
font-bold
text-white
"

>

{project.title}

</h2>



<p

className="
mt-5
text-slate-400
"

>

{project.description}

</p>




<h3

className="
mt-8
font-bold
text-white
"

>

Main Features

</h3>



<ul

className="
mt-4
space-y-3
text-slate-300
"

>


{
project.details.map((item,index)=>(


<li

key={index}

>

✓ {item}

</li>


))
}


</ul>




<div

className="
mt-8
flex
gap-4
"

>


<a

href={project.github}

target="_blank"

className="
flex
items-center
gap-2
rounded-xl
bg-cyan-500
px-5
py-3
text-white
"

>

<FaGithub/>

View Github

</a>


</div>



</motion.div>


</div>

);

}


export default ProjectModal;