// middleware.js
export const requireLogin = (req, res, next) => {
  if (req.session.user) {
    // User is logged in, proceed to the next middleware or route handler
    next();
  } else {
    // User is not logged in, redirect them to the login page
    res.redirect("/admin"); // Change the route to your login page
  }
};
