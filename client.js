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
  setTimeout(() => {
    console.log('you ded cuz you idled');
  }, 7000);
  return conn;
  }
module.exports = {connect};
