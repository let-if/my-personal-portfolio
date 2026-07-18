import express from "express";

import {
profile,
repos,
languages,
stats
}
from "../controllers/github.controller.js";


const router =
express.Router();



router.get(
"/profile",
profile
);


router.get(
"/repos",
repos
);


router.get(
"/languages",
languages
);


router.get(
"/stats",
stats
);



export default router;