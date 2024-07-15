import httpStatus from "http-status";
import catchAcync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendRespons";
import { SlotsService } from "./slots.service";

const createSlots = catchAcync(async (req, res) => {
  const resuslt = await SlotsService.createSlotsFromDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slots created successfully",
    data: resuslt,
  });
});
const getAllSlots = catchAcync(async (req, res) => {
  const resuslt = await SlotsService.getAllSlots();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Available slots retrieved successfully",
    data: resuslt,
  });
});

export const SlotsController = {
  createSlots,
  getAllSlots,
};
