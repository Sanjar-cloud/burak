import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

router .post("/login", memberController.login); //call from controller


router.post("/signup", memberController.signup);
 

export default router;
