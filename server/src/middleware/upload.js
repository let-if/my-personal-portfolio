// import multer from "multer";
// import path from "path";


// const storage =
// multer.diskStorage({

// destination:(req,file,cb)=>{

// cb(
// null,
// "uploads/projects"
// );

// },


// filename:(req,file,cb)=>{

// const unique =
// Date.now()
// +
// "-"
// +
// file.originalname;


// cb(
// null,
// unique
// );

// }

// });



// const upload =
// multer({

// storage,

// limits:{

// fileSize:
// 5 * 1024 * 1024

// },


// fileFilter:(req,file,cb)=>{


// const allowed =
// [
// "image/jpeg",
// "image/png",
// "image/webp"
// ];


// if(
// allowed.includes(file.mimetype)
// ){

// cb(null,true);

// }else{

// cb(
// new Error("Only images allowed")
// );

// }


// }

// });


// export default upload;
import multer from "multer";
import path from "path";
import fs from "fs";



// =====================================
// CREATE STORAGE
// =====================================

const storage = multer.diskStorage({



destination:(req,file,cb)=>{


let folder;



// CV upload

if(file.fieldname === "cv"){

folder = "uploads/profile";

}



// Project images

else{

folder = "uploads/projects";

}





// Create folder if it does not exist

if(!fs.existsSync(folder)){


fs.mkdirSync(folder,{

recursive:true

});


}





cb(

null,

folder

);



},






filename:(req,file,cb)=>{



const uniqueName =

Date.now()

+

"-"

+

file.originalname.replace(/\s+/g,"-");





cb(

null,

uniqueName

);



}



});







// =====================================
// FILE FILTER
// =====================================


const fileFilter=(req,file,cb)=>{



const imageTypes=[

"image/jpeg",

"image/png",

"image/webp"

];



const pdfTypes=[

"application/pdf"

];





// Project image upload

if(

file.fieldname !== "cv"

&&

imageTypes.includes(file.mimetype)

){


cb(null,true);


}





// CV upload

else if(

file.fieldname === "cv"

&&

pdfTypes.includes(file.mimetype)

){


cb(null,true);


}





else{


cb(

new Error(

"Only images or PDF files allowed"

)

);


}



};







// =====================================
// MULTER CONFIG
// =====================================


const upload = multer({


storage,



limits:{


fileSize:

5 * 1024 * 1024


},



fileFilter



});






export default upload;