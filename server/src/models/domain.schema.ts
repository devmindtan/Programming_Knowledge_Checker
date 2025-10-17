import { Schema, model } from "mongoose";

interface IDomain extends Document {
  _id: number;
  name: string;
}

const domainSchema = new Schema<IDomain>({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
});

export const Domain = model<IDomain>("domains", domainSchema);
