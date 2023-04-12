const keys = require('./constants').keys;

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (Object.keys(keys).includes(data)) {
    connection.write(keys[data]);
  }
};

module.exports = setupInput;