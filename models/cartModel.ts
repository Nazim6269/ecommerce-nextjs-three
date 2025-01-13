import mongoose, { Document, Model, Schema } from "mongoose";

interface ICart extends Document {
  id: string;
}

const cartSchema: Schema<ICart> = new Schema({
  id: {
    type: String,
    required: true,
  },
});

export const cartModel: Model<ICart> =
  mongoose.models?.cart ?? mongoose.model<ICart>("cart", cartSchema);
