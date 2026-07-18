import nodemailer from "nodemailer";
import { env } from "../config/env.js";


const transporter = nodemailer.createTransport({

    service:"gmail",

    auth:{
        user:env.EMAIL_USER,
        pass:env.EMAIL_PASS
    }

});



export async function sendContactEmail(data){


    await transporter.sendMail({

        from:env.EMAIL_USER,

        to:env.EMAIL_USER,


        subject:`New Portfolio Message: ${data.subject}`,


        html:`

        <h2>New Contact Message</h2>

        <p>
        <strong>Name:</strong>
        ${data.name}
        </p>


        <p>
        <strong>Email:</strong>
        ${data.email}
        </p>


        <p>
        <strong>Message:</strong>
        </p>


        <p>
        ${data.message}
        </p>

        `

    });


}