import { getUserByEmail } from "../users/user.controller"
import { comparePassword } from "../utils/crypto"



const loginUser = async (email: string, password: string) => {
    try {
        const user:any= await getUserByEmail(email)
        const verfyPassword = comparePassword(password, user[0].password )
        console.log(verfyPassword)
        if (verfyPassword) {
            return user
        } else {
            return false
        }
    } catch {
        return false
    }
}

export default loginUser;
