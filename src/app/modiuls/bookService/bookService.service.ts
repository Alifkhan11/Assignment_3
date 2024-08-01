import httpStatus from "http-status";
import AppError from "../../error/appError";
import { Slots } from "../slots/slots.model";
import { TBookService } from "./bookService.interfach";
import { BookService } from "./bookService.model";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../config";
import { User } from "../auth/auth.model";
import mongoose from "mongoose";

const createBookServiceFromDB = async (
  payloads: TBookService,
  token: string,
) => {
  const decoded = jwt.verify(
    token,
    config.JWT_SECRET_ACCESS_KE as string,
  ) as JwtPayload;

  const user = await User.findOne({ email: decoded?.email }, { _id: 1 });
  const customer = new mongoose.Types.ObjectId(user?._id);

  payloads.customer = customer;

  const slot = await Slots.findById(payloads.slotId);
  if (!slot) {
    throw new AppError(httpStatus.BAD_REQUEST, "This Slots Id is Not Exisit");
  }
  if (slot.isBooked === "booked") {
    throw new AppError(httpStatus.BAD_REQUEST, "This Slots is Booked");
  }
  const slotsFond = await Slots.findByIdAndUpdate(payloads.slotId, {
    isBooked: "booked",
  });
  if (!slotsFond) {
    throw new AppError(httpStatus.BAD_REQUEST, "This Slots is Booked");
  }
  const resualt = await BookService.create(payloads);
  return resualt;
};

const getAllBookServiceFromDB = async () => {
  const resualt = await BookService.find().populate(
    "serviceId customer slotId",
  );
  return resualt;
};

const getMyAllBookServiceFromDB = async (token: string) => {
  const decoded = jwt.verify(
    token,
    config.JWT_SECRET_ACCESS_KE as string,
  ) as JwtPayload;

  const email = decoded.email;
  const user = await User.findOne({ email });
  const resualt = await BookService.find({ customer: user?._id }).populate(
    "customer slotId serviceId",
  );
  return resualt;
};

export const BookingServiceService = {
  createBookServiceFromDB,
  getAllBookServiceFromDB,
  getMyAllBookServiceFromDB,
};
