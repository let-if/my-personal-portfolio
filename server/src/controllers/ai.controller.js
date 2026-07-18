
// import {
// generateAIResponse
// }
// from "../services/ai.service.js";



// export async function chatWithAI(req,res,next){

// try{


// const {
// message
// }=req.body;



// if(!message){

// return res.status(400).json({

// success:false,

// message:"Message is required"

// });

// }



// const answer =
// await generateAIResponse(message);



// res.json({

// success:true,

// answer

// });


// }

// catch(error){

// next(error);

// }


// }
import {
generateAIResponse
}
from "../services/ai.service.js";


export async function chatWithAI(req,res,next){

try{


const {
message
}=req.body;


if(!message){

return res.status(400).json({

success:false,

message:"Message is required"

});

}


const reply =
await generateAIResponse(message);



res.json({

success:true,

reply

});


}

catch(error){

next(error);

}

}