import { motion } from "framer-motion";
import { skillIcons } from "../../../data/skillIcons";

function SkillCard({category}){


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

transition={{
duration:0.6
}}

whileHover={{
y:-10
}}

className="
group
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/5
p-8
backdrop-blur-xl
transition
duration-300
hover:border-cyan-400/40
"

>
    <div
className="
absolute
inset-0
-z-10
bg-gradient-to-br
from-cyan-500/10
to-blue-500/10
opacity-0
transition
group-hover:opacity-100
"
/>


{/* Category Header */}

<div
className="
flex
items-center
gap-4
"
>


<div
className="
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-cyan-400/10
text-3xl
"
>

{category.icon}

</div>



<h3
className="
text-xl
font-bold
text-white
"
>

{category.title}

</h3>


</div>





{/* Skills */}

<div
className="
mt-8
space-y-6
"
>


{

category.skills.map((skill,index)=>(


<div
key={index}
>


<div
className="
mb-2
flex
justify-between
"
>


<div
className="
flex
items-center
gap-3
"
>

<span
className="
text-xl
text-cyan-400
"
>

{
skillIcons[skill.name]
}

</span>


<span
className="
font-medium
text-slate-300
"
>

{skill.name}

</span>


</div>



<span
className="
text-sm
text-cyan-400
"
>

{skill.level}%

</span>


</div>




{/* Progress Bar */}

<div
className="
h-2
overflow-hidden
rounded-full
bg-slate-800
"
>


<motion.div

initial={{
width:0
}}

whileInView={{
width:`${skill.level}%`
}}

viewport={{
once:true
}}

transition={{
duration:1,
delay:index*0.1
}}

className="
h-full
rounded-full
bg-gradient-to-r
from-cyan-400
to-blue-500
"

/>


</div>



</div>


))

}


</div>


</motion.div>

);

}


export default SkillCard;