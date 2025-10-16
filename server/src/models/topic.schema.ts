import { Schema, model } from "mongoose";

interface ITopic extends Document {
  _id: number;
  name: string;
}

const topicSchema = new Schema<ITopic>({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
});

export const Topic = model<ITopic>("topics", topicSchema);
