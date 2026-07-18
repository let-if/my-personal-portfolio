import API from "../api/axios";



export async function sendMessage(data){


const response =
await API.post(
"/contact",
data
);


return response.data;


}



export async function getContactInfo(){


const response =
await API.get(
"/contact/info"
);


return response.data.data;


}