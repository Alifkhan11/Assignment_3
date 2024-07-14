import express from "express";
import { UserController } from "./auth.controller";
import validationRequest from "../../middlewere/validationRequest";
import { UserValidation } from "./auth.validation";

const router = express.Router();

router.post(
  "/signup",
  validationRequest(UserValidation.userValidationSchema),
  UserController.signuptUser,
);

router.post("/login", UserController.loginUser);

export const UserRouter = router;
