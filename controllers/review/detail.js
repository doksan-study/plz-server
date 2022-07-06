const { review } = require("../../models");

const {
  deleteReview,
  notFoundReview
} = require("../../error/errorcode");

/**
 * @swagger
 *  /review/:reviewId:
 *    get:
 *      tags:
 *      - review
 *      summary: 리뷰 상세정보
 *      description: 리뷰 상세정보
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: params
 *          name: reviewId
 *          required: true
 *          description : 리뷰 id
 */
module.exports = async (req, res, next) => {
  const { reviewId } = req.params;

  const reviewData = await review.findOne({
    where: {
      id: reviewId
    },
    attributes: ["id", "title", "content", "status", "createdAt", "productId"],
    raw: true,
  })

  if (!reviewData) {
    return next(notFoundReview);
  }
  else if (reviewData.status === 99) {
    return next(deleteReview);
  } else {
    return res.status(200).send({
      message: "리뷰 상세정보 요청에 성공하였습니다.",
      data: reviewData
    });
  }
}