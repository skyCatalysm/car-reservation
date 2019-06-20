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


// When the user scrolls down 80px from the top of the document, add a class to the logo of the nav
document.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 || document.getElementById("navbarSupportedContent").classList.contains('show')) {
        document.getElementById("logo").classList.add('nav-logo-default');
        document.getElementById("nav-bar").classList.add('navbar-custom-scrolled');
    } else {
        document.getElementById("logo").classList.remove('nav-logo-default');
        document.getElementById("nav-bar").classList.remove('navbar-custom-scrolled');
    }
}

// Change the bg of nav if collapsed on mobile device
document.getElementById("nav-bg-change").addEventListener("click", changeBackground);
function changeBackground() {
    document.getElementById("nav-bar").classList.toggle('navbar-custom-scrolled');
    document.getElementById("logo").classList.toggle('nav-logo-default');
}