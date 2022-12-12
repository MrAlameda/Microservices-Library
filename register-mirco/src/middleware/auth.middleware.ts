

import { getUserById } from "../users/user.controller";
import JwtStrategy from "passport-jwt"
import ExtractJwt from "passport-jwt" 
import * as dotenv from "dotenv"

dotenv.config()

export default (passport:any) => {
    const options={
        jwtFromRequest:ExtractJwt.ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey:process.env.SECRET_KEY
    }
    passport.use(
        new JwtStrategy.Strategy(options,async (decode:any,done:any) => {
            try {
                const result=await getUserById(decode.id)
                if(!result){
                    return done(null,false)
                }
                console.log("decode jwt",decode)
                return done(null,decode)
            } catch (error) {
                return done(error,false)
            }
        })
    )
}
