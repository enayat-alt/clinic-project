const {
  Course,
  Chapter,
  Lesson,
} = require("../../models");


exports.getAllCourses = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;

    const offset = (page - 1) * limit;

    const { count, rows } =
      await Course.findAndCountAll({
        limit,
        offset,
        order: [["createdAt", "DESC"]],
      });

    res.status(200).json({
      courses: rows,

      pagination: {
        page,
        limit,
        total: count,
        totalPages: Math.ceil(
          count / limit
        ),
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findByPk(
      req.params.id,
      {
        include: [
          {
            model: Chapter,
            include: [Lesson],
          },
        ],
      }
    );

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      instructor: req.body.instructor,
      thumbnail: req.body.thumbnail,
      price: req.body.price,
      status: req.body.status,
      duration: req.body.duration,
      level: req.body.level,
      language: req.body.language,
      createdBy: req.user?.id || null,
    });

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(
      req.params.id
    );

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    await course.update(req.body);

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(
      req.params.id
    );

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    await course.destroy();

    res.status(200).json({
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};