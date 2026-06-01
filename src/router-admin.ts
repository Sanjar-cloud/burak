import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

// Restaurant router
routerAdmin.get("/", restaurantController.goHome );

routerAdmin
.get("/login", restaurantController.getLogin)
.post("/login", restaurantController.processLogin);


routerAdmin
.get("/signup", restaurantController.getSignup)
.post("/signup", restaurantController.processSignup);





//Product router
// User router  

export default routerAdmin;
     