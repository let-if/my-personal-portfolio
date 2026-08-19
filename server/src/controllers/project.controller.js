// import prisma from "../config/db.js";

// import { uploadToCloudinary } from "../utils/uploadCloudinary.js";

// // GET ALL

// export async function getProjects(req,res,next){

// try{


// const projects =
// await prisma.project.findMany({

// orderBy:{
// createdAt:"desc"
// }

// });


// res.json({

// success:true,

// data:projects

// });


// }catch(error){

// next(error);

// }

// }



// // GET SINGLE

// export async function getProject(req,res,next){

// try{


// const project =
// await prisma.project.findUnique({

// where:{

// id:req.params.id

// }

// });


// res.json({

// success:true,

// data:project

// });


// }catch(error){

// next(error);

// }

// }



// // CREATE
// export async function createProject(req,res,next){

// try{


// const {

// title,

// description,

// github,

// demo,

// featured,

// technologies

// }=req.body;



// let image = null;



// if(req.file){


// const uploaded = await uploadToCloudinary(

// req.file,

// "portfolio/projects"

// );


// image = uploaded.secure_url;


// }



// const project =
// await prisma.project.create({

// data:{


// title,

// description,

// image,

// github,

// demo,


// featured:
// featured==="true",


// technologies:
// JSON.parse(technologies)


// }


// });



// res.status(201).json({

// success:true,

// data:project

// });


// }

// catch(error){

// next(error);

// }


// }
// // export async function createProject(req,res,next){

// // try{


// // const {

// // title,

// // description,

// // github,

// // demo,

// // featured,

// // technologies

// // }=req.body;



// // const image =
// // req.file
// // ?
// // `/uploads/projects/${req.file.filename}`
// // :
// // null;



// // const project =
// // await prisma.project.create({

// // data:{


// // title,


// // description,


// // image,


// // github,


// // demo,


// // featured:
// // featured==="true",


// // technologies:
// // JSON.parse(technologies)


// // }

// // });



// // res.status(201).json({

// // success:true,

// // data:project

// // });



// // }catch(error){

// // next(error);

// // }

// // }




// // // UPDATE

// // export async function updateProject(req,res,next){

// // try{


// // const project =
// // await prisma.project.update({

// // where:{

// // id:req.params.id

// // },


// // data:req.body


// // });



// // res.json({

// // success:true,

// // data:project

// // });


// // }catch(error){

// // next(error);

// // }

// // }


// // =================================
// // UPDATE PROJECT
// // =================================

// // export async function updateProject(req,res,next){

// // try{


// // const {

// // title,

// // description,

// // github,

// // demo,

// // featured,

// // technologies

// // }=req.body;



// // const data = {

// // title,

// // description,

// // github,

// // demo,


// // featured:
// // featured==="true",


// // technologies:
// // technologies
// // ?
// // JSON.parse(technologies)
// // :
// // undefined

// // };



// // // if new image uploaded

// // if(req.file){

// // data.image =
// // `/uploads/projects/${req.file.filename}`;

// // }




// // const project =
// // await prisma.project.update({

// // where:{

// // id:req.params.id

// // },


// // data

// // });



// // res.json({

// // success:true,

// // data:project

// // });



// // }catch(error){

// // next(error);

// // }

// // // }
// // export async function updateProject(req,res,next){

// // try{


// // const {

// // title,

// // description,

// // github,

// // demo,

// // featured,

// // technologies

// // }=req.body;




// // const data={

// // title,

// // description,

// // github,

// // demo,

// // featured:
// // featured==="true",

// // technologies:
// // JSON.parse(technologies)

// // };




// // if(req.file){

// // data.image =
// // `/uploads/projects/${req.file.filename}`;

// // }




// // const project =

// // await prisma.project.update({

// // where:{

// // id:req.params.id

// // },

// // data

// // });



// // res.json({

// // success:true,

// // data:project

// // });



// // }

// // catch(error){

// // next(error);

// // }


// // }
// export async function updateProject(req,res,next){

// try{


// const {

// title,

// description,

// github,

// demo,

// featured,

// technologies

// }=req.body;



// const data={

// title,

// description,

// github,

// demo,

// featured:
// featured==="true",

// technologies:
// technologies
// ?
// JSON.parse(technologies)
// :
// undefined

// };



// if(req.file){


// const uploaded =
// await uploadToCloudinary(

// req.file,

// "portfolio/projects"

// );



// data.image =
// uploaded.secure_url;


// }



// const project =
// await prisma.project.update({

// where:{

// id:req.params.id

// },


// data


// });



// res.json({

// success:true,

// data:project

// });


// }

// catch(error){

// next(error);

// }


// }
// // DELETE

// export async function deleteProject(req,res,next){

// try{


// await prisma.project.delete({

// where:{

// id:req.params.id

// }

// });


// res.json({

// success:true,

// message:
// "Project deleted"

// });


// }catch(error){

// next(error);

// }

// }
import prisma from "../config/db.js";

// GET ALL
export async function getProjects(req, res, next) {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });

    res.json({
      success: true,
      data: projects
    });
  } catch (error) {
    next(error);
  }
}

// GET SINGLE
export async function getProject(req, res, next) {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: req.params.id
      }
    });

    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    next(error);
  }
}

// CREATE PROJECT
export async function createProject(req, res, next) {
  try {
    const {
      title,
      description,
      github,
      demo,
      featured,
      technologies
    } = req.body;

    // multer-storage-cloudinary automatically uploads the file and provides the URL in req.file.path
    const image = req.file ? req.file.path : null;

    const project = await prisma.project.create({
      data: {
        title,
        description,
        image,
        github,
        demo,
        featured: featured === "true" || featured === true,
        technologies: technologies ? JSON.parse(technologies) : []
      }
    });

    res.status(201).json({
      success: true,
      data: project
    });
  } catch (error) {
    next(error);
  }
}

// UPDATE PROJECT
export async function updateProject(req, res, next) {
  try {
    const {
      title,
      description,
      github,
      demo,
      featured,
      technologies
    } = req.body;

    const data = {
      title,
      description,
      github,
      demo,
      featured: featured === "true" || featured === true,
      technologies: technologies ? JSON.parse(technologies) : undefined
    };

    // If a new image was uploaded, assign its secure cloud URL directly
    if (req.file) {
      data.image = req.file.path;
    }

    const project = await prisma.project.update({
      where: {
        id: req.params.id
      },
      data
    });

    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    next(error);
  }
}

// DELETE PROJECT
export async function deleteProject(req, res, next) {
  try {
    await prisma.project.delete({
      where: {
        id: req.params.id
      }
    });

    res.json({
      success: true,
      message: "Project deleted"
    });
  } catch (error) {
    next(error);
  }
}