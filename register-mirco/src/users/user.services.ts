import { Response,Request } from "express";
import mongoose from "mongoose";
import User from "../db/models";
import * as userController from "./user.controller"



export const allUsers=async(req:Request,res:Response)=>{
    const data= await User.find({})
    if(data.length>0){
        return res.status(200).json(data)
    }
    res.status(200).json({message:"Empty"})
}

export const userById=(req:Request,res:Response)=>{
    const id =req.params.id
    userController.getUserById(id)
        .then((result:any)=>{
            res.status(200).json(result)
        })
        .catch((err:Error)=>{
            res.status(400).json({message:"Id not found",Error:err.message})
        })
}

export const userAdd=(req:Request,res:Response)=>{
    const data=req.body
    if(
           data.phone
        && data.birthday
        && data.email
        && data.firstName
        && data.lastName
        && data.password
        ){
            try{
                const result=userController.createUser(data)
                res.status(200).json(result)
            }catch(err){
                res.status(400).json({message:"algo salio mal",err})
            }
            }else{
            res.status(400).json({
                message:"hiciste algo mal",
                checa:{
                    firstName: 'string',
                    lastName: 'string',
                    email: 'example@example.com',
                    password: 'string',
                    phone: '+521231231231',
                    birthday: 'YYYY/MM/DD'
                }
            })
        }
}

export const userPatch=(req:Request,res:Response)=>{
    const id=req.params.id
    const data=req.body

    if(data.id!=""){
return res.status(203).json({messsage:"parameters no acepted"})
    }
    userController.updateUser(id,data)
        .then((data:any)=>{
            if (data[0]) {
                res.status(200).json({message:`User with id:${id} has ben modify`})
            } else {
                res.status(404).json({message:"Invalid Id"})
            }
        })
        .catch((err:Error)=>{
            res.status(400).json({message:err.message})
        })
}

export const userDelet=(req:Request,res:Response)=>{
    const id = req.params.id
    userController.deleteUser(id)
    .then((data:any)=>{
        if(data){
            res.status(204).json(data)
        }else{
            res.status(404).json({message:"invalid Id"})
        }
    })
    .catch((err:Error)=>{
        res.status(400).json({message:err.message})
    })
}

export const getMyUser=(req:any,res:Response)=>{
    const id = req.user.id
    
    userController.getUserById(id)
        .then((result)=>{
            res.status(200).json(result)
        })
        .catch((err:Error)=>{
            console.error(err)
        })   
}

export const deleteMyUser=(req:any,res:Response)=>{
    const id=req.user.id
    userController.updateUser(id,{status:`inactive`})
        .then((result)=>{
            res.status(204).json(result)
        })
        .catch((err:Error)=>{
            res.status(400).json({message:err.message})
        })
}

export const updateMyUser=(req:any,res:Response)=>{
    const id=req.user.id
    const {firstName,lastName,phone,birthday,gender,country}=req.body
    userController.updateUser(id,{firstName,lastName,phone,birthday,gender,country})
        .then(()=>{
            res.status(202).json({message:`todo bien c:`})
        })
        .catch((err:Error)=>{
            res.status(404).json({message:err.message})
        })
}
export const userByEmail=(req:Request,res:Response)=>{
    const email =req.params.email
    userController.getUserByEmail(email)
        .then((result:any)=>{
            res.status(200).json(result)
        })
        .catch((err:Error)=>{
            res.status(400).json({message:"Id not found",Error:err.message})
        })
}
