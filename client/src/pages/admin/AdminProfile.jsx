// import {
// useEffect,
// useState
// }
// from "react";


// import AdminLayout from "../../layouts/AdminLayout";


// import {

// getAdminProfile,

// updateAdminProfile

// }

// from "../../services/adminProfileService";





// function AdminProfile(){



// const [profile,setProfile]=useState(null);


// const [loading,setLoading]=useState(true);


// const [cv,setCv]=useState(null);




// const [form,setForm]=useState({

// name:"",

// title:"",

// bio:"",

// github:"",

// linkedin:"",

// skills:[]

// });







// useEffect(()=>{


// loadProfile();


// },[]);








// async function loadProfile(){


// try{


// const data =
// await getAdminProfile();



// if(data){


// setForm({

// name:data.name || "",

// title:data.title || "",

// bio:data.bio || "",

// github:data.github || "",

// linkedin:data.linkedin || "",

// skills:data.skills || []

// });


// }



// setProfile(data);



// }

// catch(error){

// console.log(error);

// }

// finally{

// setLoading(false);

// }


// }









// function handleChange(e){


// setForm({

// ...form,

// [e.target.name]:e.target.value

// });


// }









// function handleSkills(e){


// setForm({

// ...form,

// skills:e.target.value.split(",")

// });


// }









// async function handleSubmit(e){


// e.preventDefault();



// const data =
// new FormData();



// data.append(

// "name",

// form.name

// );


// data.append(

// "title",

// form.title

// );


// data.append(

// "bio",

// form.bio

// );



// data.append(

// "github",

// form.github

// );


// data.append(

// "linkedin",

// form.linkedin

// );



// data.append(

// "skills",

// JSON.stringify(form.skills)

// );





// if(cv){

// data.append(

// "cv",

// cv

// );

// }






// try{


// await updateAdminProfile(data);



// alert(
// "Profile updated successfully 🚀"
// );


// loadProfile();


// }

// catch(error){

// console.log(error);


// alert(
// "Update failed"
// );


// }



// }










// if(loading){


// return(

// <AdminLayout>

// <div className="
// p-10
// text-slate-400
// ">

// Loading...

// </div>

// </AdminLayout>

// );


// }









// return(


// <AdminLayout>


// <div className="
// max-w-5xl
// "
// >


// <h1 className="
// mb-10
// text-4xl
// font-bold
// text-white
// ">

// Admin Profile

// </h1>





// <form

// onSubmit={handleSubmit}

// className="
// space-y-6
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-8
// backdrop-blur-xl
// "

// >







// <input

// name="name"

// value={form.name}

// onChange={handleChange}

// placeholder="Name"

// className="
// w-full
// rounded-xl
// bg-slate-900
// p-4
// text-white
// "

// />







// <input

// name="title"

// value={form.title}

// onChange={handleChange}

// placeholder="Title"

// className="
// w-full
// rounded-xl
// bg-slate-900
// p-4
// text-white
// "

// />








// <textarea


// name="bio"


// value={form.bio}


// onChange={handleChange}


// placeholder="Bio"


// rows="5"


// className="
// w-full
// rounded-xl
// bg-slate-900
// p-4
// text-white
// "

// />









// <input


// name="github"


// value={form.github}


// onChange={handleChange}


// placeholder="Github URL"


// className="
// w-full
// rounded-xl
// bg-slate-900
// p-4
// text-white
// "

// />








// <input


// name="linkedin"


// value={form.linkedin}


// onChange={handleChange}


// placeholder="LinkedIn URL"


// className="
// w-full
// rounded-xl
// bg-slate-900
// p-4
// text-white
// "

// />









// <input


// value={form.skills.join(",")}


// onChange={handleSkills}


// placeholder="React, Node.js, PostgreSQL"


// className="
// w-full
// rounded-xl
// bg-slate-900
// p-4
// text-white
// "

// />







// <div>


// <label className="
// block
// mb-2
// text-slate-300
// ">

// Upload CV PDF

// </label>



// <input

// type="file"

// accept="application/pdf"

// onChange={(e)=>

// setCv(e.target.files[0])

// }


// />

// </div>









// <button

// className="
// rounded-xl
// bg-gradient-to-r
// from-cyan-500
// to-blue-600
// px-8
// py-4
// font-bold
// text-white
// "

// >

// Save Profile

// </button>






// </form>



// </div>



// </AdminLayout>


// );


// }


// export default AdminProfile;
import {
useEffect,
useState
}
from "react";


import {
motion
}
from "framer-motion";


import {

FaUser,

FaGithub,

FaLinkedin,

FaFilePdf,

FaSave,

FaCode

}
from "react-icons/fa";


import AdminLayout from "../../layouts/AdminLayout";


import {

getAdminProfile,

updateAdminProfile

}

from "../../services/adminProfileService";







function AdminProfile(){



const [profile,setProfile]=useState(null);


const [loading,setLoading]=useState(true);


const [cv,setCv]=useState(null);




const [form,setForm]=useState({


name:"",

title:"",

bio:"",

github:"",

linkedin:"",

skills:[]


});









useEffect(()=>{


loadProfile();


},[]);









async function loadProfile(){


try{


const data =
await getAdminProfile();



if(data){


setForm({

name:data.name || "",

title:data.title || "",

bio:data.bio || "",

github:data.github || "",

linkedin:data.linkedin || "",

skills:data.skills || []

});


}



setProfile(data);



}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}


}









function handleChange(e){


setForm({

...form,

[e.target.name]:e.target.value


});


}










function handleSkills(e){


setForm({

...form,

skills:e.target.value
.split(",")
.map(skill=>skill.trim())


});


}










