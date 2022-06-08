module.exports = {
  // 400 Error
  deleteData: {
    status: 400,
    message: "삭제된 데이터에 대한 요청입니다.",
    errorCode: "PLZ400100"
  },

  unknownError: {
    status: 500,
    message: "오류가 발생하였습니다.",
    errorCode: "PLZ999999"
  }
}