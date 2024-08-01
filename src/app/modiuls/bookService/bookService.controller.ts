import httpStatus from "http-status";
import catchAcync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendRespons";
import { BookingServiceService } from "./bookService.service";

const createBookService = catchAcync(async (req, res) => {
  const token = req.headers.authorization as string;
  const orizinalToken=token.slice(7)
  const resualt = await BookingServiceService.createBookServiceFromDB(
    req.body,
    orizinalToken,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking successful",
    data: resualt,
  });
});

const getAllBookService = catchAcync(async (req, res) => {
  const resualt = await BookingServiceService.getAllBookServiceFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All bookings retrieved successfully",
    data: resualt,
  });
});

const getMyAllBookService = catchAcync(async (req, res) => {
  const token = req.headers.authorization as string;
  const orizinalToken=token.slice(7)
  const resualt = await BookingServiceService.getMyAllBookServiceFromDB(orizinalToken);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User bookings retrieved successfully",
    data: resualt,
  });
});

export const BookingServiceController = {
  createBookService,
  getAllBookService,
  getMyAllBookService,
};
