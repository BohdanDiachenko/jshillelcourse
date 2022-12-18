'use strict';

const categoryList = document.querySelector('#categories');
const productsList = document.querySelector('#products');
const description = document.querySelector('#description');
const buyButton = document.querySelector('#buy-button');
const descriptionWrap = document.querySelector('.description_wrapper');
const orderingForm = document.querySelector('#form');
const personalData = document.querySelector('.personalData');
const descriptionTitle = document.querySelector('.description_title');
const price = document.querySelector('.price');
const totalPrice = document.querySelector('.total__price');
const errors = document.querySelector('.errors');
const result = document.querySelector('.result');
const cardImg = document.querySelector('.product_card-img');
const productCard = document.querySelector('#product_card');
const orderList = document.querySelector('.order__list-wrap');


let ordersArray = [];

if (localStorage.getItem('orders')) {
    ordersArray = JSON.parse(localStorage.getItem('orders'));
    constructor(ordersArray);
} else {
    orderCounter.innerText = '';
    orderCounter.classList.add('bgcolor');
}

function constructor(obj) {
    orderListWrap.innerHTML = "";
    if (obj.length > 0) {
        orderCounter.innerText = obj.length;
        orderCounter.classList.remove('bgcolor');
    } else {
        orderCounter.innerText = '';
        orderCounter.classList.add('bgcolor');
    }
    obj.forEach((order) => {
        addOrderInfo(order);
    });
};

function newTag(arr, id) {
    description.innerHTML = '';
    buyButton.classList.add('disNon');
    descriptionTitle.classList.add('disNon');
    price.classList.add('disNon');
    productsList.replaceChildren();
    orderingForm.classList.add('disNon');
    productCard.classList.add('disNon');
    document.querySelector('.quantity').innerText = "1";

    for (const index of arr) {
        if (index.category_id === id) {
            const li = document.createElement('li');
            const img = document.createElement('img');
            const title = document.createElement('h2');
            const more = document.createElement('span');
            li.setAttribute('data-product-id', `${index.id}`);
            img.setAttribute('src', `${index.image}`);
            title.innerHTML = index.name;
            more.innerText = 'More info...';
            li.className = 'link';
            img.className = 'img__product';
            title.className = 'title';
            more.className = 'more';
            productsList.prepend(li);
            li.prepend(more);
            li.prepend(title);
            li.prepend(img);
        };
    };
};

function prod(arr, id) {
    buyButton.classList.remove('disNon');
    orderingForm.classList.add('disNon');
    descriptionTitle.classList.remove('disNon');
    price.classList.remove('disNon');
    productCard.classList.remove('disNon');
    document.querySelector('.quantity').innerText = "1";
    for (const index of arr) {
        if (index.id === id) {
            description.innerHTML = index.description;
            descriptionTitle.innerHTML = index.name;
            price.innerHTML = index.price;
            totalPrice.innerHTML = index.price;
            cardImg.setAttribute('src', `${index.image}`);
        }
    }
};

categoryList.addEventListener('click', (e) => {
    newTag(products, Number(e.target.dataset.categoryId));
});

productsList.addEventListener('click', (e) => {
    prod(products, Number(e.target.parentElement.dataset.productId));
});

buyButton.addEventListener('click', (e) => {
    buyButton.classList.add('disNon');
    orderingForm.classList.remove('disNon');
});

personalData.addEventListener('click', (e) => {
    e.target.classList.remove('error');
});

const formatterEUR = new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: 'EUR'
});

window.addEventListener('click', function (event) {
    let counter;
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.counter_wrapper')
        counter = counterWrapper.querySelector('[data-counter]')
    };
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText
        totalPrice.innerText = formatterEUR.format(parseInt(counter.innerText) * Number(price.innerText.replace(',', '.').replace(/[^\d.]/ig, '')));
    };
    if (event.target.dataset.action === 'minus') {
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText
            totalPrice.innerText = formatterEUR.format(Number(totalPrice.innerText.replace(',', '.').replace(/[^\d.]/ig, '')) - Number(price.innerText.replace(',', '.').replace(/[^\d.]/ig, '')));
        };
    };
});

const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);

function getFormValue(event) {
    event.preventDefault();
    const { elements } = form;
    console.log({ elements });
    const order = {};
    order.product = descriptionTitle.innerText;
    order.quantity = document.querySelector('[data-counter]').innerText;
    order.price = totalPrice.innerText;
    order.orderDate = new Date().toISOString().split('T')[0];
    if (elements.lastName.value && elements.firstName.value && elements.patronymic.value) {
        for (let i = 0; i < elements.length; i++) {
            const formElement = elements[i];
            const { name } = formElement;
            if (name) {
                const { value, type } = formElement;
                if (isCheckboxOrRadio(type)) {
                    formElement.checked ? order[name] = value.trim() : order[name] = '';
                } else {
                    order[name] = value.trim();
                }
            }
            errors.innerText = '';
        }
        addOrder(order);
    } else {
        if (!elements.lastName.value) {
            elements.lastName.classList.add('error');
        }
        if (!elements.firstName.value) {
            elements.firstName.classList.add('error');
        }
        if (!elements.patronymic.value) {
            elements.patronymic.classList.add('error');
        }
        errors.innerText = "Не всі поля заповнені";
    }
    return order;
}

function addOrderInfo(objectOrder) {
    orderList.insertAdjacentHTML('beforeend',
        `<li class='order-item' data-order-id = ${objectOrder.id}>
            <div class='order__title-wrapper'>
                <h5 class='plus__info'>Order - ${objectOrder.price}</h5><i class="fa-regular fa-trash-can order__delete"></i>
            </div>
            <table class='order__tab' id='info__order-${objectOrder.id}'>${orderInfo(objectOrder)}</table>
        </li>`
    );

    function orderInfo() {
        let orderTable = '';
        for (const key in objectOrder) {
            if (key === 'orderDate' || key === 'price' || key === 'id') {
                continue
            };
            orderTable += `<tr>
                                <td>${key}</td>
                                <td>${objectOrder[key]}</td>
                            </tr>`
        }
        return orderTable
    };
};

function addOrder(obj) {

    let newOrder = {
        price: obj.price,
        quantity: obj.quantity,
        date: obj.orderDate,
        product: obj.product,
        id: Date.now(),
    };

    orderCounter.innerText = ordersArray.length + 1;
    orderCounter.classList.remove('bgcolor');
    ordersArray.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(ordersArray));
    addOrderInfo(newOrder);

};
function deleteOrder(e) {
    if (e.target.classList.contains('order__delete')) {
        const idOrder = Number(e.target.parentElement.parentElement.dataset.orderId);
        const ordersArray = Array.from(JSON.parse(localStorage.getItem('orders')));
        ordersArray.forEach((order, index) => {
            if (order.id === idOrder) {
                console.log(order.id);
                console.log(idOrder);
                ordersArray.splice(index, 1);
                return;
            }
        });
        localStorage.setItem('orders', JSON.stringify(ordersArray));
        console.log(ordersArray);
        constructor(ordersArray);
    }
}


form.addEventListener('submit', getFormValue);
orderList.addEventListener('click', deleteOrder);





