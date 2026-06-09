const express = require("express");
const router = express.Router();

const {
  enrollInCourse,
  getMyCourses

} = require("../../controllers/learning/studentCourseController");

const { protect } = require("../../middleware/auth");

router.post(
  "/:courseId",
  protect,
  enrollInCourse
);

// Get logged-in student's enrolled courses
router.get(
  "/my-courses",
  protect,
  getMyCourses
);


module.exports = router;