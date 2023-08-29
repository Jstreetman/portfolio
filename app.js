import express from "express";
import path from "path";
import morgan from "morgan";

import customerRoutes from "./routes/contactroutes.js";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// routes
app.use(customerRoutes);

// static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/projects", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("index.ejs");
});

app.get("/contact", (req, res) => {
  res.render("index.ejs");
});

app.get("/submitted", (req, res) => {
  res.render("success.ejs");
});

app.get("/admin", (req, res) => {
  res.render("admin.ejs");
});
app.get("/adminregister", (req, res) => {
  res.render("register.ejs");
});

app.get("/panel", (req, res) => {
  res.render("panel.ejs");
});

// 404 error handler
app.use((req, res) => {
  res.status(404).render("error.ejs");
});

// starting the server
export default app;
