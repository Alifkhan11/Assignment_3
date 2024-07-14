import { model, Schema } from "mongoose";
import { TSlots } from "./slots.interfach";

const slotsmodelSchema = new Schema<TSlots>(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    isBooked: {
      type: String,
      enum: ["available", "canceled", "booked"],
      default: "available",
    },
  },
  {
    timestamps: true,
  },
);

export const Slots = model<TSlots>("Slots", slotsmodelSchema);
