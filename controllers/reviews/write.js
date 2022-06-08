const { Review } = require("../../models")

module.exports = async (req, res, next) => {
  const { productId, title, content } = req.body;

  const reviewData = await Review.create({
    title,
    content,
    status: 0,
    productId
  })

  return res.status(201).send({
    message: "리뷰 작성이 완료되었습니다.",
    data: reviewData
  })
}