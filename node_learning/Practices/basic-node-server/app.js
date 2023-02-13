import { createServer } from "http";
import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { myObj } from "../stuff.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* Calling the function counter and passing an array of names as an argument. */

let answer = counter(["kushal", "sunny", "ayush", "verma"]);

/* Calling the function adder and passing two arguments 6 and 8. */
let sum = adder(pi, 8);

console.log(sum);


let server = createServer((req, res) => {
    console.log("request was mode: " + req.url);
  if (req.url==='/home' || req.url==='/') {
      res.writeHead(200, { "content-type": "*" });
  createReadStream(`${__dirname}/index.html`, "utf-8").pipe(res);
  }
  else if(req.url==='/api/data') {
      res.writeHead(200, { "content-type": "application/json" }).end(JSON.stringify(myObj))
  }
  else{
      res.end("not found please check url")
  }
  });
  server.listen(8080);
  console.log("server run on port 8080");