const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: 50541,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => { 
    console.log("Yay!!! Successfully connected to game server!");
  });
  conn.on("connect", () => {
    conn.write("Name: NDH");
  });
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
