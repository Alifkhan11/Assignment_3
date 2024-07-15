import express from "express";
import { SlotsValidation } from "./slots.validation";
import validationRequest from "../../middlewere/validationRequest";
import { SlotsController } from "./slots.controller";
import auth from "../../middlewere/auth";
import { USER_ROLE } from "../auth/auth.interfach";

const router = express.Router();

router.post(
  "/services/slots",
  auth(USER_ROLE.admin),
  validationRequest(SlotsValidation.createSlotsValidationSchema),
  SlotsController.createSlots,
);
router.get(
  "/slots/availability",
  auth(USER_ROLE.admin, USER_ROLE.user),
  SlotsController.getAllSlots,
);

export const SlotsRouter = router;
