import API from "../api/axios";



// GET ADMIN PROJECTS

export async function getAdminProjects(){


const response =
await API.get(
"/admin/projects"
);


return response.data.data;


}




// CREATE PROJECT

export async function createProject(data){


const response =
await API.post(

"/admin/projects",

data,

{
headers:{
"Content-Type":"multipart/form-data"
}
}

);


return response.data;


}




// DELETE PROJECT

export async function deleteProject(id){


const response =
await API.delete(

`/admin/projects/${id}`

);


return response.data;


}




// UPDATE PROJECT

export async function updateProject(id,data){


const response =
await API.put(

`/admin/projects/${id}`,

data,

{
headers:{
"Content-Type":"multipart/form-data"
}
}

);


return response.data;


}