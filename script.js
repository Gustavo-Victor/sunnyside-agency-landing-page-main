/*menu toggle effect */ 
const icon_hamburger = window.document.querySelector('.hamburger');
const nav = window.document.querySelector('.nav');

icon_hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});