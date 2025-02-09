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
                const response = await axios.post(
                    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key=${process.env.GEMINI_API_KEY}`,
                    {
                        prompt: { text: `Can you tell me the meaning of the name "${name}"?` },
                    }
                );

                const aiResponse = response.data.candidates?.[0]?.output || "No meaning found";
                return { name, meaning: aiResponse };

            } catch (error) {
                console.error("Error fetching name meaning:", error.response?.data || error.message);
                return { error: "Failed to get name meaning" };
            }
        }
    }
};
