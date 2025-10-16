import { Schema, model } from "mongoose";

interface IProficiencyLevel extends Document {
  _id: number;
  name: string;
  description: string;
  signs: string[];
}

const proficiencyLevelSchema = new Schema<IProficiencyLevel>({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  signs: { type: [], required: true },
});

export const ProficiencyLevel = model<IProficiencyLevel>(
  "proficiency_levels",
  proficiencyLevelSchema
);
