import AboutContent from "./about/AboutContent";
import AboutCard from "./about/AboutCard";
import JourneyTimeline from "./about/JourneyTimeline";
import StatsCards from "./about/StatsCards";
import TechnologyStack from "./about/TechnologyStack";
import Philosophy from "./about/Philosophy";
import DeveloperCard from "./about/DeveloperCard";
function About(){

return(

<section
id="about"
className="
relative
overflow-hidden
py-24
lg:py-32
"
>
    <div
className="
absolute
left-0
top-1/3
-z-10
h-96
w-96
rounded-full
bg-blue-500/10
blur-3xl
"
/>


<div
className="
mx-auto
max-w-7xl
px-6
lg:px-8
"
>


{/* Section Header */}

<div
className="
mb-16
text-center
"
>

<p
className="
mb-4
text-sm
font-semibold
uppercase
tracking-[0.3em]
text-cyan-400
"
>
About Me
</p>


<h2
className="
text-4xl
font-extrabold
text-white
sm:text-5xl
"
>

My Journey as a
<br/>

<span
className="
bg-gradient-to-r
from-cyan-400
to-blue-500
bg-clip-text
text-transparent
"
>
Software Engineer
</span>

</h2>


</div>




<div
className="
grid
items-center
gap-12
lg:grid-cols-2
"
>


<div className="lg:col-span-1">

<AboutContent />

</div>


<div className="lg:col-span-1">

<DeveloperCard />

</div>


</div>

<JourneyTimeline />
<StatsCards />

<TechnologyStack />
<Philosophy />
</div>


</section>

);

}


export default About;