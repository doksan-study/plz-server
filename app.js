import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import { sequelize } from "./models/index.js";
import { router } from "./routes/index.js";
import { swaggerUi, specs } from "./swagger/index.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

const corsOption = {
  origin: "*",
  credentials: true,
};

sequelize.sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch((err) => {
    console.log("db 연결 실패", err);
  })

app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors(corsOption));
app.use(cookieParser());

app.use("/", router)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/", (req, res, next) => {
  return res.status(200).send({ message: "Welcome Plz" });
});

app.use((req, res, next) => {
  return res.status(404).send({ message: "API를 확인해주세요." });
});

app.use((err, req, res, next) => {
  return res.status(err.status).send({
    message: err.message,
    data: {
      errorCode: err.errorCode
    }
  })
});

const server = app.listen(port, () => {
  console.log(`서버가 ${port}로 실행 중입니다.`);
});

export default server;