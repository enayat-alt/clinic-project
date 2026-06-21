
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

const { protect } = require("../../middleware/auth");
const { authorize } = require("../../middleware/roleMiddleware");

//router.post("/", protect, authorize("patient"), book);
router.post("/", book);

router.get("/", protect, authorize("admin"), getAll);

router.put("/:id", protect, authorize("admin"), update);

router.patch("/:id/accept", protect, authorize("admin"), accept);

router.patch("/:id/reject", protect, authorize("admin"), reject);

router.patch("/:id/cancel", protect, authorize("patient", "admin"), cancel);

module.exports = router;
