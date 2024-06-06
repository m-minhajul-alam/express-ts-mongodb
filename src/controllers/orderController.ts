import { Request, Response } from 'express';
import Product, { IProduct } from '../models/Product';

export const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const { productId, quantity } = req.body;
    const product: IProduct | null = await Product.findById(productId);

    if (!product) {
      res.status(404).json({ success: false, message: 'Product not found' });
      return;
    }

    if (quantity > product.inventory.quantity) {
      res.status(400).json({ success: false, message: 'Insufficient quantity available in inventory' });
      return;
    }

    product.inventory.quantity -= quantity;
    if (product.inventory.quantity <= 0) {
      product.inventory.inStock = false;
    }

    await product.save();

    res.status(201).json({ success: true, message: 'Order created successfully!', data: req.body });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
