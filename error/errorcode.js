module.exports = {
  // 404 Error
  deleteProduct: {
    status: 404,
    message: "삭제된 상품입니다.",
    errorCode: "PLZ404100"
  },

  notFoundProduct: {
    status: 404,
    message: "존재하지 않는 상품입니다.",
    errorCode: "PLZ404101"
  },

  deleteReview: {
    status: 404,
    message: "삭제된 리뷰입니다.",
    errorCode: "PLZ404200"
  },

  notFoundReview: {
    status: 404,
    message: "존재하지 않는 리뷰입니다.",
    errorCode: "PLZ404201"
  },

  unknownError: {
    status: 500,
    message: "오류가 발생하였습니다.",
    errorCode: "PLZ999999"
  }
}