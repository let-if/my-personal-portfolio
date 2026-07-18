import prisma from "../config/db.js";




// GET PROFILE

export async function getProfile(req,res,next){

try{


const profile =

await prisma.adminProfile.findFirst();



res.json({

success:true,

data:profile

});


}

catch(error){

next(error);

}

}









// UPDATE PROFILE

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





const cv =

req.file

?

`/uploads/cv/${req.file.filename}`

:

undefined;







const profile =

await prisma.adminProfile.upsert({

where:{

id:req.body.id || ""

},


update:{


name,

title,

bio,

github,

linkedin,

skills:JSON.parse(skills),

...(cv && {cv})

},


create:{


name,

title,

bio,

github,

linkedin,

cv,

skills:JSON.parse(skills)

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