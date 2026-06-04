const express = require("express");
const router = express.Router();
const {
  getAll, book, update, cancel, accept, reject,
} = require("../controllers/appointmentController");
const { protect } = require("../middleware/auth");

router.get("/",           protect, getAll);
router.post("/",          protect, book);
router.put("/:id",        protect, update);
router.delete("/:id",     protect, cancel);
router.patch("/:id/accept", protect, accept);
router.patch("/:id/reject", protect, reject);

module.exports = router;
