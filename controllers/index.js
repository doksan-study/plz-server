module.exports = {
  // 상품 컨트롤러
  productCreate: require("./products/create"),
  productEdit: require("./products/edit"),
  productList: require("./products/list"),
  productDetail: require("./products/detail"),
  productDelete: require("./products/delete"),

  // 리뷰 컨트롤러
  reviewWrite: require("./reviews/write"),
  reviewEdit: require("./reviews/edit"),
  reviewList: require("./reviews/list"),
  reviewDetail: require("./reviews/detail"),
  reviewDelete: require("./reviews/delete"),
}