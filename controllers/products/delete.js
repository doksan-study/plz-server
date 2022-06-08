const { Product } = require("../../models")

module.exports = async (req, res, next) => {
  const { productId } = req.params;

  await Product.update({
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