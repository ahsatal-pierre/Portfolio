const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

const Joi = require("joi");

const connection = require("./db-config");

/* const db = connection.promise(); */
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

dotenv.config();
process.on("unhandledRejection", (error) => {
  console.error("unhandledRejection", error);
});

const port = process.env.PORT || 5000;

// RETRIEVE PROJECTS
app.get("/project", (req, res) => {
  let sql = "SELECT * FROM project";
  const sqlValues = [];
  if (req.query.title) {
    sql += " WHERE title = ?";
    sqlValues.push(req.query.title);
  }

  connection.query(sql, sqlValues, (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving project from database");
    } else {
      res.json(results);
    }
  });
});

app.get("/project", (req, res) => {
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
      res.status(500).send("Error retrieving project from database");
    } else {
      res.json(results);
    }
  });
});

// RETRIEVE ONE PROJECT
app.get("/project/:id", (req, res) => {
  const projectId = req.params.id;
  connection.query(
    "SELECT * FROM project WHERE id = ?",
    [projectId],
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving project from database");
      } else if (results.length) res.json(results[0]);
      else res.status(404).send("project not found");
    }
  );
});

// POST PROJECT
app.post("/project", (req, res) => {
  const { title, texte } = req.body;
  const { error } = Joi.object({
    title: Joi.string().max(255).required(),
    texte: Joi.string().max(10000).required(),
  }).validate({ title, texte }, { abortEarly: false });
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    connection.query(
      "INSERT INTO project (title, content, techno) VALUES (?, ?, ?)",
      [title, texte],
      (err, result) => {
        if (err) {
          res.status(500).send("Error saving the project");
        } else {
          const id = result.insertId;
          const createdProject = { id, title, texte };
          res.status(201).json(createdProject);
        }
      }
    );
  }
});

// UPDATE PROJECT
app.put("/project/:id", (req, res) => {
  const projectId = req.params.id;
  const datbase = connection.promise();
  let existingProject = null;
  datbase
    .query("SELECT * FROM project WHERE id = ?", [projectId])
    .then(([results]) => {
      // eslint-disable-next-line prefer-destructuring
      existingProject = results[0];
      // eslint-disable-next-line prefer-promise-reject-errors
      if (!existingProject) return Promise.reject("RECORD_NOT_FOUND");
      return datbase.query("UPDATE project SET ? WHERE id = ?", [
        req.body,
        projectId,
      ]);
    })
    .then(() => {
      res.status(200).json({ ...existingProject, ...req.body });
    })
    .catch((err) => {
      console.error(err);
      if (err === "RECORD_NOT_FOUND")
        res.status(404).send(`project with id ${projectId} not found.`);
      else res.status(500).send("Error updating a project.");
    });
});

// DELETE PROJECT
app.delete("/project/:id", (req, res) => {
  const projectId = req.params.id;
  connection.query(
    "DELETE FROM project WHERE id = ?",
    [projectId],
    (err, result) => {
      if (err) {
        res.status(500).send("Error deleting a project");
      } else if (result.affectedRows)
        res.status(200).send("🎉 project deleted!");
      else res.status(404).send("project not found");
    }
  );
});

app.listen(port, (error) => {
  connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
    } else console.error(error);
  });
});
