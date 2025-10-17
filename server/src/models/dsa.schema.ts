import { Schema, model } from "mongoose";

interface IDsa extends Document {
  _id: number;
  name: string;
  domainId: number;
}

const dsaSchema = new Schema<IDsa>({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  domainId: { type: Number, required: true },
});

export const Dsa = model<IDsa>("datastructures_algorithms", dsaSchema); // 'tests' là tên collection
