import { motion } from "framer-motion";

import SkillCard from "./skills/SkillCard";

import { skillCategories } from "../../data/skills";

import ToolsCard from "./skills/ToolsCard";
import WorkflowCard from "./skills/WorkflowCard";

import { tools } from "../../data/tools";
function Skills(){


return(

<section
id="skills"
className="
relative
py-24
lg:py-32
"
>
    <div
className="
absolute
left-0
top-1/2
h-96
w-96
rounded-full
bg-cyan-500/10
blur-3xl
"
/>


<div
className="
absolute
right-0
bottom-0
h-96
w-96
rounded-full
bg-blue-500/10
blur-3xl
"
/>
<div
className="
absolute
right-0
top-1/3
h-96
w-96
rounded-full
bg-cyan-500/10
blur-3xl
"
/>

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
text-center
mb-16
"

>

{/* 
<p
className="
mb-4
text-sm
uppercase
tracking-[0.3em]
text-cyan-400
"
>
Skills
</p> */}
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
font-semibold
uppercase
tracking-[0.3em]
text-cyan-400
"
>
Technical Skills
</p>


<h2
className="
text-4xl
font-extrabold
text-white
sm:text-5xl
"
>

My Technical
<span
className="
bg-gradient-to-r
from-cyan-400
to-blue-500
bg-clip-text
text-transparent
"
>
 Skills
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

Technologies and tools I use to build
modern, scalable software solutions.

</p>


</motion.div>




{/* Cards */}

<div
className="
grid
gap-8
md:grid-cols-2
"
>


{
skillCategories.map((category,index)=>(

<SkillCard

key={index}

category={category}

/>

))
}


</div>

{/* Tools Section */}

<div
className="
mt-24
"
>

<h3
className="
mb-10
text-center
text-3xl
font-bold
text-white
"
>

Tools & Technologies

</h3>



<div
className="
grid
gap-6
sm:grid-cols-2
lg:grid-cols-4
"
>


{
tools.map((tool,index)=>(

<ToolsCard

key={index}

tool={tool}

/>

))
}


</div>


</div>




<WorkflowCard />

</div>


</section>

);

}


export default Skills;