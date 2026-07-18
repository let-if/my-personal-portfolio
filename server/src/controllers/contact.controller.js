// import prisma from "../config/db.js";
// import { sendContactEmail } from "../services/mail.service.js";



// export async function createContact(req,res,next){

// try{


// const {
// name,
// email,
// subject,
// message
// }=req.body;



// if(
// !name ||
// !email ||
// !subject ||
// !message
// ){

// return res.status(400).json({

// success:false,

// message:"All fields are required"

// });

// }



// const contact =
// await prisma.contactMessage.create({

// data:{
// name,
// email,
// subject,
// message
// }

// });



// try{

// await sendContactEmail({
// name,
// email,
// subject,
// message
// });


// }catch(error){

// console.log(
// "Email sending failed:",
// error.message
// );

// }



// res.status(201).json({

// success:true,

// message:"Message sent successfully",

// data:contact

// });



// }catch(error){

// next(error);

// }


// }
import prisma from "../config/db.js";
import { sendContactEmail } from "../services/mail.service.js";



export async function createContact(req,res,next){

try{


let {
name,
email,
subject,
message
}=req.body;



// Clean input

name = name?.trim();

email = email?.trim().toLowerCase();

subject = subject?.trim();

message = message?.trim();





// Validation

if(
!name ||
!email ||
!subject ||
!message
){

return res.status(400).json({

success:false,

message:"All fields are required"

});

}







// Save message

const contact =

await prisma.contactMessage.create({

data:{

name,

email,

subject,

message

}

});









// Send notification email

try{


await sendContactEmail({

name,

email,

subject,

message

});


}

catch(error){


console.log(

"Email sending failed:",

error.message

);


}









res.status(201).json({

success:true,

message:"Message sent successfully",

data:contact

});





}

catch(error){

next(error);

}


}