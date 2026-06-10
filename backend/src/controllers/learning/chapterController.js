const { Chapter, Lesson } = require("../../models");

exports.createChapter = async (req, res) => {
  try {
    const chapter = await Chapter.create({
      title: req.body.title,
      courseId: req.body.courseId,
      order: req.body.order || 1,
      description:req.body.description
        
    });

    res.status(201).json(chapter);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getChaptersByCourse = async (
  req,
  res
) => {
  try {
    const chapters = await Chapter.findAll({
      where: {
        courseId: req.params.courseId,
      },
      include: [Lesson],
      order: [["order", "ASC"]],
    });

    res.json(chapters);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteChapter = async (
  req,
  res
) => {
  try {
    const chapter =
      await Chapter.findByPk(
        req.params.id
      );

    if (!chapter) {
      return res.status(404).json({
        message: "Chapter not found",
      });
    }

    await chapter.destroy();

    res.json({
      message: "Chapter deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};