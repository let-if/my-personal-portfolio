
// import {
// useEffect,
// useState
// }
// from "react";


// import {
// useNavigate,
// useParams
// }
// from "react-router-dom";


// import AdminLayout from "../../layouts/AdminLayout";


// import {
// getAdminProjects,
// updateProject
// }
// from "../../services/adminProjectService";





// function EditProject(){


// const {
// id
// }=useParams();


// const navigate =
// useNavigate();




// const [loading,setLoading]=useState(true);


// const [image,setImage]=useState(null);


// const [oldImage,setOldImage]=useState("");



// const [form,setForm]=useState({

// title:"",
// description:"",
// github:"",
// demo:"",
// technologies:"",
// featured:false

// });








// useEffect(()=>{


// loadProject();


// },[]);








// async function loadProject(){


// try{


// const projects =
// await getAdminProjects();



// const project =
// projects.find(
// item=>item.id===id
// );



// if(!project){

// navigate("/admin/projects");

// return;

// }




// setForm({

// title:project.title,

// description:project.description,

// github:project.github || "",

// demo:project.demo || "",

// technologies:
// project.technologies
// ?
// project.technologies.join(",")
// :
// "",

// featured:
// project.featured

// });



// setOldImage(
// project.image
// );



// }

// catch(error){

// console.log(error);

// }

// finally{

// setLoading(false);

// }



// }









// function handleChange(e){


// const {
// name,
// value,
// type,
// checked
// }=e.target;



// setForm({

// ...form,


// [name]:

// type==="checkbox"

// ?

// checked

// :

// value



// });



// }








// function handleImage(e){


// setImage(
// e.target.files[0]
// );


// }








// async function handleSubmit(e){


// e.preventDefault();




// const data =
// new FormData();



// data.append(
// "title",
// form.title
// );



// data.append(
// "description",
// form.description
// );



// data.append(
// "github",
// form.github
// );



// data.append(
// "demo",
// form.demo
// );



// data.append(
// "featured",
// form.featured
// );





// data.append(

// "technologies",

// JSON.stringify(

// form.technologies

// .split(",")

// .map(
// item=>item.trim()
// )

// .filter(Boolean)

// )

// );







// if(image){

// data.append(
// "image",
// image
// );

// }







// try{


// await updateProject(
// id,
// data
// );



// alert(
// "Project updated successfully"
// );



// navigate(
// "/admin/projects"
// );



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

// <div className="text-slate-400">

// Loading project...

// </div>

// </AdminLayout>

// );


// }









// return(


// <AdminLayout>


// <div

// className="
// mx-auto
// max-w-3xl
// "

// >



// <h1

// className="
// mb-10
// text-3xl
// font-bold
// text-white
// "

// >

// Edit Project

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

// name="title"

// value={form.title}

// onChange={handleChange}

// placeholder="Project title"

// className="
// w-full
// rounded-xl
// bg-slate-900
// p-4
// text-white
// "

// />







// <textarea

// name="description"

// value={form.description}

// onChange={handleChange}

// rows="5"

// placeholder="Description"

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

// name="demo"

// value={form.demo}

// onChange={handleChange}

// placeholder="Live Demo URL"

// className="
// w-full
// rounded-xl
// bg-slate-900
// p-4
// text-white
// "

// />








// <input

// value={form.technologies}

// name="technologies"

// onChange={handleChange}

// placeholder="React, Node.js, PostgreSQL"

// className="
// w-full
// rounded-xl
// bg-slate-900
// p-4
// text-white
// "

// />








// <div

// className="
// flex
// items-center
// gap-3
// text-white
// "

// >


// <input

// type="checkbox"

// name="featured"

// checked={form.featured}

// onChange={handleChange}

// />


// Featured Project


// </div>









// {

// oldImage &&

// <div>


// <p className="
// mb-3
// text-slate-400
// ">

// Current Image

// </p>


// <img

// src={
// `http://localhost:5000${oldImage}`
// }

// className="
// h-48
// w-full
// rounded-xl
// object-cover
// "

// />


// </div>


// }








// <div>


// <label className="
// mb-2
// block
// text-slate-300
// ">

// Replace Image

// </label>



// <input

// type="file"

// onChange={handleImage}

// className="
// text-white
// "

// />


// </div>










// <button

// className="
// w-full
// rounded-xl
// bg-gradient-to-r
// from-cyan-500
// to-blue-600
// py-4
// font-bold
// text-white
// transition
// hover:scale-105
// "

// >

// Update Project

// </button>








// </form>



// </div>


// </AdminLayout>


// );



// }



// export default EditProject;
import {
useEffect,
useState
}
from "react";


import {
useNavigate,
useParams
}
from "react-router-dom";


