const { Review } = require("../../models");

const {
  deleteData
} = require("../../error/errorcode");

module.exports = async (req, res, next) => {
  const { reviewId } = req.params;

  const reviewData = await Review.findOne({
    where: {
      id: reviewId
    },
    attributes: ["id", "title", "content", "status", "createdAt", "productId"],
    raw: true,
  })

  if (reviewData.status === 99) {
    return next(deleteData);
  } else {
    return res.status(200).send({
      message: "리뷰 상세정보 요청에 성공하였습니다.",
      data: reviewData
    });
  }
}