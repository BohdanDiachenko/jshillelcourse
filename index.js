// Пишемо свій слайдер зображень.

// На сторінці є зображення та кнопки Next, Prev з боків від зображення.

// При кліку на Next - показуємо наступне зображення.

// При кліку на Prev - попереднє.

// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.

const prev = document.getElementById ('prev');
const next = document.getElementById ('next');
const img = document.getElementById ('image');

const imagesArray = [
    {src: 'image/dog1.jpeg', alt: 'dog1'},
    {src: 'image/dog2.jpeg', alt: 'dog2'},
    {src: 'image/dog3.jpeg', alt: 'dog3'},
    {src: 'image/dog4.jpeg', alt: 'dog4'},
    {src: 'image/dog5.jpeg', alt: 'dog5'},
    {src: 'image/dog6.jpeg', alt: 'dog6'},
];

let a = 0;

prev.addEventListener('click', () => {
    a--
    if (a === imagesArray.length - 2) {
        next.style.visibility = "visible";
    }

    img.setAttribute('src', imagesArray[a].src);
    img.setAttribute('alt', imagesArray[a].alt);

    if (a === 0 ) {
        prev.style.visibility = 'hidden';
    }
}); 

next.addEventListener('click', () => {
    a++
    if (a > 0) {
        prev.style.visibility = "visible";
    }

    img.setAttribute('src', imagesArray[a].src);
    img.setAttribute('alt', imagesArray[a].alt);

    if (a === imagesArray.length - 1) {
        next.style.visibility = 'hidden';
    }
});