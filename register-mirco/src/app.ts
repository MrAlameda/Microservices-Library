import user_routes from "./users/user.routes"
import auth_routes from "./auth/auth.routes"
import express from "express"

// database conn
import connMongo from "./db/conn"
connMongo

const app=express()
//! middlaware 
app.use(express.json())


//? routes
app.get("/",(req,res)=>{
    res.status(200).json({messsage:"Welcome"})
})

app.use("/auth",auth_routes)

app.use("/users",user_routes)

export default app
