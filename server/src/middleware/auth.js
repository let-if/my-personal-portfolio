import jwt from "jsonwebtoken";
import { env } from "../config/env.js";


export function protect(req,res,next){

try{


const header =
req.headers.authorization;



if(!header){

return res.status(401).json({

success:false,

message:"No token provided"

});

}



const token =
header.split(" ")[1];



const decoded =
jwt.verify(
token,
env.JWT_SECRET
);



req.admin = decoded;



next();



}catch(error){


return res.status(401).json({

success:false,

message:"Invalid token"

});


}


}