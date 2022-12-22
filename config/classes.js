import LocalStorageUtil from '../utils/localStorageUtil.js';
import Data from '../script/data.js';

class MyCustomElement {
    constructor(selector) {
        this.tag = document.createElement(selector);
    }

    addClass(name) {
        this.tag.classList.add(name);
        return this;
    }

    setAttribute(name, value) {
        this.tag.setAttribute(name, value);
        return this;
    }

}

class Product {
    constructor(){
        this.classNameActive = 'product__btn-activ';
        this.labelAdd = 'Add to cart';
        this.labelRemove = 'Remove cart';
    } 

    handleSetLocationStorage(element, id) {
        const {pushProduct} = LocalStorageUtil.putProduct(id);
        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        }else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
    }
    createListProducts(parentTag) {
        const productStore = LocalStorageUtil.getProduct();

        Data.forEach(({id, name, price, isActive}) => {
            let activeClass = '';
            let activeText = '';

            if(productStore.indexOf(id) === -1){
                activeText = this.labelAdd;
            }else{
                activeText = this.labelRemove;
                activeClass = '' + this.classNameActive;
            };
            
            const product = new MyCustomElement('li')
                .addClass('product')
                .setAttribute('data-product-id', id).tag;
            parentTag.append(product);
            
            const productTitle = new MyCustomElement('h2')
                .addClass('product__title').tag;
            productTitle.innerText = name;    
            product.append(productTitle);
            
            const productImage = new MyCustomElement('div')
                .addClass('product__image').tag;
            product.append(productImage);
            
            const productPrice = new MyCustomElement('div')
                .addClass('product__price').tag;
            productPrice.innerText = price;
            product.append(productPrice);
            
            product.innerHTML += `
            <button class="product__btn ${activeClass}" ${isActive ? '' : 'disabled'} >${activeText}</button>
            `
        });
    }
    createProduct(perentTag) {
        const productId = history.state;
        const productStore = LocalStorageUtil.getProduct();

        Data.forEach(({id, name, price, isActive}) => {
            let activeClass = '';
            let activeText = '';

            if(productStore.indexOf(id) === -1){
                activeText = this.labelAdd;
            }else{
                activeText = this.labelRemove;
                activeClass = '' + this.classNameActive;
            };
            
            if (id === productId) {
                perentTag.innerHTML += `
                <div class="product" data-product-id = '${id}'>
                    <div class="product__title">${name}</div>
                    <div class="product__image"></div>
                    <div onclick = ''; class="product__price">${price}</div>
                    <button class="product__btn ${activeClass}" type="button" ${isActive ? '' : 'disabled' }>
                        ${activeText}
                    </button>
                </div>`
            };
        });
    };
};
const productPage = new Product();
export default  productPage;