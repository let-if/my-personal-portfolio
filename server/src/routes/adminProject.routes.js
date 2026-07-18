import express from "express";


import adminAuth 
from "../middleware/adminAuth.middleware.js";



import upload from "../middleware/upload.js";

import {

getProjects,

getProject,

createProject,

updateProject,

deleteProject

}
from "../controllers/project.controller.js";



const router = express.Router();




// GET ALL ADMIN PROJECTS

router.get(
"/",
adminAuth,
getProjects
);




// GET SINGLE PROJECT

router.get(
"/:id",
adminAuth,
getProject
);





// CREATE PROJECT

router.post(

"/",

adminAuth,

upload.single("image"),

createProject

);





// UPDATE PROJECT

router.put(

"/:id",

adminAuth,

upload.single("image"),

updateProject

);





// DELETE PROJECT

router.delete(

"/:id",

adminAuth,

deleteProject

);





export default router;