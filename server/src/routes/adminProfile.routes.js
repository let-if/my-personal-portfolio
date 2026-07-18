import express from "express";


import adminAuth from "../middleware/adminAuth.middleware.js";


import uploadCV from "../middleware/uploadCV.js";


import {

getProfile,

updateProfile

}

from "../controllers/adminProfile.controller.js";




const router = express.Router();




router.get(

"/",

adminAuth,

getProfile

);




router.put(

"/",

adminAuth,

uploadCV.single("cv"),

updateProfile

);



export default router;