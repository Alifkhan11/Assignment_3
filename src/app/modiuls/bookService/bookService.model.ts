import { model, Schema } from "mongoose";
import { TBookService } from "./bookService.interfach";

const bookServiceModelSchema = new Schema<TBookService>(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    serviceId: {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
    slotId: {
      type: Schema.Types.ObjectId,
      ref: "Slots",
    },
    vehicleType: {
      type: String,
      required: true,
    },
    vehicleBrand: {
      type: String,
      required: true,
    },
    vehicleModel: {
      type: String,
      required: true,
    },
    manufacturingYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const BookService = model<TBookService>(
  "BookSercice",
  bookServiceModelSchema,
);
