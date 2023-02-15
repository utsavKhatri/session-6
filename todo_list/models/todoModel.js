import mongoose from "mongoose";
import * as dotenv from "dotenv";

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
