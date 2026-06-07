import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

// Restaurant router
routerAdmin.get("/", restaurantController.goHome );

routerAdmin
.get("/login", restaurantController.getLogin)
.post("/login", restaurantController.processLogin);  //call from controller


routerAdmin
.get("/signup", restaurantController.getSignup)
.post("/signup", restaurantController.processSignup);

routerAdmin
.get("/logout", restaurantController.logout);

routerAdmin
.get("/check-me", restaurantController.checkAuthSession)


//Product router
// User router  

export default routerAdmin;
     