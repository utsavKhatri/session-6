import express from "express";
import * as dotenv from "dotenv";
import todoController from "./controllers/todoController.js";
import mongoose from "mongoose";
const app = express();

dotenv.config();
//mongoose.set('strictQuery', false);

// const URL = "mongodb://utsavkh:675915xiCD4QCw3Vqt63f@15.206.7.200:28017/utsavkh?authMechanism=DEFAULT&authSource=admin"
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection is successful with DB");
  })
  .catch((err) => {
    console.log(`"No Connection...", ${err}`);
  });
/* Setting the view engine to ejs. */
app.set("view engine", "ejs");

/* the public folder as a static folder. */
app.use("/public", express.static("public"));

/* Calling the function todoController. */
todoController(app);

app.listen(3000);
console.log(`you are listening to http://localhost:3000/`);
