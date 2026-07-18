// import prisma from "../config/db.js";



// export async function getPortfolioContext(){


// const profile =
// await prisma.adminProfile.findFirst({

// select:{

// name:true,

// title:true,

// bio:true,

// github:true,

// linkedin:true,

// cv:true,

// skills:true

// }

// });




// const projects =
// await prisma.project.findMany({

// orderBy:{
// createdAt:"desc"
// },

// select:{

// title:true,

// description:true,

// technologies:true,

// github:true,

// demo:true,

// featured:true

// }

// });




// return {

// profile,

// projects

// };


// }
import prisma from "../config/db.js";


export async function getPortfolioContext(){


const profile =
await prisma.admin.findFirst({

select:{

name:true,

email:true

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

profile:{

name: profile?.name || "Abdulletif",

bio:
"Software engineer building modern web applications using React, Node.js, PostgreSQL, Prisma, and cloud technologies.",

skills:[

"React",

"Node.js",

"Express",

"PostgreSQL",

"Prisma",

"JavaScript",

"Java",

"Python"

]

},

projects

};


}