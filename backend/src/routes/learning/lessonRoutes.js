
const express = require("express");
const router = express.Router();

const upload = require("../../middleware/upload");

const {
  createLesson,
  getLessonsByChapter,
  deleteLesson,
} = require("../../controllers/learning/lessonController");

router.post(
  "/",
  upload.single("file"),
  createLesson
);

router.get(
  "/chapter/:chapterId",
  getLessonsByChapter
);

router.delete(
  "/:id",
  deleteLesson
);

module.exports = router;