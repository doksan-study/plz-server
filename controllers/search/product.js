const { product } = require("../../models")
const sequelize = require("sequelize");
const Op = sequelize.Op;

const {
  notFoundSearchData
} = require("../../error/errorcode");

/**
 * @swagger
 *  /search/product:
 *    get:
 *      tags:
 *      - search
 *      summary: 상품 검색
 *      description: 상품 검색
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
 *        - in: query
 *          name: word
 *          description : 검색 할 키워드
 *          type: Number
 */
module.exports = async (req, res, next) => {
  const { page, limit, word } = req.query;

  const offset = (parseInt(page) - 1) * parseInt(limit);

  let productData;
  if (word) {
    productData = await product.findAndCountAll({
      offset,
      limit: parseInt(limit),
      where: {
        status: 0,
        [Op.or]: [
          {
            name: {
              [Op.like]: "%" + word + "%"
            }
          },
          {
            description: {
              [Op.like]: "%" + word + "%"
            }
          }
        ]
      },
      attributes: ["id", "name", "thumbnail", "description", "cost", "status", "createdAt"],
      raw: true,
    })
  } else {
    productData = await product.findAndCountAll({
      offset,
      limit: parseInt(limit),
      where: {
        status: 0,
      },
      attributes: ["id", "name", "thumbnail", "description", "cost", "status", "createdAt"],
      raw: true,
    })
  }

  if (!productData.count) {
    return next(notFoundSearchData);
  } else {
    return res.status(200).send({
      message: "상품 검색이 성공하였습니다.",
      data: productData.rows,
      count: productData.count
    })
  }
}