import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default {
    name: "meaning",
    actions: {
        async getMeaning(ctx) {
            const name = ctx.params.name;
            if (!name) {
                return { error: "Name parameter is required" };
            }

            try {
                const apiKey = process.env.GEMINI_API_KEY;
                if (!apiKey) {
                    throw new Error("GEMINI_API_KEY is missing. Check your .env file.");
                }

                const response = await axios.post(
                    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
                    {
                        contents: [{ parts: [{ text: `What is the meaning of the name '${name}'?` }] }]
                    },
                    {
                        headers: { "Content-Type": "application/json" }
                    }
                );

                // Extract response from AI
                const aiResponse = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No meaning found";
                return { name, meaning: aiResponse };

            } catch (error) {
                console.error("Error fetching name meaning:", error.response?.data || error.message);

                if (error.response?.status === 404) {
                    return { error: "The requested entity was not found. Ensure your API key and endpoint are correct." };
                }
                
                return { error: "Failed to get name meaning" };
            }
        }
    }
};
