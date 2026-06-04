const express = require("express");
const router = express.Router();
const {
  getAllUsers, deleteUser, getAllDoctors, verifyDoctor, getAnalytics,
} = require("../controllers/adminController");
const { protect } = require("../middleware/auth");
const { authorize } = require("../middleware/roleMiddleware");

router.use(protect, authorize("admin"));

router.get("/users",              getAllUsers);
router.delete("/users/:id",       deleteUser);
router.get("/doctors",            getAllDoctors);
router.patch("/doctors/:id/verify", verifyDoctor);
router.get("/analytics",          getAnalytics);

module.exports = router;
