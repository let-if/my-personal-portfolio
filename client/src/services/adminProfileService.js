// import API from "../api/axios";




// // GET PROFILE

// export async function getAdminProfile(){


// const response = await API.get(
// "/admin/profile"
// );


// return response.data.data;

// }








// // UPDATE PROFILE

// export async function updateAdminProfile(data){


// const response = await API.put(

// "/admin/profile",

// data,

// {
// headers:{
// "Content-Type":"multipart/form-data"
// }
// }

// );


// return response.data.data;


// }
import API from "../api/axios";



export async function getAdminProfile(){

const response =
await API.get("/profile");


return response.data.data;

}





export async function updateAdminProfile(data){

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