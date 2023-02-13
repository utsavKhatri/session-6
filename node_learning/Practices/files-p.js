import { mkdir, readFile, rmdirSync, unlink, writeFileSync } from "node:fs";

/* Reading the file and writing it to another file. */
const readMe = readFileSync("./test.txt", "utf-8");
writeFileSync("./write.txt", readMe);
console.log(readMe);

/* Reading the file and writing it to another file. */

readFile('./test.txt','utf-8',(err,data)=>{
    if (err) {
        console.log(err.message);
    }
    console.log(data);
})
console.log('test abcd');



/* Creating a folder called stuff and then reading the file test.txt and writing it to write.txt in the
stuff folder. */

mkdir('stuff', function() {
  readFile("test.txt", "utf-8", function(err, data) {
    if (err) {
        console.log(err.message);
    }
    writeFileSync("stuff/write.txt", JSON.stringify(data));
  });
});

/*
Delete file and folder 
Deleting the file write.txt and then deleting the folder stuff. */
unlink('./stuff/write.txt', ()=>{
    rmdirSync('./stuff')
})


