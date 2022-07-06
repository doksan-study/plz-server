const { product } = require("../../models")

/**
 * @swagger
 *  /product:
 *    post:
 *      tags:
 *      - product
 *      summary: 상품 등록
 *      description: 상품 등록
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
 *              $ref: "#/definitions/productRegister"
 */
module.exports = async (req, res, next) => {
  const { name, description, cost } = req.body;
  const thumbnail = req.file.location;

  const productData = await product.create({
    name,
    thumbnail,
    description,
    cost,
    status: 0
  });

  return res.status(201).send({
    message: "상품 등록이 완료되었습니다.",
    data: productData
  })
};