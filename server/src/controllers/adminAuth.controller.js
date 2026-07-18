import prisma from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export async function adminLogin(req,res,next){

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

message:"Invalid email or password"

});

}





const isMatch =
await bcrypt.compare(
password,
admin.password
);



if(!isMatch){

return res.status(401).json({

success:false,

message:"Invalid email or password"

});

}




const token =
jwt.sign(

{
id:admin.id,
email:admin.email,
role:"admin"

},

process.env.JWT_SECRET,

{
expiresIn:"7d"
}

);





res.json({

success:true,

token,

admin:{

id:admin.id,

name:admin.name,

email:admin.email

}

});



}
catch(error){

next(error);

}


}






export async function getAdminProfile(req,res){


res.json({

success:true,

admin:req.admin

});


}