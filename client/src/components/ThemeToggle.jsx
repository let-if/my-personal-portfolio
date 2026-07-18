import {
  FaMoon,
  FaSun
} from "react-icons/fa";


import {
  useTheme
} from "../context/ThemeContext";



function ThemeToggle(){


const {
  theme,
  toggleTheme
}=useTheme();




return(

<button

onClick={toggleTheme}

className="
flex
h-10
w-10
items-center
justify-center
rounded-full
border
border-white/20
bg-white/10
text-white
backdrop-blur-xl
transition
hover:scale-110
"

title="Change theme"

>


{
theme==="dark"

?

<FaSun/>

:

<FaMoon/>

}


</button>


);


}


export default ThemeToggle;