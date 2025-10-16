import { Schema, model } from "mongoose";

interface IType {
  _id: number;
  nameType: string;
  levelId: number;
}

interface IDsa extends Document {
  _id: number;
  name: string;
  topicId: number;
  tier: "basic" | "advanced";
  types: IType[];
}

const TypeSchema = new Schema<IType>({
  _id: { type: Number, required: true },
  nameType: { type: String, required: true },
  levelId: { type: Number, required: true },
});

const dsaSchema = new Schema<IDsa>({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  topicId: { type: Number, required: true },
  tier: { type: String, enum: ["basic", "advanced"], default: "basic" },
  types: { type: [TypeSchema], required: true },
});

export const Dsa = model<IDsa>("datastructures_algorithms", dsaSchema); // 'tests' là tên collection
