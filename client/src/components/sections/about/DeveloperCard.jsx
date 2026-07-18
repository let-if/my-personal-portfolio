import { motion } from "framer-motion";


function DeveloperCard(){

return(

<motion.div

whileHover={{
y:-8
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


<div
className="
mb-6
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-gradient-to-br
from-cyan-400
to-blue-600
text-3xl
"
>

💻

</div>



<h3
className="
text-2xl
font-bold
text-white
"
>

Software Engineer

</h3>



<p
className="
mt-4
text-slate-400
"
>

Focused on building modern full-stack
applications with scalable backend systems
and beautiful user interfaces.

</p>



<div
className="
mt-6
space-y-3
text-sm
text-slate-300
"
>

<p>
⚛️ React + Modern Frontend
</p>

<p>
🚀 Node.js Backend Development
</p>

<p>
🗄 Database Design & APIs
</p>

<p>
🔐 Secure Authentication Systems
</p>


</div>


</motion.div>

);

}


export default DeveloperCard;