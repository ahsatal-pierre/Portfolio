const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

/* const Joi = require("joi"); */
/* 
const connection = require("./db-config"); */

const port = process.env.PORT || 5000;
// connection details
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

/* const db = connection.promise();  */
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

dotenv.config();
process.on("unhandledRejection", (error) => {
  console.error("unhandledRejection", error);
});

// RETRIEVE PROJECTS
app.get("/", (req, res) => {
  let sql = "SELECT * FROM project";
  const sqlValues = [];
  if (req.query.title) {
    sql += " WHERE title = ?";
    sqlValues.push(req.query.title);
  }

  connection.query(sql, sqlValues, (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving total from database");
    } else {
      res.json(results);
    }
  });
});

app.get("/", (req, res) => {
  let sql = "SELECT * FROM project";
  const sqlValues = [];
  if (req.query.techno) {
    sql += " WHERE techno = ?";
    sqlValues.push(req.query.techno);
  } else if (req.query.content) {
    sql += " WHERE content = ?";
    sqlValues.push(req.query.content);
  } else if (req.query.photo) {
    sql += " WHERE photo = ?";
    sqlValues.push(req.query.photo);
  }

  connection.query(sql, sqlValues, (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving baobab from database");
    } else {
      res.json(results);
    }
  });
});

app.listen(process.env.PORT || port, (error) => {
  connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
    } else console.error(error);
  });
});
