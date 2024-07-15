import httpStatus from "http-status";
import catchAcync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendRespons";
import { ServicesService } from "./service.service";

const createService = catchAcync(async (req, res) => {
  const resualt = await ServicesService.createServiceFromDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service created successfully",
    data: resualt,
  });
});

const getSingleService = catchAcync(async (req, res) => {
  const resualt = await ServicesService.getSingalServiceFromDB(req.params?.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service retrieved successfully",
    data: resualt,
  });
});

const getAllService = catchAcync(async (req, res) => {
  const resualt = await ServicesService.getAllServiceFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service retrieved successfully",
    data: resualt,
  });
});

const updathService = catchAcync(async (req, res) => {
  const resualt = await ServicesService.updathServiceFromDB(
    req.params?.id,
    req?.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service updated successfully",
    data: resualt,
  });
});

const deletedService = catchAcync(async (req, res) => {
  const resualt = await ServicesService.deletedServiceFromDB(req.params?.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service deleted successfully",
    data: resualt,
  });
});

export const ServiceController = {
  createService,
  getSingleService,
  getAllService,
  updathService,
  deletedService,
};
