// import {
// useEffect,
// useState
// }
// from "react";


// import AdminLayout from "../../layouts/AdminLayout";


// import {

// getMessages,

// deleteMessage,

// markRead

// }

// from "../../services/adminMessageService";





// function Messages(){



// const [messages,setMessages]=useState([]);



// const [loading,setLoading]=useState(true);





// useEffect(()=>{


// loadMessages();


// },[]);






// async function loadMessages(){


// try{


// const data =
// await getMessages();


// setMessages(data);


// }

// catch(error){

// console.log(error);

// }

// finally{

// setLoading(false);

// }


// }







// async function remove(id){


// if(
// !window.confirm(
// "Delete message?"
// )

// )
// return;



// await deleteMessage(id);


// loadMessages();


// }







// async function read(id){


// await markRead(id);


// loadMessages();


// }








// return(


// <AdminLayout>


// <div>



// <h1

// className="
// mb-10
// text-3xl
// font-bold
// text-white
// "

// >

// Messages

// </h1>







// {

// loading ?

// <p className="text-slate-400">

// Loading...

// </p>



// :


// <div

// className="
// space-y-6
// "

// >


// {

// messages.map(msg=>(


// <div

// key={msg.id}

// className="
// rounded-3xl
// border
// border-white/10
// bg-white/5
// p-6
// "

// >



// <div

// className="
// flex
// justify-between
// "

// >


// <h2 className="
// text-xl
// font-bold
// text-white
// ">

// {msg.name}

// </h2>



// {
// msg.status==="NEW" &&

// <span
// className="
// text-cyan-400
// "
// >
// NEW
// </span>

// }


// </div>





// <p className="
// text-slate-400
// ">

// {msg.email}

// </p>





// <h3 className="
// mt-4
// font-semibold
// text-white
// ">

// {msg.subject}

// </h3>





// <p className="
// mt-3
// text-slate-300
// ">

// {msg.message}

// </p>






// <div

// className="
// mt-6
// flex
// gap-3
// "

// >



// <button

// onClick={()=>read(msg.id)}

// className="
// rounded-lg
// bg-cyan-500
// px-4
// py-2
// text-white
// "

// >

// Mark Read

// </button>





// <button

// onClick={()=>remove(msg.id)}

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


// export default Messages;
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
FaEnvelope,
FaTrash,
FaCheckCircle,
FaUser,
FaClock
}
from "react-icons/fa";


import AdminLayout from "../../layouts/AdminLayout";


import {

getMessages,

deleteMessage,

markRead

}

from "../../services/adminMessageService";







function Messages(){



const [messages,setMessages]=useState([]);


const [loading,setLoading]=useState(true);







useEffect(()=>{

loadMessages();

},[]);









async function loadMessages(){


try{


const data =
await getMessages();


setMessages(data || []);



}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}



}









async function remove(id){



const confirm =
window.confirm(
"Delete this message permanently?"
);



if(!confirm)
return;



try{


await deleteMessage(id);


loadMessages();


}

catch(error){

console.log(error);

}



}









async function read(id){



try{


await markRead(id);


loadMessages();


}

catch(error){

console.log(error);

}


}










return(


<AdminLayout>


<div

className="
relative
"

>





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
flex
items-center
justify-between
"

>


<div>


<h1

className="
text-4xl
font-black
text-white
"

>

Messages Center

</h1>


<p

className="
mt-2
text-slate-400
"

>

Manage visitor messages and communication

</p>


</div>





<div

className="
rounded-2xl
border
border-cyan-400/20
bg-cyan-400/10
px-5
py-3
text-cyan-300
"

>


<FaEnvelope

className="
inline
mr-2
"

/>


{messages.length} Messages


</div>



</motion.div>









{

loading ?



<div

className="
flex
justify-center
py-20
"

>

<div

className="
h-12
w-12
animate-spin
rounded-full
border-4
border-cyan-400
border-t-transparent
"

/>


</div>





:



messages.length===0 ?



<div

className="
rounded-3xl
border
border-white/10
bg-white/5
p-12
text-center
"

>


<FaEnvelope

size={50}

className="
mx-auto
mb-5
text-slate-500
"

/>


<h2

className="
text-2xl
font-bold
text-white
"

>

No Messages Yet

</h2>


<p

className="
mt-3
text-slate-400
"

>

Your portfolio messages will appear here.

</p>


</div>






:





<div

className="
grid
gap-7
"

>





{

messages.map((msg,index)=>(



<motion.div


key={msg.id}


initial={{

opacity:0,

y:40

}}


animate={{

opacity:1,

y:0

}}


transition={{

delay:index*0.08

}}



whileHover={{

y:-8,

scale:1.01

}}



className="
group
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/5
p-7
shadow-xl
backdrop-blur-xl
transition
"

>



{/* Glow */}


<div

className="
absolute
right-0
top-0
h-32
w-32
rounded-full
bg-cyan-500/20
blur-3xl
opacity-0
transition
group-hover:opacity-100
"

/>









<div

className="
relative
flex
items-start
justify-between
"

>


<div

className="
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
"

>


<FaUser size={22}/>


</div>





<div>


<h2

className="
text-xl
font-bold
text-white
"

>

{msg.name}

</h2>


<p

className="
text-sm
text-slate-400
"

>

{msg.email}

</p>


</div>



</div>










{

msg.status==="NEW" &&


<span

className="
animate-pulse
rounded-full
bg-cyan-400/20
px-4
py-2
text-sm
font-bold
text-cyan-300
"

>

NEW

</span>


}




</div>









<h3

className="
relative
mt-7
text-xl
font-bold
text-white
"

>


{msg.subject}


</h3>









<p

className="
relative
mt-4
leading-relaxed
text-slate-300
"

>

{msg.message}

</p>









<div

className="
relative
mt-6
flex
items-center
gap-2
text-sm
text-slate-500
"

>

<FaClock/>

{new Date(msg.createdAt).toLocaleDateString()}

</div>









<div

className="
relative
mt-7
flex
gap-4
"

>





<button


onClick={()=>read(msg.id)}


className="
flex
items-center
gap-2
rounded-xl
bg-gradient-to-r
from-cyan-500
to-blue-600
px-5
py-3
font-bold
text-white
transition
hover:scale-105
"

>


<FaCheckCircle/>


Mark Read


</button>









<button


onClick={()=>remove(msg.id)}


className="
flex
items-center
gap-2
rounded-xl
bg-red-500/20
px-5
py-3
font-bold
text-red-400
transition
hover:scale-105
hover:bg-red-500
hover:text-white
"

>


<FaTrash/>


Delete


</button>






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



export default Messages;