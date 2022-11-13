// На сторінці інпут та кнопка.

// При натисканні на кнопку - переходимо за посиланням, яке введено у інпут.

// Також треба реалізувати перевірку введеного значення, чи вказаний протокол http/https.

// Якщо протокол не вказаний - додаємо https


const btn = document.querySelector('#button');
const input = document.querySelector('input');

function goToUrl (){
    const protocol = 'https://';
    if(input.value.split(':')[0] ==='https' || input.value.split(':')[0] ==='http'){
        location.href = input.value
    } else{
        location.href = protocol + input.value
    };
};

btn.addEventListener('click', () => {
    goToUrl()
});