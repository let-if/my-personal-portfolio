import { motion } from "framer-motion";


function ToolsCard({tool}){


return(

<motion.div

whileHover={{
y:-8,
scale:1.03
}}

className="
rounded-2xl
border
border-white/10
bg-white/5
p-5
backdrop-blur-xl
transition
"

>


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
h-12
w-12
items-center
justify-center
rounded-xl
bg-cyan-400/10
text-2xl
"
>

<div
className="
text-2xl
text-cyan-400
"
>

{tool.icon}

</div>

</div>



<div>

<h4
className="
font-semibold
text-white
"
>

{tool.name}

</h4>


<p
className="
mt-1
text-xs
text-slate-400
"
>

{tool.description}

</p>


</div>


</div>


</motion.div>

);

}


export default ToolsCard;