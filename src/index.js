import express from "express";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import operationRouter from "./routes/operationRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(operationRouter);

app.listen(5000, () => {
  console.log("App running at port: 5000");
});
