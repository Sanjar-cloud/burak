import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

/** Member **/
router .post("/member/login", memberController.login); //call from controller
router.post("/member/signup", memberController.signup);
router.post("/member/logout", 
    memberController.verifyAuth, 
    memberController.logout
);
router.get("/member/detail", memberController.verifyAuth);

/**  Producr **/


/** Order **/
 

export default router;
