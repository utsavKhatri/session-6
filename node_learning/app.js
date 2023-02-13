import express from "express";
// import { fileURLToPath } from "url";
// import path from "path";
import data from "./constant/constant.js";
import bodyParser from "body-parser";
const app = express();

/* setting template engine. */
app.set("view engine", "ejs");

/* setting middleware */
app.use("/assets", express.static("assets"));

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.get("/", (req, res) => {
//   res.sendFile(`${__dirname}/index.html`, { "content-type": "*" });
// });

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/contact", (req, res) => {
  // console.log(req.query);
  res.render("contact", { qs: req.query });
});

app.post("/contact", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render("contact-success", { data: req.body });
});

/* This is a route that is being set up. When the user goes to the url `/profile/:name`, the server
will send the file `profile.ejs` to the user. */

app.get("/profile/:name", async (req, res) => {
  res.render("profile", { person: req.params.name, data: data });
});

app.listen(8080);
