import { Schema, model } from "mongoose";
const ToySchema = new Schema({ name: String });
const CategorySchema = new Schema(
  {
    category: [{ ToySchema }],
  },
  {
    timestamps: true,
    collection: "category",
  }
);

export default model("category", CategorySchema);
