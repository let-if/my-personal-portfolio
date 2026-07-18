import { motion } from "framer-motion";

import { technologies } from "../../../data/technologies";


function TechnologyStack(){


return(

<div className="mt-20">


<h3
className="
mb-10
text-center
text-3xl
font-bold
text-white
"
>

Technologies I Work With

</h3>



<div
className="
flex
flex-wrap
justify-center
gap-4
"
>


{
technologies.map((tech,index)=>(


<motion.div

key={index}

whileHover={{
scale:1.08
}}

className="
rounded-2xl
border
border-white/10
bg-white/5
px-6
py-4
backdrop-blur-xl
"

>


<h4
className="
font-semibold
text-white
"
>

{tech.name}

</h4>


<p
className="
mt-1
text-xs
text-cyan-400
"
>

{tech.category}

</p>


</motion.div>


))
}


</div>


</div>

);

}


export default TechnologyStack;