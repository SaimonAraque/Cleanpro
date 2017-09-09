"use strict";

var nav = document.querySelector('.main-nav');

window.addEventListener('scroll', function () {
    if (window.innerWidth > 1000) {
        if (window.scrollY > nav.clientHeight / 2) {
            if (!nav.classList.contains('main-nav-Scroll')) {
                nav.classList.add('main-nav-Scroll');
            }
        }
        if (window.scrollY < nav.clientHeight / 2) {
            if (nav.classList.contains('main-nav-Scroll')) {
                nav.classList.remove('main-nav-Scroll');
            }
        }
    }
    if (window.innerWidth < 1000) {
        if (nav.classList.contains('main-nav-Scroll')) {
            nav.classList.remove('main-nav-Scroll');
        }
    }
});