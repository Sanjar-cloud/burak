import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session"; 
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: 'sessions'
});

/** 1-Entrance **/
const app = express(); // express ni call 
app.use(express.static(path.join(__dirname, "public")));  //  middleware DP > public
app.use(express.urlencoded({extended: true})); //  middleware DP tradational API support / form roqali req
app.use(express.json()); // middleware DP > Rest API support
app.use(cookieParser());
app.use(morgan (MORGAN_FORMAT)); // middleware DP > logging support

/** 2-Session **/ //req + session > tamga yaratish + tamga oqish 
app.use(
    session({
     secret: String(process.env.SESSION_SECRET),
     cookie: {
      maxAge: 1000 * 3600 * 6,  // 6hours
     },
     store: store,
     resave: true,
     saveUninitialized: true    
    })
);

app.use(function(req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member =  sessionInstance.member;
  next();
});


/** 3-Views **/
app.set('views', path.join(__dirname, 'views' )); // views backemda html qurish
app.set("view engine", "ejs"); 

/** 4-Routers **/
app.use("/admin", routerAdmin);// BSSR adminka loyihamiz
app.use("/", router);  // REACT user loyuhamiz



export default app;