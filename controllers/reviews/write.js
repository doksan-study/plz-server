const { Review } = require("../../models")

/**
 * @swagger
 *  /review:
 *    post:
 *      tags:
 *      - review
 *      summary: 리뷰 작성
 *      description: 리뷰 작성
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
 *              $ref: "#/definitions/reviewWrite"
 */
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