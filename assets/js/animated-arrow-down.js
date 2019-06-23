// Bouncing arrow bottom of full screen
// Different arrow choices from Font Awesome
// Fades away as you scroll down

$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 300);
    //250 is fade pixels
});