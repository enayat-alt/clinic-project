const express = require("express");
const router = express.Router();

const {
  getAll,
  book,
  update,
  cancel,
  accept,
  reject,
} = require("../../controllers/clinic/appointmentController");

router.post("/", book);

router.get("/", getAll);
router.put("/:id", update);
router.patch("/:id/accept", accept);
router.patch("/:id/reject", reject);
router.patch("/:id/cancel", cancel);

module.exports = router;