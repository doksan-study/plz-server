const { product } = require("../../models")

/**
 * @swagger
 *  /product/:productId:
 *    delete:
 *      tags:
 *      - product
 *      summary: 상품 삭제
 *      description: 상품 삭제
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: params
 *          name: productId
 *          required: true
 *          description : 상품 id
 */
module.exports = async (req, res, next) => {
  const { productId } = req.params;

  await product.update({
    status: 99,
  },
    {
      where: {
        id: productId
      }
    }
  )

  return res.status(201).send({
    message: "상품이 삭제되었습니다.",
    data: null
  })
}