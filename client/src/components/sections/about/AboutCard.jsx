import { motion } from "framer-motion";


function AboutCard(){

return(

<motion.div

initial={{
opacity:0,
x:50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:0.7
}}

className="
rounded-3xl
border
border-white/10
bg-white/5
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

What I Do

</h3>



<div
className="
mt-6
space-y-5
"
>


<div>

<h4
className="
font-semibold
text-cyan-400
"
>
Full Stack Development
</h4>

<p
className="
text-sm
text-slate-400
"
>
Building complete web applications from frontend
interfaces to backend APIs.
</p>

</div>




<div>

<h4
className="
font-semibold
text-cyan-400
"
>
Backend Engineering
</h4>

<p
className="
text-sm
text-slate-400
"
>
Creating secure APIs, databases, authentication,
and scalable server systems.
</p>

</div>




<div>

<h4
className="
font-semibold
text-cyan-400
"
>
Problem Solving
</h4>

<p
className="
text-sm
text-slate-400
"
>
Turning real-world problems into reliable
software solutions.
</p>

</div>


</div>


</motion.div>

);

}


export default AboutCard;