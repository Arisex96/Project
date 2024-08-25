import mongoose from "mongoose"
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        const connectInst = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`Connected to the database : ${connectInst.connection.host}`);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("ERROR: ", error);
        process.exit(1);
    }
}

export default connectDB;