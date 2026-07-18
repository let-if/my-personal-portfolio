// import API from "../api/axios";



// export async function getPublicProfile(){


// const response =
// await API.get(
// "/profile"
// );


// return response.data.data;


// }
import API from "../api/axios";



export async function getPublicProfile(){

const response =
await API.get(
"/profile"
);


return response.data.data;

}




export async function updateProfile(data){

const response =
await API.put(

"/profile",

data,

{
headers:{
"Content-Type":"multipart/form-data"
}
}

);


return response.data;

}