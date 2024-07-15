import httpStatus from "http-status";
import AppError from "../../error/appError";
import { TService } from "./service.interfach";
import { Service } from "./service.model";

const createServiceFromDB = async (payloads: TService) => {
  const resualt = await Service.create(payloads);
  return resualt;
};

const getSingalServiceFromDB = async (id: string) => {
  const resualt = await Service.findById(id);
  return resualt;
};
const getAllServiceFromDB = async () => {
  const resualt = await Service.find();
  return resualt;
};
const updathServiceFromDB = async (id: string, payloads: Partial<TService>) => {
  const service = await Service.findById(id);
  if (!service) {
    throw new AppError(httpStatus.BAD_REQUEST, "This Service is not Exisit");
  }
  const resualt = await Service.findByIdAndUpdate(id, payloads, { new: true });
  return resualt;
};

const deletedServiceFromDB = async (id: string) => {
  const service = await Service.findById(id);
  if (!service) {
    throw new AppError(httpStatus.BAD_REQUEST, "This Service is not Exisit");
  }
  const resualt = await Service.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return resualt;
};

export const ServicesService = {
  createServiceFromDB,
  getSingalServiceFromDB,
  getAllServiceFromDB,
  updathServiceFromDB,
  deletedServiceFromDB,
};
