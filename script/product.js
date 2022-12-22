import handleSetLocation from '../config/handlers.js';
import productPage from '../config/classes.js';

const producCardtWrapper = document.querySelector('.container');
productPage.createProduct(producCardtWrapper);

const productButtons = document.querySelector('.product__btn');
productButtons.addEventListener('click', handleSetLocation);















// console.log(productPage);

// showProductInfo(Data);
// export function showProductInfo(data) {
//     const productId = history.state;
//     const productStore = LocalStorageUtil.getProduct();

//     const {pushProduct, product,} = LocalStorageUtil.putProduct();
//     // console.log(pushProduct, product);
//     console.log(productStore);
//     let activeText = '';
//     let activeClass = '';
//     const productWrapper = document.querySelector('.product');
//     data.forEach(({id, name, price, isActive}) => {
//         if(productStore.indexOf(id) === -1){
//             activeText = 'Add to cart';
//         }else{
//             activeText = 'Remove cart';
//             activeClass = ' product__btn-activ';
//         }
//         if (id === productId) {
//             console.log(id);
//             productWrapper.innerHTML += `
//             <div class="product__title">${name}</div>
//             <div class="product__image"></div>
//             <div onclick = ''; class="product__price">${price}</div>
//             <button class="product__btn ${activeClass}" type="button" ${isActive ? '' : 'disabled' }>
//                 ${activeText}
//             </button>`
//         }
//     });
// }

