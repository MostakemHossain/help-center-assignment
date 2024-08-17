import { Schema, model } from "mongoose";
import { TCard } from "./card.interface";

const cardSchema = new Schema<TCard>(
  {
    id: {
      type: String,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Card = model<TCard>("Card", cardSchema);
