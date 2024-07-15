import e from "express";
import validationRequest from "../../middlewere/validationRequest";
import { BookingServiceValidation } from "./bookService.validation";
import { BookingServiceController } from "./bookService.controller";
import auth from "../../middlewere/auth";
import { USER_ROLE } from "../auth/auth.interfach";

const router = e.Router();

router.post(
  "/bookings",
  auth(USER_ROLE.user),
  validationRequest(BookingServiceValidation.createBookServiceValidationSchema),
  BookingServiceController.createBookService,
);

router.get(
  "/bookings",
  auth(USER_ROLE.admin),
  BookingServiceController.getAllBookService,
);

router.get(
  "/my-bookings",
  auth(USER_ROLE.user),
  BookingServiceController.getMyAllBookService,
);

export const BookingServiceRouter = router;
