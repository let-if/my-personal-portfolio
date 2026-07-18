import jwt from "jsonwebtoken";
import { env } from "../config/env.js";


export function generateToken(admin){

    return jwt.sign(

        {
            id:admin.id,
            email:admin.email
        },

        env.JWT_SECRET,

        {
            expiresIn:"7d"
        }

    );

}