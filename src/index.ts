import express from "express";
// import cors from "cors";
import { userRouter } from "./router";

const app = express();

app.use(express.json());
// app.use(cors());

app.use("/lama", userRouter);

app.listen(3003, () => {
  console.log("Server is running at 3003");
});
