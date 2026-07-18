import {
useEffect,
useState
}
from "react";


import {motion}
from "framer-motion";


import {

getGithubLanguages

}

from "../../../services/githubService";




function GithubLanguages(){


const [languages,setLanguages]=useState([]);


const [loading,setLoading]=useState(true);



useEffect(()=>{


loadLanguages();


},[]);





async function loadLanguages(){


try{


const data =
await getGithubLanguages();


setLanguages(data);


}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}


}







if(loading){


return(

<div

className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
text-center
text-slate-400
"

>

Loading languages...

</div>

);


}







return(


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
mt-10
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

Technology Usage

</h3>




<div

className="
mt-8
space-y-6
"

>



{

languages.map((language)=>(


<div

key={language.name}

>


<div

className="
mb-2
flex
justify-between
text-sm
"

>


<span className="text-slate-300">

{language.name}

</span>



<span className="text-cyan-400">

{language.percentage}%

</span>


</div>




<div

className="
h-3
overflow-hidden
rounded-full
bg-white/10
"

>


<motion.div

initial={{

width:0

}}

whileInView={{

width:`${language.percentage}%`

}}

transition={{

duration:1

}}


className="
h-full
rounded-full
bg-gradient-to-r
from-cyan-400
to-blue-500
"

/>


</div>



</div>


))


}



</div>



</motion.div>



);


}


export default GithubLanguages;