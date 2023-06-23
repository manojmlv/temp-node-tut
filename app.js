// const path = require("path");
// const absulate = path.resolve(__dirname, "content", "subfolder", "test.txt");
// console.log(absulate);
// console.log(path.win32);
// console.log(__dirname.join("views"));

// const filePath = path.join("/content", "subfolder", "test.txt");
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// const os = require("os");
// info about current user
// const user = os.userInfo();
// console.log(user);

// method return system uptime the seconds
// console.log(`The System Uptime is ${os.uptime()} seconds`);

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };

// console.log(currentOS);

// const amount = 9;
// if (amount < 10) {
//   console.log("small number");
// } else {
//   console.log("large number");
// }
// console.log(`hey it's my first node app!!!`); // with using Template String

// console.log("--> ", __dirname);

// setInterval(() => {
//   console.log(`Hello World`);
// }, 1000);

// // Modules
// const secret = "SUPER SECRET";
// const john = "john";
// const peter = "peter";
// console.log(module);
// const sayHi = (name) => {
//   console.log(`Hello there ${name}`);
// };

// const names = require("./names");
// const sayHi = require("./names");
// console.log(names);

// sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);

// File Systems

// const first = readFileSync("./content/first.txt", "utf-8");
// const seconds = readFileSync("./content/second.txt", "utf-8");

// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result : ${first}, ${seconds}`
// );
// console.log(first, seconds);
// const { readFile, writeFile, read } = require("fs"); // module destructure
// console.log("start");
// readFile("./content/first.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile("./content/second.txt", "utf-8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     writeFile(
//       "./content/result-async.txt",
//       `Here is the result : ${first}, ${second}`,
//       { flag: "a" },
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log("done with the task.....");
//       }
//     );
//   });
// });

// console.log("starting next task.....");
// console.log("i am not here");
// const { readFileSync, writeFileSync } = require("fs");
// console.log("start");
// const first = readFileSync("./content/first.txt", "utf-8");
// const second = readFileSync("./content/second.txt", "utf-8");
// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result : ${first}, ${second}`,
//   { flag: "a" }
// );
// console.log(`done with this task`);
// console.log(`starting the next on`);

//============================HTTP

// node-express-course
// /01-node-tutorial/
// Directornpmy actionsAdd file
// More options
// Latest commit
// john-smilga
// john-smilga
// Bug fixes
// local dependency -   use it only in this  particular project

// BRIEF INTRO
// COVER IN DETAIL LATER (NEXT SECTION)
// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("<h1>Welcome to our home page</h1>");
//   }
//   if (req.url === "/about") {
//     res.end(`<h1>here is our here<h1>`);
//   }
//   res.end(`
//   <h1>Oops!!</h1>
//   <p>We can't seem to find the page you are looking for</p>
//   <a href="/">back home</a>
//   `);
// });
// server.listen(5000);

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItem = _.flattenDeep(items);

console.log(newItem);
