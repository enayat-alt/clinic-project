
const express = require("express");
const router = express.Router();

const streamifier = require("streamifier");
const upload = require("../../middleware/upload");
const cloudinary = require("../../config/cloudinary");

router.post(
  "/",
  upload.single("file"),
  async (req, res) => {
    try {
      const result = await new Promise(
        (resolve, reject) => {
          const stream =
            cloudinary.uploader.upload_stream(
              {
                resource_type: "auto",
                folder: "lessons",
              },
              (error, result) => {
                if (error) {
                  reject(error);
                } else {
                  resolve(result);
                }
              },
            );

          streamifier
            .createReadStream(
              req.file.buffer,
            )
            .pipe(stream);
        },
      );

      res.json({
        success: true,
        url: result.secure_url,
        publicId:
          result.public_id,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  },
);

module.exports = router;