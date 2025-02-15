const ProductManager = require('../managers/ProductManager');
const productManager = new ProductManager('./src/data/products.json');

const getProducts = (req, res) => {
    const products = productManager.getProducts();
    res.json(products);
};

const getProductById = (req, res) => {
    const product = productManager.getProductById(parseInt(req.params.pid));
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
};

const addProduct = (req, res) => {
    const newProduct = productManager.addProduct(req.body);
    res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
    const updatedProduct = productManager.updateProduct(parseInt(req.params.pid), req.body);
    if (updatedProduct) {
        res.json(updatedProduct);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
};

const deleteProduct = (req, res) => {
    const deletedProduct = productManager.deleteProduct(parseInt(req.params.pid));
    if (deletedProduct) {
        res.json(deletedProduct);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
};

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
};