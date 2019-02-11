const fs = require("fs");
const readline = require("readline");

let queryArgs = process.argv.slice(2);
let queryWord = queryArgs[0];
let queryFile = queryArgs[1];

// fs.readFile(`./${queryFile}`, (err, buffer) => {
//   if (err) throw err;
//   //console.log(data);
//   let bufferString = buffer.toString();
//   let matchedLines = bufferString
//     .split("\n")
//     .filter((line, index) =>
//       line.toLowerCase().includes(queryWord.toLowerCase())
//     );
//   console.log(matchedLines.join("\n"));
// });

let readlineInterFace = readline.createInterface({
  input: fs.createReadStream(`./${queryFile}`)
});

readlineInterFace.on("line", line => {
  if (line.includes(queryWord)) {
    console.log(line);
  }
});
