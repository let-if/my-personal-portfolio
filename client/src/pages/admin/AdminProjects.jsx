// import {
// useEffect,
// useState
// }
// from "react";


// import {
// useNavigate
// }
// from "react-router-dom";


// import AdminLayout from "../../layouts/AdminLayout";


// import {

// getAdminProjects,

// deleteProject

// }

// from "../../services/adminProjectService";



// function AdminProjects(){


// const navigate =
// useNavigate();



// const [projects,setProjects]=useState([]);

// const [loading,setLoading]=useState(true);





// useEffect(()=>{


// loadProjects();


// },[]);





// async function loadProjects(){


// try{


// const data =
// await getAdminProjects();


// setProjects(data);


// }
// catch(error){

// console.log(error);

// }

// finally{

// setLoading(false);

// }


// }







// async function remove(id){


// const confirmDelete =
// window.confirm(
// "Delete this project?"
// );



// if(!confirmDelete)
// return;



// await deleteProject(id);



// loadProjects();



// }







// return(


// <AdminLayout>


// <div>



// <div className="
// mb-10
// flex
// items-center
// justify-between
// ">


// <h1 className="
// text-3xl
// font-bold
// text-white
// ">

// Projects CMS

// </h1>



// <a

// href="/admin/projects/add"

// className="
// rounded-xl
// bg-gradient-to-r
// from-cyan-500
// to-blue-600
// px-6
// py-3
// font-bold
// text-white
// "

// >

// + Add Project

// </a>


// </div>






// {

// loading ?


// <p className="text-slate-400">

// Loading...

// </p>


// :


// <div className="
// grid
// gap-6
// md:grid-cols-2
// ">


// {

// projects.map(project=>(


// <div

// key={project.id}

// className="
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-6
// "

// >



// {

// project.image &&

// <img

// src={
// `http://localhost:5000${project.image}`
// }

// className="
// mb-5
// h-48
// w-full
// rounded-xl
// object-cover
// "

// />

// }





// <h2 className="
// text-xl
// font-bold
// text-white
// ">

// {project.title}

// </h2>



// <p className="
// mt-3
// text-slate-400
// ">

// {project.description}

// </p>




// <div className="
// mt-6
// flex
// gap-3
// ">


// <button

// className="
// rounded-lg
// bg-blue-500
// px-4
// py-2
// text-white
// "

// >

// Edit

// </button>



// <button

// onClick={()=>remove(project.id)}

// className="
// rounded-lg
// bg-red-500
// px-4
// py-2
// text-white
// "

// >

// Delete

// </button>


// </div>




// </div>


// ))


// }



// </div>


// }



// </div>


// </AdminLayout>


// );


// }


// // export default AdminProjects;
// import {
// useEffect,
// useState
// }
// from "react";


// import {
// useNavigate
// }
// from "react-router-dom";


// import AdminLayout from "../../layouts/AdminLayout";


// import {

// getAdminProjects,

// deleteProject

// }

// from "../../services/adminProjectService";





// function AdminProjects(){


// const navigate =
// useNavigate();



// const [projects,setProjects]=useState([]);

// const [loading,setLoading]=useState(true);






// useEffect(()=>{

// loadProjects();

// },[]);







// async function loadProjects(){


// try{


// const data =
// await getAdminProjects();


// setProjects(data || []);


// }

// catch(error){

// console.log(error);

// }

// finally{

// setLoading(false);

// }


// }







// async function remove(id){


// const confirmDelete =
// window.confirm(
// "Are you sure you want to delete this project?"
// );



// if(!confirmDelete)
// return;



// try{


// await deleteProject(id);


// loadProjects();



// }
// catch(error){

// console.log(error);

// }



// }









// return(


// <AdminLayout>


// <div>


// {/* Header */}

// <div

// className="
// mb-10
// flex
// items-center
// justify-between
// "

// >


// <h1

// className="
// text-3xl
// font-bold
// text-white
// "

// >

// Projects CMS

// </h1>





// <button

