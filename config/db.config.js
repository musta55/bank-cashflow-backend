// 'use strict';
// const mysql = require('mysql');
// //local mysql db connection
// const dbConn = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'password',
//   database : 'banksql'
// });
// dbConn.connect(function(err) {
//   if (err) throw err;
//   console.log("Database Connected!");
// });
// module.exports = dbConn;

// New Code

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("banksql", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

async function connectToDatabase() {
  //Connect to db
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { connectToDatabase, sequelize };
