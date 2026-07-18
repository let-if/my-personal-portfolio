import express from "express";

import {
    adminLogin,
    getAdminProfile
}
from "../controllers/adminAuth.controller.js";


import adminAuth 
from "../middleware/adminAuth.middleware.js";



const router = express.Router();



// ADMIN LOGIN

router.post(
    "/login",
    adminLogin
);



// ADMIN PROFILE

router.get(
    "/profile",
    adminAuth,
    getAdminProfile
);



export default router;