// onClick={()=>navigate("/admin/projects/add")}

// className="
// rounded-xl
// bg-gradient-to-r
// from-cyan-500
// to-blue-600
// px-6
// py-3
// font-bold
// text-white
// transition
// hover:scale-105
// "

// >

// + Add Project

// </button>



// </div>








// {

// loading ?



// <p className="
// text-slate-400
// ">

// Loading projects...

// </p>



// :



// <div

// className="
// grid
// gap-6
// md:grid-cols-2
// "

// >


// {

// projects.map((project)=>(


// <div

// key={project.id}

// className="
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-6
// "

// >





// {

// project.image &&


// <img


// src={
// `http://localhost:5000${project.image}`
// }


// alt={project.title}


// className="
// mb-5
// h-48
// w-full
// rounded-xl
// object-cover
// "


// />


// }








// <h2

// className="
// text-xl
// font-bold
// text-white
// "

// >

// {project.title}

// </h2>







// <p

// className="
// mt-3
// line-clamp-3
// text-slate-400
// "

// >

// {project.description}

// </p>








// <div

// className="
// mt-6
// flex
// gap-3
// "

// >





// {/* EDIT BUTTON */}

// <button


// onClick={()=>


// navigate(

// `/admin/projects/edit/${project.id}`

// )


// }


// className="
// rounded-lg
// bg-blue-500
// px-5
// py-2
// font-semibold
// text-white
// transition
// hover:bg-blue-600
// "

// >

// Edit

// </button>







// {/* DELETE BUTTON */}

// <button


// onClick={()=>remove(project.id)}


// className="
// rounded-lg
// bg-red-500
// px-5
// py-2
// font-semibold
// text-white
// transition
// hover:bg-red-600
// "

// >

// Delete

// </button>






// </div>





// </div>



// ))



// }





// </div>



// }




// </div>


// </AdminLayout>


// );


// }



// export default AdminProjects;
import {
  useEffect,
  useState
} from "react";


import {
  useNavigate
} from "react-router-dom";


import {
  motion
} from "framer-motion";


import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaFolderOpen
} from "react-icons/fa";


import AdminLayout from "../../layouts/AdminLayout";


import {

getAdminProjects,

deleteProject

}

from "../../services/adminProjectService";





function AdminProjects(){


const navigate = useNavigate();



const [projects,setProjects] = useState([]);

const [loading,setLoading] = useState(true);






useEffect(()=>{

loadProjects();

},[]);








async function loadProjects(){


try{


const data = await getAdminProjects();


setProjects(data || []);


}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}


}









async function remove(id){


const confirmDelete = window.confirm(

"Are you sure you want to delete this project?"

);



if(!confirmDelete)
return;



try{


await deleteProject(id);


loadProjects();


}

catch(error){

console.log(error);

}


}










