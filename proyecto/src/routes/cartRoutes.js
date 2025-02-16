import express from 'express';
import cartController from '../controllers/cartController.js';

const router = express.Router();

// Crear un nuevo carrito
router.post('/', cartController.createCart);

// Obtener un carrito por ID
router.get('/:cid', cartController.getCartById);

// Agregar un producto al carrito
router.post('/:cid/product/:pid', cartController.addProductToCart);

export default router;