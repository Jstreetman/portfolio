import { Router } from "express";
import session from "express-session";

import { requireLogin } from "../controllers/middleware.js";
import {
  createContact,
  renderContacts,
  createAdmin,
  renderAdmin,
  deleteContacts,
} from "../controllers/contactController.js";
const router = Router();

router.use(
  session({
    secret: "Secretlifetimeofcheeseandchoc",
    resave: false,
    saveUninitialized: true,
  })
);
router.get("/panel", requireLogin, renderContacts);
router.post("/submit", createContact);
router.post("/register", createAdmin);
router.post("/login", renderAdmin);
router.get("/delete/:id", deleteContacts);

// Logout route
router.get("/logout", (req, res) => {
  // Destroy the session to log the user out
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    }
    // Redirect the user back to the /admin page
    res.redirect("/admin");
  });
});

export default router;
