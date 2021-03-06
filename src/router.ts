import Router from "express";
import userController from "./controllers/userController";

export const userRouter = Router()

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)