'use strict';

import productPage from '../config/classes.js';
import handleSetLocation from '../config/handlers.js';

const products = document.querySelector('.products');
productPage.createListProducts(products);

const productButtons = document.querySelectorAll('.product__btn');
productButtons.forEach((productButtons) => productButtons.addEventListener('click', handleSetLocation));

const productsContainer = document.querySelector('.products');
productsContainer.addEventListener('click', pushProductInHistory);


function pushProductInHistory(e) {
    productPage.createProduct();
    if (e.target.closest('.product')) {
        const productId = e.target.closest('.product').dataset.productId;
        console.log(productId);
        window.history.pushState(productId, null, './product.html');
        window.location = './product.html';
    };
};























// showProductsCards(Data, products)
// function showProductsCards(data, parentTag ) {
//     const productStore = LocalStoregieProduct.getProduct()
//     // console.log(productStore);
//     data.forEach(({id, img, name, price, isActive}) => {
//         // console.log(productStore.indexOf(id));
//         let activeClass = '';
//         let activeText = '';
//         if(productStore.indexOf(id) === -1){
//             activeText = 'Add to cart';
//         }else{
//             activeText = 'remove cart';
//         }

//         const product = new MyCustomElement('li')
//             .addClass('product')
//             .setAttribute('data-product-id', id).tag;
//         parentTag.append(product);

//         const productTitle = new MyCustomElement('h2')
//             .addClass('product__title').tag;
//         productTitle.innerText = name;    
//         product.append(productTitle);

//         const productImage = new MyCustomElement('div')
//             .addClass('product__image').tag;
//         product.append(productImage);

//         const productPrice = new MyCustomElement('div')
//             .addClass('product__price').tag;
//         productPrice.innerText = price;
//         product.append(productPrice);

//         product.innerHTML += `
//         <button class="product__btn" ${isActive ? '' : 'disabled'} onclick="LocalStoregieProduct.addCart()" >${activeText}</button>
//         `
//     });
// }

// function addCart() {
//     console.log('ggggggggg');
// }

// productsWrapper.addEventListener('click', (e) => {
//     if (e.target.closest('.product__btn')) {
//         LocalStoregieProduct.putProduct(e.target.parentElement.dataset.productId)
//         productPage.handleSetLocationStorage(this)
//     }
// })



// const productButtons = document.querySelectorAll('.product__btn');
// productButtons.forEach((productButtons) => productButtons.addEventListener('click', (e) =>{
//     if (condition) {
        
//     }
//     LocalStoregieProduct.putProduct(e.target.parentElement.dataset.productId)
//     console.log(LocalStoregieProduct.putProduct(e.target.parentElement.dataset.productId))
//     console.log(e.target.parentElement.dataset.productId);

// }));

// products.addEventListener('click', (ev) => {
//     if(ev.target.parentElement.dataset.productId){
//         console.log(ev.target.parentElement);
//         }
//     })