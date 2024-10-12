import mongoose from "mongoose";

export const connectDB = async () => {

    try {
        const res = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${res.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1) // proccess with code 1 means exit with failure, 0 success
    }
}