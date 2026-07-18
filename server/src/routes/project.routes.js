import express from "express";

import upload from "../middleware/upload.js";

import {

createProject,
getProjects,
getProject,
updateProject,
deleteProject

}

from "../controllers/project.controller.js";


const router=express.Router();



router.get("/",getProjects);


router.post(
"/",
upload.single("image"),
createProject
);



router.get("/:id",getProject);


router.put("/:id",updateProject);


router.delete("/:id",deleteProject);



export default router;