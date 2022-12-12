import mongoose from "mongoose"
import * as dotenv from "dotenv"
dotenv.config()

const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};

export default mongoose.connect(process.env.URL_DB || "error",options).then(() => {
    console.log('====================================');
    console.log("Database connected");
    console.log('====================================');
}).catch((err:Error) => {
    console.log('====================================');
    console.log(err);
    console.log('====================================');
});