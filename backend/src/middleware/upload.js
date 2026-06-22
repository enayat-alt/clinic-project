const multer = require("multer");

const storage = multer.memoryStorage();

const fileFilter = (
  req,
  file,
  cb,
) => {
  const allowed = [
    "application/pdf",

    "video/mp4",
    "video/mpeg",
    "video/quicktime", // .mov
    "video/x-msvideo", // .avi
    "video/webm",
  ];

  if (
    allowed.includes(
      file.mimetype,
    )
  ) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only PDF and Video files are allowed",
      ),
      false,
    );
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize:
      500 * 1024 * 1024,
  },
});

module.exports = upload;