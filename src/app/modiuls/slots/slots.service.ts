import httpStatus from "http-status";
import AppError from "../../error/appError";
import { Service } from "../Service/service.model";
import { TSlots } from "./slots.interfach";
import { Slots } from "./slots.model";

const createSlotsFromDB = async (payloads: TSlots) => {
  const service = await Service.findById(payloads.service);
  if (!service) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "This service is not found Or Deleted",
    );
  }

  const isExisitService = await Slots.findOne({ service });

  if (isExisitService) {
    throw new AppError(httpStatus.BAD_REQUEST, "This service is Exixit");
  }

  function convartTimeToMinut(time: string): number {
    const [hours, minuts] = time.split(":").map(Number);
    return hours * 60 + minuts;
  }
  function convertMinutesToTime(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
  }

  const startMinuts = convartTimeToMinut(payloads.startTime);
  const endMinuts = convartTimeToMinut(payloads.endTime);
  const totalDuration = endMinuts - startMinuts;
  const numberOfSlots = Math.floor(totalDuration / service?.duration);

  const slotsTOCreate = [];

  for (let i = 0; i < numberOfSlots; i++) {
    const slotStartTime = convertMinutesToTime(
      startMinuts + i * service.duration,
    );
    const slotEndTime = convertMinutesToTime(
      startMinuts + (i + 1) * service.duration,
    );

    const slot = new Slots({
      service: payloads.service,
      date: payloads.date,
      startTime: slotStartTime,
      endTime: slotEndTime,
    });
    slotsTOCreate.push(slot);
  }

  const resualt = await Slots.insertMany(slotsTOCreate);
  return resualt;
};

const getAllSlots = async () => {
  const resrualt = await Slots.find().populate("service");
  return resrualt;
};

export const SlotsService = {
  createSlotsFromDB,
  getAllSlots,
};
