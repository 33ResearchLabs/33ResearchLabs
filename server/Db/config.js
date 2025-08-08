import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI || "mongodb+srv://goravresearchlab:AphXUmRo79pzE1su@cluster0.g7qgxyi.mongodb.net/33ResearchLab";

export async function connectToMongoDb() {
  if (!uri) {
    throw new Error("❌ MONGODB_URI is not defined. Check your .env file.");
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");

    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("Collections:", collections.map((c) => c.name));
  } catch (error) {
    console.error("MongoDB error:", error);
    process.exit(1);
  }
}
