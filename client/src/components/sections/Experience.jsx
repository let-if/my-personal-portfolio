import {motion} from "framer-motion";


import ExperienceCard 
from "./experience/ExperienceCard";


import {experiences}
from "../../data/experience";



function Experience(){



return(


<section

id="experience"

className="
relative
py-24
lg:py-32
"

>


<div

className="
mx-auto
max-w-6xl
px-6
lg:px-8
"

>


{/* Header */}


<motion.div


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


className="
mb-16
text-center
"

>



<p

className="
mb-4
inline-flex
rounded-full
border
border-cyan-400/20
bg-cyan-400/10
px-5
py-2
text-sm
uppercase
tracking-widest
text-cyan-400
"

>

Experience

</p>



<h2

className="
text-4xl
font-extrabold
text-white
sm:text-5xl
"

>

My Professional

<span

className="
bg-gradient-to-r
from-cyan-400
to-blue-500
bg-clip-text
text-transparent
"

>

 Journey

</span>


</h2>
<p
  className="
    mx-auto
    mt-6
    max-w-3xl
    text-lg
    leading-8
    text-slate-400
  "
>
  My journey from learning software engineering to building full-stack
  applications and gaining real-world development experience through academic
  projects and industry internships.
</p>

</motion.div>

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="
    mb-20
    grid
    gap-6
    sm:grid-cols-2
    lg:grid-cols-4
  "
>
  {[
    {
      value: "9+",
      label: "Projects Built",
    },
    {
      value: "10+",
      label: "Technologies",
    },
    {
      value: "2028",
      label: "Expected Graduation",
    },
    {
      value: "1",
      label: "Internship",
    },
  ].map((stat) => (
    <div
      key={stat.label}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        text-center
        backdrop-blur-xl
        transition
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400/40
      "
    >
      <h3 className="text-4xl font-extrabold text-cyan-400">
        {stat.value}
      </h3>

      <p className="mt-3 text-slate-400">
        {stat.label}
      </p>
    </div>
  ))}
</motion.div>




{/* Timeline */}


<div

className="
relative
"

>


<div
  className="
    absolute
    left-4
    top-0
    h-full
    w-[2px]
    bg-gradient-to-b
    from-cyan-400
    via-cyan-300
    to-transparent
    shadow-[0_0_25px_rgba(34,211,238,0.5)]
    md:left-1/2
  "
/>




<div

className="
space-y-12
"

>


{

experiences.map((experience,index)=>(


<ExperienceCard

key={experience.id}

experience={experience}

index={index}

/>


))


}



</div>


</div>

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="mt-20 text-center"
>
  <a
    href="/resume.pdf"
    download
    className="
      inline-flex
      items-center
      rounded-2xl
      bg-gradient-to-r
      from-cyan-500
      to-blue-600
      px-8
      py-4
      text-lg
      font-semibold
      text-white
      transition
      duration-300
      hover:scale-105
      hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]
    "
  >
    Download My Resume
  </a>
</motion.div>
<p
  className="
    mx-auto
    mt-8
    max-w-3xl
    text-center
    leading-8
    text-slate-400
  "
>
  I'm always eager to take on challenging projects, learn new technologies,
  and collaborate with teams to build software that creates real value.
</p>
</div>


</section>


);


}


export default Experience;