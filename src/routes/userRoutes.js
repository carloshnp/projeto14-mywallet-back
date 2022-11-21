import { Router } from "express";
import { signIn, signUp } from "../controllers/userController.js";
import { signInBodyValidation } from "../middlewares/signInBodyAuthMiddleware.js";
import { signUpBodyValidation } from "../middlewares/signUpBodyAuthMiddleware.js";

const userRouter = Router();

userRouter.post("/register", signUpBodyValidation, signUp);
userRouter.post("/", signInBodyValidation, signIn);

export default userRouter;
