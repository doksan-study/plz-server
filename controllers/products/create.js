const { Product } = require("../../models")

module.exports = async (req, res, next) => {
  const { name, description, cost } = req.body;
  const thumbnail = req.file.path;

  const productData = await Product.create({
    name,
    thumbnail,
    description,
    cost,
    status: 0
  })

  return res.status(201).send({
    message: "상품 등록이 완료되었습니다.",
    data: productData
  })
}