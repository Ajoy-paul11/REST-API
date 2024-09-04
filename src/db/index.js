import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/QueryTesting`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 30000,
            socketTimeoutMS: 45000
        })
        console.log("\n Database connected, DB HOST: ", connectionInstance.connection.host);

    } catch (error) {
        console.log("MongoDB connection ERROR: ", error);
    }
}


export default connectDB;
