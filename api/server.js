import express from "express";
import { ServiceBroker } from "moleculer";


const broker = new ServiceBroker({ transporter: "NATS" });
broker.start();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 7000;



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



// Start the Express server
app.listen(PORT, () => console.log(`API Gateway running at PORT No : ${PORT}`));
