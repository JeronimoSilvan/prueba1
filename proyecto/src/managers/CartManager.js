const fs = require('fs');
const path = require('path');

class CartManager {
    constructor(filePath) {
        this.path = filePath;
        this.carts = [];
        this.loadCarts();
    }

    loadCarts() {
        if (fs.existsSync(this.path)) {
            const data = fs.readFileSync(this.path, 'utf-8');
            this.carts = JSON.parse(data);
        }
    }

    saveCarts() {
        fs.writeFileSync(this.path, JSON.stringify(this.carts, null, 2));
    }

    generateId() {
        return this.carts.length > 0 ? this.carts[this.carts.length - 1].id + 1 : 1;
    }

    createCart() {
        const newCart = { id: this.generateId(), products: [] };
        this.carts.push(newCart);
        this.saveCarts();
        return newCart;
    }

    getCartById(id) {
        return this.carts.find(cart => cart.id === id);
    }

    addProductToCart(cartId, productId, quantity = 1) {
        const cart = this.getCartById(cartId);
        if (cart) {
            const productIndex = cart.products.findIndex(p => p.product === productId);
            if (productIndex !== -1) {
                cart.products[productIndex].quantity += quantity;
            } else {
                cart.products.push({ product: productId, quantity });
            }
            this.saveCarts();
            return cart;
        }
        return null;
    }
}

module.exports = CartManager;