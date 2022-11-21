// Робимо на підставі дз 26.

// В праву частину з описом товару додати кнопку "купити".

// При натисканні на кнопку нижче з'являється форма оформлення замовлення з наступними полями:

// - ПІБ покупця

// - Місто (вибір зі списку декількох міст)

// - Склад Нової пошти для надсилання (числове поле)

// - Спосіб оплати: післяплата або оплата на банківську картку

// - Кількість продукції, що купується

// Реалізувати валідацію форми за допомогою JS, щоб всі поля були заповнені.

// При валідаціїї поля ПІБ видаляти зайві пробіли (за допомогою String.trim()).

// Якщо дані у формі некоректні, вивести повідомлення про це під формою.

// Дані замовлення зберегти у обʼєкті. До обʼєкту також додати властивості з даними про дату створення та суму замовлення.

// Якщо дані у формі коректні, вивести інформацію про замовлення під формою у форматі JSON.

// Підказка - щоб красиво вивести дані на сторінку можна використати тег `pre`:

const categories = [
    {
        id: 1,
        category: "Toys",
    },
    {
        id: 2,
        category: "Sports",
    },
    {
        id: 3,
        category: "Toys",
    },
    {
        id: 4,
        category: "Grocery",
    },
    {
        id: 5,
        category: "Garden",
    },
];

const products = [
    {
        id: 1,
        category_id: 2,
        name: "Eggplant - Asian",
        description:
            "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        price: '256,25 EUR',
    },
    {
        id: 2,
        category_id: 5,
        name: "Jagermeister",
        description:
            "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        price: '167,45 EUR',
    },
    {
        id: 3,
        category_id: 2,
        name: "Wine - Lou Black Shiraz",
        description:
            "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
        price: '243,60 EUR',
    },
    {
        id: 4,
        category_id: 3,
        name: "Beef - Ox Tongue",
        description:
            "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        price: '125,20 EUR',
    },
    {
        id: 5,
        category_id: 3,
        name: "Beef - Bones, Marrow",
        description:
            "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        price: '214,70 EUR',
    },
    {
        id: 6,
        category_id: 2,
        name: "Appetizer - Shrimp Puff",
        description:
            "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
        price: '60,30 EUR',
    },
    {
        id: 7,
        category_id: 4,
        name: "Appetizer - Shrimp Puff",
        description:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        price: '49,80 EUR',
    },
    {
        id: 8,
        category_id: 1,
        name: "Ecolab - Ster Bac",
        description: "Integer ac leo. Pellentesque ultrices mattis odio.",
        price: '184,90 EUR',
    },
    {
        id: 9,
        category_id: 4,
        name: "Vegetable - Base",
        description:
            "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
        price: '98,75 EUR',
    },
    {
        id: 10,
        category_id: 3,
        name: "Flour - Corn, Fine",
        description:
            "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
        price: '460,68 EUR',
    },
    {
        id: 11,
        category_id: 1,
        name: "Beer - Guiness",
        description:
            "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        price: '327,30 EUR',
    },
    {
        id: 12,
        category_id: 4,
        name: "Napkin White",
        description:
            "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        price: '218,55 EUR',
    },
    {
        id: 13,
        category_id: 2,
        name: "Oil - Truffle, White",
        description:
            "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        price: '35,80 EUR',
    },
    {
        id: 14,
        category_id: 5,
        name: "Wine - Puligny Montrachet A.",
        description:
            "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
        price: '79,20 EUR',
    },
    {
        id: 15,
        category_id: 5,
        name: "Tomatoes Tear Drop",
        description:
            "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        price: '1 146,55 EUR',
    },
];

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

function newTag(arr, id ) {
    description.innerHTML= '';
    buyButton.classList.add('disNon');
    descriptionTitle.classList.add('disNon');
    price.classList.add('disNon');
    productsList.replaceChildren();
    orderingForm.classList.add('disNon');
    for(const index of arr){
        if(index.category_id === id){
            const li = document.createElement('li');
            li.setAttribute('data-product-id', `${index.id}`)
            li.innerHTML = index.name;
            li.className = 'link';
            productsList.prepend(li);
        }
    }   
};

function prod(arr, id) { 
    buyButton.classList.remove('disNon');
    orderingForm.classList.add('disNon');
    descriptionTitle.classList.remove('disNon');
    price.classList.remove('disNon');
    for(const index of arr){
        if(index.id === id){
            description.innerHTML = index.description;
            descriptionTitle.innerHTML = index.name;
            price.innerHTML = index.price;
            totalPrice.innerHTML = index.price;
        }
    }
};

categoryList.addEventListener('click', (e) => {
    newTag(products, Number(e.target.dataset.categoryId))
});

productsList.addEventListener('click', (e) => {
    prod(products, Number(e.target.dataset.productId))
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

window.addEventListener('click', function(event){
    let counter;
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.counter_wrapper')
        counter = counterWrapper.querySelector('[data-counter]')
    };
    if (event.target.dataset.action === 'plus'){
        counter.innerText = ++counter.innerText
        totalPrice.innerText = formatterEUR.format(parseInt(counter.innerText) * Number(price.innerText.replace(',', '.').replace(/[^\d.]/ig, '' ))); 
    };
    if (event.target.dataset.action === 'minus'){
        if (parseInt(counter.innerText) > 1){
            counter.innerText = --counter.innerText
            totalPrice.innerText = formatterEUR.format(Number(totalPrice.innerText.replace(',', '.').replace(/[^\d.]/ig, '' )) - Number(price.innerText.replace(',', '.').replace(/[^\d.]/ig, '' )));
        };
    };
});

const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);


function getFormValue(event) {
    event.preventDefault();
    const {elements} = form;
    const values = {};
    values.price = totalPrice.innerText;
    values.orderDate = new Date().toISOString().split('T')[0];
    if(elements.lastName.value && elements.firstName.value && elements.patronymic.value){
        for (let i = 0; i < elements.length; i++) {
            const formElement = elements[i];
            const {name} = formElement;
            if (name) {
                const {value, type, checked} = formElement;
                if(isCheckboxOrRadio(type)){
                    values[value] = checked;
                }else{
                    values[name] = value.trim();
                }
            }
            errors.innerText = '';
        }        
        result.innerHTML = `<pre>${JSON.stringify(values)}<pre>`;
    } else{
        if (!elements.lastName.value) {
            elements.lastName.classList.add('error');
        }
        if (!elements.firstName.value) {
            elements.firstName.classList.add('error');
        }
        if (!elements.patronymic.value) {
            elements.patronymic.classList.add('error');
        }
        errors.innerText = "Не всі поля заповнені!!!";
    }
    console.log(values);
}
form.addEventListener('submit', getFormValue);