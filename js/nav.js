const menu = document.querySelector('.menu');
const nav = document.getElementById('main-nav')
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');

menu.addEventListener('click', () => {
    header.classList.toggle('opening');
    if (logo.style.display === 'none') {
        logo.style.display = 'flex';
        menu.style.paddingTop = '0';
    }else {
        logo.style.display = 'none';
        menu.style.paddingTop = '60px';
    }

    nav.classList.toggle('hide')
})