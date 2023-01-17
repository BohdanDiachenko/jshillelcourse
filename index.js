const postWrapper = document.querySelector('.post__wrapper');
const coments = document.querySelector('.coments');
const searchBtn = document.querySelector('.search__btn');
const error = document.querySelector('.error');
const input = document.getElementById('post__search');
let id = '';

const createPost = ({title, body, id}) => `
    <h2 class='post__title'>${title}</h2>
    <p class='post__body'>${body}</p>
    <span class='post__id'>Post id - ${id}</span>
    <button class='comments__btn' onclick='getComments()' >Comments</button>
    <span class="comments__error"></span>

`;
const fillPost = (post) => {
    postWrapper.innerHTML = '';
    if (post){
        postWrapper.innerHTML += createPost(post)
    };
};

const IdVerification = number => {
	const regex = /^[0-9][0-9]?$|^100$/
	return regex.test(number)
};

function getPostRequest(){
    let postId = input.value;
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => {
        if (response.status === 404) {
            throw new Error();
        }
        return response.json(); 
    })
    .then((json) => {
        console.log(json);
        return json
    })
    .catch(() => {
        postWrapper.innerHTML = '';
        error.textContent = 'An error occurred';
    })
};

searchBtn.addEventListener('click', async () => {
    coments.innerHTML = '';
    id = input.value;
    if (IdVerification(Number(id))){
        document.querySelector('.lable').classList.remove('red__error');
        const a =  await getPostRequest();
        fillPost(a);     
    } else{
        document.querySelector('.lable').classList.add('red__error');
        postWrapper.innerHTML='';
    };

});

async function getComments() {
    let postId = input.value;
    return await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        createComments(json)
        return json
    })
    .catch(() => {
        coments.innerHTML = '';
        document.querySelector('.comments__error').textContent = 'An error occurred';
    })
};

function createComments(array) {
    array.forEach(element => {
        coments.innerHTML +=`
        <h2>${element.name}</h2>
        <p>${element.body}</p>
        <p>post id - ${element.postId}</p>
        `
    });
};