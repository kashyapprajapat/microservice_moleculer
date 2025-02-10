import winston from "winston";
import pgPromise from "pg-promise";
import dotenv from "dotenv";

dotenv.config();

// PostgreSQL Connection Setup
const pgp = pgPromise();
const db = pgp(process.env.DATABASE_URL);

// Create "logs" table if not exists
db.none(`
    CREATE TABLE IF NOT EXISTS logs (
        id SERIAL PRIMARY KEY,
        method TEXT,
        url TEXT,
        status INTEGER,
        timestamp TIMESTAMP DEFAULT NOW(),
        response_time FLOAT
    );
`).then(() => console.log("✅ Logs table is ready"))
  .catch(err => console.error("❌ Error creating logs table", err));

// Configure Winston Logger
const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "logs.log" }) // Save logs locally
    ],
});

// Function to log request & store in DB
export const logRequest = async (req, res, next) => {
    const start = Date.now();

    res.on("finish", async () => {
        const logData = {
            method: req.method,
            url: req.originalUrl,
            status: res.statusCode,
            response_time: Date.now() - start
        };

        // Log to file/console
        logger.info(logData);

        // Store log in Neon PostgreSQL
        try {
            await db.none(
                `INSERT INTO logs (method, url, status, response_time) VALUES ($1, $2, $3, $4)`,
                [logData.method, logData.url, logData.status, logData.response_time]
            );
        } catch (err) {
            console.error("❌ Error saving log to DB:", err);
        }
    });

    next();
};

export default logger;
