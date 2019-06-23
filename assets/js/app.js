/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
import '../scss/app.scss';
import('@fortawesome/fontawesome-free/css/all.min.css');
import('@fortawesome/fontawesome-free/js/all.js');
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
// uncomment if you have legacy code that needs global variables
//global.$ = $;

//aos animation
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import ('./navbar-scroll-animation.js');
import ('./animated-arrow-down.js');

//jump js
import ('./homepage-jump.js');

let changeImage = document.getElementsByClassName('change-showcase-image');
for(let i = 0; i < changeImage.length; i++) {
    (function(index) {
        changeImage[index].addEventListener('click', function (event)  {
            document.getElementById("showcase-title").innerHTML = changeImage[index].alt;
            document.getElementById("showcase-image").src = changeImage[index].src;
        })
    })(i);
}