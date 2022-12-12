import mongoose, { Schema } from "mongoose";

const User = mongoose.model("User",new Schema ({
    id:String,
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    phone:String,
    birthday: String,
    role: String,
    status: Boolean
}))

export default User