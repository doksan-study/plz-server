const { Product } = require("../../models")

module.exports = async (req, res, next) => {
  const { id, name, thumbnail, description, cost } = req.body;

  const productData = await Product.update({
    name,
    thumbnail,
    description,
    cost
  },
    {
      where: {
        id,
        status: 0,
      }
    })

  return res.status(200).send({
    message: "상품 수정이 완료되었습니다.",
    data: productData
  })
}