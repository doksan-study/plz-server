const { product } = require("../../models")
const sequelize = require("sequelize");
const Op = sequelize.Op;

/**
 * @swagger
 *  /product/list:
 *    get:
 *      tags:
 *      - product
 *      summary: 상품 목록
 *      description: 상품 목록
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 *      parameters:
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
  const { page, limit, word } = req.query;

  const offset = (parseInt(page) - 1) * parseInt(limit);

  let productData;
  productData = await product.findAndCountAll({
    offset,
    limit: parseInt(limit),
    where: {
      status: 0,
    },
    attributes: ["id", "name", "thumbnail", "description", "cost", "status", "createdAt"],
    raw: true,
  })

  return res.status(200).send({
    message: "상품 목록 요청에 성공하였습니다.",
    data: productData.rows,
    count: productData.count
  })
}