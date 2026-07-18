
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FaDownload } from "react-icons/fa";

// import Logo from "./Logo";
// import NavLinks from "./NavLinks";
// import MobileMenu from "./MobileMenu";

// import { CV_URL } from "../../constants/cv";


// function Navbar() {


//   const [scrolled, setScrolled] = useState(false);



//   useEffect(() => {

//     const handleScroll = () => {

//       setScrolled(window.scrollY > 30);

//     };


//     window.addEventListener(
//       "scroll",
//       handleScroll
//     );


//     return () =>
//       window.removeEventListener(
//         "scroll",
//         handleScroll
//       );


//   }, []);





//   return (


//     <motion.header

//       initial={{
//         y:-80
//       }}

//       animate={{
//         y:0
//       }}

//       transition={{
//         duration:0.6
//       }}


//       className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "border-b border-white/10 bg-slate-950/90 shadow-xl backdrop-blur-2xl"
//           : "bg-transparent"
//       }`}

//     >



//       <div className="
//         mx-auto
//         flex
//         h-20
//         max-w-7xl
//         items-center
//         justify-between
//         px-6
//         lg:px-8
//       ">


//         {/* Logo */}

//         <Logo />




//         {/* Desktop Navigation */}

//         <div className="
//           hidden
//           items-center
//           gap-8
//           lg:flex
//         ">


//           <NavLinks />



//           {/* CV Button */}

//           <a

//             href={CV_URL}

//             download

//             className="
//               flex
//               items-center
//               gap-2
//               rounded-xl
//               bg-gradient-to-r
//               from-cyan-500
//               to-blue-600
//               px-5
//               py-2.5
//               text-sm
//               font-semibold
//               text-white
//               transition
//               hover:scale-105
//               hover:shadow-lg
//               hover:shadow-cyan-500/30
//             "

//           >

//             <FaDownload />

//             CV


//           </a>



//         </div>






//         {/* Mobile */}

//         <div className="
//           flex
//           items-center
//           gap-4
//           lg:hidden
//         ">



//           {/* Mobile CV */}

//           <a

//             href={CV_URL}

//             download

//             className="
//               rounded-lg
//               bg-cyan-500
//               px-3
//               py-2
//               text-sm
//               font-semibold
//               text-white
//             "

//           >

//             CV

//           </a>




//           <MobileMenu />



//         </div>




//       </div>



//     </motion.header>


//   );

// }


// export default Navbar;
import { 
  useEffect, 
  useState 
} from "react";


import { 
  motion 
} from "framer-motion";


import { 
  FaDownload 
} from "react-icons/fa";


import ThemeToggle from "../ThemeToggle";


import Logo from "./Logo";

import NavLinks from "./NavLinks";

import MobileMenu from "./MobileMenu";


import { CV_URL } from "../../constants/cv";





function Navbar(){


const [scrolled,setScrolled]=useState(false);




useEffect(()=>{


const handleScroll=()=>{


setScrolled(
window.scrollY > 30
);


};



window.addEventListener(
"scroll",
handleScroll
);



return()=>{


window.removeEventListener(
"scroll",
handleScroll
);


};


},[]);







return(



<motion.header


initial={{
y:-80
}}


animate={{
y:0
}}


transition={{
duration:.6
}}



className={`
fixed
inset-x-0
top-0
z-50
transition-all
duration-300

${
scrolled

?

`
border-b
border-white/10
bg-slate-950/90
shadow-xl
backdrop-blur-2xl
`

:

`
bg-transparent
`

}

`}


>



<div


className="
mx-auto
flex
h-20
max-w-7xl
items-center
justify-between
px-6
lg:px-8
"


>



{/* LOGO */}

<Logo/>






{/* DESKTOP */}



<div


className="
hidden
items-center
gap-8
lg:flex
"


>


<NavLinks/>





{/* THEME BUTTON */}

<ThemeToggle/>






{/* CV BUTTON */}


<a


href={CV_URL}


download


className="
flex
items-center
gap-2
rounded-xl
bg-gradient-to-r
from-cyan-500
to-blue-600
px-5
py-2.5
text-sm
font-semibold
text-white
transition
hover:scale-105
hover:shadow-lg
hover:shadow-cyan-500/30
"


>


<FaDownload/>

CV


</a>





</div>









{/* MOBILE */}



<div


className="
flex
items-center
gap-4
lg:hidden
"


>


<ThemeToggle/>





<a


href={CV_URL}


download


className="
rounded-lg
bg-cyan-500
px-3
py-2
text-sm
font-semibold
text-white
"


>

CV


</a>





<MobileMenu/>


</div>





</div>




</motion.header>


);


}



export default Navbar;