// import { motion } from "framer-motion";

// import {
//     FaGithub,
//     FaExternalLinkAlt
// } from "react-icons/fa";


// function FeaturedProject({ project }) {


// return (

// <motion.div

// initial={{
//     opacity:0,
//     y:40
// }}

// whileInView={{
//     opacity:1,
//     y:0
// }}

// viewport={{
//     once:true
// }}

// transition={{
//     duration:0.6
// }}

// className="
// mb-20
// overflow-hidden
// rounded-3xl
// border
// border-cyan-400/20
// bg-gradient-to-br
// from-cyan-500/10
// to-blue-500/10
// backdrop-blur-xl
// "

// >


// <div

// className="
// grid
// lg:grid-cols-2
// "

// >


// {/* Image */}

// <div

// className="
// h-72
// overflow-hidden
// lg:h-auto
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
// hover:scale-105
// "

// />


// </div>





// {/* Content */}

// <div

// className="
// p-8
// lg:p-12
// "

// >


// <span

// className="
// inline-flex
// rounded-full
// bg-cyan-400/10
// px-4
// py-2
// text-xs
// font-semibold
// uppercase
// tracking-widest
// text-cyan-400
// "

// >

// Featured Project

// </span>




// <h2

// className="
// mt-6
// text-3xl
// font-bold
// text-white
// "

// >

// {project.title}

// </h2>




// <p

// className="
// mt-5
// leading-relaxed
// text-slate-400
// "

// >

// {project.description}

// </p>





// {/* Technologies */}

// <div

// className="
// mt-6
// flex
// flex-wrap
// gap-3
// "

// >


// {

// project.technologies?.map((tech,index)=>(


// <span

// key={index}

// className="
// rounded-full
// border
// border-white/10
// bg-white/5
// px-4
// py-2
// text-sm
// text-slate-300
// "

// >

// {tech}

// </span>


// ))

// }


// </div>





// {/* Buttons */}

// <div

// className="
// mt-8
// flex
// flex-wrap
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
// px-5
// py-3
// text-white
// transition
// hover:border-cyan-400
// hover:text-cyan-400
// "

// >

// <FaGithub />

// Github

// </a>





// <a

// href={project.demo}

// target="_blank"

// rel="noreferrer"

// className="
// flex
// items-center
// gap-2
// rounded-xl
// bg-cyan-500
// px-5
// py-3
// font-semibold
// text-white
// transition
// hover:bg-cyan-400
// "

// >

// <FaExternalLinkAlt />

// Live Demo

// </a>



// </div>




// </div>


// </div>


// </motion.div>


// );

// }


// export default FeaturedProject;
import { motion } from "framer-motion";

import {
    FaGithub,
    FaExternalLinkAlt
} from "react-icons/fa";



function FeaturedProject({ project }) {



if(!project){

return null;

}



const imageUrl = project.image

?
`http://localhost:5000${project.image}`

:
"/default-project.png";




return (


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

transition={{
    duration:0.6
}}

className="
mb-20
overflow-hidden
rounded-3xl
border
border-cyan-400/20
bg-gradient-to-br
from-cyan-500/10
to-blue-500/10
backdrop-blur-xl
"

>


<div

className="
grid
lg:grid-cols-2
"

>



{/* Image */}


<div

className="
h-72
overflow-hidden
lg:h-auto
"

>


<img

src={imageUrl}

alt={project.title}

className="
h-full
w-full
object-cover
transition
duration-500
hover:scale-105
"

/>


</div>







{/* Content */}


<div

className="
p-8
lg:p-12
"

>


<span

className="
inline-flex
rounded-full
bg-cyan-400/10
px-4
py-2
text-xs
font-semibold
uppercase
tracking-widest
text-cyan-400
"

>

Featured Project

</span>






<h2

className="
mt-6
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
gap-3
"

>


{

Array.isArray(project.technologies) &&

project.technologies.map((tech,index)=>(


<span

key={index}

className="
rounded-full
border
border-white/10
bg-white/5
px-4
py-2
text-sm
text-slate-300
"

>

{tech}

</span>


))


}



</div>









{/* Buttons */}



<div

className="
mt-8
flex
flex-wrap
gap-4
"

>





{

project.github && (


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
py-3
text-white
transition
hover:border-cyan-400
hover:text-cyan-400
"

>


<FaGithub />

Github


</a>


)

}









{

project.demo && (


<a

href={project.demo}

target="_blank"

rel="noreferrer"

className="
flex
items-center
gap-2
rounded-xl
bg-cyan-500
px-5
py-3
font-semibold
text-white
transition
hover:bg-cyan-400
"

>


<FaExternalLinkAlt />

Live Demo


</a>


)

}



</div>







</div>






</div>





</motion.div>


);


}



export default FeaturedProject;