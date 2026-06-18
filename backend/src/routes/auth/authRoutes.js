const express = require("express");
const router = express.Router();

const {
  register,
  login,
  refresh,
  logout,
  getMe,
} = require("../../controllers/auth/authController");

const { protect } = require("../../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);

router.get("/me", protect, getMe);

module.exports = router;

// const express = require("express");
// const router = express.Router();

// const {
//   register,
//   login,
//   refresh,
//   logout,
//   getMe,
// } = require("../../controllers/auth/authController");

// const { protect } = require("../../middleware/auth");

// const {
//   loginLimiter,
//   registerLimiter,
// } = require("../../middleware/rateLimiter");

// router.post(
//   "/register",
//   registerLimiter,
//   register
// );

// router.post(
//   "/login",
//   loginLimiter,
//   login
// );

// router.post("/refresh", refresh);
// router.post("/logout", logout);

// router.get("/me", protect, getMe);

// module.exports = router;