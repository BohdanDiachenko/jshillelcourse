const orderBtnWrap = document.querySelector('.basket');
const orderWrap = document.querySelector('.order');
const orderTitle = document.querySelector('.order__title');
const orderListWrap = document.querySelector('.order__list-wrap');
const ordersClose = document.querySelector('.orders__close');


function openCloseOrders() {
    orderWrap.classList.toggle('block');
    orderTitle.classList.toggle('order__title-green');
    orderListWrap.classList.toggle('vis__hidden');
    orderBtnWrap.classList.toggle('disNon');
    orderCounter.classList.toggle('disNon');
    ordersClose.classList.toggle('disNon');
}
orderBtnWrap.addEventListener('click', openCloseOrders);
ordersClose.addEventListener('click', openCloseOrders);

orderListWrap.addEventListener('click', (e) =>{
    if(e.target.classList.contains('plus__info')) {
        e.target.classList.toggle('minus__info');
        e.target.parentElement.nextElementSibling.classList.toggle('order__tab-height');
        e.stopPropagation();
    }
},{capture: true});




