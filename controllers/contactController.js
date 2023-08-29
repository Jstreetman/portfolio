import { pool } from "../database.js";
import session from "express-session";
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(
  session({
    secret: "Secretlifetimeofcheeseandchoc",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

export const renderContacts = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM contacts");
  res.render("panel.ejs", { contacts: rows });
};

export const createContact = async (req, res) => {
  const newContact = req.body;
  await pool.query("INSERT INTO contacts set ?", [newContact]);
  res.redirect("/submitted");
};

export const createAdmin = async (req, res) => {
  const oneAdmin = req.body;
  console.log(req.body); // Debugging line

  await pool.query("INSERT INTO accounts set ?", [oneAdmin]);
  res.redirect("/panel");
};
export const renderAdmin = async (req, res) => {
  const { adminname, adminPassword } = req.body; // Corrected

  try {
    const [user] = await pool.query(
      "SELECT * FROM accounts WHERE adminname = ? AND adminPassword = ?",
      [adminname, adminPassword]
    );

    console.log("User from query:", user);

    if (user && user.length > 0) {
      // User authentication successful

      req.session.user = user;

      // req.session.name = name;

      //console.log(req.session);
      res.redirect("/panel"); // Redirect to the dashboard after successful login
      //res.render("panel", { user: req.session.user, contacts });
    } else {
      // Invalid credentials
      console.log("Invalid credentials:", adminname, adminPassword);
      res.redirect("/admin"); // Redirect back to the login page with an error message
    }
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const deleteContacts = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM contacts WHERE id = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "Contact deleted" });
  }
  res.redirect("/panel");
};
