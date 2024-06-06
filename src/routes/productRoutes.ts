import express from 'express';
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct, searchProducts } from '../controllers/productController';

const router = express.Router();

router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:productId', getProductById);
router.put('/:productId', updateProduct);
router.delete('/:productId', deleteProduct);
router.get('/search', searchProducts);

export default router;
