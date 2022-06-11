const { Review } = require("../../models")

/**
 * @swagger
 *  /review:
 *    put:
 *      tags:
 *      - review
 *      summary: 리뷰 수정
 *      description: 리뷰 수정
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: body
 *          name: Body
 *          required: true
 *          description :
 *          schema:
 *              $ref: "#/definitions/reviewEdit"
 */
module.exports = async (req, res, next) => {
  const { reviewId, title, content } = req.body;

  await Review.update({
    title,
    content
  },
    {
      where: {
        id: reviewId,
      }
    }
  )

  const reviewData = await Review.findOne({
    where: {
      id: reviewId
    },
    attributes: ["id", "title", "content", "status", "createdAt", "productId"],
    raw: true,
  })

  return res.status(200).send({
    message: "리뷰 수정이 완료되었습니다.",
    data: reviewData
  })
}