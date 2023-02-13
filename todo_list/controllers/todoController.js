import bodyParser from "body-parser";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
/* Loading the environment variables from the .env file. */
dotenv.config();
console.log(process.env.MONGOOSE_STR);

/* Creating an empty array. */
let data = [];

/* Connecting to the mongoose database. */
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGOOSE_STR);

/* Creating a new schema for the mongoose database. */
let todoSchema = new mongoose.Schema({
  item: String
});

let Todo = mongoose.model('Todo', todoSchema);
let itemOne = Todo({item: "get flowers"}).save((err)=>{
  if (err) {
    console.log(err);
  }
  else{
    console.log("item are saved");
  }
})

let urlencodedParser = bodyParser.urlencoded({ extended: false });

/* Exporting the function to the app.js file. */
export default function (app) {
  /* Rendering the todo.ejs file and passing the data array to it. */
  app.get("/todo", (req, res) => {
    res.render("todo", { todos: data });
  });
  /* Adding the data to the array. */
  app.post("/todo", urlencodedParser, (req, res) => {
    data.push(req.body);
    console.log(data);
    res.json(data);
  });
  /* Deleting the item from the array. */
  app.delete("/todo/:item", (req, res) => {
    data = data.filter((todo) => {
      return todo.item.replace(/ /g, "-") !== req.params.item;
    });
    res.json(data);
  });
}
