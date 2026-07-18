import API from "../api/axios";



export async function getMessages(){


const response =
await API.get(
"/admin/messages"
);


return response.data.data;


}






export async function deleteMessage(id){


const response =
await API.delete(

`/admin/messages/${id}`

);


return response.data;


}





export async function markRead(id){


const response =
await API.put(

`/admin/messages/${id}/read`

);


return response.data;


}