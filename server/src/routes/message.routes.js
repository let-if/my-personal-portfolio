import express from "express";


import {

getMessages,

updateMessageStatus

}

from "../controllers/message.controller.js";


import {
protect
}
from "../middleware/auth.js";


const router =
express.Router();



router.get(

"/",

protect,

getMessages

);



router.put(

"/:id/status",

protect,

updateMessageStatus

);



export default router;