const express = require("express");
const router = express.Router();
const {
  getAll, getById, create, enroll, getQuiz, submitQuiz,
} = require("../controllers/courseController");
const { protect } = require("../middleware/auth");
const { authorize } = require("../middleware/roleMiddleware");

router.get("/",               getAll);
router.get("/:id",            getById);
router.post("/",              protect, authorize("admin"), create);
router.post("/:id/enroll",    protect, enroll);
router.get("/:id/quiz",       protect, getQuiz);
router.post("/:id/quiz/:quizId", protect, submitQuiz);

module.exports = router;
