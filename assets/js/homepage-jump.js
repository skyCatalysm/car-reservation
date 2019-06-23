//jump js
import jump from 'jump.js';

//for each classname called
let jumpOne = document.getElementsByClassName('jump-one');
for(let i = 0; i < jumpOne.length; i++) {
    (function(index) {
        jumpOne[index].addEventListener('click', function (event)  {
            jump('#target-one');
        })
    })(i);
}
let jumpTwo = document.getElementsByClassName('jump-two');
for(let i = 0; i < jumpTwo.length; i++) {
    (function(index) {
        jumpTwo[index].addEventListener('click', function (event)  {
            jump('#target-two');
        })
    })(i);
}