async function handleSubmit(e){


e.preventDefault();



const data =
new FormData();



data.append(
"name",
form.name
);



data.append(
"title",
form.title
);



data.append(
"bio",
form.bio
);



data.append(
"github",
form.github
);



data.append(
"linkedin",
form.linkedin
);



data.append(

"skills",

JSON.stringify(form.skills)

);



if(cv){

data.append(
"cv",
cv
);


}




try{


await updateAdminProfile(data);



alert(
"Profile updated successfully 🚀"
);



loadProfile();



}

catch(error){

console.log(error);


alert(
"Update failed"
);


}



}











if(loading){


return(

<AdminLayout>


<div

className="
flex
min-h-[400px]
items-center
justify-center
text-cyan-400
"

>

Loading Profile...

</div>


</AdminLayout>


);


}









return(


<AdminLayout>


<div

className="
relative
mx-auto
max-w-6xl
"

>






{/* Background Glow */}


<div

className="
absolute
right-20
top-10
h-72
w-72
rounded-full
bg-cyan-500/20
blur-3xl
"

/>


<div

className="
absolute
bottom-10
left-20
h-64
w-64
rounded-full
bg-blue-500/20
blur-3xl
"

/>











{/* Header */}



<motion.div


initial={{

opacity:0,

y:-30

}}


animate={{

opacity:1,

y:0

}}



className="
mb-10
relative
"

>


<h1

className="
text-5xl
font-black
text-white
"

>

My Profile

</h1>


<p

className="
mt-3
text-slate-400
"

>

Manage your portfolio identity and public information

</p>



</motion.div>












<div

className="
grid
gap-8
lg:grid-cols-3
"

>









{/* Profile Preview */}



<motion.div


initial={{

opacity:0,

x:-30

}}


animate={{

opacity:1,

x:0

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
mx-auto
flex
h-28
w-28
items-center
justify-center
rounded-full
bg-gradient-to-r
from-cyan-500
to-blue-600
text-white
shadow-xl
"

>


<FaUser size={45}/>


</div>






<h2

className="
mt-6
text-center
text-2xl
font-bold
text-white
"

>

{form.name || "Your Name"}

</h2>



<p

className="
mt-2
text-center
text-cyan-400
"

>

{form.title || "Software Engineer"}

</p>








<div

className="
mt-8
space-y-3
"

>


<div

className="
flex
items-center
gap-3
text-slate-300
"

>

<FaGithub/>

Github

</div>



<div

className="
flex
items-center
gap-3
text-slate-300
"

>

<FaLinkedin/>

LinkedIn

</div>



</div>






</motion.div>














{/* Form */}



<motion.form


onSubmit={handleSubmit}


initial={{

opacity:0,

x:30

}}


animate={{

opacity:1,

x:0

}}


className="
space-y-6
rounded-3xl
border
border-white/10
bg-white/5
p-8
backdrop-blur-xl
lg:col-span-2
"


>





<div

className="
grid
gap-6
md:grid-cols-2
"

>


<Input

name="name"

value={form.name}

onChange={handleChange}

placeholder="Full Name"

/>


<Input

name="title"

value={form.title}

onChange={handleChange}

placeholder="Professional Title"

/>



</div>









<textarea


name="bio"


value={form.bio}


onChange={handleChange}


rows="6"


placeholder="Professional Bio"


className="
w-full
rounded-2xl
border
border-white/10
bg-slate-900/70
p-5
text-white
outline-none
transition
focus:border-cyan-400
"

/>









<Input

name="github"

value={form.github}

onChange={handleChange}

placeholder="Github URL"

/>







<Input

name="linkedin"

value={form.linkedin}

onChange={handleChange}

placeholder="LinkedIn URL"

/>









<div

className="
relative
"

>


<FaCode

className="
absolute
left-4
top-5
text-cyan-400
"

/>


<input


value={form.skills.join(",")}


onChange={handleSkills}


placeholder="React, Node.js, PostgreSQL"


className="
w-full
rounded-2xl
border
border-white/10
bg-slate-900/70
py-4
pl-12
text-white
outline-none
focus:border-cyan-400
"


/>


</div>









{/* Skills Preview */}


<div

className="
flex
flex-wrap
gap-3
"

>


{

form.skills.map(skill=>(


<span

key={skill}

className="
rounded-full
bg-cyan-400/10
px-4
py-2
text-sm
text-cyan-300
"

>

{skill}

</span>


))


}


</div>









{/* CV Upload */}


<div

className="
rounded-2xl
border
border-dashed
border-cyan-400/30
bg-cyan-400/5
p-6
"

>


<div

className="
mb-3
flex
items-center
gap-3
text-white
"

>


<FaFilePdf/>

Upload Resume PDF


</div>



<input


type="file"


accept="application/pdf"


onChange={(e)=>

setCv(
e.target.files[0]
)

}


/>


</div>











<button


className="
flex
w-full
items-center
justify-center
gap-3
rounded-2xl
bg-gradient-to-r
from-cyan-500
to-blue-600
py-4
font-black
text-white
shadow-lg
shadow-cyan-500/30
transition
hover:scale-[1.02]
"

>


<FaSave/>

Save Changes


</button>








</motion.form>









</div>






</div>


</AdminLayout>


);


}









function Input({

name,

value,

onChange,

placeholder

}){


return(

<input


name={name}


value={value}


onChange={onChange}


placeholder={placeholder}


className="
w-full
rounded-2xl
border
border-white/10
bg-slate-900/70
p-4
text-white
outline-none
transition
focus:border-cyan-400
focus:ring
focus:ring-cyan-400/20
"

/>


);


}




export default AdminProfile;