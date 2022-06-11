const { Review } = require("../../models")

/**
 * @swagger
 *  /review/list:
 *    get:
 *      tags:
 *      - review
 *      summary: 리뷰 목록
 *      description: 리뷰 목록
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 *      parameters:
  *        - in: query
 *          name: productId
 *          description : 상품 id
 *          type: Number
 *        - in: query
 *          name: page
 *          description : 요청 할 페이지 번호
 *          type: Number
 *        - in: query
 *          name: limit
 *          description : 요청 할 페이지의 데이터 수
 *          type: Number
 */
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