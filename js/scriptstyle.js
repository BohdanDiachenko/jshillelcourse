const postWrapper = document.querySelector(".post__wrapper");
const search = document.querySelector(".search");
const closeInput = document.querySelector(".close");

const inside = document.querySelector(".inside");
const clearIcon = document.querySelector("#search");
const postClose = document.querySelector(".post__close");

search.addEventListener("click", openSearch);
closeInput.addEventListener("click", closeSearch);

function openSearch() {
    inside.classList.add("active");
    search.classList.add("dis__none");
    closeInput.classList.remove("dis__none");
}
function closeSearch() {
    inside.classList.remove("active");
    search.classList.remove("dis__none");
    closeInput.classList.add("dis__none");
}

function closePost() {
    document
        .querySelector(".wrapper")
        .removeChild(document.querySelector(".post__wrapper"));
}

clearIcon.onclick = function () {
    document.getElementById("search").value = "";
};

function comments() {
    if (
        document
            .querySelector(".post__wrapper")
            .contains(document.querySelector(".add__comment"))
    ) {
        document
            .querySelector(".post__wrapper")
            .removeChild(document.querySelector(".add__comment"));
    }
    document.querySelectorAll(".user__wrap").forEach((userItem) => {
        userItem.classList.toggle("dis__none");
    });
}
