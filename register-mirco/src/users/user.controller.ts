
const uuid = require("uuid")

import User from "../db/models"
import { hashPassword } from "../utils/crypto"

export const getAllUser = async () => {
    const data = await User.find({})
    return data
}

export const getUserById = async (id: string) => {
    const data = await User.findById(id)
    return data
}

export const createUser = async (data: any) => {
    const newData=await{
        id: uuid.v4(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashPassword(data.password),
        phone: data.phone,
        birthday: data.birthday,
        status: true,
        role: "user"
    }
    const newUser = await User.create(newData)
    return newUser
}

export const updateUser = async (id: string, data: any) => {
    const result = await User.updateMany({id:id}, data)
    return result
}
export const deleteUser = async (id: string) => {
    const result = User.deleteOne({
        id
    })
    return result
}

export const getUserByEmail = async (email: string) => {
    const result = await User.find({
        email
    })
    return result
}

