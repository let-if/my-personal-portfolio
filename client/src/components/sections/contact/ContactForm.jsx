// function ContactForm() {
//   return (
//     <div
//       className="
//         rounded-3xl
//         border
//         border-white/10
//         bg-white/5
//         p-8
//         backdrop-blur-xl
//       "
//     >
//       <h3 className="mb-8 text-2xl font-bold text-white">
//         Send Me a Message
//       </h3>

//       <form className="space-y-6">
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
//         />

//         <input
//           type="email"
//           placeholder="Your Email"
//           className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
//         />

//         <input
//           type="text"
//           placeholder="Subject"
//           className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
//         />

//         <textarea
//           rows="6"
//           placeholder="Write your message..."
//           className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
//         />

//         <button
//           type="submit"
//           className="
//             w-full
//             rounded-xl
//             bg-gradient-to-r
//             from-cyan-500
//             to-blue-600
//             py-4
//             font-semibold
//             text-white
//             transition
//             hover:scale-[1.02]
//           "
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;
import { useState } from "react";

import {
  sendMessage
} from "../../../services/contactService";



function ContactForm() {



const [formData,setFormData]=useState({

name:"",

email:"",

subject:"",

message:""

});



const [loading,setLoading]=useState(false);


const [status,setStatus]=useState("");





function handleChange(e){


setFormData({

...formData,

[e.target.name]:e.target.value

});


}








async function handleSubmit(e){


e.preventDefault();



try{


setLoading(true);

setStatus("");



await sendMessage(formData);



setStatus(
"Message sent successfully 🚀"
);



setFormData({

name:"",

email:"",

subject:"",

message:""

});



}catch(error){


console.error(error);


setStatus(
"Failed to send message"
);



}
finally{


setLoading(false);


}



}









return (



<div

className="
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
mb-8
text-2xl
font-bold
text-white
"

>

Send Me a Message

</h3>







<form

onSubmit={handleSubmit}

className="
space-y-6
"

>







<input


name="name"


value={formData.name}


onChange={handleChange}


type="text"


placeholder="Your Name"


required


className="
w-full
rounded-xl
border
border-white/10
bg-slate-900/60
px-5
py-4
text-white
outline-none
transition
focus:border-cyan-400
"

/>









<input


name="email"


value={formData.email}


onChange={handleChange}


type="email"


placeholder="Your Email"


required


className="
w-full
rounded-xl
border
border-white/10
bg-slate-900/60
px-5
py-4
text-white
outline-none
transition
focus:border-cyan-400
"

/>









<input


name="subject"


value={formData.subject}


onChange={handleChange}


type="text"


placeholder="Subject"


required


className="
w-full
rounded-xl
border
border-white/10
bg-slate-900/60
px-5
py-4
text-white
outline-none
transition
focus:border-cyan-400
"

/>









<textarea


name="message"


value={formData.message}


onChange={handleChange}


rows="6"


placeholder="Write your message..."


required


className="
w-full
rounded-xl
border
border-white/10
bg-slate-900/60
px-5
py-4
text-white
outline-none
transition
focus:border-cyan-400
"

/>









<button


disabled={loading}


type="submit"


className="
w-full
rounded-xl
bg-gradient-to-r
from-cyan-500
to-blue-600
py-4
font-semibold
text-white
transition
hover:scale-[1.02]
disabled:opacity-50
"

>


{

loading

?

"Sending..."

:

"Send Message"

}


</button>








{

status && (


<p

className="
mt-4
text-center
text-cyan-400
"

>

{status}

</p>


)

}



</form>





</div>



);


}



export default ContactForm;
