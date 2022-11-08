// Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>.
//  При пропажі фокусу - <div> так само пропадає



const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
wrapper.style.cssText = 'display: grid; place-items: center; height: 100vh;'
document.body.prepend(wrapper);

const container = document.createElement('div');
container.className = 'container'
container.style.cssText = 'display: flex';
wrapper.prepend(container)

const input = document.createElement('input');
input.setAttribute('type', 'text')
input.id = 'input';
input.style.cssText = 'width: 300px';
container.prepend(input)

const span = document.createElement('span');
span.style.cssText = 'width: 100px; height: 30px; margin-left: 20px; background-color: grey; visibility:hidden;';
span.id = 'ghost';
container.append(span);

document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById ('input').addEventListener('focus', (e) => {
        document.getElementById('ghost').style.visibility = "visible";
    })
    document.getElementById('input').addEventListener('blur', (e) => {
        document.getElementById('ghost').style.visibility = "hidden";
    })
})