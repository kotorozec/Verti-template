// ******* Scroll Reveal functions *******
ScrollReveal().reveal('.banners_first-reveal', {delay: 500});
ScrollReveal().reveal('.banners_second-reveal', {delay: 1000});
ScrollReveal().reveal('.banners_third-reveal', {delay: 1500});
ScrollReveal().reveal('.banners_forth-reveal', {delay: 2000});
ScrollReveal().reveal('.banners__text__intro', {delay: 2500});
ScrollReveal().reveal('.banners__primary-button', {delay: 3000});
ScrollReveal().reveal('.banners__secondary-button', {delay: 3500});


//  ******* Menu functions  *******
const mobileNav = document.querySelector('.menu-list');
const burgerBtn = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('active');
    burgerBtn.classList.toggle('active');
})