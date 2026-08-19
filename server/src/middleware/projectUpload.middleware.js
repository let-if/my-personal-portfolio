// import multer from "multer";
// import path from "path";
// import fs from "fs";


// const uploadPath =
// "uploads/projects";


// // create folder automatically
// if(!fs.existsSync(uploadPath)){

// fs.mkdirSync(
// uploadPath,
// {
// recursive:true
// }
// );

// }



// const storage = multer.diskStorage({

// destination:(req,file,cb)=>{

// cb(
// null,
// uploadPath
// );

// },


// filename:(req,file,cb)=>{


// const uniqueName =
// Date.now()
// +
// path.extname(file.originalname);



// cb(
// null,
// uniqueName
// );


// }


// });



// const upload = multer({

// storage

// });


// export default upload;
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

// Configure Cloudinary storage engine so it works smoothly on Vercel serverless
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "portfolio-projects", // Folder name inside your Cloudinary account
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

const upload = multer({ storage });

export default upload;