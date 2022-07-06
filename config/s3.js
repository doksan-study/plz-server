const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const dotenv = require("dotenv");
dotenv.config();

const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: process.env.S3_REGION
})

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
      // cb(null, `test/${Date.now()}_${file.originalname}`) // 폴더에 저장
    }
  }),
})

exports.upload = multer(upload);