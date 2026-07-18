import { motion } from "framer-motion";


function AboutContent(){


return(

<motion.div

initial={{
opacity:0,
x:-50
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

>


<h3
className="
text-3xl
font-bold
text-white
"
>

Building Digital Solutions With Code

</h3>



<p
className="
mt-6
leading-relaxed
text-slate-400
"
>

I am Abdulletif Ylkal Abate, a Software Engineer
passionate about designing and developing modern
full-stack applications.

I enjoy transforming ideas into scalable,
efficient, and user-friendly software solutions
using modern technologies.

</p>



<p
className="
mt-5
leading-relaxed
text-slate-400
"
>

My experience includes building applications with
React, Node.js, Express, PostgreSQL, and modern
web development tools.

I focus on writing clean code, creating great
user experiences, and continuously improving
my engineering skills.

</p>



</motion.div>

);


}


export default AboutContent;