const { Lesson } = require("../../models");
const uploadToCloudinary = require("../../utils/cloudinaryUpload");

exports.createLesson = async (req, res) => {
  try {
    // let fileUrl = null;

    // if (req.file) {
    //   const uploadedFile =
    //     await uploadToCloudinary(
    //       req.file.buffer,
    //       "lessons"
    //     );

    //   fileUrl =
    //     uploadedFile.secure_url;
    // }

    let fileUrl = null;

    if (req.file) {
      let resourceType = "auto";

      if (req.body.type === "pdf") {
        resourceType = "raw";
      }

      // const uploadedFile = await uploadToCloudinary(
      //   req.file.buffer,
      //   "lessons",
      //   resourceType,
      // );

      // console.log(uploadedFile);

      // fileUrl = uploadedFile.secure_url;

      console.log("TYPE:", req.body.type);
      console.log("RESOURCE TYPE:", resourceType);

      const uploadedFile = await uploadToCloudinary(
        req.file.buffer,
        "lessons",
        resourceType,
      );

      console.log("CLOUDINARY RESOURCE:", uploadedFile.resource_type);

      console.log("CLOUDINARY URL:", uploadedFile.secure_url);
      console.log("FULL CLOUDINARY RESPONSE:");

      console.log(uploadedFile);

      fileUrl = uploadedFile.secure_url;
    }

    const lesson = await Lesson.create({
      title: req.body.title,
      type: req.body.type,
      fileUrl,
      duration: req.body.duration,
      chapterId: req.body.chapterId,
      order: req.body.order || 1,
      description: req.body.description,
    });

    res.status(201).json(lesson);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getLessonsByChapter = async (req, res) => {
  try {
    const lessons = await Lesson.findAll({
      where: {
        chapterId: req.params.chapterId,
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

exports.deleteLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findByPk(req.params.id);

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
