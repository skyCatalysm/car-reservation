/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
import '../scss/app-admin-page-manager.scss';

import('@fortawesome/fontawesome-free/css/all.min.css');
import('@fortawesome/fontawesome-free/js/all.js');
import $ from 'jquery';

$(document).on('change', '.custom-file-input', function (event) {
    $(this).next('.custom-file-label').html(event.target.files[0].name);
})
import 'popper.js';
import 'bootstrap';
// uncomment if you have legacy code that needs global variables
//global.$ = $;

