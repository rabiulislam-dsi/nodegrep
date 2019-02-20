const fs = require("fs");
const readline = require("readline");

// get command line args
let [queryPattern, queryFile] = process.argv.slice(2, 4);

// fs.readFile(`./${queryFile}`, (err, buffer) => {
//   if (err) throw err;
//   //console.log(data);
//   let bufferString = buffer.toString();
//   let matchedLines = bufferString
//     .split("\n")
//     .filter((line, index) =>
//       line.toLowerCase().includes(queryPattern.toLowerCase())
//     );
//   console.log(matchedLines.join("\n"));
// });

//create interface
let readlineInterFace = readline.createInterface({
  input: fs.createReadStream(`./${queryFile}`)
});

//add eventlistener --> 'line'
readlineInterFace.on("line", line => {
  if (line.includes(queryPattern)) {
    console.log(line);
  }
});
