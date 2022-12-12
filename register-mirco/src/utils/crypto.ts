import bcrypt from "bcrypt"


export const hashPassword = (plainPasword:string)=>{
    return bcrypt.hashSync(plainPasword,10)
}

export const comparePassword = (plainPassword:string,hashPassword:string)=>{
    return bcrypt.compareSync(plainPassword,hashPassword)
}
