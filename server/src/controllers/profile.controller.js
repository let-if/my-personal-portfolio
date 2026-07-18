// // // import prisma from "../config/db.js";



// // // export async function getPublicProfile(req,res,next){

// // // try{


// // // const profile =

// // // await prisma.adminProfile.findFirst({

// // // select:{


// // // name:true,

// // // title:true,

// // // bio:true,

// // // github:true,

// // // linkedin:true,

// // // cv:true,

// // // skills:true


// // // }

// // // });




// // // res.json({

// // // success:true,

// // // data:profile

// // // });



// // // }

// // // catch(error){

// // // next(error);

// // // }


// // // }
// // import prisma from "../config/db.js";



// // // GET PUBLIC PROFILE

// // export async function getPublicProfile(req,res,next){

// // try{


// // const profile =
// // await prisma.profile.findFirst();


// // res.json({

// // success:true,

// // data:profile

// // });


// // }
// // catch(error){

// // next(error);

// // }

// // }






// // // UPDATE PROFILE ADMIN

// // export async function updateProfile(req,res,next){

// // try{


// // const {

// // name,

// // role,

// // bio,

// // github,

// // linkedin

// // }=req.body;



// // const image =
// // req.file
// // ?
// // `/uploads/profile/${req.file.filename}`
// // :
// // undefined;



// // const existing =
// // await prisma.profile.findFirst();




// // let profile;



// // if(existing){


// // profile =
// // await prisma.profile.update({

// // where:{
// // id:existing.id
// // },

// // data:{


// // name,

// // role,

// // bio,

// // github,

// // linkedin,

// // ...(image && {
// // image
// // })

// // }


// // });


// // }
// // else{


// // profile =
// // await prisma.profile.create({

// // data:{


// // name,

// // role,

// // bio,

// // github,

// // linkedin,

// // image


// // }


// // });


// // }





// // res.json({

// // success:true,

// // message:"Profile updated successfully",

// // data:profile

// // });



// // }
// // catch(error){

// // next(error);

// // }


// // }
// import prisma from "../config/db.js";



// // GET PUBLIC PROFILE

// export async function getPublicProfile(req,res,next){

// try{


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



// res.json({

// success:true,

// data:profile

// });



// }

// catch(error){

// next(error);

// }


// }







// // UPDATE PROFILE ADMIN

// export async function updateProfile(req,res,next){

// try{


// const {

// name,

// title,

// bio,

// github,

// linkedin,

// skills

// }=req.body;



// const cv =
// req.file
// ?
// `/uploads/profile/${req.file.filename}`
// :
// undefined;



// const existing =
// await prisma.adminProfile.findFirst();




// let profile;



// if(existing){


// profile =
// await prisma.adminProfile.update({

// where:{
// id:existing.id
// },


// data:{


// name,

// title,

// bio,

// github,

// linkedin,


// skills:
// skills
// ?
// JSON.parse(skills)
// :
// existing.skills,


// ...(cv && {
// cv
// })


// }


// });


// }

// else{


// profile =
// await prisma.adminProfile.create({

// data:{


// name,

// title,

// bio,

// github,

// linkedin,

// cv,

// skills:
// skills
// ?
// JSON.parse(skills)
// :
// []


// }


// });


// }





// res.json({

// success:true,

// message:"Profile updated successfully",

// data:profile

// });



// }

// catch(error){

// next(error);

// }


// }import prisma from "../config/db.js";



// GET PUBLIC PROFILE
import prisma from "../config/db.js";



// =====================================
// GET PUBLIC PROFILE
// =====================================

export async function getPublicProfile(req,res,next){

try{


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



res.json({

success:true,

data:profile

});


}

catch(error){

next(error);

}


}







// =====================================
// UPDATE PROFILE
// =====================================

export async function updateProfile(req,res,next){

try{


const {

name,

title,

bio,

github,

linkedin,

skills

}=req.body;



// CV upload

const cv =
req.file
?
`/uploads/profile/${req.file.filename}`
:
undefined;





const existing =
await prisma.adminProfile.findFirst();



const data={


name,

title,

bio,

github,

linkedin,


skills:

skills

?

JSON.parse(skills)

:

existing?.skills || []


};




// keep old CV if no new upload

if(cv){

data.cv=cv;

}






let profile;



if(existing){


profile =

await prisma.adminProfile.update({

where:{

id:existing.id

},

data


});


}

else{


profile =

await prisma.adminProfile.create({

data


});


}





res.json({

success:true,

message:"Profile updated successfully",

data:profile

});


}

catch(error){

console.log(error);

next(error);

}


}