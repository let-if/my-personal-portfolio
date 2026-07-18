import express from "express";


import {

trackVisit,

statistics

}
from "../controllers/analytics.controller.js";


const router =
express.Router();



router.post(
"/visit",
trackVisit
);



router.get(
"/stats",
statistics
);



export default router;