// require("dotenv").config();
import mongoose from "mongoose"
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
});

mongoose.set('strictQuery', true);//

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
})
})
.catch((error) => {
     console.log("Error connecting to the database", error); })

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });

//     } catch (error) {
//         console.log("ERROR: ", error);
//         throw error;
//     }
// })();

// app.on("error", (error) => {
//     console.log("Error connecting to the database", error);
// });