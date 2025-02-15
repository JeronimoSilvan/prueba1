import CartManager from '../managers/CartManager';
const cartManager = new CartManager('./src/data/carts.json');

const createCart = (req, res) => {
    const newCart = cartManager.createCart();
    res.status(201).json(newCart);
};

const getCartById = (req, res) => {
    const cart = cartManager.getCartById(parseInt(req.params.cid));
    if (cart) {
        res.json(cart);
    } else {
        res.status(404).json({ error: 'Carrito no encontrado' });
    }
};

const addProductToCart = (req, res) => {
    const cart = cartManager.addProductToCart(parseInt(req.params.cid), parseInt(req.params.pid), req.body.quantity || 1);
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