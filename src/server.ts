import dotenv from "dotenv";
dotenv.config();
import mongoose from 'mongoose'; 
import app from "./app"; // app ni call



mongoose.connect(process.env.MONGO_URL  as string, {}) // mongoose orrqali mongodb ni ulash
.then((data) => {
    console.log('mongodb connection sucessfully on port')
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function()  { // app va backend portda 
        console.log(`the server is running sucessfully on part: ${PORT}`);
    }); 
})
.catch((err) => console.log('ERROR connection on mongodb', err));   