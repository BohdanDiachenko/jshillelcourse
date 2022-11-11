// У папці `img` є зображення.

// При кожному завантаженні сторінки повинно виводитися випадково обране зображення.


const imagesArray = [
    {src: './image/dog1.jpeg', alt: 'dog1'},
    {src: './image/dog2.jpeg', alt: 'dog2'},
    {src: './image/dog3.jpeg', alt: 'dog3'},
    {src: './image/dog4.jpeg', alt: 'dog4'},
    {src: './image/dog5.jpeg', alt: 'dog5'},
    {src: './image/dog6.jpeg', alt: 'dog6'},
];

const randomImage = (function () {
    const randomNumber = Math.floor(Math.random() * imagesArray.length);
    return imagesArray[randomNumber];
}) ();

document.querySelector('img').setAttribute('src', randomImage.src);
document.querySelector('img').setAttribute('alt', randomImage.alt);
