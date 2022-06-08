const { Product } = require("../../models")

module.exports = async (req, res, next) => {
  const { page, limit } = req.query;

  const offset = (parseInt(page) - 1) * parseInt(limit);

  const productData = await Product.findAndCountAll({
    offset,
    limit: parseInt(limit),
    where: {
      status: 0
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