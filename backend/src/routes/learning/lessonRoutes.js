const express = require("express");
const router = express.Router();

const {
  createLesson,
  getLessonsByChapter,
  deleteLesson,
} = require("../../controllers/learning/lessonController");

router.post("/", createLesson);

router.get(
  "/chapter/:chapterId",
  getLessonsByChapter
);

router.delete(
  "/:id",
  deleteLesson
);

module.exports = router;