const client = require("./client")
let connection = client.connect();
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();   
  };
  if (key === "w") {     
    connection.write("Move: up");   
  };
  if (key === "s") {     
    connection.write("Move: down");   
  };
  if (key === "a") {     
    connection.write("Move: left");   
  };
  if (key === "d") {     
    connection.write("Move: right");   
  };
console.log(key);
};
// establishes a connection with the game server

console.log("Connecting ...");

setupInput();

