// ******* Scroll Reveal functions *******
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 500 });
ScrollReveal().reveal('.punchline', { delay: 2000 });
//  ******* Menu functions  *******
const mobileNav = document.querySelector('.menu-list');
const burgerBtn = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', function (){
    mobileNav.classList.toggle('active');
    burgerBtn.classList.toggle('active');
})