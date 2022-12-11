const form = document.forms.contact;

const firstNameInput = document.getElementById("first-name");
const firstNameError = document.getElementById("first-name-error");
const emptyFirstNameError = document.getElementById("empty-first-names");

const lastNameInput = document.getElementById("last-name");
const lastNameError = document.getElementById("last-name-error");
const emptyLastNameError = document.getElementById("empty-last-name");

const dateBirth = document.querySelector('#date');
const gender = document.getElementsByName("gender");
const address = document.querySelector("#address");
const citySelect = document.querySelector('#city');

const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phone-error");
const emptyPhoneError = document.getElementById("empty-phone");

const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const emptyEmailError = document.getElementById("empty-email");

const validClasses = document.getElementsByClassName("valid");
const invalidClasses = document.getElementsByClassName("error");

const selectBtn = document.querySelector('.select__btn');
const items = document.querySelectorAll('.item');

const saveBtn = document.querySelector('#btnSave')

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open")
});

items.forEach(item => {
    item.addEventListener("click", (e) =>{
        item.classList.toggle("checked");

        let checked = document.querySelectorAll('.checked');
        let btnText = document.querySelector('.btn-text');
        
        if(checked && checked.length > 0){
            btnText.innerText = `${checked.length} Selected`;
        }else
        btnText.innerText = "Select Language";
    });
});

const input = document.querySelector('#phone');
window.intlTelInput(input,{
    separateDialCode: true
});

const textVerify = (text) => {
    const regex = /^[a-zA-Z]{3,}$/;
    return regex.test(text)
};

const phoneVerify = (number) => {
    const regex = /^\d{9,10}$/;
    return regex.test(number);
};

const emailVerify = (input) => {
    const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/;
    return regex.test(input);
};

const emptyUpdate = (inputReference, emptyErrorReference, otherErrorReference) => {
    if(!inputReference.value){
        emptyErrorReference.classList.remove("hide");
        otherErrorReference.classList.add("hide");
        inputReference.classList.add("error");
    } else{
        emptyErrorReference.classList.add("hide");
    }
}

const errorUpdate = (inputReference, errorReference) => {
    errorReference.classList.remove("hide");
    inputReference.classList.remove("valid");
    inputReference.classList.remove("error");
}

const validInput = (inputReference) => {
    inputReference.classList.remove("error");
    inputReference.classList.add("valid");
}

function validation (verify, inputReference, errorReference, emptyErrorReference){
    if(verify(inputReference.value)){
        errorReference.classList.add("hide");
        validInput(inputReference)
    } else{
        errorUpdate(inputReference, errorReference);
        emptyUpdate(inputReference, emptyErrorReference, errorReference)
    }
    return true
}
firstNameInput.addEventListener("input", () => (validation(textVerify, firstNameInput, firstNameError, emptyFirstNameError)))
lastNameInput.addEventListener("input", () => (validation(textVerify,lastNameInput, lastNameError, emptyLastNameError)))
phoneInput.addEventListener("input", () => (validation(phoneVerify, phoneInput, phoneError, emptyPhoneError)))
emailInput.addEventListener("input", () => (validation(emailVerify, emailInput, emailError, emptyEmailError)))

function getAllCheckBoxes(obj) {
    let result;
    for (let i=0; i<obj.length; i++) {
        if (obj[i].checked) {
            result = obj[i].value;           
        }
    }
    return result
}
const languages = document.querySelectorAll('.item');

function languageChecked(obj) {
    const langsArray = [];
    for (const iter of obj) {
        if(iter.classList.contains("checked")){
            langsArray.push(iter.lastElementChild.innerText)
        }
    }
    return langsArray.join(', ')
}

function saveAndShow(ev) {
    ev.preventDefault();
        const info = {
        userFirstName: firstNameInput.value.trim(),
        userLastName: lastNameInput.value.trim(),
        userDateBirth: dateBirth.value,
        userEmail: emailInput.value,
        userPhone:`${document.querySelector('.iti__selected-dial-code').innerHTML}${phoneInput.value}`,
        userGender: getAllCheckBoxes(gender),
        userCity: citySelect.value,
        userAddress: address.value,
        userlanguages: languageChecked(languages),
        };
        if(document.querySelectorAll('.valid').length === 4){
            form.classList.add('hide');
            document.querySelector('#userInfo').classList.remove('hide');
            createTable(info);
        }
}
function createTable(obj) {
    const tbodyEl = document.querySelector('tbody');
    tbodyEl.innerHTML += `
        <tr>
            <td>${obj.userFirstName}</td>
            <td>${obj.userLastName}</td>
            <td>${obj.userDateBirth||'Не вказано'}</td>
            <td>${obj.userEmail}</td>
            <td>${obj.userPhone}</td>
            <td>${obj.userGender||'Не вказано'}</td>
            <td>${obj.userCity}</td>
            <td>${obj.userAddress||'Не вказано'}</td>
            <td>${obj.userlanguages||'Не вказано'}</td>
        </tr>`
}

saveBtn.addEventListener('click',  saveAndShow);