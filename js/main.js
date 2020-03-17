'use strict';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this._render();
        this.total_sum();
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ]
    }

    _render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new Product(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render())
        }
    }

    total_sum() {
        let total_sum = 0
        for (let product of this.goods) {
            total_sum = total_sum + product.price
        }
        console.log(total_sum);
        
    }
}

class Product {
    constructor(product, img = 'http://placeimg.com/200/150/tech') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-card col-sm" data-id="${this.id}">
                    <img src="${this.img}" class="card-img-top" alt="Картинка">
                    <div class="product-item card-body">
                        <h5 class="card-title">${this.title}</h5>
                        <p class="card-text">${this.price}</p>
                        <button class="buy-btn btn btn-success"">Добавить в корзину</button>
                    </div>
                    </div>`;
    }
}

new ProductList();


class BasketItem {
    // класс для отрисовки элемента в корзине
}

class Basket {
    // класс для составления корзины, вызова метода класса для отрисовки каждого элемента
    // редактирования и удаления элементов корзины.
}