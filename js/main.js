'use strict';

const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price, img = 'http://placeimg.com/200/150/tech') => {
    return `<div class="product-card col-sm">
            <img src="${img}" class="card-img-top" alt="Картинка">
            <div class="product-item card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${price}</p>
                <button class="buy-btn btn btn-success"">Добавить в корзину</button>
            </div>
            </div>`;
};

const renderProducts = list => {
    const productList = list.map(item => renderProduct(item.title, item.price));
    // document.querySelector('.products').innerHTML = productList;
    productList.forEach(element => {
        document.querySelector('.products').insertAdjacentHTML('beforeend', element);
    });
};

renderProducts(products);