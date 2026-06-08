const express = require("express");
const router = express.Router();
const { getProfile, updateProfile } = require("../../controllers/clinic/patientController");
const { protect } = require("../../middleware/auth");
const { authorize } = require("../../middleware/roleMiddleware");

router.get("/profile",    protect, authorize("patient"), getProfile);
router.put("/profile",    protect, authorize("patient"), updateProfile);

module.exports = router;
