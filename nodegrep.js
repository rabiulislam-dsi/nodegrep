const fs = require("fs");
const readline = require("readline");

let queryArgs = process.argv.slice(2);
let queryWord = queryArgs[0];
let queryFile = queryArgs[1];

fs.readFile(`./${queryFile}`, (err, buffer) => {
  if (err) throw err;
  //console.log(data);
  let bufferString = buffer.toString();
  let matchedLines = bufferString
    .split("\n")
    .filter((line, index) =>
      line.toLowerCase().includes(queryWord.toLowerCase())
    );
  console.log(matchedLines.join("\n"));
});

// let rd = readline.createInterface({
//     input: fs.createReadStream('./demo1.txt')
// });
//
// rd.on('line', (line)=> {
//   console.log('Got another line...');
//   if(line.includes('line')){
//       console.log(line);
//   }
// });
