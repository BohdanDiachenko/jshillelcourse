// У папці `img` є зображення.

// При кожному завантаженні сторінки повинно виводитися випадково обране зображення.



const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
wrapper.style.cssText = 'display: grid; place-items: center; height: 100vh;'
document.body.prepend(wrapper);

const img = document.createElement('img');
img.style.width = '800px';
wrapper.prepend(img)


const imagesArray = [
    {src: 'image/dog1.jpeg', alt: 'dog1'},
    {src: 'image/dog2.jpeg', alt: 'dog2'},
    {src: 'image/dog3.jpeg', alt: 'dog3'},
    {src: 'image/dog4.jpeg', alt: 'dog4'},
    {src: 'image/dog5.jpeg', alt: 'dog5'},
    {src: 'image/dog6.jpeg', alt: 'dog6'},
];

const randomImage = (function () {
    const randomNumber = Math.floor(Math.random() * imagesArray.length);
    return imagesArray[randomNumber];
}) ();

img.setAttribute('src', randomImage.src);
img.setAttribute('alt', randomImage.alt);