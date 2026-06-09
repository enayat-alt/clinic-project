const express = require("express");
const router = express.Router();

const {
  enrollInCourse,
} = require("../../controllers/learning/studentCourseController");

const { protect } = require("../../middleware/auth");

router.post(
  "/:courseId",
  protect,
  enrollInCourse
);

module.exports = router;