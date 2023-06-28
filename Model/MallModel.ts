import mongoose, { Document, Schema, model } from "mongoose"

export interface IMall extends Document{
    name?: string,
    description?: string,
    price?: number,
    image?: string
    category?: string
    brand?: string
    inStock?: boolean,
}

const mallProductsSchema:Schema<IMall> = new Schema({
    name: {
      type: String,
      required: [true, "Please enter a Name"],
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
    },
    brand: {
      type: String,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  }, {timestamps: true});
  
export const MallModel = model<IMall>("Mall", mallProductsSchema)
  