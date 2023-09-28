const buttonBurger = document.querySelector('.burger');
const nav = document.querySelector('.nav');


buttonBurger.onclick = () => {
    nav.classList.toggle('active');
}