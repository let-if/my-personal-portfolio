import API from "../api/axios";



export async function adminLogin(data){


const response =
await API.post(
"/admin/login",
data
);


return response.data;


}



export async function getAdminProfile(){


const response =
await API.get(
"/admin/profile"
);


return response.data;


}