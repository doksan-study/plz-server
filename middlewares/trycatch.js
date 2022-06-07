const { unknownError } = require("../middlewares/errorcode")

tryCatch = (fn) => {
  return (async (req, res, next) => {
    try {
      return await fn(req, res, next)
    }
    catch (err) {
      console.error(err)
      return next(unknownError);
    }
  })
};

module.exports = tryCatch;