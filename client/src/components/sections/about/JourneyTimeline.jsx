import { motion } from "framer-motion";

import { journey } from "../../../data/journey";


function JourneyTimeline(){


return(

<div className="mt-20">


<h3
className="
mb-12
text-center
text-3xl
font-bold
text-white
"
>

My Journey

</h3>



<div
className="
relative
mx-auto
max-w-4xl
"
>


{/* Line */}

<div
className="
absolute
left-5
top-0
h-full
w-[2px]
bg-gradient-to-b
from-cyan-400
to-blue-600
md:left-1/2
"
/>



{
journey.map((item,index)=>(


<motion.div

key={index}

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
duration:0.6,
delay:index*0.1
}}

className="
relative
mb-12
pl-14
md:flex
md:justify-between
md:pl-0
"

>


{/* Dot */}

<div
className="
absolute
left-[10px]
top-2
h-4
w-4
rounded-full
bg-cyan-400
shadow-lg
shadow-cyan-400/50
md:left-1/2
md:-translate-x-1/2
"
/>




<div
className="
rounded-3xl
border
border-white/10
bg-white/5
p-6
backdrop-blur-xl
md:w-[45%]
"
>


<span
className="
text-sm
font-semibold
text-cyan-400
"
>

{item.year}

</span>


<h4
className="
mt-2
text-xl
font-bold
text-white
"
>

{item.title}

</h4>


<p
className="
mt-3
text-sm
leading-relaxed
text-slate-400
"
>

{item.description}

</p>


</div>



</motion.div>


))
}


</div>


</div>

);

}


export default JourneyTimeline;