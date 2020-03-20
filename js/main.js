'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

let getRequest = (url, cb) => {
    // let xhr = new XMLHttpRequest();
    // xhr.open('GET', url, true);
    // xhr.onreadystatechange = () => {
    //     if (xhr.readyState === 4) {
    //         if (xhr.status !== 200) {
    //             console.log('Error');
    //         }
    //         else {
    //             cb(xhr.responseText);
    //         }
    //     }
    // };
    // xhr.send();
    fetch(url).then(result => result.json())
    .then((data) => cb(data))
    .catch(error => console.log(error));
};

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        // this._fetchProducts();
        this._getProducts()
        .then(data => {
            this.goods = [...data];
            this.render();
        });
        this.total_sum();
    }

    // _fetchProducts() {
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         this.goods = JSON.parse(data);
    //         this._render();
    //     })
    // }

    _getProducts() {
        return fetch(API)
        .then(result => result.json())
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new Product(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render())
        }
    }

}

class Product {
    constructor(product, img = 'http://placeimg.com/200/150/tech') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
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
    constructor(product) {
        this.title = product.product_name;
        this.price = product.price
    }

    render() {
        return
    }
}

class Basket {
    // класс для составления корзины, вызова метода класса для отрисовки каждого элемента
    // редактирования и удаления элементов корзины.
    constructor(container = '.basket') {
        this.container = container;
        this.basketGoods = [];
    }

    addToBasket() {

    }

    deleteFromBasket() {

    }

    renderBasket() {
        
    }
}