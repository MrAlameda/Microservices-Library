import { Request, Response } from "express";
import * as dotenv from "dotenv"
import jwt from "jsonwebtoken"
import loginUser from "./auth.controller";
dotenv.config()

const uselogin=(req:Request,res:Response)=>{
    const {email,password}=req.body

    if(email&&password){
        loginUser(email,password)
            .then((result:any)=>{
                console.log(result)
                if(result){
                    const token=jwt.sign({
                        id:result.id,
                        email:result.email,
                        role:"admin"
                    },
                    process.env.SECRET_KEY as string
                    )
                    res.status(200).json({
                        message:"correct credential",
                        token
                    })
                }else{
                    res.status(401).json({messsage:"Invalid credentials"})
                }
            })
            .catch((err:Error)=>{res.status(400).json({message:err.message})})
    }else{
        res.status(400).json({message:"missing data"})
    }
}

export default uselogin