const post = document.querySelector('.posts')
const id = document.getElementById('search')
const container = document.querySelector('.container')
const wrapper = document.querySelector('.wrapper')
const searchOne = document.querySelector('.search__one')
const popup = document.querySelector('.popup')

const IdVerification = number => {
	const regex = /^(([1-9]|[1-9][0-9]|1[0-4][0-9]|150)([,-](?=\d)|$))+$/
	return regex.test(number)
}
let idInside = '';
let userId = '';
searchOne.addEventListener('click', async (e) => {
	e.preventDefault
	if (IdVerification(id.value)) {
		idInside = id.value
		userId = await addPost()
		addUser(userId)
		await addComments(idInside)
	};
});

async function addPost() {
	try {
		if (document.querySelector('.post__wrapper')) {
			document.querySelector('.wrapper').innerHTML = ''
		}
		const res = await fetch(`https://dummyjson.com/posts/${idInside}`)
		let data = await res.json()
		wrapper.innerHTML += `
    <div class="post__wrapper">
      <div class="posts">
        <p>Post according to your request</p>
        <hr>
        <div class="wrapper__user"></div>
        <h1 class="post__title">${data.title}</h1>
        <p class="post__text">${data.body}</p>
        <div class="post__footer">
          <i class="like fa-solid fa-thumbs-up"></i>
          <div class="post__comments">
            <p class="add__comments" onclick="openTextarea()"><i class="fa-regular fa-message comit"></i>Comment</p>
            <p class="comments" onclick="comments()"></p>
          </div>
        </div>
        <div class="comment__wrapper"></div>
      </div>
    </div>`
		const userId = data.userId
		return userId
	} catch {
		popup.classList.remove('dis__none')
	}
}

async function addUser() {
	try {
		const res = await fetch(`https://dummyjson.com/users/${userId}`)
		let data = await res.json()
		document.querySelector('.wrapper__user').innerHTML += `
      <div class="img__user">
        <img src="${data.image}" alt="ff">
      </div>
      <p class="user__name">${data.firstName} ${data.lastName} ${data.maidenName}</p>
      <i class="post__close fa-regular fa-circle-xmark" onclick="closePost()"></i>
    `
	} catch {
		popup.classList.remove('dis__none')
	}
}

async function addComments(id) {
	try {
		const res = await fetch(`https://dummyjson.com/comments`)
		let data = await res.json()
		let userComment
		data.comments.map(async item => {
			let counter = 0
			if (item.postId === Number(id)) {
				counter++
				const res = await fetch(`https://dummyjson.com/users/${item.user.id}`)
				let userComment = await res.json()
				document.querySelector('.comment__wrapper').innerHTML += `
              <div class="user__wrap dis__none">
                <div class="user__img-wrapper">
                  <img src="${userComment.image}" alt="g">
                </div>
                <div class="user__comment-wrapper">
                  <h2 class="comment__title">${userComment.firstName} ${userComment.lastName} ${userComment.maidenName}</h2>
                  <p class="comment__text">${item.body}</p>
                </div>
              </div>`
				document.querySelector('.comments').innerHTML += `<span class="commentsCounter">${counter}</span>comments`
			}
		})
		return userComment
	} catch {
		popup.classList.remove('dis__none')
	}
}

function openTextarea() {
	if (document.querySelectorAll('.user__wrap')) {
		document.querySelectorAll('.user__wrap').forEach(userItem => {
			userItem.classList.remove('dis__none')
		})
	} else {
		document
			.querySelector('.post__wrapper')
			.removeChild(document.querySelector('.add__comment'))
	}
	if (!document.querySelector('.add__comment')) {
		document.querySelector('.post__wrapper').innerHTML += `
          <div class="add__comment">
            <div class="user__img-wrapper">
              <img src="image/intro.jpg" alt="g">
            </div>
            <div class="comment__text-wrapper">
              <input class="user__comment-text">
            </div>
          </div>
        `
	}
	document
		.querySelector('.user__comment-text')
		.addEventListener('keyup', function (e) {
			let newComment = document.querySelector('.user__comment-text').value
			const regex = /^.+$/
			if (e.key === 'Enter' && regex.test(newComment)) {
				if (document.querySelector('.commentsCounter')) {
					let counterComit = Number(
						document.querySelector('.commentsCounter').innerText
					)
					counterComit++
					document.querySelector('.commentsCounter').innerHTML = counterComit
				} else {
					document.querySelector(
						'.comments'
					).innerHTML += `<span class="commentsCounter">1</span>comments `
				}
				e.preventDefault()
				document.querySelector('.comment__wrapper').innerHTML += `
                  <div class="user__wrap">    
                    <div class="user__img-wrapper">
                      <img src="image/intro.jpg" alt="g">
                    </div>
                    <div class="user__comment-wrapper">
                      <h2 class="comment__title">Guest</h2>
                      <p class="comment__text">${newComment}</p>
                    </div>
                  </div>
                `
				document.querySelector('.user__comment-text').value = ''
			}
		})
	document
		.querySelector('.user__comment-text')
		.addEventListener('blur', function (e) {
			document
				.querySelector('.post__wrapper')
				.removeChild(document.querySelector('.add__comment'))
		})
}
