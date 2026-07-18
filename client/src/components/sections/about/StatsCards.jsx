import { motion } from "framer-motion";

import { stats } from "../../../data/stats";


function StatsCards(){


return(

<div
className="
mt-20
grid
gap-6
sm:grid-cols-2
lg:grid-cols-4
"
>


{
stats.map((item,index)=>(


<motion.div

key={index}

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

transition={{
duration:0.5,
delay:index*0.1
}}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
text-center
backdrop-blur-xl
transition
hover:-translate-y-2
hover:border-cyan-400/40
"

>


<h3
className="
text-4xl
font-extrabold
text-cyan-400
"
>

{item.number}

</h3>


<p
className="
mt-3
text-sm
text-slate-400
"
>

{item.label}

</p>


</motion.div>


))
}


</div>

);

}


export default StatsCards;