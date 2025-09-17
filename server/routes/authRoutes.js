const router = require("express").Router();
const passport = require("passport");

// --- Google ---
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:3000"); // frontend after login
  }
);

// --- GitHub ---
router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));
router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:3000");
  }
);

// --- Discord ---
router.get("/discord", passport.authenticate("discord"));
router.get(
  "/discord/callback",
  passport.authenticate("discord", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:3000");
  }
);

// --- Current User ---
router.get("/me", (req, res) => {
  res.json(req.user || null);
});

// --- Logout ---
router.get("/logout", (req, res) => {
  req.logout(() => {});
  res.redirect("http://localhost:3000");
});

module.exports = router;
