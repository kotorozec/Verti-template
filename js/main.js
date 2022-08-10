// ******* Scroll Reveal functions *******
ScrollReveal().reveal('.header__logo', { delay: 500 });
ScrollReveal().reveal('.menu-list__link', { delay: 1000 });
//  ******* Menu functions  *******
const mobileNav = document.querySelector('.menu-list');
const burgerBtn = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', function (){
    mobileNav.classList.toggle('active');
    burgerBtn.classList.toggle('active');
})