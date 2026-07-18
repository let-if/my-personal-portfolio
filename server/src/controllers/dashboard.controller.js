import prisma from "../config/db.js";


export async function getDashboardStats(req,res,next){

try{


const [

projects,

messages,

visitors

]=await Promise.all([


prisma.project.count(),


prisma.contactMessage.count(),


prisma.visitor.count()


]);



const unreadMessages =
await prisma.contactMessage.count({

where:{

status:"NEW"

}

});



res.json({

success:true,


data:{


totalProjects:projects,


totalMessages:messages,


totalVisitors:visitors,


unreadMessages


}


});


}catch(error){

next(error);

}

}