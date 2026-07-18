import prisma from "../config/db.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";



export async function login(req,res,next){

try{


const {
email,
password
}=req.body;



const admin =
await prisma.admin.findUnique({

where:{
email
}

});



if(!admin){

return res.status(401).json({

success:false,

message:"Invalid credentials"

});

}



const valid =
await bcrypt.compare(
password,
admin.password
);



if(!valid){

return res.status(401).json({

success:false,

message:"Invalid credentials"

});

}



const token =
generateToken(admin);



res.json({

success:true,

token,

admin:{

id:admin.id,

name:admin.name,

email:admin.email

}

});


}catch(error){

next(error);

}

}