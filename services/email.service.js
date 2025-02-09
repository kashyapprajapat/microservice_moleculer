import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

export default {
    name: "email",
    actions: {
        async send(ctx) {
            const { to, subject, text } = ctx.params;

            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            let info = await transporter.sendMail({
                from: `"Kashyap 👨🏻‍💻" <${process.env.EMAIL_USER}>`,
                to,
                subject,
                text
            });

            return { message: "Email sent", info };
        }
    }
};
