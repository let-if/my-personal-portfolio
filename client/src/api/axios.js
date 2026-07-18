
// import axios from "axios";


// const API = axios.create({

// baseURL:"http://localhost:5000/api",

// headers:{
// "Content-Type":"application/json"
// }

// });



// API.interceptors.request.use(

// (config)=>{


// const token =
// localStorage.getItem("adminToken");



// if(token){

// config.headers.Authorization =
// `Bearer ${token}`;

// }



// return config;


// },


// (error)=>{

// return Promise.reject(error);

// }

// );



// export default API;
import axios from "axios";


const API = axios.create({

  baseURL: import.meta.env.VITE_API_URL,

  headers:{
    "Content-Type":"application/json"
  },

  withCredentials:true

});



API.interceptors.request.use(

(config)=>{


const token =
localStorage.getItem("adminToken");


if(token){

config.headers.Authorization =
`Bearer ${token}`;

}


return config;


},


(error)=>{

return Promise.reject(error);

}

);


export default API;