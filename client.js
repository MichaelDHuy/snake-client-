const net = require("net");
const { IP, PORT } = require("./constant");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => { 
    console.log("Yay!!! Successfully connected to game server!");
    conn.write("Name: NDH");
  });
  conn.on("data", (data) => { 
    console.log(data);   
})
  return conn;
}
  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // });
  // conn.on("connect", () => {
  //   conn.write("Move: right");
  // });
  // conn.on("connect", () => {
  //   conn.write("Move: right");
  // });
  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // });
  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // });
  // conn.on("connect", () => {
  //   conn.write("Move: right");
  // });
  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // });
  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // });

  
module.exports = {connect};
