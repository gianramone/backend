// Ruta: routes/product.routes.js
import { Router } from 'express';
import {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    patchProduct,
    deleteProduct
} from '../controllers/product.controller.js';

const router = Router();

router.get('/', getAllProducts);
router.post('/', createProduct);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.patch('/:id', patchProduct);
router.delete('/:id', deleteProduct);

export default router;
