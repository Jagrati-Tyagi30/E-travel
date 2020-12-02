const mysql = require("mysql");
const databaseConfiguration = require("../configuration/database.configuration.js");

const connection = mysql.createConnection({
  host: databaseConfiguration.HOST,
  user: databaseConfiguration.USER,
  password: databaseConfiguration.PASSWORD,
  database: databaseConfiguration.DB
});

connection.connect(error => {
  if (error) throw error;
  console.log("Connection to the database was successful");
});

module.exports = connection;