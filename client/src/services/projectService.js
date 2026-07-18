import API from "../api/axios";



export async function getProjects(){


const response =
await API.get(
"/projects"
);


return response.data.data;


}



export async function getProject(id){


const response =
await API.get(
`/projects/${id}`
);


return response.data.data;


}