const { Review } = require("../../models")

module.exports = async (req, res, next) => {
  const { reviewId } = req.params;

  await Review.update({
    status: 99,
  },
    {
      where: {
        id: reviewId
      }
    }
  )

  return res.status(201).send({
    message: "리뷰가 삭제되었습니다.",
    data: null
  })
}