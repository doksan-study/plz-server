module.exports = {
  // 상품 컨트롤러
  productCreate: require("./product/create"),
  productEdit: require("./product/edit"),
  productList: require("./product/list"),
  productDetail: require("./product/detail"),
  productDelete: require("./product/delete"),

  // 리뷰 컨트롤러
  reviewWrite: require("./review/write"),
  reviewEdit: require("./review/edit"),
  reviewList: require("./review/list"),
  reviewDetail: require("./review/detail"),
  reviewDelete: require("./review/delete"),

  // 검색 컨트롤러
  searchProduct: require("./search/product"),
}