import express from "express";
import auth from "../../middlewere/auth";
import { USER_ROLE } from "../auth/auth.interfach";
import validationRequest from "../../middlewere/validationRequest";
import { ServiceValidation } from "./service.validation";
import { ServiceController } from "./service.controller";

const router = express.Router();

router.post(
  "/services",
  auth(USER_ROLE.admin),
  validationRequest(ServiceValidation.createServiceValidationSchema),
  ServiceController.createService,
);

router.get(
  "/services/:id",
  auth(USER_ROLE.admin, USER_ROLE.user),
  ServiceController.getSingleService,
);

router.get(
  "/services",
  auth(USER_ROLE.admin, USER_ROLE.user),
  ServiceController.getAllService,
);

router.put(
  "/services/:id",
  auth(USER_ROLE.admin),
  validationRequest(ServiceValidation.updatedServiceValidationSchema),
  ServiceController.updathService,
);

router.delete(
  "/services/:id",
  auth(USER_ROLE.admin),
  ServiceController.deletedService,
);

export const ServiceRouter = router;
