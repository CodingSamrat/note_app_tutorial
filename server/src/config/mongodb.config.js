// =================================================================================
// Author       : Samrat <sam@codingsamrat.com>
// Name         : mongodb.config.js
// Description  : MongoDb Connection Configuration
// =================================================================================


import { connect } from "mongoose";


export default async function ConfigureMongoDB() {
    try {
        const MONGODB_URI = process.env.MONGODB_URI;
        if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI is not available in environment")

        // Connect to Mongodb Database
        const connection = connect(MONGODB_URI)

        // Logging Info...
        const db = (await connection).connection;
        const { host, name } = db;

        console.log(`✓  MongoDB connected\n   ↳ Database: ${name}\n   ↳ Hostname: ${host}\n`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}
