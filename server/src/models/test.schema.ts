import { Schema, model } from "mongoose";

// 1️⃣ Tạo interface và schema đúng collection "tests"
export default interface ITest extends Document {
  name: string;
  age: number;
  email: string;
  createdAt: Date;
}

const testSchema = new Schema<ITest>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// **Chú ý:** tên model = tên collection ở MongoDB (Mongoose sẽ chuyển thành lowercase + plural)
export const Test = model<ITest>("Test", testSchema, "tests"); // 'tests' là tên collection