import {
motion
}
from "framer-motion";


import {

FaGithub,

FaExternalLinkAlt,

FaImage,

FaStar,

FaSave

}
from "react-icons/fa";


import AdminLayout from "../../layouts/AdminLayout";


import {

getAdminProjects,

updateProject

}

from "../../services/adminProjectService";








function EditProject(){



const {
id
}=useParams();



const navigate =
useNavigate();





const [loading,setLoading]=useState(true);


const [image,setImage]=useState(null);


const [oldImage,setOldImage]=useState("");





const [form,setForm]=useState({


title:"",

description:"",

github:"",

demo:"",

technologies:"",

featured:false


});











useEffect(()=>{


loadProject();


},[]);









async function loadProject(){


try{


const projects =
await getAdminProjects();



const project =
projects.find(
item=>item.id===id
);





if(!project){

navigate("/admin/projects");

return;

}






setForm({

title:project.title,

description:project.description,

github:project.github || "",

demo:project.demo || "",

technologies:
project.technologies
?
project.technologies.join(",")
:
"",

featured:
project.featured


});





setOldImage(
project.image
);



}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}


}











function handleChange(e){


const {

name,

value,

type,

checked

}=e.target;




setForm({

...form,


[name]:

type==="checkbox"

?

checked

:

value



});


}











function handleSubmit(e){


e.preventDefault();



const data =
new FormData();




data.append(
"title",
form.title
);



data.append(
"description",
form.description
);



data.append(
"github",
form.github
);



data.append(
"demo",
form.demo
);



data.append(
"featured",
form.featured
);




data.append(

"technologies",

JSON.stringify(

form.technologies

.split(",")

.map(item=>item.trim())

.filter(Boolean)

)

);





if(image){

data.append(
"image",
image
);

}








updateProject(
id,
data
)

.then(()=>{


alert(
"Project updated successfully 🚀"
);


navigate(
"/admin/projects"
);


})

.catch(error=>{


console.log(error);


alert(
"Update failed"
);


});



}









if(loading){


return(

<AdminLayout>


<div

className="
flex
h-96
items-center
justify-center
text-cyan-400
text-xl
"

>

Loading Project...

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




{/* Glow */}


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
h-60
w-60
rounded-full
bg-blue-500/20
blur-3xl
"

/>












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
"

>


<h1

className="
text-5xl
font-black
text-white
"

>

Edit Project 🚀

</h1>



<p

className="
mt-3
text-slate-400
"

>

Update your project details and keep your portfolio fresh

</p>


</motion.div>













<div

className="
grid
gap-8
lg:grid-cols-3
"

>









{/* Preview */}



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
p-6
backdrop-blur-xl
"

>


<h2

className="
mb-5
text-xl
font-bold
text-white
"

>

Preview

</h2>






{

oldImage &&


<img


src={
`http://localhost:5000${oldImage}`
}


className="
mb-5
h-48
w-full
rounded-2xl
object-cover
"

 />

}




<h3

className="
text-2xl
font-bold
text-white
"

>

{form.title || "Project Name"}

</h3>





<p

className="
mt-3
text-slate-400
"

>

{form.description || "Project description"}

</p>






<div

className="
mt-5
flex
gap-4
text-cyan-400
"

>


<FaGithub/>


<FaExternalLinkAlt/>


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







<input


name="title"


value={form.title}


onChange={handleChange}


placeholder="Project title"


className="
input-style
"


/>









<textarea


name="description"


value={form.description}


onChange={handleChange}


rows="6"


placeholder="Project description"


className="
input-style
"

/>









<input


name="github"


value={form.github}


onChange={handleChange}


placeholder="Github URL"


className="
input-style
"

/>









<input


name="demo"


value={form.demo}


onChange={handleChange}


placeholder="Live Demo URL"


className="
input-style
"

/>








<input


name="technologies"


value={form.technologies}


onChange={handleChange}


placeholder="React, Node.js, PostgreSQL"


className="
input-style
"

/>









<div

className="
rounded-2xl
border
border-white/10
bg-slate-900/40
p-5
"

>


<label

className="
flex
items-center
gap-3
text-white
cursor-pointer
"

>


<input


type="checkbox"


name="featured"


checked={form.featured}


onChange={handleChange}


/>


<FaStar

className="
text-yellow-400
"

/>


Featured Project


</label>


</div>









<div

className="
rounded-2xl
border
border-dashed
border-cyan-400/40
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


<FaImage/>

Replace Project Image


</div>




<input


type="file"


accept="image/*"


onChange={(e)=>

setImage(
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


Update Project


</button>









</motion.form>








</div>





</div>



</AdminLayout>



);


}




export default EditProject;