// 404 Error
export const deleteProduct = {
  status: 404,
  message: "삭제된 상품입니다.",
  errorCode: "PLZ404100"
}

export const notFoundProduct = {
  status: 404,
  message: "존재하지 않는 상품입니다.",
  errorCode: "PLZ404101"
}

export const deleteReview = {
  status: 404,
  message: "삭제된 리뷰입니다.",
  errorCode: "PLZ404200"
}

export const notFoundReview = {
  status: 404,
  message: "존재하지 않는 리뷰입니다.",
  errorCode: "PLZ404201"
}

export const notFoundSearchData = {
  status: 404,
  message: "검색내역이 존재하지 않습니다.",
  errorCode: "PLZ404300"
}

export const unknownError = {
  status: 500,
  message: "오류가 발생하였습니다.",
  errorCode: "PLZ999999"
}
