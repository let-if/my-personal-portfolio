// import express from "express";


// import {

// getPublicProfile,

// updateProfile

// }

// from "../controllers/profile.controller.js";


// import adminAuth from "../middleware/adminAuth.middleware.js";
// import upload from "../middleware/upload.js";




// const router =
// express.Router();




// // Public

// router.get(
// "/",
// getPublicProfile
// );




// // Admin update

// router.put(

// "/",

// adminAuth,

// upload.single("image"),

// updateProfile

// );



// export default router;import express from "express";
import express from "express";

import {
    getPublicProfile,
    updateProfile
} from "../controllers/profile.controller.js";

import adminAuth from "../middleware/adminAuth.middleware.js";
import upload from "../middleware/upload.js";


const router = express.Router();


// PUBLIC PROFILE
router.get(
    "/",
    getPublicProfile
);


// ADMIN UPDATE PROFILE
router.put(
"/",
adminAuth,
upload.single("cv"),
updateProfile
);


export default router;