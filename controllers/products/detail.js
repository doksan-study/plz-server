const { Product } = require("../../models");
const {
  deleteData
} = require("../../error/errorcode");

module.exports = async (req, res, next) => {
  const { productId } = req.params;

  const productData = await Product.findOne({
    where: {
      id: productId
    },
    attributes: ["id", "name", "thumbnail", "description", "cost", "status", "createdAt"],
    raw: true,
  })

  if (productData.status === 99) {
    return next(deleteData);
  } else {
    return res.status(200).send({
      message: "상품 상세정보 요청에 성공하였습니다.",
      data: productData
    });
  }
}