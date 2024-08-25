import mongoose from "mongoose"
import { DB_NAME } from "../constant.js";

const connectDB = async () => { // async function return a promise on completion
    try {
        const connectInst = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`Connected to the database : ${connectInst.connection.host}`);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("ERROR: while connecting DB ", error);
        process.exit(1);
    }
}

export default connectDB;