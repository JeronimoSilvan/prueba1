import CartManager from '../managers/CartManager.js';
const cartManager = new CartManager('./src/data/carts.json');

// Crear un nuevo carrito
const createCart = (req, res) => {
    const newCart = cartManager.createCart();
    res.status(201).json(newCart);
};

// Obtener un carrito por ID
const getCartById = (req, res) => {
    const cart = cartManager.getCartById(parseInt(req.params.cid));
    if (cart) {
        res.json(cart);
    } else {
        res.status(404).json({ error: 'Carrito no encontrado' });
    }
};

// Agregar un producto al carrito
const addProductToCart = (req, res) => {
    const cart = cartManager.addProductToCart(
        parseInt(req.params.cid),
        parseInt(req.params.pid),
        req.body.quantity || 1
    );
    if (cart) {
        res.json(cart);
    } else {
        res.status(404).json({ error: 'Carrito no encontrado' });
    }
};

export default {
    createCart,
    getCartById,
    addProductToCart
};