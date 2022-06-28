import { product } from "../../models/product.js";

/**
 * @swagger
 *  /product:
 *    put:
 *      tags:
 *      - product
 *      summary: 상품 수정
 *      description: 상품 수정
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
 *              $ref: "#/definitions/productEdit"
 */
export const productEdit = async (req, res, next) => {
  const { productId, name, description, cost } = req.body;
  const thumbnail = req?.file?.path;

  await product.update({
    name,
    thumbnail,
    description,
    cost
  },
    {
      where: {
        id: productId,
      }
    }
  )

  const productData = await product.findOne({
    where: {
      id: productId
    },
    attributes: ["id", "name", "thumbnail", "description", "cost", "status", "createdAt"],
    raw: true,
  })

  return res.status(200).send({
    message: "상품 수정이 완료되었습니다.",
    data: productData
  })
}