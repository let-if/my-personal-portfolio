import prisma from "../config/db.js";



// GET ALL CONTACT MESSAGES

export async function getMessages(req,res,next){

try{


const messages = await prisma.contactMessage.findMany({

orderBy:{
createdAt:"desc"
}

});



res.json({

success:true,

data:messages

});


}

catch(error){

next(error);

}


}








// GET SINGLE MESSAGE

export async function getMessage(req,res,next){

try{


const message = await prisma.contactMessage.findUnique({

where:{
id:req.params.id
}

});



res.json({

success:true,

data:message

});


}

catch(error){

next(error);

}


}









// MARK MESSAGE READ

export async function markRead(req,res,next){

try{


const message = await prisma.contactMessage.update({

where:{
id:req.params.id
},


data:{

status:"READ"

}


});




res.json({

success:true,

data:message

});


}

catch(error){

next(error);

}


}









// DELETE MESSAGE

export async function deleteMessage(req,res,next){

try{


await prisma.contactMessage.delete({

where:{
id:req.params.id
}

});



res.json({

success:true,

message:"Message deleted"

});


}

catch(error){

next(error);

}


}