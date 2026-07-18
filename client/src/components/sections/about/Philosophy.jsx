import { motion } from "framer-motion";


function Philosophy(){

return(

<motion.div

initial={{
opacity:0,
scale:0.95
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

transition={{
duration:0.7
}}

className="
relative
mt-24
overflow-hidden
rounded-3xl
border
border-white/10
bg-gradient-to-br
from-cyan-500/10
via-blue-500/10
to-indigo-500/10
p-8
backdrop-blur-xl
lg:p-12
"

>


{/* Glow */}

<div
className="
absolute
right-0
top-0
h-40
w-40
rounded-full
bg-cyan-400/20
blur-3xl
"
/>



<h3
className="
relative
text-3xl
font-bold
text-white
"
>

My Engineering Philosophy

</h3>



<p
className="
relative
mt-6
max-w-3xl
leading-relaxed
text-slate-300
"
>

I believe great software is built by combining
clean architecture, thoughtful design, and
continuous learning.

My goal is not only to write code, but to create
solutions that are reliable, scalable, and valuable
for real users.

</p>



<div
className="
relative
mt-8
flex
flex-wrap
gap-4
"
>


<span
className="
rounded-full
border
border-cyan-400/20
bg-cyan-400/10
px-5
py-2
text-sm
text-cyan-300
"
>
Clean Code
</span>


<span
className="
rounded-full
border
border-blue-400/20
bg-blue-400/10
px-5
py-2
text-sm
text-blue-300
"
>
Problem Solving
</span>


<span
className="
rounded-full
border
border-indigo-400/20
bg-indigo-400/10
px-5
py-2
text-sm
text-indigo-300
"
>
Continuous Learning
</span>


</div>



</motion.div>

);

}


export default Philosophy;