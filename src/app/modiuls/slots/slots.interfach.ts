import { Types } from "mongoose";

export type TSlots = {
  service: Types.ObjectId;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: "available" | "canceled" | "booked";
};
