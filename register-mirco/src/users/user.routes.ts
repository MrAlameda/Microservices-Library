import express from "express"
import * as userServises from "./user.services"
import passport from "passport"

import authMiddleware from "../middleware/auth.middleware";
import adminValidate from "../middleware/admin.medddleware";
authMiddleware(passport)


const router=express.Router()

router.get("/",
        // passport.authenticate( 
        //     "jwt",{session:false}
        //     ),
        userServises.allUsers)
router.get("/email/:email",
    userServises.userByEmail
)
// router.route("/me")
//     .get(
//         passport.authenticate("jwt",{session:false})
//         ,userServises.getMyUser)
//     .delete(
//         passport.authenticate("jwt",{session:false}),
//         userServises.deleteMyUser)
//     .patch(
//         passport.authenticate("jwt",{session:false}),
//         userServises.updateMyUser
//     )
// router.route("/:id")
//     .get(userServises.userById)
//     .patch(
//         passport.authenticate("jwt",{session:false}),
//         adminValidate,
//         userServises.userPatch)
//     .delete(
//         passport.authenticate("jwt",{session:false}),
//         adminValidate,
//         userServises.userDelet)

export default router


