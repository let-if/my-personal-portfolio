import { motion } from "framer-motion";


const workflow=[

"Analyze requirements",

"Design system architecture",

"Build frontend interface",

"Develop backend APIs",

"Design database structure",

"Test and debug",

"Deploy and improve"

];


function WorkflowCard(){


return(

<motion.div

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

viewport={{
once:true
}}

className="
mt-16
rounded-3xl
border
border-white/10
bg-gradient-to-br
from-white/10
to-white/5
p-8
backdrop-blur-xl
"

>


<h3
className="
text-2xl
font-bold
text-white
"
>

My Development Workflow

</h3>


<div
className="
mt-8
grid
gap-4
sm:grid-cols-2
"
>


{
workflow.map((item,index)=>(


<div

key={index}

className="
flex
items-center
gap-3
rounded-xl
bg-black/20
p-4
text-slate-300
"

>

<span
className="
flex
h-7
w-7
items-center
justify-center
rounded-full
bg-cyan-400/20
text-sm
text-cyan-400
"
>

{index+1}

</span>


{item}


</div>


))
}


</div>


</motion.div>

);

}


export default WorkflowCard;