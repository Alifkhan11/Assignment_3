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
  const resualt = await Service.findByIdAndUpdate(id, payloads, { new: true });
  return resualt;
};

const deletedServiceFromDB = async (id: string) => {
  const resualt = await Service.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return resualt;
};




// const createSlotsFromDB = async (payloads: TSlots) => {
//   const serviceid = payloads.service;
//   const service = await Service.findById(serviceid);
//   if (!service) {
//     throw new AppError(httpStatus.BAD_REQUEST, "This service is Exixit");
//   }

//   function convartTimeToMinut(time: string): number {
//     const [hours, minuts] = time.split(":").map(Number);
//     return hours * 60 + minuts;
//   }
//   function convertMinutesToTime(minutes: number): string {
//     const hours = Math.floor(minutes / 60);
//     const mins = minutes % 60;
//     return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
//   }

//   const startMinuts = convartTimeToMinut(payloads.startTime);
//   const endMinuts = convartTimeToMinut(payloads.endTime);
//   const totalDuration = endMinuts - startMinuts;
//   const numberOfSlots = Math.floor(totalDuration / service?.duration);

//   const slotsTOCreate = [];

//   for (let i = 0; i < numberOfSlots; i++) {
//     const slotStartTime = convertMinutesToTime(
//       startMinuts + i * service.duration,
//     );
//     const slotEndTime = convertMinutesToTime(
//       startMinuts + (i + 1) * service.duration,
//     );

//     const slot = new Slots({
//       service: "60d9c4e4f3b4b544b8b8d1c5", // Example service ID
//       date: "2024-06-15",
//       startTime: slotStartTime,
//       endTime: slotEndTime,
//       isBooked: "available",
//     });
//     slotsTOCreate.push(slot);
//   }

//   const resualt = await Slots.insertMany(slotsTOCreate);
//   return resualt;
// };



export const ServicesService = {
  createServiceFromDB,
  getSingalServiceFromDB,
  getAllServiceFromDB,
  updathServiceFromDB,
  deletedServiceFromDB,
  // createSlotsFromDB
};
