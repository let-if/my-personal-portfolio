import prisma from "../config/db.js";



export async function getPortfolioContext(){


const profile =
await prisma.adminProfile.findFirst({

select:{

name:true,

title:true,

bio:true,

github:true,

linkedin:true,

cv:true,

skills:true

}

});




const projects =
await prisma.project.findMany({

orderBy:{
createdAt:"desc"
},

select:{

title:true,

description:true,

technologies:true,

github:true,

demo:true,

featured:true

}

});




return {

profile,

projects

};


}