const { user } = require("../../models")
const crypto = require("crypto-js");

/**
 * @swagger
 *  /user:
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
  const { username, name, password, authLevel } = req.body;

  const hash = crypto.SHA256("password", process.env.SALT).toString();

  const userData = await user.create({
    username,
    name,
    password: hash,
    authLevel,
    status: 0,
  });

  return res.status(201).send({
    message: "회원가입이 완료되었습니다.",
    data: userData
  });
}