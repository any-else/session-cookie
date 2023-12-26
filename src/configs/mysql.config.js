const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "vuvanbui@18",
  database: "session-cookie",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.log("kết nối thất bại");
    return;
  }
  console.log("Kết nối thành công với mysql");
});

module.exports = connection;
