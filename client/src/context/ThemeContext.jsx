import {
createContext,
useContext,
useEffect,
useState
}
from "react";



const ThemeContext =
createContext();



export function ThemeProvider({children}){


const [theme,setTheme]=useState(

localStorage.getItem("theme")
||
"dark"

);





useEffect(()=>{


const html =
document.documentElement;



if(theme==="dark"){

html.classList.add("dark");

}

else{

html.classList.remove("dark");

}



localStorage.setItem(
"theme",
theme
);



},[theme]);







function toggleTheme(){


setTheme(

current=>

current==="dark"
?
"light"
:
"dark"

);


}




return(

<ThemeContext.Provider

value={{

theme,

toggleTheme

}}

>


{children}


</ThemeContext.Provider>


);


}






export function useTheme(){

return useContext(ThemeContext);

}