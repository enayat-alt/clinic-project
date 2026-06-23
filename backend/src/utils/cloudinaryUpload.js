// const streamifier = require("streamifier");
// const cloudinary = require("../config/cloudinary");

// const uploadToCloudinary = (
//   fileBuffer,
//   folder = "lessons"
// ) => {
//   return new Promise(
//     (resolve, reject) => {
//       const stream =
//         cloudinary.uploader.upload_stream(
//           {
//             resource_type: "auto",
//             folder,
//           },
//           (error, result) => {
//             if (error) {
//               reject(error);
//             } else {
//               resolve(result);
//             }
//           }
//         );

//       streamifier
//         .createReadStream(fileBuffer)
//         .pipe(stream);
//     }
//   );
// };

// module.exports = uploadToCloudinary;


const streamifier = require("streamifier");
const cloudinary = require("../config/cloudinary");

const uploadToCloudinary = (
  fileBuffer,
  folder = "lessons",
  resourceType = "auto"
) => {
  return new Promise(
    (resolve, reject) => {
      const stream =
        cloudinary.uploader.upload_stream(
          {
            resource_type: resourceType,
            folder,
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );

      streamifier
        .createReadStream(fileBuffer)
        .pipe(stream);
    }
  );
};

module.exports = uploadToCloudinary;