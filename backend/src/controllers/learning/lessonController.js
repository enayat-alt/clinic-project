const { Lesson } = require("../../models");

exports.createLesson = async (
  req,
  res
) => {
  try {
    const lesson = await Lesson.create({
      title: req.body.title,
      type: req.body.type,
      fileUrl: req.body.fileUrl,
      duration: req.body.duration,
      chapterId: req.body.chapterId,
      order: req.body.order || 1,
      description: req.body.description
    });

    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getLessonsByChapter =
  async (req, res) => {
    try {
      const lessons =
        await Lesson.findAll({
          where: {
            chapterId:
              req.params.chapterId,
          },
          order: [["order", "ASC"]],
        });

      res.json(lessons);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

exports.deleteLesson = async (
  req,
  res
) => {
  try {
    const lesson =
      await Lesson.findByPk(
        req.params.id
      );

    if (!lesson) {
      return res.status(404).json({
        message: "Lesson not found",
      });
    }

    await lesson.destroy();

    res.json({
      message: "Lesson deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};