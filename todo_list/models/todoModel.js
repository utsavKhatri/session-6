import mongoose from "mongoose";
import * as dotenv from "dotenv";

/* Loading the environment variables from the .env file. */
dotenv.config();

/* Connecting to the mongoose database. */
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI);

/* Creating a new schema for the mongoose database. */
let todoSchema = new mongoose.Schema(
  {
    item: String,
  },
  {
    timestamps: true,
  }
);

/* Creating a new model called Todo. */
export const Todo = mongoose.model("Todo", todoSchema);
