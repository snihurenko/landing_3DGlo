'use strict'

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import { slider, showDots } from './modules/slider';
import changeCommandPhoto from './modules/changeCommandPhoto';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';
import SliderCarousel from './modules/sliderCarousel';

//timer
countTimer('17 dec 2020');
//menu
toggleMenu();
//popup
togglePopup();
//tabs
tabs();
//slider
showDots();
slider();
//command photo change
changeCommandPhoto();
//calculator
calculator(100);
//send-ajax-form
sendForm();
//carusel

const carousel = new SliderCarousel({
    main: '.companies-wrapper',
    wrap: '.companies-hor',
    prev: '#btn-left',
    next: '#btn-right',
    slidesToShow: 4,
    infinity: true,

    responsive: [{
        breakpoint: 1024,
        slidesToShow: 3
    }, 
    {
        breakpoint: 768,
        slidesToShow: 2
    },
    {
        breakpoint: 576,
        slidesToShow: 1
    }]
});
carousel.init();