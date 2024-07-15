import { Types } from "mongoose";

export type TBookService = {
  customer: Types.ObjectId;
  serviceId: Types.ObjectId;
  slotId: Types.ObjectId;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
};
