import { product } from "../../models/product.js";

import {
  notFoundProduct,
  deleteProduct
} from "../../error/errorcode.js";

/**
 * @swagger
 *  /product/:productId:
 *    get:
 *      tags:
 *      - product
 *      summary: 상품 상세정보
 *      description: 상품 상세정보
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
export const productDetail = async (req, res, next) => {
  const { productId } = req.params;

  const productData = await product.findOne({
    where: {
      id: productId
    },
    attributes: ["id", "name", "thumbnail", "description", "cost", "status", "createdAt"],
    raw: true,
  })

  if (!productData) {
    return next(notFoundProduct);
  }
  else if (productData.status === 99) {
    return next(deleteProduct);
  } else {
    return res.status(200).send({
      message: "상품 상세정보 요청에 성공하였습니다.",
      data: productData
    });
  }
}