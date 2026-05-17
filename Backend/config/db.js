import mongoose from "mongoose";

export const dbConnect = async () => {
    try {
        
        if (!process.env.MONGODB_URL) {
            throw new Error("MONGODB_URL is missing in .env file!");
        }

        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`✨ Database Connected Status: SUCCESS`); 
    } catch (error) {
        console.error("❌ DATABASE CONNECTION FAILED");

        // Is line ko add kijiye taaki error ka reason dikhe:
        console.error(`⚠️ Reason: ${error.message}`);
        
        process.exit(1); // Server ko band kar do agar DB connect na ho
    }
};