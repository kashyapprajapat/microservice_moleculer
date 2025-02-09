import { ServiceBroker } from "moleculer";
import meaningService from "./services/meaning.service.js";
import emailService from "./services/email.service.js";
import dotenv from "dotenv";
dotenv.config();


const broker = new ServiceBroker({
    transporter: "TCP"
});


broker.createService(meaningService);
broker.createService(emailService);


broker.start().then(() => {
    console.log("Moleculer services started...");
});

export { broker };
