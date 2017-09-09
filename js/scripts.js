"use strict";

//-----------------------------------Header nav------------------------------------------ 

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

//---------------------------------------------------------------------------------------

//-------------------------------- Testimonials slider ----------------------------------

var slideIndex = 1;
showSlide(slideIndex);

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    var i = void 0;
    var x = document.querySelectorAll('.slideText');
    //let y = document.querySelectorAll('.slideName');
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
        //y[i].style.display = 'none';
    }
    x[slideIndex - 1].style.display = 'block';
    //y[slideIndex - 1].style.display = 'block';
}

//---------------------------------------------------------------------------------------

//-------------------------------- Header nav scroll ------------------------------------

var menu = document.querySelector('.main-nav__menu');
var links = document.querySelectorAll('.menu__link');

menu.addEventListener('click', function (e) {
    var elem = e.target;
    if (elem.tagName === 'A') {
        e.preventDefault();
        var dest = document.querySelector('' + elem.hash);
        window.scrollBy(0, dest.getBoundingClientRect().top - 100);
    }
});