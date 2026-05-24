import express from "express";
import path from "path";

/** 1-Entrance **/
const app = express(); // express ni call 
app.use(express.static(path.join(__dirname, "public")));  // app.use ===> middle ware
app.use(express.urlencoded({extended: true})); // middle ware pattern
app.use(express.json()); //rest api sifatida requiste  bolib body orqali kelayotgan datalarni  json farmartda otishiga ruhsat berish

/** 2-Session **/






/** 3-Views **/
app.set('views', path.join(__dirname, 'views' )); //express set  
app.set("view engine", "ejs"); //view engine ejs eaknligini bildirish




/** 4-Routers **/



export default app; //app file ni export qilamiz => reja da => module.exports = app;