import { Request, Response } from "express";
import { IMall, MallModel } from "../Model/MallModel";

export const viewAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await MallModel.find();
    if (products.length >= 0) {
      res.status(404).json({
        message: "No Available Products For Now",
      });
    }
    res.status(200).json({
      message: "SuccessFully Viewed All Available Products",
      data: products,
    });
  } catch (error: any) {
    //Internal Server error status code = 500
    return res.status(500).json(error.message);
  }
};

export const viewSingleProduct = async (req: Request, res: Response) => {
  try {
    const product = await MallModel.findById(req.params.productID);
    if (!product) {
      return res.status(200).json({
        message: "This Product is Out Of Stock for Now",
      });
    }
    return res.status(200).json({
      message: "SuccessFully Viewed Single Product",
      data: product,
    });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const stockProducts = async (
  req: Request<{}, {}, IMall>,
  res: Response
) => {
  try {
    const { name, description, price, image, category, brand, inStock } =
      req.body;
      const Image = brand?.charAt(0).toUpperCase()
    const newProduct = await MallModel.create({
      name,
      description,
      price,
      image:Image,
      category,
      brand,
      inStock,
    });
    return res.status(201).json({
      message: "Products are Currently Available and in Stock",
      data: newProduct,
    });
  } catch (error: any) {
    //Internal Server error status code = 500
    return res.status(500).json(error.message);
  }
};
