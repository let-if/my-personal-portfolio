// import {useState} from "react";
// import {useNavigate} from "react-router-dom";
// import {motion} from "framer-motion";


// import {
// createProject
// }
// from "../../services/adminProjectService";



// function AddProject(){


// const navigate = useNavigate();


// const [loading,setLoading]=useState(false);


// const [form,setForm]=useState({

// title:"",
// description:"",
// github:"",
// demo:"",
// technologies:"",
// featured:false,
// image:null

// });





// function handleChange(e){


// const {name,value,type,checked}=e.target;


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


// setForm({

// ...form,

// image:e.target.files[0]

// });


// }




// async function handleSubmit(e){


// e.preventDefault();


// try{


// setLoading(true);



// const data = new FormData();



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
// .map(t=>t.trim())
// )
// );



// if(form.image){

// data.append(
// "image",
// form.image
// );

// }





// await createProject(data);



// alert(
// "Project Added Successfully 🚀"
// );



// navigate(
// "/admin"
// );



// }
// catch(error){

// console.log(error);

// alert(
// "Failed creating project"
// );


// }
// finally{

// setLoading(false);

// }


// }





// return(


// <section

// className="
// min-h-screen
// bg-slate-950
// px-6
// py-24
// "

// >


// <div

// className="
// mx-auto
// max-w-3xl
// "

// >


// <motion.div

// initial={{
// opacity:0,
// y:30
// }}

// animate={{
// opacity:1,
// y:0
// }}

// className="
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-10
// backdrop-blur-xl
// "

// >


// <h1

// className="
// mb-8
// text-4xl
// font-bold
// text-white
// "

// >

// Add New Project 🚀

// </h1>




// <form

// onSubmit={handleSubmit}

// className="
// space-y-6
// "

// >


// <input

// name="title"

// placeholder="Project title"

// onChange={handleChange}

// className="input"

// required

// />




// <textarea

// name="description"

// placeholder="Description"

// onChange={handleChange}

// className="input h-32"

// required

// />




// <input

// name="github"

// placeholder="Github URL"

// onChange={handleChange}

// className="input"

// />





// <input

// name="demo"

// placeholder="Live Demo URL"

// onChange={handleChange}

// className="input"

// />






// <input

// name="technologies"

// placeholder="React, Node.js, PostgreSQL"

// onChange={handleChange}

// className="input"

// />





// <div>


// <label

// className="
// text-slate-300
// "

// >

// Project Image

// </label>



// <input

// type="file"

// accept="image/*"

// onChange={handleImage}

// className="
// mt-3
// text-white
// "

// />


// </div>







// <label

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

// onChange={handleChange}

// />


// Featured Project ⭐


// </label>






// <button

// disabled={loading}

// className="
// w-full
// rounded-xl
// bg-gradient-to-r
// from-cyan-500
// to-blue-600
// py-4
// font-bold
// text-white
// hover:scale-105
// transition
// "

// >


// {

// loading
// ?
// "Saving..."
// :
// "Create Project"

// }


// </button>




// </form>



// </motion.div>



// </div>



// </section>


// )


// }


// export default AddProject;
import {
useState
}
from "react";

import {
useNavigate
}
from "react-router-dom";

import {
motion
}
from "framer-motion";

import {
FaCloudUploadAlt,
FaStar,
FaGithub,
FaExternalLinkAlt,
FaRocket
}
from "react-icons/fa";


import {
createProject
}
from "../../services/adminProjectService";





function AddProject(){


const navigate = useNavigate();



const [loading,setLoading]=useState(false);


const [preview,setPreview]=useState(null);



const [form,setForm]=useState({

title:"",
description:"",
github:"",
demo:"",
technologies:"",
featured:false,
image:null

});







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








function handleImage(e){


const file=e.target.files[0];


if(file){


setForm({

...form,

image:file

});


setPreview(
URL.createObjectURL(file)
);


}



}









async function handleSubmit(e){


e.preventDefault();



try{


setLoading(true);



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

.map(t=>t.trim())

)

);





if(form.image){

data.append(
"image",
form.image
);

}






await createProject(data);



alert(
"🚀 Project created successfully"
);



navigate(
"/admin/projects"
);



}

catch(error){


console.log(error);


alert(
"Failed creating project"
);



}

finally{


setLoading(false);


}



}










