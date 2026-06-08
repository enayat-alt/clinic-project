const express = require("express");
const router = express.Router();

const {
  createChapter,
  getChaptersByCourse,
  deleteChapter,
} = require("../../controllers/learning/chapterController");

router.post("/", createChapter);

router.get(
  "/course/:courseId",
  getChaptersByCourse
);

router.delete(
  "/:id",
  deleteChapter
);

module.exports = router;