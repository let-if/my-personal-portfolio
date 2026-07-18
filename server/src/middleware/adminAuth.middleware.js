// import jwt from "jsonwebtoken";



// export default function adminAuth(req,res,next){


// try{


// const header =
// req.headers.authorization;



// if(!header){

// return res.status(401).json({

// message:"No token provided"

// });

// }



// const token =
// header.split(" ")[1];



// const decoded =
// jwt.verify(

// token,

// process.env.JWT_SECRET

// );



// if(decoded.role !== "admin"){


// return res.status(403).json({

// message:"Admin access required"

// });


// }



// req.admin = decoded;


// next();



// }
// catch(error){


// return res.status(401).json({

// message:"Invalid token"

// });


// }


// }
import jwt from "jsonwebtoken";


export default function adminAuth(req,res,next){


try{


const header =
req.headers.authorization;



if(!header){

return res.status(401).json({

message:"No token provided"

});

}



const token =
header.split(" ")[1];



const decoded =
jwt.verify(
token,
process.env.JWT_SECRET
);



req.admin = decoded;



next();



}
catch(error){


return res.status(401).json({

message:"Invalid token"

});


}


}