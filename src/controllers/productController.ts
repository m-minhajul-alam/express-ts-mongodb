import { Request, Response } from 'express';
import Product, { IProduct } from '../models/Product';
import { createProductValidation } from '../validation/productValidation';

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { error } = createProductValidation.validate(req.body);
    if (error) {
      res.status(400).json({ success: false, message: error.details[0].message });
      return;
    }

    const product: IProduct = new Product(req.body);
    await product.save();

    res.status(201).json({ success: true, message: 'Product created successfully!', data: product });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
      const products = await Product.find();
      res.status(200).json({ success: true, message: 'Products fetched successfully!', data: products });
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };
  
