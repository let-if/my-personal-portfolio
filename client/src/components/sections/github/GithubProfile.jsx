import {useEffect,useState} from "react";

import {motion} from "framer-motion";

import {
getGithubProfile
}
from "../../../services/githubService";



function GithubProfile(){



const [profile,setProfile]=useState(null);



useEffect(()=>{


getGithubProfile()

.then(data=>{

setProfile(data);

})

.catch(err=>{

console.log(err);

});


},[]);




if(!profile){

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

Loading Github Profile...

</div>

);

}




return(

<motion.div


whileHover={{
y:-5
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
flex
flex-col
items-center
gap-6
sm:flex-row
"

>


<img

src={profile.avatar_url}

alt={profile.login}

className="
h-28
w-28
rounded-full
border
border-cyan-400
"

/>



<div>


<h3

className="
text-2xl
font-bold
text-white
"

>

{profile.name}

</h3>



<p

className="
mt-2
text-slate-400
"

>

{profile.bio || "Software Engineer"}

</p>



<a

href={profile.html_url}

target="_blank"

rel="noreferrer"

className="
mt-4
inline-block
text-cyan-400
hover:underline
"

>

View Github Profile

</a>



</div>



</div>





<div

className="
mt-10
grid
gap-5
sm:grid-cols-3
"

>


<div>

<h4

className="
text-3xl
font-bold
text-cyan-400
"

>

{profile.public_repos}

</h4>


<p

className="
text-slate-400
"

>

Repositories

</p>

</div>




<div>

<h4

className="
text-3xl
font-bold
text-cyan-400
"

>

{profile.followers}

</h4>


<p

className="
text-slate-400
"

>

Followers

</p>

</div>




<div>

<h4

className="
text-3xl
font-bold
text-cyan-400
"

>

{profile.following}

</h4>


<p

className="
text-slate-400
"

>

Following

</p>

</div>



</div>



</motion.div>


);


}


export default GithubProfile;