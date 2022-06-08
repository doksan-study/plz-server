const { Review } = require("../../models")

module.exports = async (req, res, next) => {
  const { id, name, thumbnail, description, cost } = req.body;

  await Review.update({
    title,
    content
  },
    {
      where: {
        id,
      }
    }
  )

  const reviewData = await Review.findOne({
    where: {
      id
    },
    attributes: ["id", "title", "content", "status", "createdAt", "productId"],
    raw: true,
  })

  return res.status(200).send({
    message: "리뷰 수정이 완료되었습니다.",
    data: reviewData
  })
}