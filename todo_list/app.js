import express from "express";
import todoController from "./controllers/todoController.js";
const app = express();


/* Setting the view engine to ejs. */
app.set("view engine", "ejs");

/* the public folder as a static folder. */
app.use('/public',express.static("public"));

/* Calling the function todoController. */
todoController(app);

app.listen(3000);
console.log("you are listening to port 3000");