return(


<AdminLayout>


<div className="relative">



{/* Background Glow */}

<div className="
absolute
top-0
right-0
h-72
w-72
rounded-full
bg-cyan-500/10
blur-3xl
pointer-events-none
"/>



<div className="
absolute
bottom-0
left-0
h-72
w-72
rounded-full
bg-blue-500/10
blur-3xl
pointer-events-none
"/>









{/* HEADER */}


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
mb-12
flex
flex-col
gap-6
md:flex-row
md:items-center
md:justify-between
"

>


<div>


<h1 className="
text-4xl
font-black
text-white
">

Projects CMS 🚀

</h1>


<p className="
mt-3
text-slate-400
">

Manage your portfolio projects professionally

</p>


</div>







<button


onClick={()=>navigate("/admin/projects/add")}


className="
group
flex
items-center
gap-3
rounded-2xl
bg-gradient-to-r
from-cyan-500
to-blue-600
px-7
py-4
font-bold
text-white
shadow-xl
shadow-cyan-500/30
transition
duration-300
hover:scale-105
hover:shadow-cyan-400/50
"

>


<FaPlus

className="
transition
group-hover:rotate-90
"

/>


Add Project


</button>



</motion.div>









{/* LOADING */}


{

loading ?



<div className="
flex
justify-center
py-20
">


<div className="
h-14
w-14
animate-spin
rounded-full
border-4
border-cyan-400
border-t-transparent
"/>


</div>



:





projects.length===0 ?



<div className="
rounded-3xl
border
border-white/10
bg-white/5
p-12
text-center
backdrop-blur-xl
">


<FaFolderOpen

className="
mx-auto
mb-5
text-5xl
text-cyan-400
"

/>


<h2 className="
text-2xl
font-bold
text-white
">

No Projects Found

</h2>


<p className="
mt-3
text-slate-400
">

Start adding your portfolio projects

</p>



</div>






:



<div className="
grid
gap-8
md:grid-cols-2
xl:grid-cols-3
">






{

projects.map((project,index)=>(



<motion.div


key={project.id}


initial={{

opacity:0,

y:40

}}


animate={{

opacity:1,

y:0

}}


transition={{

delay:index*0.1

}}



whileHover={{

y:-8

}}



className="
group
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/5
p-6
backdrop-blur-xl
transition
duration-500
hover:border-cyan-400/50
hover:shadow-2xl
hover:shadow-cyan-500/20
"

>





{/* Glow */}

<div className="
absolute
inset-0
opacity-0
bg-gradient-to-br
from-cyan-500/10
to-blue-500/10
transition
group-hover:opacity-100
"/>








<div className="relative">



{

project.image &&


<div className="
relative
overflow-hidden
rounded-2xl
mb-5
">


<img


src={`http://localhost:5000${project.image}`}


alt={project.title}


className="
h-52
w-full
object-cover
transition
duration-500
group-hover:scale-110
"


/>




{

project.featured &&


<div className="
absolute
top-3
right-3
flex
items-center
gap-2
rounded-full
bg-yellow-400
px-4
py-2
text-sm
font-bold
text-black
">


<FaStar/>

Featured


</div>


}



</div>


}








<h2 className="
text-2xl
font-black
text-white
">

{project.title}

</h2>






<p className="
mt-3
line-clamp-3
text-sm
leading-relaxed
text-slate-400
">

{project.description}

</p>







{/* TECHNOLOGIES */}

{

project.technologies?.length > 0 &&


<div className="
mt-5
flex
flex-wrap
gap-2
">


{

project.technologies.map((tech)=>(


<span

key={tech}

className="
rounded-full
bg-cyan-400/10
px-3
py-1
text-xs
font-semibold
text-cyan-300
"

>

{tech}

</span>


))


}



</div>


}








{/* LINKS */}

<div className="
mt-6
flex
gap-3
">


{

project.github &&


<a

href={project.github}

target="_blank"

rel="noreferrer"

className="
rounded-xl
border
border-white/10
p-3
text-slate-300
transition
hover:bg-white/10
hover:text-white
"

>

<FaGithub/>

</a>


}






{

project.demo &&


<a

href={project.demo}

target="_blank"

rel="noreferrer"

className="
rounded-xl
border
border-white/10
p-3
text-slate-300
transition
hover:bg-white/10
hover:text-white
"

>

<FaExternalLinkAlt/>

</a>


}




</div>








{/* ACTIONS */}


<div className="
mt-7
flex
gap-3
">


<button


onClick={()=>navigate(
`/admin/projects/edit/${project.id}`
)}



className="
group/edit
flex
flex-1
items-center
justify-center
gap-2
rounded-xl
bg-blue-500
py-3
font-bold
text-white
transition
hover:bg-blue-600
hover:scale-105
"

>


<FaEdit/>

Edit


</button>







<button


onClick={()=>remove(project.id)}



className="
group/delete
flex
flex-1
items-center
justify-center
gap-2
rounded-xl
bg-red-500
py-3
font-bold
text-white
transition
hover:bg-red-600
hover:scale-105
"

>


<FaTrash/>

Delete


</button>





</div>





</div>



</motion.div>



))



}



</div>



}







</div>


</AdminLayout>


);


}



export default AdminProjects;