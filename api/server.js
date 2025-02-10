import express from "express";
import { ServiceBroker } from "moleculer";

import { logRequest } from "./logger.js";

const broker = new ServiceBroker({ transporter: "TCP" });
broker.start();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 7000;
app.use(logRequest);

// Home Route 🏡
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>API Gateway</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f4f4f4; }
                h1 { color: #333; }
                p { font-size: 18px; color: #666; }
                .container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); max-width: 600px; margin: auto; }
                a { text-decoration: none; color: #007BFF; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to the API Gateway</h1>
                <p>Available Endpoints:</p>
                <ul>
                    <li><a href="/meaning/John">/meaning/:name</a> - Get the meaning of a name</li>
                    <li><a href="/ping">/ping</a> - Check API response</li>
                    <li><a href="/health">/health</a> - Check API health status</li>
                    <li>POST /send-email - Send an email (Use Postman or cURL)</li>
                </ul>
            </div>
        </body>
        </html>
    `);
});


// Route to get the meaning of a name
app.get("/meaning/:name", async (req, res) => {
    const result = await broker.call("meaning.getMeaning", { name: req.params.name });
    res.json(result);
});

// Route to send an email
app.post("/send-email", async (req, res) => {
    const { to, subject, text } = req.body;
    const result = await broker.call("email.send", { to, subject, text });
    res.json(result);
});

// Route to check if the API is responding
app.get("/ping", (req, res) => {
    res.send("pong");
});

// Health check route
app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        timestamp: new Date().toISOString()
    });
});

// Start the Express server
app.listen(PORT, () => console.log(`API Gateway running at PORT No : ${PORT}`));
