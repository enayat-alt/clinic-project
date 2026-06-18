// const rateLimit = require("express-rate-limit");

// const apiLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 500,
// });

// const loginLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 500,
//   message: {
//     success: false,
//     message: "Too many login attempts. Please try again later.",
//   },
// });

// const registerLimiter = rateLimit({
//   windowMs: 60 * 60 * 1000,
//   max: 500,
//   message: {
//     success: false,
//     message: "Too many registration attempts. Please try again later.",
//   },
// });

// module.exports = {
//   apiLimiter,
//   loginLimiter,
//   registerLimiter,
// };

// const rateLimit = require("express-rate-limit");

// const isDev =
//   process.env.NODE_ENV !== "production";

// const createLimiter = (options) => {
//   if (isDev) {
//     return (req, res, next) => next();
//   }

//   return rateLimit(options);
// };

// const apiLimiter = createLimiter({
//   windowMs: 15 * 60 * 1000,
//   max: 500,
// });

// const loginLimiter = createLimiter({
//   windowMs: 15 * 60 * 1000,

//   max: 500,
//   message: {
//     success: false,
//     message:
//       "Too many login attempts. Please try again later.",
//   },
// });

// const registerLimiter = createLimiter({
//   windowMs: 60 * 60 * 1000,
//   max: 500,
//   message: {
//     success: false,
//     message:
//       "Too many registration attempts. Please try again later.",
//   },
// });

// module.exports = {
//   apiLimiter,
//   loginLimiter,
//   registerLimiter,
// };