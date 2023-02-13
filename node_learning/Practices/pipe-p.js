import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// /* Creating a read stream and reading the file. */

// let myReadStream = createReadStream(`${__dirname}/readlMe.txt`, "utf-8");

// myReadStream.on("data", (chunk) => {
//   console.log("new chunk received:");
//   console.log(chunk);
// });



/* Creating a read stream and writing the data to a write stream. */
let myReadStream = createReadStream(`${__dirname}/readlMe.txt`, "utf-8");
let myWriteStream = createWriteStream(`${__dirname}/writeMe.txt`);

myReadStream.pipe(myWriteStream)

