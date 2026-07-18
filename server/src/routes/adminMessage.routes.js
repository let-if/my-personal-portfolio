import express from "express";


import adminAuth from "../middleware/adminAuth.middleware.js";


import {

getMessages,

getMessage,

markRead,

deleteMessage

}

from "../controllers/adminMessage.controller.js";



const router =
express.Router();



router.get(
"/",
adminAuth,
getMessages
);



router.get(
"/:id",
adminAuth,
getMessage
);



router.put(
"/:id/read",
adminAuth,
markRead
);



router.delete(
"/:id",
adminAuth,
deleteMessage
);



export default router;