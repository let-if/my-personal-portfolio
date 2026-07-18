import {
createVisitor,
getVisitorStats
}
from "../services/analytics.service.js";



export async function trackVisit(req,res,next){

try{


const visitor =
await createVisitor({

ipAddress:
req.ip,

userAgent:
req.headers["user-agent"],

page:
req.body.page || "/"

});



res.status(201).json({

success:true,

data:visitor

});


}catch(error){

next(error);

}

}




export async function statistics(req,res,next){

try{


const data =
await getVisitorStats();



res.json({

success:true,

data

});


}catch(error){

next(error);

}

}