const { Course, StudentCourse } = require("../../models");

exports.enrollInCourse = async (req, res) => {
  try {
    const userId = req.user.id;
    const { courseId } = req.params;

    // Check if course exists
    const course = await Course.findByPk(courseId);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    // Check if already enrolled
    const existingStudentCourse = await StudentCourse.findOne({
      where: {
        userId,
        courseId,
      },
    });

    if (existingStudentCourse) {
      return res.status(400).json({
        message: "You are already enrolled in this course",
      });
    }

    // Save student course
    await StudentCourse.create({
      userId,
      courseId,
    });

    return res.status(201).json({
      message: "Course enrolled successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};

exports.getMyCourses = async (req, res) => {
  try {
    const userId = req.user.id;
    const courses = await StudentCourse.findAll({
      where: {
        userId,
      },
      include: [
        {
          model: Course,
        },
      ],
    });
   
  
    return res.status(200).json(courses);
  } catch (error) {
    

    return res.status(500).json({
      message: "Server error",
    });
  }
};
