import prisma from "../config/db.js";



export async function getMessages(req,res,next){

try{


const messages =
await prisma.contactMessage.findMany({

orderBy:{
createdAt:"desc"
}

});


res.json({

success:true,

data:messages

});


}catch(error){

next(error);

}

}





export async function updateMessageStatus(req,res,next){

try{


const message =
await prisma.contactMessage.update({

where:{

id:req.params.id

},

data:{

status:req.body.status

}

});


res.json({

success:true,

data:message

});


}catch(error){

next(error);

}

}