return(


<section

className="
relative
min-h-screen
overflow-hidden
bg-slate-950
px-6
py-20
"



>


{/* Background Glow */}


<div

className="
absolute
left-1/2
top-20
h-96
w-96
-translate-x-1/2
rounded-full
bg-cyan-500/20
blur-3xl
"

/>



<div

className="
absolute
bottom-10
right-20
h-72
w-72
rounded-full
bg-blue-600/20
blur-3xl
"

/>









<motion.div


initial={{

opacity:0,
y:40

}}


animate={{

opacity:1,
y:0

}}


transition={{

duration:0.6

}}


className="
relative
mx-auto
max-w-4xl
rounded-3xl
border
border-white/10
bg-white/5
p-10
shadow-2xl
backdrop-blur-xl
"



>






{/* Header */}


<div

className="
mb-10
flex
items-center
gap-4
"

>


<div

className="
rounded-2xl
bg-gradient-to-r
from-cyan-500
to-blue-600
p-4
text-white
shadow-lg
"

>

<FaRocket size={28}/>

</div>



<div>


<h1

className="
text-4xl
font-black
text-white
"

>

Create New Project

</h1>



<p

className="
mt-2
text-slate-400
"

>

Add a new project to your portfolio showcase

</p>


</div>


</div>









<form

onSubmit={handleSubmit}

className="
space-y-7
"

>









{/* Title */}


<div>


<label

className="
mb-2
block
font-semibold
text-slate-300
"

>

Project Title

</label>


<input

name="title"

value={form.title}

onChange={handleChange}

placeholder="Portfolio Website"

required


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
focus:ring-2
focus:ring-cyan-400/30
"

/>


</div>









{/* Description */}


<div>


<label

className="
mb-2
block
font-semibold
text-slate-300
"

>

Description

</label>


<textarea

name="description"

value={form.description}

onChange={handleChange}

rows="5"

placeholder="Describe your project..."

required


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
focus:ring-2
focus:ring-cyan-400/30
"

/>


</div>









<div

className="
grid
gap-6
md:grid-cols-2
"

>



<div>


<label

className="
mb-2
block
text-slate-300
"

>

Github URL

</label>



<div

className="
relative
"

>

<FaGithub

className="
absolute
left-4
top-5
text-cyan-400
"

/>


<input

name="github"

value={form.github}

onChange={handleChange}

placeholder="https://github.com/..."

className="
w-full
rounded-2xl
border
border-white/10
bg-slate-900/70
py-4
pl-12
text-white
"

/>


</div>



</div>








<div>


<label

className="
mb-2
block
text-slate-300
"

>

Live Demo

</label>



<div

className="
relative
"

>

<FaExternalLinkAlt

className="
absolute
left-4
top-5
text-cyan-400
"

/>


<input

name="demo"

value={form.demo}

onChange={handleChange}

placeholder="https://website.com"

className="
w-full
rounded-2xl
border
border-white/10
bg-slate-900/70
py-4
pl-12
text-white
"

/>


</div>



</div>



</div>









{/* Technologies */}


<div>


<label

className="
mb-2
block
text-slate-300
"

>

Technologies

</label>


<input


name="technologies"

value={form.technologies}

onChange={handleChange}

placeholder="React, Node.js, PostgreSQL"

className="
w-full
rounded-2xl
border
border-white/10
bg-slate-900/70
p-4
text-white
"

/>


</div>









{/* Image Upload */}



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


<label

className="
flex
cursor-pointer
flex-col
items-center
justify-center
text-center
"

>


<FaCloudUploadAlt

size={45}

className="
mb-3
text-cyan-400
"

/>


<p

className="
font-semibold
text-white
"

>

Upload Project Image

</p>


<p

className="
text-sm
text-slate-400
"

>

PNG, JPG, WEBP

</p>



<input

type="file"

accept="image/*"

hidden

onChange={handleImage}

/>



</label>





{
preview &&


<img

src={preview}

alt="preview"

className="
mt-6
h-60
w-full
rounded-2xl
object-cover
"

/>

}



</div>









{/* Featured */}



<label

className="
flex
items-center
gap-3
rounded-2xl
border
border-white/10
bg-white/5
p-4
text-white
transition
hover:border-yellow-400
"

>


<input

type="checkbox"

name="featured"

checked={form.featured}

onChange={handleChange}

className="
h-5
w-5
accent-yellow-400
"

/>



<div

className="
flex
items-center
gap-2
"

>

<FaStar className="text-yellow-400"/>

Featured Project

</div>


</label>









<button


disabled={loading}


className="
group
flex
w-full
items-center
justify-center
gap-3
rounded-2xl
bg-gradient-to-r
from-cyan-500
via-blue-500
to-indigo-600
py-4
font-black
text-white
shadow-xl
shadow-cyan-500/20
transition
hover:scale-[1.02]
disabled:opacity-50
"

>


{

loading
?

"Creating Project..."

:

<>

Create Project

<FaRocket/>

</>

}



</button>







</form>





</motion.div>





</section>



);


}



export default AddProject;