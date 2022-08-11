// ******* Scroll Reveal functions *******
ScrollReveal().reveal('#banners_first-reveal', {delay: 500});
ScrollReveal().reveal('#banners_second-reveal', {delay: 1000});
ScrollReveal().reveal('#banners_third-reveal', {delay: 1500});
ScrollReveal().reveal('#banners_forth-reveal', {delay: 2000});
ScrollReveal().reveal('#text__intro', {delay: 2500});
ScrollReveal().reveal('#primary-button', {delay: 3000});
ScrollReveal().reveal('#secondary-button', {delay: 3500});
ScrollReveal().reveal('#features', {delay: 500});



//  ******* Menu functions  *******
const mobileNav = document.querySelector('.menu-list');
const burgerBtn = document.querySelector('.burger-menu');
const hidden = document.querySelector('nav');

burgerBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    hidden.classList.toggle('active');
})



