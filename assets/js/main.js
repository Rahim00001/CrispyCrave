// show menu
const navMenu = document.getElementById('nav_menu'),
    navToogle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close')

if (navToogle) {
    navToogle.addEventListener('click', () => {
        navMenu.classList.add('show_menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu')
    })
}

// remove menu mobile
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Shadow header
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', scrollHeader)

// Swiper favorites
const swiperFavorites = new Swiper('.favorites_swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
});

// Show ScrollUp Btn
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll_up')
    this.scrollY >= 350 ? scrollUp.classList.add('show_scroll')
        : scrollUp.classList.remove('show_scroll')
}
window.addEventListener('scroll', scrollUp)