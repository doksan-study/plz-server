const { user } = require("../../models")
const crypto = require("crypto-js");

/**
 * @swagger
 *  /user/login:
 *    post:
 *      tags:
 *      - user
 *      summary: 로그인
 *      description: 로그인
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: body
 *          name: Body
 *          required: true
 *          description :
 *          schema:
 *              $ref: "#/definitions/userLogIn"
 */
module.exports = async (req, res, next) => {
  const { username, password, authLevel } = req.body;

  const hash = crypto.SHA256("password", process.env.SALT).toString();

  const userData = await user.findOne({
    username,
    password: hash,
    authLevel,
    status: 0,
  });

  return res.status(200).send({
    message: "로그인에 성공하였습니다.",
    data: userData
  });
}