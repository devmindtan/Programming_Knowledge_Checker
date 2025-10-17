import { Schema, model } from "mongoose";
import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

const AutoIncrement: any = AutoIncrementFactory(mongoose.connection as any);
interface ITopic {
  _id: number;
  name: string;
  dsaId: number;
  levelId: number;
  tier: "basic" | "advanced";
}

const topicSchema = new Schema<ITopic>(
  {
    _id: { type: Number },
    name: { type: String, required: true, unique: true },
    dsaId: { type: Number, required: true },
    levelId: { type: Number, required: true },
    tier: { type: String, enum: ["basic", "advanced"], default: "basic" },
  },
  { versionKey: false }
);

topicSchema.plugin(AutoIncrement, { inc_field: "_id" });

export const Topic = model<ITopic>("topics", topicSchema);
