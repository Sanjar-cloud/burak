import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

/** 1-Entrance **/
const app = express(); // express ni call 
app.use(express.static(path.join(__dirname, "public")));  //  middleware DP > public
app.use(express.urlencoded({extended: true})); //  middleware DP tradational API support / form roqali req
app.use(express.json()); // middleware DP > Rest API support
app.use(morgan (MORGAN_FORMAT)); // middleware DP > logging support

/** 2-Session **/

/** 3-Views **/
app.set('views', path.join(__dirname, 'views' )); // views backemda html qurish
app.set("view engine", "ejs"); 

/** 4-Routers **/
app.use("/admin", routerAdmin);// BSSR adminka loyihamiz
app.use("/", router);  // REACT user loyuhamiz



export default app;