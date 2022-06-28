import { review } from "../../models/review.js";

/**
 * @swagger
 *  /review/:reviewId:
 *    delete:
 *      tags:
 *      - review
 *      summary: 리뷰 삭제
 *      description: 리뷰 삭제
 *      consumes:
 *      - application/json
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: params
 *          name: reviewId
 *          required: true
 *          description : 리뷰 id
 */
export const reviewDelete = async (req, res, next) => {
  const { reviewId } = req.params;

  await review.update({
    status: 99,
  },
    {
      where: {
        id: reviewId
      }
    }
  )

  return res.status(200).send({
    message: "리뷰가 삭제되었습니다.",
    data: null
  })
}