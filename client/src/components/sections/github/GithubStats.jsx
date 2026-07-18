import {motion}
from "framer-motion";


function GithubStats(){



const stats=[


{
title:"Repositories",
value:"15+"
},


{
title:"Projects",
value:"9+"
},


{
title:"Experience",
value:"Software Engineer"
}


];



return(


<div

className="
mt-10
grid
gap-6
sm:grid-cols-3
"

>



{

stats.map((item)=>(


<motion.div


key={item.title}


whileHover={{

y:-8

}}



className="
rounded-3xl
border
border-white/10
bg-white/5
p-6
text-center
backdrop-blur-xl
"

>


<h3

className="
text-3xl
font-bold
text-cyan-400
"

>

{item.value}

</h3>



<p

className="
mt-2
text-slate-400
"

>

{item.title}

</p>


</motion.div>



))


}



</div>


);


}


export default GithubStats;