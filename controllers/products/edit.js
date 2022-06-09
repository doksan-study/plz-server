const { Product } = require("../../models")

module.exports = async (req, res, next) => {
  const { id, name, description, cost } = req.body;
  const thumbnail = req.file.path;

  await Product.update({
    name,
    thumbnail,
    description,
    cost
  },
    {
      where: {
        id,
      }
    }
  )

  const productData = await Product.findOne({
    where: {
      id
    },
    attributes: ["id", "name", "thumbnail", "description", "cost", "status", "createdAt"],
    raw: true,
  })

  return res.status(200).send({
    message: "상품 수정이 완료되었습니다.",
    data: productData
  })
}