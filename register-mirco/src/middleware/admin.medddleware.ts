import { NextFunction, Response } from "express"

const adminValidate= (req:any,res:Response,next:NextFunction)=>{
    const role=req.user.role
    if(role=="admin"){
        return next()
    }else{
        res.status(401).json({message:"acces denied"})
    }
}

export default adminValidate