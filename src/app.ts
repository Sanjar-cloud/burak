import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

/** 1-Entrance **/
const app = express(); // express ni call 
app.use(express.static(path.join(__dirname, "public")));  // app.use ===> middle ware
app.use(express.urlencoded({extended: true})); // middle ware pattern
app.use(express.json()); //rest api sifatida requiste  bolib body orqali kelayotgan datalarni  json farmartda otishiga ruhsat berish
app.use(morgan (MORGAN_FORMAT));

/** 2-Session **/

/** 3-Views **/
app.set('views', path.join(__dirname, 'views' )); //express set  
app.set("view engine", "ejs"); //view engine ejs eaknligini bildirish

/** 4-Routers **/
app.use("/admin", routerAdmin);//burak backend: bssr ejs:  adminka  loyihamini qurish uchunham ishlatamiz 
app.use("/", router);  //Middleware design pattern / burak backend: userlar foydalanadi va react loyihamiz uchun rest API  server sifatifa ishlatamiz  



export default app; //app file ni export qilamiz => reja da => module.exports = app;