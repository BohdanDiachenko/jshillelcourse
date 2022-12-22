import productPage from './classes.js';
export default function handleSetLocation (e) {
    productPage.handleSetLocationStorage(e.target, e.target.parentElement.dataset.productId)
    console.log(e.target);
    console.log(e.target.parentElement.dataset.productId);
    e.preventDefault();
    e.stopImmediatePropagation();
}