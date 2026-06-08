const express = require("express");
const router = express.Router();
const { getAll, getById, getProfile, updateProfile } = require("../../controllers/clinic/doctorController");
const { protect } = require("../../middleware/auth");
const { authorize } = require("../../middleware/roleMiddleware");

router.get("/",           getAll);
router.get("/profile",    protect, authorize("doctor"), getProfile);
router.put("/profile",    protect, authorize("doctor"), updateProfile);
router.get("/:id",        getById);

module.exports = router;
