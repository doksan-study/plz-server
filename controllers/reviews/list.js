const { Review } = require("../../models")

module.exports = async (req, res, next) => {
  const { productId, page, limit } = req.query;

  const offset = (parseInt(page) - 1) * parseInt(limit);

  const reviewData = await Review.findAndCountAll({
    offset,
    limit: parseInt(limit),
    where: {
      status: 0,
      productId
    },
    attributes: ["id", "title", "content", "status", "createdAt", "productId"],
    raw: true,
  })

  return res.status(200).send({
    message: "리뷰 목록 요청에 성공하였습니다.",
    data: reviewData.rows,
    count: reviewData.count
  })
}